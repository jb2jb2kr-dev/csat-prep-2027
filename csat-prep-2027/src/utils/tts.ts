export const playDialogue = (
    text: string,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: () => void
) => {
    if (!window.speechSynthesis) {
        console.error("Speech Synthesis not supported");
        onError?.();
        return;
    }

    // Cancel any current speech
    window.speechSynthesis.cancel();

    // Parse the text into lines
    // Expected format: (Script) \n M: ... \n W: ...
    // Or just M: ... \n W: ...
    const cleanText = text.replace(/\(Script\)\s*/gi, '').trim();
    // Split by actual newline or literal "\n" string
    const lines = cleanText.split(/\\n|\n/).map(line => line.trim()).filter(line => line.length > 0);

    const utterances: SpeechSynthesisUtterance[] = [];
    const voices = window.speechSynthesis.getVoices();

    // Simple heuristic to find male/female voices
    // Note: Voice names depend on OS. 
    // Windows: 'Microsoft David' (Male), 'Microsoft Zira' (Female), 'Microsoft Mark' (Male)
    // Mac: 'Samantha' (Female), 'Alex' (Male), 'Daniel' (Male)
    // Android/iOS: Depends on system.

    // We try to find voices that contain "Male" or "Female" or specific known names.
    // Default fallback: use different voices for M and W if possible.

    // Improved voice selection logic
    // Priority for Male: US Male voices (David, Mark) -> Generic US Male -> Any Male (excluding UK if possible)
    const maleVoice = voices.find(v =>
        (v.name.includes('David') && v.lang.includes('US')) ||
        (v.name.includes('Mark') && v.lang.includes('US')) ||
        (v.name.includes('Male') && v.lang.includes('US')) ||
        (v.name.includes('Male') && !v.name.includes('UK') && !v.name.includes('GB'))
    ) || voices.find(v => v.name.includes('Male')) || voices.find(v => v.lang.includes('en-US')) || voices[0];

    // Priority for Female: US Female voices (Zira) -> Google US -> Generic US Female
    const femaleVoice = voices.find(v =>
        (v.name.includes('Zira') && v.lang.includes('US')) ||
        (v.name.includes('Google US English')) ||
        (v.name.includes('Female') && v.lang.includes('US'))
    ) || voices.find(v => v.name.includes('Female')) || voices.find(v => v.lang.includes('en-US') && v !== maleVoice) || voices[0];

    // Priority: M -> Male Voice, W -> Female Voice
    // If line doesn't start with M: or W:, use a default (Male for now)

    lines.forEach((line, index) => {
        let voice = maleVoice; // Default
        let spokenText = line;

        if (line.match(/^[MW]:/i)) {
            const prefix = line.substring(0, 2).toUpperCase();
            spokenText = line.substring(2).trim();
            if (prefix === 'W:') {
                voice = femaleVoice;
            } else if (prefix === 'M:') {
                voice = maleVoice;
            }
        }
        // Man/Woman full word check
        else if (line.match(/^(Man|Woman):/i)) {
            const prefixMatch = line.match(/^(Man|Woman):/i);
            if (prefixMatch) {
                const prefix = prefixMatch[0].toLowerCase(); // 'man:' or 'woman:'
                spokenText = line.substring(prefixMatch[0].length).trim();
                if (prefix.includes('woman')) {
                    voice = femaleVoice;
                } else {
                    voice = maleVoice;
                }
            }
        }

        const utterance = new SpeechSynthesisUtterance(spokenText);
        utterance.voice = voice;
        utterance.lang = 'en-US';
        utterance.rate = 0.9; // Slightly slower for clarity

        if (index === 0 && onStart) {
            utterance.onstart = onStart;
        }
        if (index === lines.length - 1 && onEnd) {
            utterance.onend = onEnd;
        }
        utterance.onerror = (e) => {
            console.error("TTS Error", e);
            onError?.();
        };

        utterances.push(utterance);
    });

    // Queue them
    utterances.forEach(u => window.speechSynthesis.speak(u));

    // If no lines, trigger end immediately
    if (utterances.length === 0) {
        onEnd?.();
    }

    return () => window.speechSynthesis.cancel();
};

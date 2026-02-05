// Helper to safely load voices (waits for browser to be ready)
const loadVoices = (): Promise<SpeechSynthesisVoice[]> => {
    return new Promise((resolve) => {
        let voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            resolve(voices);
            return;
        }

        console.log('[TTS] Waiting for voices to load...');

        const listener = () => {
            voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                console.log(`[TTS] Voices loaded: ${voices.length}`);
                window.speechSynthesis.removeEventListener('voiceschanged', listener);
                resolve(voices);
            }
        };

        window.speechSynthesis.addEventListener('voiceschanged', listener);

        // Timeout/Fallback after 2 seconds
        setTimeout(() => {
            window.speechSynthesis.removeEventListener('voiceschanged', listener);
            const fallbackVoices = window.speechSynthesis.getVoices();
            console.warn(`[TTS] Voice load timeout. Found ${fallbackVoices.length} voices.`);
            resolve(fallbackVoices);
        }, 2000);
    });
};

// Rate: 0.8 (Slow), 1.0 (Normal), 1.2 (Fast)
export const playDialogue = async (
    text: string,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: () => void,
    rate: number = 1.0
) => {
    if (!window.speechSynthesis) {
        console.error("Speech Synthesis not supported");
        onError?.();
        return;
    }

    // Cancel any current speech
    window.speechSynthesis.cancel();

    // Ensure voices are loaded
    const voices = await loadVoices();

    // Parse the text into lines
    // Expected format: (Script) \n M: ... \n W: ...
    // Or just M: ... \n W: ...
    const cleanText = text.replace(/\(Script\)\s*/gi, '').trim();
    // Split by actual newline or literal "\n" string
    const lines = cleanText.split(/\\n|\n/).map(line => line.trim()).filter(line => line.length > 0);

    const utterances: SpeechSynthesisUtterance[] = [];

    // Debugging: Log available voices
    console.log("Available voices:", voices.map(v => `${v.name} (${v.lang})`));

    // Handle voice loading usage if empty (though usually loaded by interaction time)
    if (voices.length === 0) {
        console.error('[TTS] No voices found even after waiting. Playback might fail or use default.');
    }

    // Simple heuristic to find male/female voices
    // Note: Voice names depend on OS.
    // Windows: 'Microsoft David' (Male), 'Microsoft Zira' (Female), 'Microsoft Mark' (Male)
    // Mac: 'Samantha' (Female), 'Alex' (Male), 'Daniel' (Male)
    // Android/iOS: Depends on system.

    // We try to find voices that contain "Male" or "Female" or specific known names.
    // Default fallback: use different voices for M and W if possible.

    // Improved voice selection logic
    // Priority for Male:
    // 1. Specific Neural/Natural voices (if available in Edge/Chrome)
    // 2. Google US English
    // 3. Microsoft David
    let maleVoice = voices.find(v => (v.name.includes('Neural') || v.name.includes('Natural')) && v.name.includes('Male') && v.lang.includes('US'))
        || voices.find(v => v.name.includes('Google US English'))
        || voices.find(v => v.name.includes('David') && v.lang.includes('US'))
        || voices.find(v => (v.name.includes('US') || v.name.includes('United States')) && v.name.includes('Male'))
        || voices.find(v => v.lang === 'en-US' && !v.name.includes('Zira') && !v.name.includes('Female') && !v.name.includes('Girl'));

    // Priority for Female: US Female voices (Zira, Google US) -> Generic US Female
    // Priority for Female:
    // 1. Specific Neural/Natural voices (e.g. Jenny, Aria)
    // 2. Microsoft Zira (Standard Windows)
    // 3. Google US Female (if any)
    let femaleVoice = voices.find(v => (v.name.includes('Neural') || v.name.includes('Natural')) && v.name.includes('Female') && (v.name.includes('Jenny') || v.name.includes('Aria') || v.lang.includes('US')))
        || voices.find(v => v.name.includes('Zira') && v.lang.includes('US'))
        || voices.find(v => (v.name.includes('Google') && v.name.includes('Female') && v.lang.includes('US')))
        || voices.find(v => ((v.name.includes('United States') || v.name.includes('US')) && v.name.includes('Female')))
        || voices.find(v => v.lang === 'en-US' && (v.name.includes('Zira') || v.name.includes('Female') || v.name.includes('Woman')));

    // Fallbacks if specific gendered voices aren't found

    // First, strictly look for US English voices for fallback
    const usVoices = voices.filter(v => v.lang === 'en-US' || v.lang.includes('US'));
    const otherEnglishVoices = voices.filter(v => v.lang.startsWith('en') && !v.lang.includes('US'));

    // Helper to find female in a list
    const findFemale = (list: SpeechSynthesisVoice[]) => list.find(v => v.name.includes('Female') || v.name.includes('Zira') || v.name.includes('Woman') || v.name.includes('Girl'));
    // Helper to find male in a list
    const findMale = (list: SpeechSynthesisVoice[]) => list.find(v => v.name.includes('Male') || v.name.includes('David') || v.name.includes('Guy') || v.name.includes('Man'));

    if (!maleVoice) {
        // Try to find US Male
        maleVoice = findMale(usVoices);
        // Then any Male
        if (!maleVoice) maleVoice = findMale(otherEnglishVoices);
    }

    if (!femaleVoice) {
        // Try to find US Female explicitly
        femaleVoice = findFemale(usVoices);

        // If no explicit "Female" US voice, pick ANY US voice that isn't the selected male voice
        if (!femaleVoice && maleVoice) {
            femaleVoice = usVoices.find(v => v.name !== maleVoice!.name);
        }

        // Then try any Female (even if UK, but only if no US options left)
        if (!femaleVoice) femaleVoice = findFemale(otherEnglishVoices);
    }

    // Final fallback pool
    const englishVoices = [...usVoices, ...otherEnglishVoices];

    // Ultimate fallback: Ensure they are different if possible
    if (!maleVoice && !femaleVoice) {
        if (englishVoices.length >= 2) {
            maleVoice = englishVoices[0];
            femaleVoice = englishVoices[1];
        } else {
            maleVoice = englishVoices[0] || voices[0];
            femaleVoice = englishVoices[0] || voices[0];
        }
    } else if (!maleVoice) {
        // We have female, but no male. Pick any other english voice that isn't the female one
        maleVoice = englishVoices.find(v => v.name !== femaleVoice!.name) || femaleVoice;
    } else if (!femaleVoice) {
        // We have male, but no female. Pick any other english voice
        femaleVoice = englishVoices.find(v => v.name !== maleVoice!.name) || maleVoice;
    }

    // Ensure they are not the same object if we have options
    if (maleVoice === femaleVoice && englishVoices.length > 1) {
        femaleVoice = englishVoices.find(v => v.name !== maleVoice!.name) || femaleVoice;
    }

    // Debugging: selected voices
    console.log("Selected Male Voice:", maleVoice?.name);
    console.log("Selected Female Voice:", femaleVoice?.name);

    // Priority: M -> Male Voice, W -> Female Voice
    // If line doesn't start with M: or W:, use a default (Male for now)

    console.log('[TTS] Parsed lines:', lines.length);

    let currentVoice = voices[0]; // Default fallback

    // Queue each line
    lines.forEach((line, index) => {
        // Debug each line to see exact content
        console.log(`[TTS] Line ${index}: "${line.substring(0, 20)}..."`);

        // Check for Speaker prefixes (M: / W: / Man: / Woman:)
        // Allow optional whitespace at start
        const maleMatch = line.match(/^\s*(M|Man)\s*:/i);
        const femaleMatch = line.match(/^\s*(W|Woman)\s*:/i);

        let spokenText = line;

        if (maleMatch) {
            currentVoice = maleVoice || voices[0];
            console.log('  -> Assigned Male Voice:', currentVoice?.name);
            spokenText = line.replace(/^\s*(M|Man)\s*:/i, '').trim();
        } else if (femaleMatch) {
            currentVoice = femaleVoice || voices[0];
            console.log('  -> Assigned Female Voice:', currentVoice?.name);
            spokenText = line.replace(/^\s*(W|Woman)\s*:/i, '').trim();
        }
        // If no prefix, keep previous voice (continuation)

        const utterance = new SpeechSynthesisUtterance(spokenText); // Speak cleaned text
        utterance.voice = currentVoice || null;

        // Do NOT force lang if voice is set, it can cause conflicts in some browsers
        if (!currentVoice) {
            utterance.lang = 'en-US';
        }

        utterance.rate = rate; // Use user-provided rate

        // Pitch adjustment: If it's a Male part but we are using a Female voice, lower pitch
        if (maleMatch) {
            if (currentVoice && (currentVoice.name.includes('Female') || currentVoice.name.includes('Zira') || currentVoice.name.includes('Google US'))) {
                // Simulated Male using Female voice
                utterance.pitch = 0.75;
                console.log('  -> Pitch lowered to 0.75 (Simulating Male)');
            } else {
                utterance.pitch = 1.0;
            }
        } else {
            utterance.pitch = 1.0;
        }

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


import type { DailySet, Question } from '../types';

export const daily20260216: DailySet = {
    foundation: [
        {
            id: "f-l-1",
            level: "Foundation",
            type: "목적 파악",
            isListening: true,
            content: `M: Hello, students. This is your science teacher, Mr. Baker. As you know, our school library has recently introduced a new 'AI Librarian' system to help you find books more easily. However, some students are having trouble using it correctly. So, I would like to explain how to use the AI Librarian properly. First, stand in front of the screen and speak your student ID number clearly. Then, tell the AI the title or topic of the book you are looking for. Please do not touch the screen with wet hands. I hope this helps you enjoy reading more.`,
            question: "다음을 듣고, 남자가 하는 말의 목적으로 가장 적절한 것을 고르시오.",
            choices: ["도서관의 변경된 이용 시간을 안내하려고", "새로운 AI 사서 시스템의 사용법을 설명하려고", "학교 도서관 대출증 재발급을 공지하려고", "과학 수업 과제 제출 기한을 연장하려고", "훼손된 도서의 변상 규정을 알리려고"],
            answer: 1,
            explanation: "남자는 학교 도서관에 새로 도입된 'AI 사서(AI Librarian)' 시스템을 학생들이 사용하는 데 어려움을 겪고 있다고 언급하며, 올바른 사용법(how to use... properly)을 설명하고 있습니다."
        },
        {
            id: "f-l-2",
            level: "Foundation",
            type: "관계 파악",
            isListening: true,
            content: `W: Hello, Mr. Smith. How have you been feeling since your last visit?
M: Much better. The smart patch you prescribed really helped monitor my heart rate.
W: That's good to hear. Let me check the data sent from your patch to my computer. [Typing sound] Hmm, your blood pressure is a bit high.
M: Really? I've been trying to exercise daily.
W: You're doing great, but I think we need to adjust your medication slightly. I'll send the new prescription to your phone.
M: Thank you. I'll make sure to follow your instructions.`,
            question: "대화를 듣고, 두 사람의 관계를 가장 잘 나타낸 것을 고르시오.",
            choices: ["의사 — 환자", "운동 코치 — 선수", "약사 — 제약 회사 직원", "스마트폰 판매원 — 고객", "소프트웨어 개발자 — 투자자"],
            answer: 0,
            explanation: "여자는 남자의 건강 상태(심박수, 혈압)를 확인하고 처방(prescribed, prescription)을 내리고 있으며, 남자는 이에 대해 자신의 상태를 설명하고 감사를 표하고 있습니다. 따라서 두 사람의 관계는 '의사 — 환자'가 가장 적절합니다."
        },
        {
            id: "f-r-1",
            level: "Foundation",
            type: "주제 파악",
            isListening: false,
            content: "In 2026, \"upcycling\" has become a major trend in fashion. Unlike recycling, which breaks down materials to make something new, upcycling uses old items just as they are to create better products. For example, old truck covers are turned into strong bags, and used plastic bottles become stylish jackets. This process saves a lot of energy because it does not require factories to melt down materials. Also, it reduces the amount of waste in landfills. Many young people choose upcycled clothes to protect the Earth and show their unique style.",
            question: "다음 글의 주제로 가장 적절한 것은?",
            choices: ["the history of modern fashion trends", "ways to melt plastic in factories", "negative effects of fast fashion on nature", "benefits of upcycling in the fashion industry", "difficulties of collecting used clothes"],
            answer: 3,
            explanation: "이 글은 업사이클링(upcycling)이 2026년 패션의 주요 트렌드가 되었음을 소개하며, 에너지 절약, 쓰레기 감소 등 업사이클링이 환경에 미치는 긍정적인 영향(이점)을 설명하고 있습니다."
        },
        {
            id: "f-r-2",
            level: "Foundation",
            type: "내용 불일치",
            isListening: false,
            content: "[2026 Smart Home Expo]\n\nCome and experience the future of your home! The 2026 Smart Home Expo invites you to see the latest home technologies.\n\n- Date: February 20th – February 22nd, 2026\n- Location: Future Convention Center (Grand Hall)\n- Exhibits:\n  - AI Cooking Robots\n  - Energy-saving Windows\n  - Voice-controlled Furniture\n- Special Event: Try our \"VR Interior Design\" program for free.\n- Tickets: $10 per person (Free for children under 7).\n\n* For more information, please visit our website at www.2026smarthome.com.",
            question: "2026 Smart Home Expo에 관한 다음 안내문의 내용과 일치하지 않는 것은?",
            choices: ["3일 동안 진행된다.", "퓨처 컨벤션 센터에서 열린다.", "음성으로 제어되는 가구를 볼 수 있다.", "가상현실(VR) 인테리어 프로그램 체험은 유료이다.", "7세 미만 어린이는 무료로 입장한다."],
            answer: 3,
            explanation: "안내문에 'Try our \"VR Interior Design\" program for free'라고 명시되어 있으므로, 체험은 무료입니다. 따라서 내용과 일치하지 않는 것은 '가상현실(VR) 인테리어 프로그램 체험은 유료이다'입니다."
        },
        {
            id: "f-r-3",
            level: "Foundation",
            type: "빈칸 추론",
            isListening: false,
            content: "Many students use AI tutors to study math and languages today. These AI programs are very useful because they can give instant feedback and answer questions 24 hours a day. However, AI cannot replace human teachers completely. Human teachers do more than just teach facts; they understand students' feelings and encourage them when they want to give up. For example, a warm smile or a kind word from a teacher can give a student the courage to keep trying. Therefore, in education, emotional connection is a unique role of ________.",
            question: "다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
            choices: ["humans", "robots", "computers", "libraries", "textbooks"],
            answer: 0,
            explanation: "글은 AI 튜터의 유용성에도 불구하고 인간 교사를 완전히 대체할 수 없다는 점을 강조하고 있습니다. 인간 교사는 학생의 감정을 이해하고 격려하는 역할을 한다고 설명하므로, 정서적 연결(emotional connection)은 'humans(인간)'의 고유한 역할이라는 결론이 적절합니다."
        }
    ] as Question[],
    intermediate: [
        {
            id: "i-l-1",
            level: "Intermediate",
            type: "의견 파악",
            isListening: true,
            content: `M: Honey, look at this new smart speaker. It can control the lights, play music, and even order groceries.
W: It looks cool, but I'm worried we are relying too much on technology at home.
M: What do you mean? It makes our daily lives so much more convenient.
W: I know, but since we bought all these smart devices, we talk to machines more than to each other.
M: Hmm, I haven't thought about that.
W: I think we should reduce our dependence on smart devices to spend more quality time interacting with our family members.
M: You have a point. Maybe we can set some "tech-free" time in the evening.`,
            question: "대화를 듣고, 여자의 의견으로 가장 적절한 것을 고르시오.",
            choices: ["최신 가전제품은 집안일의 부담을 줄여준다.", "가족 간의 대화 단절은 심각한 사회 문제이다.", "스마트 기기 사용을 줄여 가족 간 상호작용을 늘려야 한다.", "기술의 발전이 항상 삶의 질을 높이는 것은 아니다.", "자녀의 올바른 기기 사용을 위해 부모의 지도가 필요하다."],
            answer: 2,
            explanation: "여자는 스마트 기기에 너무 의존하여 기계와 대화하느라 가족 간의 상호작용이 줄어드는 것을 우려하며, 스마트 기기 의존을 줄여 가족과 보내는 시간을 늘려야 한다고 말하고 있습니다."
        },
        {
            id: "i-r-1",
            level: "Intermediate",
            type: "제목 추론",
            isListening: false,
            content: "The future of our high-tech goods may lie not in the limitations of our minds, but in our ability to secure the materials that power them. As the world struggles to reduce its reliance on fossil fuels, green technologies such as electric cars, wind turbines, and solar panels have emerged as key solutions. However, these technologies depend heavily on rare metals. They help to convert free natural resources like the sun and wind into the power that fuels our lives. But without increasing today's limited supplies of these rare metals, we have no chance of developing the alternative green technologies we need to slow climate change. Therefore, securing a stable supply of these essential elements is a critical challenge for the success of climate technology.",
            question: "다음 글의 제목으로 가장 적절한 것은?",
            choices: ["Why Fossil Fuels Are Still Essential for Industry", "Rare Metals: The Hidden Key to Green Technology", "The Unlimited Potential of Solar and Wind Energy", "How to Recycle Rare Metals for a Better Future", "The Economic Impact of Electric Vehicle Production"],
            answer: 1,
            explanation: "이 글은 기후 변화에 대응하기 위한 친환경 기술(전기차, 태양광 등)이 희귀 금속(rare metals)의 공급에 크게 의존하고 있다는 점을 강조하고 있습니다."
        },
        {
            id: "i-r-2",
            level: "Intermediate",
            type: "주제 파악",
            isListening: false,
            content: "Digital platforms have made a lot of work less sticky. As work becomes ever more standardized and markets for digital work are created, the ties between work and particular places are being disconnected. In the past, companies moved call centers to distant labor markets to cut costs, but offices were still necessary. Today, cloudwork changes the volume at which geographically non-proximate work can take place. A small business in New York can hire a freelancer in Nairobi one day and New Delhi the next. No offices need to be built, and the employer leaves behind no material traces in the places where the work is done. This shift allows work to happen simply by clicking buttons on a digital platform, regardless of physical location.",
            question: "다음 글의 주제로 가장 적절한 것은?",
            choices: ["importance of building offices for local communities", "difficulties in hiring freelancers in developing countries", "effects of digital platforms on detaching work from location", "reasons why traditional outsourcing is better than cloudwork", "necessity of government regulations on digital labor markets"],
            answer: 2,
            explanation: "이 글은 디지털 플랫폼과 클라우드 워크의 등장으로 인해 업무가 특정 장소에 얽매이지 않게 되고, 물리적 사무실 없이도 전 세계 어디서나 고용과 업무가 가능해진 현상을 설명하고 있습니다."
        },
        {
            id: "i-r-3",
            level: "Intermediate",
            type: "어법성 판단",
            isListening: false,
            content: "Changes in the degree of closeness are quite important in managing emotional intensity in daily interactions. Closeness and familiarity are important in making a fictional environment, like a TV show, seem more real. Most characters on TV (A) [are / is] supposed to be types with whom we are familiar. Such closeness makes it easier for us (B) [to perceive / perceiving] the imaginary story as a real one.",
            question: "(A), (B)의 각 네모 안에서 어법에 맞는 표현으로 가장 적절한 것은?",
            choices: ["are - to perceive", "is - perceiving", "are - perceiving", "is - to perceive", "are - perceived"],
            answer: 0,
            explanation: "(A) 주어가 Most characters(복수)이므로 are가 적절합니다. (B) 'make it easier for us to perceive'에서 가목적어 it + 진목적어 to perceive 구문이므로 to perceive가 맞습니다."
        },
        {
            id: "i-r-4",
            level: "Intermediate",
            type: "글의 순서",
            isListening: false,
            content: "Due to the fact that people tend to favor more immediate outputs, fossil fuels have long been more competitive than renewable energy alternatives.\n\n(A) However, the situation is changing. As climate change becomes a pressing global issue, the demand for sustainable energy sources is rising rapidly. Governments and companies are now investing heavily in climate technologies.\n\n(B) This investment is driving down the cost of renewable energy technologies like solar and wind power. Additionally, innovations in battery storage are solving the problem of energy intermittency, making renewables more reliable.\n\n(C) In regards to the distance between inputs and outputs, fossil fuels offered a quick return. You dug them up and burned them. Renewables, on the other hand, required significant upfront investment before producing energy.",
            question: "주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?",
            choices: ["(A)-(C)-(B)", "(B)-(A)-(C)", "(B)-(C)-(A)", "(C)-(A)-(B)", "(C)-(B)-(A)"],
            answer: 3,
            explanation: "주어진 글은 사람들이 즉각적인 결과를 선호하기 때문에 화석 연료가 경쟁력이 있었다고 합니다. (C)는 이에 대한 부연 설명, (A)는 'However'로 전환, (B)는 투자의 결과를 설명합니다. 따라서 순서는 (C)-(A)-(B)가 적절합니다."
        }
    ] as Question[],
    advanced: [
        {
            id: "a-l-1",
            level: "Advanced",
            type: "담화의 주제",
            isListening: true,
            content: `M: Hello, class. Last time, we discussed how technology has reshaped our daily lives. Today, I'd like to address a more specific and controversial issue: the integration of Artificial Intelligence in creative fields. Many people argue that AI tools, which can generate paintings or write poems in seconds, are democratizing creativity by making art accessible to everyone. However, there is a strong counter-argument. Critics claim that AI lacks the genuine emotional depth and lived experience that define human art. They argue that relying on algorithms to produce "art" might lead to a devaluation of human creativity and a homogenization of culture, where everything looks and sounds the same because it's based on the same data sets. We need to consider whether efficiency should ever replace the authentic human touch in the realm of artistic expression.`,
            question: "남자가 하는 말의 주제로 가장 적절한 것은?",
            choices: ["positive effects of AI on democratizing art education", "various methods to distinguish AI art from human art", "economic benefits of using AI in the fashion industry", "ethical controversies regarding AI's role in creative domains", "historical background of the development of artificial intelligence"],
            answer: 3,
            explanation: "남자는 AI가 예술 창작 분야에 도입되는 것에 대해 '창의성의 민주화'라는 긍정적 시각과 '인간 고유성의 상실'이라는 비판적 시각을 동시에 소개하며, 효율성이 진정성을 대체할 수 있는지에 대한 논의를 이끌고 있습니다."
        },
        {
            id: "a-r-1",
            level: "Advanced",
            type: "제목 추론",
            isListening: false,
            content: "Classical computers, which we use every day, process information in bits that exist in one of two states: 0 or 1. This binary system is the foundation of our digital world. However, nature operates on a different set of rules at the atomic level. Quantum computing seeks to emulate this by utilizing \"qubits.\" Unlike classical bits, a qubit can exist in a state of superposition, representing both 0 and 1 simultaneously. This allows quantum computers to perform vast numbers of calculations in parallel, rather than sequentially. While a classical supercomputer might take thousands of years to factorize a large prime number, a quantum computer could theoretically do it in minutes. This leap in processing power holds the potential to revolutionize fields requiring complex simulations, such as drug discovery and climate modeling, by handling variables that are vastly too complex for binary logic.",
            question: "다음 글의 제목으로 가장 적절한 것은?",
            choices: ["Why Binary Code Is Still the Most Reliable Standard", "The Hidden Dangers of Rapid Technological Advancement", "Quantum Computing: Breaking the Boundaries of Binary Processing", "How to Build Your Own Computer Using Classical Bits", "The History of Mathematics: From Abacus to Supercomputer"],
            answer: 2,
            explanation: "글은 고전 컴퓨터의 이진법(binary system)과 달리, 중첩(superposition)을 이용해 0과 1을 동시에 처리하는 양자 컴퓨터(quantum computing)의 혁신적인 처리 능력과 잠재력을 설명하고 있습니다."
        },
        {
            id: "a-r-2",
            level: "Advanced",
            type: "어법성 판단",
            isListening: false,
            content: "Regulations covering scientific experiments on human subjects are strict. Subjects must give their informed, written consent, and experimenters must submit their proposed experiments to thorough examination by overseeing bodies. Scientists who experiment on themselves can, functionally if not legally, avoid the restrictions <u>① associated</u> with experimenting on other people. They can also sidestep most of the ethical issues involved: nobody, presumably, is more aware of an experiment's potential hazards than the scientist who devised <u>② it</u>. Nonetheless, experimenting on oneself remains deeply problematic. One obvious drawback is the danger involved; knowing that it exists <u>③ does</u> nothing to reduce it. A less obvious drawback is the limited range of data that the experiment can generate. Experimental results derived from a single subject are, therefore, of limited value; there is no way to know <u>④ whether</u> the subject's responses are typical or atypical of the response of humans as a group. Thus, strict regulations are necessary to prevent scientists <u>⑤ to assume</u> excessive risks in the name of research.",
            question: "다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
            choices: ["①", "②", "③", "④", "⑤"],
            answer: 4,
            explanation: "⑤번의 prevent는 'prevent + 목적어 + from + -ing' 구문으로 사용되어야 합니다. 따라서 'to assume'을 'from assuming'으로 고쳐야 합니다. (① 과거분사 수식, ② 대명사(experiment), ③ 강조의 do/수일치, ④ 접속사 whether는 적절)"
        },
        {
            id: "a-r-3",
            level: "Advanced",
            type: "글의 순서",
            isListening: false,
            content: "In economics, there is a principle known as the sunk cost fallacy. The idea is that when you are invested and have ownership in something, you overvalue that thing.\n\n(A) This leads people to continue on paths or pursuits that should clearly be abandoned. For example, people often remain in terrible relationships simply because they've invested a great deal of themselves into them.\n\n(B) Or someone may continue pouring money into a business that is clearly a bad idea in the market. Actually, you can leverage this human tendency to your benefit.\n\n(C) Like someone invests a great deal of money in a personal trainer to ensure they follow through on their commitment, you, too, can invest a great deal up front to ensure you stay on the path you want to be on.",
            question: "주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?",
            choices: ["(A)-(C)-(B)", "(B)-(A)-(C)", "(B)-(C)-(A)", "(A)-(B)-(C)", "(C)-(B)-(A)"],
            answer: 3,
            explanation: "주어진 글은 매몰 비용 오류(sunk cost fallacy)의 정의를 소개합니다. (A)는 이 오류가 사람들을 잘못된 경로에 머물게 하는 현상을 설명하고, (B)는 또 다른 예시를 제시한 뒤 역이용을 제안하며, (C)는 구체적인 역이용 예시로 결론을 맺습니다."
        },
        {
            id: "a-r-4",
            level: "Advanced",
            type: "요약문 완성",
            isListening: false,
            content: "A serious deterioration in people's working lives would be deeply disturbing to the social order. Today, the world of work is the main way that we share out the fruits of growth: for most people, their job is their main source of income. Technological unemployment would weaken that longstanding arrangement, encouraging an even more extreme version of inequality. Nor would the disturbance be only economic. For many people, their work is both a source of income and of meaning. With that in mind, the threat is even broader: not only that the labor market might be hollowed out, leaving some unable to find a reliable income, but that this sense of fulfilment that some people are fortunate to feel in their jobs might be hollowed out as well, leaving them unable to find purpose.",
            question: "다음 글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?\n\nBy creating unemployment, technology would upset the social order, affecting the (A)________ of wealth and possibly eliminating the emotional (B)________ that some discover in work.",
            choices: ["distribution — rewards", "concentration — conflicts", "distribution — emptiness", "investment — challenges", "investment — growth"],
            answer: 0,
            explanation: "본문은 기술적 실업(technological unemployment)이 소득(부)의 분배 방식을 약화시켜 불평등을 초래하고, 동시에 일에서 얻는 의미와 성취감을 앗아갈 수 있다고 경고합니다. 따라서 (A)에는 부의 '분배(distribution)', (B)에는 일에서 발견하는 정서적 '보상(rewards)'이 적절합니다."
        },
        {
            id: "a-r-killer",
            level: "Advanced",
            type: "빈칸 추론 (Prime Killer)",
            isListening: false,
            content: "It may be assumed that meta-algorithmics, that is, the creation of algorithms that generate other algorithms, is a human creation. A human programmer must have composed the first algorithm that, in turn, generates new algorithms, and as such, the initial programmer must be in control of the original idea. However, this is not necessarily true. Unlike humanly conceived ideas, where the author is the intellectual owner, algorithms are processes that define and implement a series of actions that produce other actions. During the transfer of actions, it is possible for a discrepancy to occur between the original intention and the actual result. If that happens, the author of the algorithm is not in control of, and therefore does not own intellectually from that point on, the resulting process. Theoretically, ownership of an idea is intrinsically connected to the predictability of its outcome, that is, to its intellectual control. Therefore, in the absence of human control, the ownership of the algorithmic process must be instead ________.",
            question: "빈칸에 들어갈 말로 가장 적절한 것은?",
            choices: ["attributed to the unpredictable nature of chance", "credited to the device that produced it, the computer", "shared equally among all users of the technology", "restricted to the original intention of the programmer", "regarded as a collective heritage of human intelligence"],
            answer: 1,
            explanation: "이 글은 메타 알고리즘의 지적 소유권에 대한 철학적 논의를 다룹니다. 아이디어의 소유권은 예측 가능성 및 통제와 연결되어 있는데, 인간의 통제가 부재하다면 논리적으로 그 소유권은 '그것을 생산한 주체', 즉 기계(컴퓨터)에게 돌아가야 한다는 결론이 도출됩니다."
        }
    ] as Question[],
    mock: {
        id: "m-20260216",
        title: "제3회 실전 모의고사 (Daily Mock)",
        timeLimitMinutes: 15,
        questions: [
            {
                id: "m-l-1",
                level: "Foundation",
                type: "담화의 주제",
                isListening: true,
                content: `W: Hello, students. Last time, we talked about the history of telescopes. Today, I'd like to discuss the practical benefits of space exploration in our daily lives. Many people think space research is just about stars and distant planets, but it actually contributes to solving problems here on Earth. For instance, satellites developed for space exploration are now essential for monitoring climate change and predicting weather patterns more accurately. Also, technologies originally designed for space suits are being applied to improve firefighter equipment, keeping them safer in extreme heat. Moreover, water filtration systems created for astronauts are now helping to provide clean drinking water in developing countries. Space exploration is not just about the unknown; it improves the quality of our lives right here.`,
                question: "다음을 듣고, 여자가 하는 말의 주제로 가장 적절한 것을 고르시오.",
                choices: ["우주 비행사가 되기 위한 신체적 조건", "우주 탐사 기술이 실생활에 주는 혜택", "인공위성 발사가 기후 변화에 미치는 악영향", "최신 천체 망원경의 작동 원리와 구조", "우주 쓰레기 문제를 해결하기 위한 국제적 노력"],
                answer: 1,
                explanation: "여자는 우주 탐사 기술이 기후 변화 감시, 소방 장비 개선, 정수 시스템 등 실생활의 문제를 해결하는 데 기여하고 있다고 설명하고 있습니다."
            },
            {
                id: "m-l-2",
                level: "Intermediate",
                type: "금액 계산",
                isListening: true,
                content: `W: Welcome to the Digital Art Center. How can I help you?
M: Hi, I'd like to buy tickets for the "Future Visions" exhibition.
W: Sure. The admission fee is $20 for an adult and $10 for a child.
M: I need two adult tickets and one child ticket.
W: Okay. Two adults and one child. Do you need anything else?
M: Yes, I'd also like to buy this digital art catalog. How much is it?
W: It's $10.
M: I'll take one. Can I use this 10% discount coupon for the total amount?
W: Let me check. [Pause] Yes, you can use it for the tickets and the catalog.
M: Great. I'll pay with my credit card.`,
                question: "대화를 듣고, 남자가 지불할 금액을 고르시오.",
                choices: ["$45", "$50", "$54", "$60", "$63"],
                answer: 2,
                explanation: "성인 2명($20 × 2 = $40) + 어린이 1명($10) + 카탈로그($10) = $60. 10% 할인 적용: $60 × 0.9 = $54."
            },
            {
                id: "m-r-1",
                level: "Foundation",
                type: "심경 추론",
                isListening: false,
                content: "The countdown echoed through the speakers, \"Three, two, one...\" The ground beneath my feet trembled as the massive rocket engines ignited. A blindingly bright orange flame pushed the spacecraft upward, piercing the clear blue sky. It was the moment I had dreamed of since I was a little boy looking up at the stars in my backyard. As the rocket soared higher, leaving a trail of white smoke, I felt a lump in my throat. The realization that humanity was taking another step into the vast universe, and that I was witnessing it right here, overwhelmed me. My heart raced not with fear, but with a profound sense of awe and possibility.",
                question: "다음 글에 드러난 'I'의 심경으로 가장 적절한 것은?",
                choices: ["무섭고 긴장된", "지루하고 무관심한", "벅차고 감격스러운", "우울하고 절망적인", "당황스럽고 부끄러운"],
                answer: 2,
                explanation: "필자는 어린 시절부터 꿈꿔온 로켓 발사 장면을 직접 목격하며 압도감(overwhelmed)과 경외심(awe)을 느끼고 있습니다."
            },
            {
                id: "m-r-2",
                level: "Advanced",
                type: "어법성 판단",
                isListening: false,
                content: "Digital art has transformed the way we create and consume images. Unlike traditional art forms, <u>① where</u> the final product is a physical object, digital art exists as data. This shift has led to the rise of Non-Fungible Tokens (NFTs), which allow digital creations to be bought and sold as unique assets. Artists can now reach a global audience directly without relying on traditional galleries <u>② to display</u> their work. However, the ease of copying digital files <u>③ has</u> raised questions about authenticity and ownership. To solve this, blockchain technology is used to record the ownership of each piece. Despite these technological advancements, the core value of art still <u>④ lying</u> in its ability to evoke emotion and convey meaning. As technology evolves, the definition of what constitutes \"art\" continues to expand, challenging us to rethink <u>⑤ how</u> we value creativity in the digital age.",
                question: "다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
                choices: ["①", "②", "③", "④", "⑤"],
                answer: 3,
                explanation: "④ lying → lies: 해당 문장의 주어는 'the core value of art'이고, 문장 전체의 동사가 필요합니다. 'lying'은 현재분사 형태이므로 본동사 역할을 할 수 없습니다. 따라서 3인칭 단수 주어에 맞는 동사 lies로 고쳐야 합니다."
            },
            {
                id: "m-r-3",
                level: "Advanced",
                type: "빈칸 추론",
                isListening: false,
                content: "We are living in an era often described as the \"attention economy.\" In this economic model, human attention is treated as a scarce commodity. Tech companies and digital platforms compete aggressively to capture our focus, often designing algorithms that prioritize sensational or addictive content over informative or calming material. This constant bombardment of information fragments our concentration and makes it difficult to engage in deep thinking. The ultimate goal of these platforms is not necessarily to improve our well-being but to keep us scrolling and clicking for as long as possible. Therefore, in this digital landscape, the act of consciously disconnecting and choosing where to direct our focus has become a form of ________. It is a way to reclaim our autonomy from systems designed to exploit our cognitive resources.",
                question: "빈칸에 들어갈 말로 가장 적절한 것은?",
                choices: ["passive acceptance", "radical resistance", "social collaboration", "technological dependence", "economic investment"],
                answer: 1,
                explanation: "이 글은 '주목 경제(attention economy)' 시대에 플랫폼들이 우리의 주의력을 뺏기 위해 알고리즘을 사용한다고 설명합니다. 의도적으로 연결을 끊고 자신의 주의를 어디에 둘지 스스로 선택하는 행위는 이러한 착취적 시스템에 대한 '급진적 저항(radical resistance)'의 한 형태가 됩니다."
            }
        ] as Question[]
    }
};

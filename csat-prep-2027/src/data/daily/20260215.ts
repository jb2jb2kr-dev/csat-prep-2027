
import type { DailySet, Question } from '../types';

export const daily20260215: DailySet = {
    foundation: [
        {
            id: "f-r-1",
            level: "Foundation",
            type: "목적 파악",
            isListening: false,
            content: "Dear Customer,\n\nWe are excited to announce that we are switching to 100% eco-friendly packaging starting next month. This change is part of our commitment to reducing plastic waste and protecting the environment. You may notice a slight difference in the appearance of our boxes, but rest assured, the durability remains the same.",
            question: "다음 글의 목적으로 가장 적절한 것은?",
            choices: ["신제품 출시를 홍보하려고", "친환경 포장재 변경을 알리려고", "배송 지연에 대해 사과하려고", "직원 채용을 공지하려고", "영업 시간 변경을 안내하려고"],
            answer: 1,
            explanation: "글쓴이는 다음 달부터 100% 친환경 포장재(eco-friendly packaging)로 변경한다는 사실을 알리고(announce) 있습니다."
        },
        {
            id: "f-r-2",
            level: "Foundation",
            type: "심경 추론",
            isListening: false,
            content: "It was my first day at the new tech job. I walked into the office with a mix of nervousness and excitement. The modern workspace was buzzing with energy. When my team welcomed me with warm smiles and a welcome gift, my anxiety melted away, and I felt ready to start this new chapter.",
            question: "다음 글에 드러난 'I'의 심경 변화로 가장 적절한 것은?",
            choices: ["bored → excited", "nervous → confident", "angry → calm", "sad → happy", "scared → lonely"],
            answer: 1,
            explanation: "처음에는 긴장(nervousness)했으나, 팀의 환영을 받고 불안감이 사라지며 준비된(ready) 느낌, 즉 자신감(confident)을 갖게 되었습니다."
        },
        {
            id: "f-r-3",
            level: "Foundation",
            type: "내용 불일치",
            isListening: false,
            content: "[AI Healthcare Service Brochure]\n- 24/7 Virtual Doctor Consultation\n- Personalized Health Monitoring\n- Prescription Delivery Service (Available in select areas)\n- Free for the first month for new users.\n* Contact us at support@aihealth.com for more info.",
            question: "AI 헬스케어 서비스 안내문의 내용과 일치하지 않는 것은?",
            choices: ["24시간 가상 의사 상담이 가능하다.", "개인 맞춤형 건강 모니터링을 제공한다.", "처방약 배송은 모든 지역에서 가능하다.", "신규 사용자는 첫 달 무료이다.", "이메일로 문의할 수 있다."],
            answer: 2,
            explanation: "처방약 배송은 'select areas'(일부 지역)에서만 가능하므로, '모든 지역에서 가능하다'는 진술은 일치하지 않습니다."
        },
        {
            id: "f-l-1",
            level: "Foundation",
            type: "관계 파악",
            isListening: true,
            content: `M: Good morning. I'm here to pick up the package for delivery.
W: Oh, you're from the drone delivery service, right?
M: Yes, I am. Is the package ready?
W: It's right here. Please be careful with it; it's fragile.
M: Don't worry. Our drones are equipped with stabilization technology.`,
            question: "대화가 일어나는 상황에서 두 사람의 관계로 가장 적절한 것은?",
            choices: ["의사 - 환자", "교사 - 학생", "드론 배송 기사 - 고객", "경찰 - 운전자", "은행원 - 고객"],
            answer: 2,
            explanation: "남자가 드론 배송 서비스(drone delivery service)에서 왔다고 했고, 여자가 패키지를 건네주고 있으므로 배송 기사와 고객의 관계입니다."
        },
        {
            id: "f-l-2",
            level: "Foundation",
            type: "금액 계산",
            isListening: true,
            content: `W: I'd like to buy these VR glasses. How much are they?
M: They are $200 originally. But we are having a sale today.
W: Really? How much is the discount?
M: You get a 10% discount.
W: Great! I'll take one.`,
            question: "여자가 지불할 금액은?",
            choices: ["$180", "$190", "$200", "$210", "$220"],
            answer: 0,
            explanation: "원해 가격은 200달러이고, 10% 할인(20달러)을 받으므로 180달러를 지불합니다."
        }
    ] as Question[],
    intermediate: [
        {
            id: "i-r-1",
            level: "Intermediate",
            type: "제목 추론",
            isListening: false,
            content: "The fashion industry is undergoing a major transformation. Sustainable fashion is no longer a niche trend but a necessity. Brands are increasingly using recycled materials and adopting ethical production practices. Consumers are also becoming more conscious of their choices, opting for quality over quantity. This shift aims to reduce the environmental footprint of clothing.",
            question: "다음 글의 제목으로 가장 적절한 것은?",
            choices: ["The History of Cotton", "Rise of Sustainable Fashion", "How to Design Clothes", "Cheaper Clothing Options", "Fashion shows in Paris"],
            answer: 1,
            explanation: "패션 산업이 지속 가능한 방식(Sustainable fashion)으로 변화하고 있다는 내용이므로 'Rise of Sustainable Fashion'이 제목으로 적절합니다."
        },
        {
            id: "i-r-2",
            level: "Intermediate",
            type: "어법성 판단",
            isListening: false,
            content: "The rise of remote work has changed how we define the workplace. Employees (A) [who / which] work from home often report higher productivity. However, maintaining work-life balance (B) [is / are] sometimes challenging without a clear physical separation between office and home.",
            question: "(A), (B)의 각 네모 안에서 어법에 맞는 표현으로 가장 적절한 것은?",
            choices: ["who - is", "which - are", "who - are", "which - is", "that - are"],
            answer: 0,
            explanation: "(A) 선행사가 Employees(사람)이므로 who, (B) 동명사 주어(maintaining...)는 단수 취급하므로 is가 적절합니다."
        },
        {
            id: "i-r-3",
            level: "Intermediate",
            type: "문맥상 어휘 추론",
            isListening: false,
            content: "The metaverse is opening up new possibilities for education. Students can visit historical sites virtually or conduct science experiments in a simulated lab. This immersive experience makes learning more (A) [engaging / boring] and accessible to students regardless of their physical location.",
            question: "(A)에 들어갈 말로 가장 적절한 것은?",
            choices: ["engaging", "boring", "difficult", "expensive", "useless"],
            answer: 0,
            explanation: "몰입형 경험(immersive experience)은 학습을 더 '흥미진진하게(engaging)' 만듭니다."
        },
        {
            id: "i-r-4",
            level: "Intermediate",
            type: "글의 순서",
            isListening: false,
            content: "(A) Then, it is stored underground to prevent it from entering the atmosphere. (B) Carbon capture technology is essential for fighting climate change. (C) This process involves capturing carbon dioxide emissions from industrial sources.",
            question: "주어진 글의 올바른 순서는?",
            choices: ["(B)-(C)-(A)", "(A)-(B)-(C)", "(C)-(A)-(B)", "(B)-(A)-(C)", "(A)-(C)-(B)"],
            answer: 0,
            explanation: "도입(B: 탄소 포집 기술의 중요성) -> 과정 설명 1(C: 이산화탄소 포집) -> 과정 설명 2(A: 지하 저장) 순서가 논리적입니다."
        },
        {
            id: "i-l-1",
            level: "Intermediate",
            type: "금액 계산",
            isListening: true,
            content: `M: I want to make my home smarter. I need a smart speaker and two smart bulbs.
W: The smart speaker is $50, and each smart bulb is $20.
M: Okay. Is there any promotion?
W: If you buy a speaker and bulbs together, you get $10 off the total.
M: Perfect. I'll take them.`,
            question: "남자가 지불할 총 금액은?",
            choices: ["$70", "$80", "$90", "$100", "$110"],
            answer: 1,
            explanation: "스피커($50) + 전구 2개($20 * 2 = $40) = $90. 여기서 $10 할인을 받으므로 $80입니다."
        }
    ] as Question[],
    advanced: [
        {
            id: "a-r-1",
            level: "Advanced",
            type: "빈칸 추론",
            isListening: false,
            content: "Decentralized Finance (DeFi) challenges the traditional financial system by removing intermediaries like banks. Instead, it relies on smart contracts on a blockchain. While this offers greater accessibility and transparency, it also introduces significant risks. Without a central authority to oversee transactions, users bear full responsibility for the security of their assets. Thus, in the world of DeFi, ________ is a double-edged sword.",
            question: "빈칸에 들어갈 말로 가장 적절한 것은?",
            choices: ["autonomy", "regulation", "censorship", "inflation", "mediation"],
            answer: 0,
            explanation: "중개인 없이 스스로 자산을 관리하는 것은 자율성(autonomy)을 의미하지만, 이는 동시에 위험을 동반하는 양날의 검입니다."
        },
        {
            id: "a-r-2",
            level: "Advanced",
            type: "함축 의미 추론",
            isListening: false,
            content: "CRISPR gene editing holds the promise of curing genetic diseases. However, the ability to edit the human germline raises profound ethical questions. If we start enhancing traits rather than just curing ailments, we risk creating a society where genetic advantages are purchased. This could lead to a 'genetic divide' essentially ________.",
            question: "빈칸에 들어갈 말로 가장 적절한 것은?",
            choices: ["cementing social inequality", "promoting equal opportunity", "erasing cultural differences", "slowing down scientific progress", "encouraging biodiversity"],
            answer: 0,
            explanation: "유전적 이점을 돈으로 사게 되면 사회적 불평등이 고착화(cementing social inequality)될 위험이 있다는 맥락입니다."
        },
        {
            id: "a-r-3",
            level: "Advanced",
            type: "요약문 완성",
            isListening: false,
            content: "AI is increasingly being used in creative fields like art and music. While some fear it will replace human creativity, others see it as a collaborator. AI can generate ideas and patterns that humans might not think of, pushing the boundaries of what is possible. Ultimately, the future of creativity lies in the ________ of human intuition and AI's computational power.",
            question: "빈칸에 들어갈 말로 가장 적절한 것은?",
            choices: ["separation", "synergy", "conflict", "dominance", "elimination"],
            answer: 1,
            explanation: "AI를 협력자로 보고 인간의 직관과 AI의 능력이 결합하여 새로운 가능성을 연다는 내용이므로 '시너지(synergy)'가 적절합니다."
        },
        {
            id: "a-r-4",
            level: "Advanced",
            type: "문장 삽입",
            isListening: false,
            content: "Quantum computing operates on principles fundamentally different from classical computing. (A) Classical computers use bits, which are either 0 or 1. (B) This allows them to perform complex calculations at speeds unimaginable today. (C) Quantum computers, however, use qubits, which can exist in multiple states simultaneously. (D) This property is known as superposition.",
            question: "다음 문장이 들어갈 위치로 가장 적절한 곳은?\n'Thanks to superposition, quantum computers can process a vast amount of data in parallel.'",
            choices: ["(A)", "(B)", "(C)", "(D)", "문장의 맨 뒤"],
            answer: 1,
            explanation: "오답 수정: (B)는 양자 컴퓨터의 성능을 설명하므로, 큐비트와 중첩(superposition)을 소개한 (C)와 (D) 뒤에 오는 것이 자연스럽습니다. 제시문이 (B) 앞에 있어야 합니다. 수정된 흐름: (A) Classical bits. (C) Quantum qubits. (D) Superposition. [Insert] Parallel processing. (B) Complex calculations. 따라서 (B) 앞이 가장 적절합니다. (선택지 (B)는 원문의 (B) 문장 앞을 의미함)"
        },
        {
            id: "a-l-1",
            level: "Advanced",
            type: "담화의 주제",
            isListening: true,
            content: `M: While 'Agentic AI' promises to revolutionize productivity by autonomously executing tasks, we must view it with caution. Unlike simple chatbots, these agents act on our behalf—sending emails, making purchases, or managing schedules. The risk isn't just about errors; it's about accountability. If an AI agent makes a harmful decision, who is responsible? The developer, the user, or the AI itself? Without clear legal frameworks and ethical guidelines defining liability, the widespread adoption of autonomous agents could lead to chaotic legal disputes. We need a 'Responsibility Protocol' before giving AI full autonomy.`,
            question: "남자가 주장하는 바로 가장 적절한 것은?",
            choices: ["AI 에이전트의 자율성을 제한해야 한다.", "AI 개발 속도를 늦춰야 한다.", "자율 AI 에이전트 도입 전 책임 소재를 명확히 하는 법적 규제가 필요하다.", "AI가 인간의 일자리를 대체하는 것을 막아야 한다.", "모든 AI 시스템은 오픈 소스로 공개되어야 한다."],
            answer: 2,
            explanation: "남자는 자율적으로 행동하는 Agentic AI의 등장에 따른 책임 소재(accountability, liability)의 불명확성을 지적하며, 도입 전에 이를 명확히 할 법적 프레임워크와 책임 프로토콜이 필요하다고 주장합니다."
        },
        {
            id: "a-l-2",
            level: "Advanced",
            type: "담화의 주제",
            isListening: true,
            content: `M: With the rise of commercial space tourism, safety regulations are becoming a hot topic. Unlike traditional aviation, space travel involves extreme conditions that require new safety standards. We need to establish international protocols to ensure the safety of passengers and crew in this burgeoning industry.`,
            question: "남자가 하는 말의 주제로 가장 적절한 것은?",
            choices: ["The cost of space travel", "Need for space tourism safety regulations", "Training for astronauts", "History of space exploration", "Design of spacecraft"],
            answer: 1,
            explanation: "상업 우주 여행의 부상과 함께 안전 규정(safety regulations)의 필요성을 역설하고 있습니다."
        },
        {
            id: "a-r-killer",
            level: "Advanced",
            type: "빈칸 추론 (Prime Killer)",
            isListening: false,
            content: "Personalized content algorithms are designed to show us what we like, theoretically enhancing user experience. However, paradoxically, by constantly feeding us content that aligns with our existing preferences, these algorithms can narrow our worldview. Instead of broadening our horizons, they create 'filter bubbles' where we are isolated from opposing viewpoints. This algorithmic curation ultimately ________ the very diversity of thought it purports to serve.",
            question: "빈칸에 들어갈 말로 가장 적절한 것은?",
            choices: ["undermines", "amplifies", "protects", "initiates", "validates"],
            answer: 0,
            explanation: "알고리즘이 우리의 세계관을 좁히고 필터 버블을 만듦으로써, 결과적으로 생각의 다양성을 '약화시킨다/훼손한다(undermines)'는 결론이 논리적입니다."
        }
    ] as Question[],
    mock: {
        id: "m-20260215",
        title: "제2회 실전 모의고사 (Daily Mock)",
        timeLimitMinutes: 15,
        questions: [
            {
                id: "m-l-1",
                level: "Foundation",
                type: "목적 파악",
                isListening: true,
                content: `W: Attention, residents. Starting next week, we are implementing a new recycling policy. All plastic waste must be separated into clear bags. This is to ensure better recycling efficiency.`,
                question: "여자가 안내방송을 하는 목적으로 가장 적절한 것은?",
                choices: ["새로운 재활용 정책을 안내하려고", "쓰레기 수거 시간 변경을 알리려고", "재활용 센터 자원봉사자를 모집하려고", "플라스틱 사용 줄이기 캠페인을 홍보하려고", "관리비 납부 방법을 설명하려고"],
                answer: 0,
                explanation: "다음 주부터 시행되는 새로운 재활용 정책(new recycling policy)을 안내하고 있습니다."
            },
            {
                id: "m-l-2",
                level: "Intermediate",
                type: "의견 파악",
                isListening: true,
                content: `M: I heard the city is planning to ban plastic straws.
W: Yes, I think it's a great idea. Plastic straws are harmful to marine life.
M: But they are convenient for some people.
W: True, but we can use paper or metal straws instead. Protecting the environment is more important.`,
                question: "여자의 의견으로 가장 적절한 것은?",
                choices: ["플라스틱 빨대 금지에 찬성한다.", "종이 빨대 사용을 반대한다.", "편의성이 환경보다 중요하다.", "빨대 사용을 전면 금지해야 한다.", "해양 생물 보호에 관심이 없다."],
                answer: 0,
                explanation: "여자는 플라스틱 빨대 금지가 좋은 생각(great idea)이라며 환경 보호가 더 중요하다고 주장합니다."
            },
            {
                id: "m-r-1",
                level: "Intermediate",
                type: "요지 파악",
                isListening: false,
                content: "Many students sacrifice sleep to study more, thinking it will help them get better grades. However, research shows that sleep is crucial for memory consolidation. During sleep, the brain processes and stores information learned during the day. Therefore, getting enough sleep is actually a vital part of effective learning.",
                question: "다음 글의 요지로 가장 적절한 것은?",
                choices: ["수면은 기억 강화에 필수적이다.", "공부 시간을 늘리는 것이 성적 향상의 지름길이다.", "밤샘 공부는 집중력을 높여준다.", "적절한 휴식은 스트레스를 줄여준다.", "기억력은 타고난 능력이다."],
                answer: 0,
                explanation: "수면 중에 뇌가 정보를 저장하고 처리하므로(memory consolidation), 수면이 학습에 필수적이라는 내용입니다."
            },
            {
                id: "m-r-2",
                level: "Advanced",
                type: "빈칸 추론",
                isListening: false,
                content: "The future of work will likely not be about humans versus machines, but humans working with machines. AI can handle repetitive tasks and data analysis, freeing humans to focus on creative and empathetic tasks. In this collaborative model, the most valuable skill will be the ability to ________ AI tools to enhance human capabilities.",
                question: "빈칸에 들어갈 말로 가장 적절한 것은?",
                choices: ["leverage", "destroy", "ignore", "compete with", "fear"],
                answer: 0,
                explanation: "인간과 기계가 협력하는 모델에서, AI 도구를 '활용하는(leverage)' 능력이 가장 중요해질 것입니다."
            },
            {
                id: "m-r-3",
                level: "Intermediate",
                type: "어법성 판단",
                isListening: false,
                content: "The internet (A) [has / have] revolutionized communication. Before the internet, sending a message across the world took days. Now, it happens in an instant. This speed (B) [allows / allow] us to stay connected with friends and family globally.",
                question: "(A), (B)의 각 네모 안에서 어법에 맞는 표현으로 가장 적절한 것은?",
                choices: ["has - allows", "have - allow", "has - allow", "have - allows", "had - allowed"],
                answer: 0,
                explanation: "(A) The internet(3인칭 단수)이므로 has, (B) This speed(3인칭 단수)이므로 allows가 맞습니다."
            }
        ] as Question[]
    }
};

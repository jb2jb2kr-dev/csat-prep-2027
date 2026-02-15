import type { DailySet, Question } from '../types';

export const daily20260201: DailySet = {
    foundation: [
        {
            id: "d-20260201-f-1",
            level: "Foundation",
            type: "목적 파악 (Listening)",
            isListening: true,
            content: "W: Good morning, students. I'm excited to announce the launch of our new school garden project. We are looking for volunteers to help plant seeds and water the flowers every Wednesday afternoon. If you are interested in nature and want to make our school beautiful, please sign up in the teacher's room by Friday. No experience is needed. Let's grow something wonderful together!",
            question: "여자가 하는 말의 목적으로 가장 적절한 것은?",
            choices: ["학교 정원 봉사자를 모집하려고", "식물 키우는 법을 설명하려고", "정원 관리 예산을 요청하려고", "교무실 위치를 안내하려고", "금요일 행사를 홍보하려고"],
            answer: 0,
            explanation: "여자는 새로운 학교 정원 프로젝트를 위해 수요일 오후에 도와줄 봉사자를 모집하고 있습니다."
        },
        {
            id: "d-20260201-f-2",
            level: "Foundation",
            type: "심경 파악",
            isListening: false,
            content: "As the sun began to set, the hikers finally reached the top of the mountain. They were exhausted, but the view was breathtaking. The golden light spread across the valley below, and a cool breeze brushed their faces. They looked at each other and smiled, feeling a deep sense of accomplishment and peace.",
            question: "글에 드러난 등산객들의 심경으로 가장 적절한 것은?",
            choices: ["nervous (긴장한)", "angry (화난)", "satisfied (만족스러운)", "scared (겁먹은)", "bored (지루한)"],
            answer: 2,
            explanation: "산 정상에 도착하여 멋진 풍경을 보며 미소 짓고 성취감과 평화를 느끼고 있으므로 'satisfied'가 적절합니다."
        },
        {
            id: "d-20260201-f-3",
            level: "Foundation",
            type: "도표 정보 파악",
            isListening: false,
            content: "[Table: Global Smartphone Market Share 2026]\n1. Alpha Tech: 35%\n2. Beta Vision: 25%\n3. Gamma Mobile: 20%\n4. Delta Systems: 15%\n5. Others: 5%\n\nThe table above shows the market share of smartphone companies in 2026. Alpha Tech is the leading company with a 35% share.",
            question: "도표의 내용과 일치하지 않는 것은?",
            choices: ["Alpha Tech의 시장 점유율이 가장 높다.", "Beta Vision은 두 번째로 높은 점유율을 차지한다.", "Gamma Mobile의 점유율은 20%이다.", "Delta Systems와 Others의 합은 25%이다.", "Alpha Tech의 점유율은 Others의 7배이다."],
            answer: 3,
            explanation: "Delta Systems(15%)와 Others(5%)의 합은 20%이므로 25%라는 진술은 틀렸습니다.",
            chartData: {
                type: 'pie',
                title: "Global Smartphone Market Share 2026",
                labels: ["Alpha Tech", "Beta Vision", "Gamma Mobile", "Delta Systems", "Others"],
                datasets: [
                    {
                        label: "Market Share (%)",
                        data: [35, 25, 20, 15, 5],
                        color: "bg-blue-500"
                    }
                ]
            }
        },
        {
            id: "d-20260201-f-4",
            level: "Foundation",
            type: "그림 정보 파악 (Listening)",
            isListening: true,
            content: "M: Look at this flyer for the Pet Photo Contest. I want to enter a photo of my dog, Max.\nW: Great idea! Is it the one where he is wearing a red bow tie?\nM: Yes, and he is sitting on a wooden bench.\nW: I remember. There's a big oak tree in the background, right?\nM: Exactly! And he has a small tennis ball between his paws.",
            question: "대화를 듣고, 그림과 일치하지 않는 것을 고르시오.",
            choices: ["빨간 나비넥타이를 맨 개", "나무 벤치 위에 앉아 있는 개", "배경에 있는 커다란 오크 나무", "발 사이에 있는 테니스 공", "개 옆에 있는 밥그릇"],
            answer: 4,
            explanation: "대화에서 밥그릇에 대한 언급은 없습니다."
        },
        {
            id: "d-20260201-f-5",
            level: "Foundation",
            type: "내용 일치",
            isListening: false,
            content: "The Giant Panda is a bear species endemic to South Central China. It is characterized by its bold black-and-white coat and rotund body. The name 'giant panda' is sometimes used to distinguish it from the unrelated red panda. Although its diet is 99% bamboo, giant pandas in the wild will occasionally eat other grasses, wild tubers, or even meat in the form of birds or rodents.",
            question: "Giant Panda에 관한 내용과 일치하는 것은?",
            choices: ["중국 남부와 중부 이외의 지역에서도 자생한다.", "몸이 매우 날씬한 편이다.", "레드 판다와 아주 밀접하게 연관되어 있다.", "식단의 100%가 대나무로 구성된다.", "야생에서는 때때로 고기를 먹기도 한다."],
            answer: 4,
            explanation: "본문 마지막에 'occasionally eat other grasses... or even meat'라고 언급되어 있습니다."
        }
    ],
    intermediate: [
        {
            id: "d-20260201-i-1",
            level: "Intermediate",
            type: "주장 파악 (Listening)",
            isListening: true,
            content: "W: Mike, don't you think social media has made our friendships shallower?\nM: Well, it helps us stay connected with people who live far away.\nW: That's true, but we often prefer sending emojis over having a real conversation. We should try to meet our friends in person more often to maintain deeper connections.\nM: You have a point. Digital communication can't replace the warmth of a face-to-face meeting.",
            question: "여자의 주장으로 가장 적절한 것은?",
            choices: ["소셜 미디어 계정을 삭제해야 한다.", "멀리 사는 친구와 더 자주 연락해야 한다.", "직접 만나서 깊은 유대감을 형성해야 한다.", "디지털 기기 사용법을 익혀야 한다.", "이모티콘 사용을 줄여야 한다."],
            answer: 2,
            explanation: "여자는 깊은 관계를 유지하기 위해 친구들을 더 자주 직접 만나야 한다(meet our friends in person more often)고 주장합니다."
        },
        {
            id: "d-20260201-i-2",
            level: "Intermediate",
            type: "어법성 판단",
            isListening: false,
            content: "The idea that technology is always beneficial (A) [is / are] being questioned by many scholars. They argue that the overuse of digital devices (B) [impacts / impact] our focus and memory negatively. If we do not set limits, we (C) [will lose / lost] our ability to think deeply.",
            question: "(A), (B), (C)에서 어법에 맞는 표현으로 가장 적절한 것은?",
            choices: ["is - impacts - will lose", "are - impacts - lost", "is - impact - will lose", "are - impact - lost", "is - impacts - lost"],
            answer: 0,
            explanation: "(A) 주어 The idea가 단수이므로 is, (B) 주어 overuse가 단수이므로 impacts, (C) 가정법 현재/직설법 미래 구문이므로 will lose가 적절합니다."
        },
        {
            id: "d-20260201-i-3",
            level: "Intermediate",
            type: "빈칸 추론",
            isListening: false,
            content: "In the era of information overload, the most valuable skill is not finding data, but ________ it. With millions of search results available for any query, the challenge is to distinguish what is relevant and reliable from what is false or distracting.",
            question: "빈칸에 들어갈 말로 가장 적절한 것은?",
            choices: ["memorizing", "filtering", "creating", "selling", "hiding"],
            answer: 1,
            explanation: "엄청난 정보 속에서 필요한 것을 가려내는 것이 중요하므로 '필터링/선별(filtering)'이 답입니다."
        },
        {
            id: "d-20260201-i-4",
            level: "Intermediate",
            type: "제목 추론",
            isListening: false,
            content: "Coffee culture has undergone a massive transformation in recent years. It is no longer just a quick morning energy boost. For many, coffee is an artisanal experience, with specialized brewing methods and carefully sourced beans. This 'Third Wave' of coffee emphasizes the unique flavors of different regions, much like fine wine.",
            question: "다음 글의 제목으로 가장 적절한 것은?",
            choices: ["Health Benefits of Caffeine", "The History of Coffee Trade", "Coffee: From Energy Boost to Artisanal Experience", "How to Use a Coffee Machine", "Why People Love Morning Coffee"],
            answer: 2,
            explanation: "커피가 단순한 에너지 보충제에서 장인 정신이 깃든 경험으로 변화했다는 내용을 담고 있습니다."
        },
        {
            id: "d-20260201-i-5",
            level: "Intermediate",
            type: "요약문 완성",
            isListening: false,
            content: "Introverts often gain energy from being alone, while extroverts are energized by social interactions. This doesn't mean introverts don't like people; it just means they need time to recharge after socializing. Understanding these differences can help improve team dynamics in the workplace.",
            question: "Introverts and extroverts differ in how they ________ their energy.",
            choices: ["waste", "recharge", "calculate", "ignore", "share"],
            answer: 1,
            explanation: "본문에서 에너지를 얻는 방식(energized, recharge)의 차이를 설명하고 있습니다."
        }
    ],
    advanced: [
        {
            id: "d-20260201-a-1",
            level: "Advanced",
            type: "담화의 주제 (Listening)",
            isListening: true,
            content: "M: Hello, everyone. Today's topic is the 'Algorithmic Bubble.' Most social media platforms use algorithms to show you content that matches your existing interests. While this makes the experience more engaging, it also creates an invisible wall around you. You only see opinions you already agree with, which makes it harder to understand different perspectives. This can lead to increased social polarization. We must consciously seek out diverse viewpoints to break this bubble.",
            question: "남자가 하는 말의 주제로 가장 적절한 것은?",
            choices: ["알고리즘을 이용한 개인형 광고의 효과", "소셜 미디어가 사회 통합에 기여하는 방식", "알고리즘 버블에 의한 정보 편향과 사회적 양극화", "인터넷 검색 엔진의 기술적 진화 과정", "온라인 커뮤니티에서 인기를 얻는 방법"],
            answer: 2,
            explanation: "알고리즘이 관심 있는 정보만 보여줌으로써 편향을 만들고 양극화를 초래한다는 '알고리즘 버블' 문제를 다루고 있습니다."
        },
        {
            id: "d-20260201-a-2",
            level: "Advanced",
            type: "빈칸 추론 (Prime Killer)",
            isListening: false,
            content: "The paradox of memory lies in its reconstructive nature. We often believe our memories are like recordings of past events, static and accurate. However, neuroscience shows that every time we recall a memory, we are actually ________ it. The context of the present, our current emotions, and new information can subtly alter the original experience. Thus, memory is not a window into the past, but a continuous dialogue between who we were and who we are now.",
            question: "빈칸에 들어갈 말로 가장 적절한 것은?",
            choices: ["erasing", "rewriting", "securing", "simplifying", "observing"],
            answer: 1,
            explanation: "기억을 떠올릴 때마다 현재의 맥락과 감정에 의해 조금씩 바뀐다는 내용이므로 '다시 쓰기(rewriting)'가 가장 적절합니다."
        },
        {
            id: "d-20260201-a-3",
            level: "Advanced",
            type: "문장 삽입",
            isListening: false,
            content: "Economists have long debated the impact of automation on the labor market. (A) Some argue that it will lead to mass unemployment as machines replace human workers. (B) However, others point out that technology historically creates more jobs than it destroys by lowering costs and increasing demand. (C) This transition period, however, can be incredibly painful for those whose skills are no longer needed. (D) Therefore, the focus should be on lifelong learning and flexible education systems.",
            question: "다음 문장이 들어갈 위치로 가장 적절한 곳은?\n'The key challenge is the speed of this change, which may outpace the human ability to adapt.'",
            choices: ["(A)", "(B)", "(C)", "(D)", "문장 끝"],
            answer: 2,
            explanation: "기술이 일자리를 만든다는 낙관론(B) 뒤에, 변화의 속도가 적응 능력을 앞질러 고통스러운 전환기(C)가 온다는 맥락 사이에 들어가는 것이 적절합니다."
        },
        {
            id: "d-20260201-a-4",
            level: "Advanced",
            type: "글의 순서",
            isListening: false,
            content: "(A) This concept, known as 'Loss Aversion,' explains why people often hold onto failing investments longer than they should. (B) Psychological research suggests that the pain of losing something is twice as powerful as the pleasure of gaining it. (C) Consequently, our decision-making is often irrational, driven by the fear of loss rather than the potential for gain.",
            question: "주어진 글의 올바른 순서는?",
            choices: ["(A)-(B)-(C)", "(B)-(A)-(C)", "(C)-(A)-(B)", "(B)-(C)-(A)", "(A)-(C)-(B)"],
            answer: 1,
            explanation: "심리학적 현상 설명(B) -> 개념 정의 및 예시(A) -> 논리적 귀결/결론(C) 순서가 자연스럽습니다."
        },
        {
            id: "d-20260201-a-5",
            level: "Advanced",
            type: "함축 의미 추론",
            isListening: false,
            content: "When we speak of 'digital footprints,' we often focus on the data we intentionally share. But our digital shadows are much larger. Every click, pause, and hover is recorded by algorithms. These shadows speak louder than our voices, revealing our true preferences and vulnerabilities. In the age of surveillance capitalism, ________.",
            question: "밑줄 친 부분이 의미하는 바를 글의 맥락에서 가장 잘 설명한 것은?",
            choices: ["our silence is a form of resistance", "we are the masters of our digital identity", "our behavior is a commodity to be harvested", "digital data is less accurate than surveys", "privacy is a guaranteed right for everyone"],
            answer: 2,
            explanation: "사용자의 모든 행동 데이터(그림자)가 수집되어 상업적으로 이용된다는 맥락에서 '우리의 행동이 수집될 상품이다'라는 의미가 적절합니다."
        }
    ],
    mock: {
        id: "m-20260201",
        title: "2월 1일 실전 대비 모의고사",
        timeLimitMinutes: 20,
        questions: [
            {
                id: "m-20260201-1",
                level: "Foundation",
                type: "관계 파악 (Listening)",
                isListening: true,
                content: "M: Hello, I'm checking in for the flight to London.\nW: Can I see your passport and ticket, please?\nM: Here they are. I requested a window seat if possible.\nW: Let me check... Yes, we have a window seat available. Do you have any bags to check in?",
                question: "두 사람의 관계로 가장 적절한 것은?",
                choices: ["의사 - 환자", "공항 직원 - 승객", "호텔 직원 - 투숙객", "경찰 - 운전자", "점원 - 고객"],
                answer: 1,
                explanation: "항공편(flight), 여권(passport), 좌석 예약(window seat) 등의 대화로 보아 공항 직원과 승객입니다."
            },
            {
                id: "m-20260201-2",
                level: "Intermediate",
                type: "빈칸 추론",
                isListening: false,
                content: "In nature, many animals live in large groups. This behavior is primarily a strategy for ________. For example, a flock of birds has many eyes to spot predators, and a school of fish can confuse an attacker by moving together in a complex pattern.",
                question: "빈칸에 들어갈 말로 가장 적절한 것은?",
                choices: ["competition", "survival", "isolation", "migration", "reproduction"],
                answer: 1,
                explanation: "포식자를 감시하거나 공격자를 혼란시키는 행위는 모두 '생존(survival)' 전략입니다."
            },
            {
                id: "m-20260201-3",
                level: "Advanced",
                type: "주제 추론",
                isListening: false,
                content: "The 'Rebound Effect' in environmental policy occurs when improvements in efficiency lead to an increase in consumption. For instance, if cars become more fuel-efficient, people might drive more because it's cheaper. This increased usage can offset, or even negate, the environmental benefits of the initial technological improvement. Therefore, efficiency alone is insufficient to achieve true sustainability.",
                question: "다음 글의 주제로 가장 적절한 것은?",
                choices: ["연료 효율성이 환경에 미치는 긍정적 영향", "자동차 산업에서의 기술 혁신 사례", "효율성 향상이 소비 증가로 이어지는 리바운드 효과", "지속 가능한 발전을 위한 정부 보조금의 역할", "소비자 행동 변화의 심리학적 배경"],
                answer: 2,
                explanation: "효율성 향상이 오히려 소비를 늘려 환경적 이득을 상쇄하는 '리바운드 효과'에 대해 설명하고 있습니다."
            }
        ] as Question[]
    }
};

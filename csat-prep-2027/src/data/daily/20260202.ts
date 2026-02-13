import type { DailySet, Question } from '../types';

export const daily20260202: DailySet = {
    foundation: [
        // Existing Foundation
        {
            id: "f-r-1",
            level: "Foundation",
            type: "목적 파악",
            isListening: false,
            content: "To whom it may concern,\n\nI am writing to express my dissatisfaction with the recent service I received at your store. I purchased a laptop last week, but it started malfunctioning within two days. When I visited the store for a refund, the staff was unhelpful and rude.",
            question: "다음 글의 목적으로 가장 적절한 것은?",
            choices: ["제품 교환을 요청하려고", "서비스 불만에 대해 항의하려고", "직원 채용 문의를 하려고", "영업 시간 변경을 안내하려고", "신제품 출시를 홍보하려고"],
            answer: 1,
            explanation: "글쓴이는 최근 받은 서비스에 대한 불만을 표하고(express my dissatisfaction), 직원의 무례함에 대해 항의하고 있습니다."
        },
        {
            id: "f-r-2",
            level: "Foundation",
            type: "심경 추론",
            isListening: false,
            content: "As the concert began, my heart pounded with excitement. The lights dimmed, and the crowd cheered. When the singer stepped onto the stage, I felt a rush of joy I had never felt before.",
            question: "다음 글에 드러난 'I'의 심경으로 가장 적절한 것은?",
            choices: ["scared (무서운)", "bored (지루한)", "excited (흥분된)", "depressed (우울한)", "guilty (죄책감을 느끼는)"],
            answer: 2,
            explanation: "심장이 뛰고(pounded), 환호(cheered), 기쁨(joy) 등의 단어에서 'excited'한 심경을 알 수 있습니다."
        },
        {
            id: "f-r-3",
            level: "Foundation",
            type: "도표 정보 파악",
            isListening: false,
            content: "[Table: Preferred Leisure Activities of Teens in 2025]\n1. Video Games: 40%\n2. Social Media: 25%\n3. Sports: 15%\n4. Reading: 10%\n5. Others: 10%\n\nThe table above shows the preferred leisure activities of teenagers in 2025. Video games were the most popular activity, accounting for 40 percent of the total.",
            question: "위 도표의 내용과 일치하지 않는 것은?",
            choices: ["비디오 게임이 가장 인기 있는 활동이다.", "소셜 미디어는 두 번째로 높다.", "스포츠 선호도는 20% 이상이다.", "독서와 기타 활동의 비율은 같다.", "비디오 게임 비율은 독서의 4배이다."],
            answer: 2,
            explanation: "스포츠 선호도는 15%이므로 '20% 이상'이라는 진술은 일치하지 않습니다.",
            chartData: {
                type: 'bar',
                title: "Preferred Leisure Activities of Teens in 2025",
                items: [
                    { label: "Video Games", value: 40, unit: "%", color: "bg-indigo-500" },
                    { label: "Social Media", value: 25, unit: "%", color: "bg-emerald-500" },
                    { label: "Sports", value: 15, unit: "%", color: "bg-amber-500" },
                    { label: "Reading", value: 10, unit: "%", color: "bg-rose-500" },
                    { label: "Others", value: 10, unit: "%", color: "bg-slate-400" }
                ]
            }
        },
        {
            id: "f-l-1",
            level: "Foundation",
            type: "일치/불일치",
            isListening: true,
            content: `M: Look at this photo from my camping trip.
W: It looks fun. Is that a tent next to the tree?
M: Yes, I set it up myself. And there's a campfire in front of it.
W: I see a guitar leaning against the chair. Did you play it?
M: Yes, we sang songs together.`,
            question: "대화를 듣고, 그림과 일치하지 않는 것을 고르시오.",
            choices: ["나무 옆의 텐트", "텐트 앞의 모닥불", "의자에 기대어 있는 기타", "노래하는 사람들", "바비큐 그릴"],
            answer: 4,
            explanation: "대화에서 바비큐 그릴에 대한 언급은 없습니다."
        },
        // Detailed Expanded Foundation Questions (15+)
        {
            id: "f-l-01",
            level: "Foundation",
            type: "목적 파악 (Listening)",
            isListening: true,
            content: `M: Hello, I'm calling about the 'Grandhill Park Cleanup' event next Saturday. I registered yesterday, but I hurt my ankle this morning. I don't think I can walk around picking up trash. Is it possible to cancel my registration?`,
            question: "남자가 전화를 건 목적으로 가장 적절한 것은?",
            choices: ["행사에 등록하기 위해", "등록을 취소하기 위해", "길을 묻기 위해", "날짜를 변경하기 위해", "분실물을 신고하기 위해"],
            answer: 1,
            explanation: "남자가 발목을 다쳐서 등록을 취소할 수 있는지 묻고 있습니다."
        },
        {
            id: "f-l-02",
            level: "Foundation",
            type: "세부 내용 파악 (Listening)",
            isListening: true,
            content: `M: Welcome to the Garden Center. Can I help you?
W: Yes, I need a pot for my sunflower.
M: We have plastic, ceramic, and wood pots.
W: Plastic is too light. I want something sturdy.
M: Then how about ceramic or wood? Ceramic is heavier but looks nicer.
W: I'll take the ceramic one.`,
            question: "여자가 구매할 화분으로 가장 적절한 것은?",
            choices: ["플라스틱 화분", "나무 화분", "도자기 화분", "유리 화분", "금속 화분"],
            answer: 2,
            explanation: "여자는 플라스틱은 너무 가볍다고 했고, 나무보다는 더 예쁜 도자기(ceramic)를 선택했습니다."
        },
        {
            id: "f-l-03",
            level: "Foundation",
            type: "이유 파악 (Listening)",
            isListening: true,
            content: `M: Hey, do you want to see the new sci-fi movie 'Green Ocean' this afternoon?
W: I'd love to, but I can't.
M: Do you have to study for the math exam?
W: No, I finished that yesterday. I have to volunteer at the library until 6 p.m.`,
            question: "여자가 영화를 보러 갈 수 없는 이유는?",
            choices: ["시험 공부를 해야 해서", "아파서", "봉사활동을 해야 해서", "가족 모임이 있어서", "돈이 없어서"],
            answer: 2,
            explanation: "여자는 도서관에서 오후 6시까지 봉사활동(volunteer)을 해야 한다고 말했습니다."
        },
        {
            id: "f-r-04",
            level: "Foundation",
            type: "안내문 파악",
            isListening: false,
            content: "[NOTICE: School Library Hours]\n- Mon-Fri: 8 AM - 8 PM\n- Sat: 9 AM - 5 PM\n- Sun: Closed\n* Books can be returned to the drop box anytime.",
            question: "위 안내문의 내용과 일치하는 것은?",
            choices: ["일요일에도 문을 연다.", "평일에는 오후 6시에 닫는다.", "토요일은 오전 9시에 연다.", "책 반납은 운영 시간에만 가능하다.", "주말에는 운영하지 않는다."],
            answer: 2,
            explanation: "토요일 운영 시간은 오전 9시부터 오후 5시까지이므로 '오전 9시에 연다'가 일치합니다."
        },
        {
            id: "f-r-05",
            level: "Foundation",
            type: "주제 찾기",
            isListening: false,
            content: "Bees are very important for our environment. They carry pollen from flower to flower, which helps plants grow. Without bees, many fruits and vegetables would disappear. We must protect them.",
            question: "다음 글의 주제로 가장 적절한 것은?",
            choices: ["꿀벌의 위험성", "꿀벌 보호의 중요성", "꽃이 피는 과정", "맛있는 과일 고르는 법", "양봉업의 역사"],
            answer: 1,
            explanation: "글은 꿀벌이 식물 성장에 필수적이며 보호해야 한다(must protect them)고 주장합니다."
        },
        {
            id: "f-r-06",
            level: "Foundation",
            type: "심경 변화",
            isListening: false,
            content: "At first, I was worried about the interview. My hands were shaking. But as I started talking, the interviewer smiled and nodded. I felt much more relaxed and confident.",
            question: "다음 글에 드러난 심경 변화로 가장 적절한 것은?",
            choices: ["worried -> relaxed", "happy -> sad", "bored -> excited", "angry -> calm", "confident -> nervous"],
            answer: 0,
            explanation: "처음에는 걱정(worried)했으나 나중에는 편안해진(relaxed) 상태로 변화했습니다."
        },
        {
            id: "f-r-07",
            level: "Foundation",
            type: "요지 파악",
            isListening: false,
            content: "Drinking enough water is essential for your health. It keeps your body hydrated and helps your brain work better. Make sure to carry a water bottle with you.",
            question: "필자가 주장하는 바로 가장 적절한 것은?",
            choices: ["운동을 규칙적으로 해야 한다.", "충분한 물을 마셔야 한다.", "플라스틱 병을 줄여야 한다.", "아침 식사를 거르지 말아야 한다.", "수면 시간을 늘려야 한다."],
            answer: 1,
            explanation: "건강을 위해 충분한 물 섭취(Drinking enough water)가 필수적이라고 주장합니다."
        },
        {
            id: "f-r-08",
            level: "Foundation",
            type: "세부 내용 파악",
            isListening: false,
            content: "The panda is a bear native to China. It is easily recognized by its large, distinctive black patches around its eyes. Pandas mainly eat bamboo.",
            question: "판다에 대한 설명으로 일치하지 않는 것은?",
            choices: ["중국이 원산지이다.", "곰과에 속한다.", "눈 주위에 검은 무늬가 있다.", "주로 대나무를 먹는다.", "겨울잠을 잔다."],
            answer: 4,
            explanation: "본문에 판다가 겨울잠을 잔다는 내용은 없습니다."
        },
        {
            id: "f-r-09",
            level: "Foundation",
            type: "목적 파악",
            isListening: false,
            content: "Dear Ms. Baker,\nThank you for inviting me to your birthday party next Friday. Unfortunately, I cannot attend because I have a business trip scheduled on that day. I hope you have a wonderful celebration.\nBest, John.",
            question: "글을 쓴 목적으로 가장 적절한 것은?",
            choices: ["파티에 초대하려고", "초대를 거절하려고", "생일 선물을 보내려고", "출장 일정을 변경하려고", "안부를 묻기 위해"],
            answer: 1,
            explanation: "초대에 감사하지만 출장 때문에 참석할 수 없다(cannot attend)고 거절하고 있습니다."
        },
        {
            id: "f-r-10",
            level: "Foundation",
            type: "단어의 의미 파악",
            isListening: false,
            content: "It is important to 'conserve' water during a drought. We should not waste it.",
            question: "밑줄 친 'conserve'의 의미와 가장 가까운 것은?",
            choices: ["waste (낭비하다)", "save (아끼다)", "drink (마시다)", "clean (청소하다)", "pollute (오염시키다)"],
            answer: 1,
            explanation: "가뭄 동안 물을 낭비하지 않는 것이 중요하므로 conserve는 '아끼다(save)'의 의미입니다."
        },
        {
            id: "f-r-11",
            level: "Foundation",
            type: "지칭 추론",
            isListening: false,
            content: "Tom likes to play soccer. **He** plays it every Sunday with his friends. It is his favorite hobby.",
            question: "밑줄 친 **He**가 가리키는 대상은?",
            choices: ["Tom", "Friend", "Soccer", "Sunday", "Hobby"],
            answer: 0,
            explanation: "앞 문장의 주어인 Tom을 가리킵니다."
        },
        {
            id: "f-l-04",
            level: "Foundation",
            type: "장소 파악 (Listening)",
            isListening: true,
            content: `M: Can I see your ticket and passport, please?
W: Here they are. I would like a window seat.
M: Okay. I have a seat available in row 12. Do you have any luggage to check in?
W: Just this suitcase.`,
            question: "대화가 일어나는 장소로 알맞은 것은?",
            choices: ["식당", "병원", "공항", "도서관", "극장"],
            answer: 2,
            explanation: "여권, 티켓, 수하물(luggage) 등의 어휘로 보아 공항 체크인 카운터입니다."
        },
        {
            id: "f-l-05",
            level: "Foundation",
            type: "숫자 정보 파악 (Listening)",
            isListening: true,
            content: `W: How much is this t-shirt?
M: It's 20 dollars.
W: What about this cap?
M: It's 10 dollars.
W: I'll take one t-shirt and one cap.`,
            question: "여자가 지불할 총 금액은?",
            choices: ["$10", "$20", "$30", "$40", "$50"],
            answer: 2,
            explanation: "티셔츠 20달러 + 모자 10달러 = 총 30달러입니다."
        },
        {
            id: "f-r-12",
            level: "Foundation",
            type: "분위기 파악",
            isListening: false,
            content: "The old house was empty and silent. The wind howled outside, and the wooden floor creaked with every step. Shadows danced on the walls.",
            question: "다음 글의 분위기로 알맞은 것은?",
            choices: ["festive (축제 분위기의)", "scary (무서운)", "romantic (로맨틱한)", "peaceful (평화로운)", "busy (바쁜)"],
            answer: 1,
            explanation: "빈 집, 울부짖는 바람, 삐걱거리는 바닥 등은 무섭고 으스스한(scary) 분위기를 조성합니다."
        },
        {
            id: "f-r-13",
            level: "Foundation",
            type: "내용 일치",
            isListening: false,
            content: "My dog, Max, is a Golden Retriever. He loves to swim in the lake. He does not like cats.",
            question: "Max에 대한 설명으로 옳은 것은?",
            choices: ["고양이를 좋아한다.", "수영을 싫어한다.", "골든 리트리버이다.", "매우 작다.", "이름이 톰이다."],
            answer: 2,
            explanation: "Max is a Golden Retriever라고 명시되어 있습니다."
        },
        {
            id: "f-r-14",
            level: "Foundation",
            type: "글의 목적",
            isListening: false,
            content: "Please keep the park clean. Do not leave trash on the grass. Use the bins provided.",
            question: "이 표지판의 목적으로 알맞은 것은?",
            choices: ["공원 폐쇄 안내", "잔디 보호 요청", "쓰레기 투기 금지", "애완동물 출입 금지", "주차 금지"],
            answer: 2,
            explanation: "쓰레기를 버리지 말고 쓰레기통을 이용하라는 내용입니다."
        },
        {
            id: "f-r-15",
            level: "Foundation",
            type: "주제",
            isListening: false,
            content: "Reading books helps you learn new words. It also improves your imagination. You can travel to different worlds without leaving your room.",
            question: "다음 글이 설명하는 대상은?",
            choices: ["운동", "독서", "여행", "요리", "음악"],
            answer: 1,
            explanation: "새로운 단어를 배우고 상상력을 키워주는 '독서(Reading)'에 대한 글입니다."
        }
    ] as Question[],
    intermediate: [
        // Existing
        {
            id: "i-r-1",
            level: "Intermediate",
            type: "주장 파악",
            isListening: false,
            content: "Many people believe that multitasking makes them more productive. However, studies show that the brain cannot effectively focus on two complex tasks at once. Switching between tasks actually wastes time and reduces the quality of work.",
            question: "필자가 주장하는 바로 가장 적절한 것은?",
            choices: ["멀티태스킹은 생산성을 높인다.", "복잡한 업무는 나누어서 해야 한다.", "한 번에 한 가지 일에 집중해야 한다.", "휴식 시간을 충분히 가져야 한다.", "뇌 훈련을 통해 집중력을 길러야 한다."],
            answer: 2,
            explanation: "필자는 멀티태스킹이 시간 낭비이고 품질을 떨어뜨린다며, 한 번에 집중하지 못하는 뇌의 한계를 지적하고 있습니다."
        },
        {
            id: "i-l-1",
            level: "Intermediate",
            type: "할 일 파악",
            isListening: true,
            content: `W: Honey, the guests will be here in an hour. Is everything ready?
M: Almost. I've cleaned the living room and ordered the pizza.
W: Good. Did you buy some drinks?
M: Oh no, I forgot! The fridge is empty.
W: Don't worry, I'll clean the bathroom. Can you run to the store?
M: Sure, I'll go right now.`,
            question: "대화를 듣고, 남자가 할 일로 가장 적절한 것은?",
            choices: ["거실 청소하기", "피자 주문하기", "음료 사러 가기", "욕실 청소하기", "손님 맞이하기"],
            answer: 2,
            explanation: "여자가 욕실을 청소하는 동안 남자는 잊어버린 음료를 사러 가게(run to the store) 됩니다."
        },
        // Expanded Intermediate (12+)
        {
            id: "i-r-02",
            level: "Intermediate",
            type: "어법성 판단",
            isListening: false,
            content: "The number of students who (A) [is / are] interested in science has increased. A variety of experiments (B) [was / were] conducted in the lab.",
            question: "(A), (B)의 각 네모 안에서 어법에 맞는 표현으로 가장 적절한 것은?",
            choices: ["is - was", "are - were", "is - were", "are - was", "is - is"],
            answer: 1,
            explanation: "(A) 선행사가 students(복수)이므로 are, (B) A variety of는 복수 취급하므로 were가 적절합니다."
        },
        {
            id: "i-r-03",
            level: "Intermediate",
            type: "문맥상 낱말의 쓰임",
            isListening: false,
            content: "Although the internet has made information more accessible, it has also led to the spread of misinformation. Therefore, it is crucial to (A) [verify / ignore] the sources before believing what you read.",
            question: "(A)에 들어갈 말로 가장 적절한 것은?",
            choices: ["verify (검증하다)", "ignore (무시하다)", "create (창조하다)", "hide (숨기다)", "memorize (암기하다)"],
            answer: 0,
            explanation: "가짜 정보가 퍼지기 쉬우므로 믿기 전에 출처를 '검증(verify)'해야 합니다."
        },
        {
            id: "i-l-02",
            level: "Intermediate",
            type: "관계 추론 (Listening)",
            isListening: true,
            content: `M: How long have you been having this toothache?
W: Since last night. It hurts when I drink cold water.
M: Open your mouth, please. Hmm, I see a cavity here. We need to fill it.`,
            question: "두 사람의 관계로 가장 적절한 것은?",
            choices: ["의사 - 환자", "선생님 - 학생", "쇼핑몰 점원 - 고객", "변호사 - 의뢰인", "운전기사 - 승객"],
            answer: 0,
            explanation: "치통(toothache), 충치(cavity), 때우다(fill) 등의 용어로 보아 치과 의사와 환자의 관계입니다."
        },
        {
            id: "i-r-04",
            level: "Intermediate",
            type: "글의 제목",
            isListening: false,
            content: "Urban gardening is becoming popular in many cities. It not only provides fresh vegetables but also helps reduce stress and improves mental health. Furthermore, green spaces in cities help lower the urban heat island effect.",
            question: "다음 글의 제목으로 가장 적절한 것은?",
            choices: ["The History of Farming", "Benefits of Urban Gardening", "How to Cook Vegetables", "Problems of City Life", "Expensive Hobbies"],
            answer: 1,
            explanation: "도시 원예(Urban Gardening)의 다양한 장점(식량 제공, 스트레스 감소, 열섬 현상 완화)을 설명하고 있습니다."
        },
        {
            id: "i-r-05",
            level: "Intermediate",
            type: "흐름과 무관한 문장",
            isListening: false,
            content: "Digital banking has revolutionized the way we manage money. ① It allows users to check balances instantly. ② Transferring money used to take days, but now it happens in seconds. ③ Paper money is colorful and artistic. ④ Security measures like biometrics have made online transactions safer.",
            question: "다음 글에서 전체 흐름과 관계 없는 문장은?",
            choices: ["①", "②", "③", "④", "없음"],
            answer: 2,
            explanation: "디지털 뱅킹의 편리함과 기능에 대해 이야기하고 있는데, ③번 문장은 지폐의 예술적 특징을 말하고 있어 흐름과 무관합니다."
        },
        {
            id: "i-r-06",
            level: "Intermediate",
            type: "빈칸 추론",
            isListening: false,
            content: "In many cultures, eye contact is seen as a sign of respect and attention. However, in some Asian cultures, direct eye contact with an elder or a superior can be considered ________.",
            question: "빈칸에 들어갈 말로 가장 적절한 것은?",
            choices: ["polite", "impolite", "necessary", "friendly", "funny"],
            answer: 1,
            explanation: "문화적 차이를 설명하며 역접(However)이 있으므로, 일부 아시아 문화권에서는 윗사람과의 눈맞춤이 '무례한(impolite)' 것으로 간주될 수 있다는 내용입니다."
        },
        {
            id: "i-l-03",
            level: "Intermediate",
            type: "부탁한 일 (Listening)",
            isListening: true,
            content: `M: Sarah, are you going to the library?
W: Yes, do you need anything?
M: Could you return these two books for me? I have a class right now.
W: Sure, no problem.`,
            question: "남자가 여자에게 부탁한 일은?",
            choices: ["책 빌리기", "책 반납하기", "도서관 자리 맡기", "수업 필기 빌리기", "점심 같이 먹기"],
            answer: 1,
            explanation: "남자는 'return these two books'라고 말하며 반납을 부탁했습니다."
        },
        {
            id: "i-r-07",
            level: "Intermediate",
            type: "글의 순서",
            isListening: false,
            content: "(A) This plastic waste harms marine life. (B) Plastic pollution is a major environmental issue. (C) Therefore, we must reduce our use of single-use plastics.",
            question: "주어진 글의 올바른 순서는?",
            choices: ["(A)-(B)-(C)", "(B)-(A)-(C)", "(C)-(A)-(B)", "(B)-(C)-(A)", "(A)-(C)-(B)"],
            answer: 1,
            explanation: "문제 제기(B) -> 구체적 피해(A) -> 결론/해결책(C)의 순서가 논리적입니다."
        },
        {
            id: "i-r-08",
            level: "Intermediate",
            type: "안내문 파악",
            isListening: false,
            content: "[Cooking Class for Beginners]\n- Date: March 15th\n- Time: 2 PM - 5 PM\n- Fee: $50 (Ingredients included)\n- Register by March 10th on our website.",
            question: "안내문의 내용과 일치하지 않는 것은?",
            choices: ["초보자를 위한 요리 수업이다.", "3시간 동안 진행된다.", "재료비는 별도이다.", "웹사이트에서 등록해야 한다.", "3월 10일까지 등록해야 한다."],
            answer: 2,
            explanation: "재료비가 포함(Ingredients included)되어 있으므로 '별도이다'는 틀린 내용입니다."
        },
        {
            id: "i-r-09",
            level: "Intermediate",
            type: "어휘 선택",
            isListening: false,
            content: "The team worked hard to (A) [fail / achieve] their goal. Finally, they won the championship.",
            question: "(A)에 들어갈 말로 알맞은 것은?",
            choices: ["fail", "achieve"],
            answer: 1,
            explanation: "우승을 했으므로 목표를 '달성하다(achieve)'가 적절합니다."
        },
        {
            id: "i-l-04",
            level: "Intermediate",
            type: "지불 금액 (Listening)",
            isListening: true,
            content: `M: I'd like to buy tickets for the concert.
W: Adults are $30 and children are $15.
M: Two adults and one child, please. Here is $100.`,
            question: "남자가 받아야 할 거스름돈은?",
            choices: ["$15", "$25", "$35", "$75", "$10"],
            answer: 1,
            explanation: "총액: (30*2) + 15 = 75달러. 낸 돈 100달러. 거스름돈 25달러."
        },
        {
            id: "i-r-10",
            level: "Intermediate",
            type: "요약문 완성",
            isListening: false,
            content: "Unlike traditional marketing, influencer marketing relies on the trust between the influencer and their followers. This personal connection makes the advertisement feel more authentic.",
            question: "Influencer marketing is effective because it is based on ________ connection.",
            choices: ["financial", "personal", "legal", "accidental", "global"],
            answer: 1,
            explanation: "본문에서 'personal connection'이 광고를 진정성 있게 만든다고 언급했습니다."
        },
        {
            id: "i-r-11",
            level: "Intermediate",
            type: "접속사 추론",
            isListening: false,
            content: "It was raining heavily. ________, we decided to cancel the picnic.",
            question: "빈칸에 들어갈 연결어로 알맞은 것은?",
            choices: ["However", "Therefore", "For example", "In addition", "Instead"],
            answer: 1,
            explanation: "비가 많이 와서 피크닉을 취소했다는 인과관계이므로 Therefore(그러므로)가 적절합니다."
        },
        {
            id: "i-r-12",
            level: "Intermediate",
            type: "분위기/심경",
            isListening: false,
            content: "The deadline was approaching, and I hadn't finished the report. My computer suddenly crashed, and I lost my file. I felt completely ________.",
            question: "빈칸에 들어갈 심경으로 알맞은 것은?",
            choices: ["panic-stricken (패닉에 빠진)", "satisfied (만족한)", "relaxed (편안한)", "grateful (감사하는)", "bored (지루한)"],
            answer: 0,
            explanation: "마감 임박, 컴퓨터 고장, 파일 분실 상황이므로 극도로 당황한(panic-stricken) 상태입니다."
        },
        {
            id: "i-l-05",
            level: "Intermediate",
            type: "언급되지 않은 것 (Listening)",
            isListening: true,
            content: `W: Let's check the packing list for the hiking trip.
M: Okay. I packed water, snacks, a map, and a first-aid kit.
W: Did you bring a flashlight?
M: Oops, I forgot that.`,
            question: "남자가 챙긴 물건이 아닌 것은?",
            choices: ["물", "간식", "지도", "구급상자", "손전등"],
            answer: 4,
            explanation: "손전등(flashlight)은 잊어버렸다(forgot)고 했습니다."
        }
    ] as Question[],
    advanced: [
        // Existing Quasi-killer
        {
            id: "a-r-killer-1",
            level: "Advanced",
            type: "빈칸 추론 (Quasi-killer)",
            isListening: false,
            content: "Trade secret law aims to promote innovation, although it accomplishes this objective in a very different manner than patent protection. Notwithstanding the advantages of obtaining a patent, many innovators prefer to protect their innovation through secrecy. They may believe that the cost and delay of seeking a patent are too great or that secrecy better protects their investment and increases their profit. They might also believe that the invention can best be utilized over a longer period of time than a patent would allow. In this context, trade secret law serves as a crucial ________ mechanism.",
            question: "빈칸에 들어갈 말로 가장 적절한 것은?",
            choices: ["public disclosure", "alternative incentive", "government regulation", "short-term profit", "academic collaboration"],
            answer: 1,
            explanation: "특허(patent)와는 다른 방식으로 혁신을 촉진하며, 특허의 단점(비용, 지연, 기간 제한)을 보완하는 선택지이므로 '대안적 유인책(alternative incentive)'이 가장 적절합니다. 논리적 추론: 특허 vs 영업비밀 -> 대안 관계."
        },
        {
            id: "a-r-killer-2",
            level: "Advanced",
            type: "함축 의미 추론",
            isListening: false,
            content: "The concept of 'historical time' is not merely a chronological sequence but a construct of human consciousness. Events do not inherently carry weight; rather, it is our collective interpretation that imbues them with significance. Thus, history is not a fossil waiting to be dug up, but a ________.",
            question: "빈칸에 들어갈 말로 가장 적절한 것은?",
            choices: ["mirror reflecting the present", "fixed record of the past", "predictable cycle of events", "useless collection of data", "biological evolution process"],
            answer: 0,
            explanation: "역사는 과거의 고정된 기록(fossil)이 아니라, 현재의 우리의 해석이 부여되는 것이므로 '현재를 비추는 거울(mirror reflecting the present)'이라는 비유가 적절합니다."
        },
        {
            id: "a-l-1",
            level: "Advanced",
            type: "담화의 주제 (Advanced)",
            isListening: true,
            content: `M: Today, we will discuss the 'Observer Effect' in quantum mechanics. It sounds complex, but simply put, it means that the act of observing a phenomenon changes the phenomenon itself. For example, to measure the pressure of a tire, you must let out some air, thus changing the pressure. In social sciences, people behave differently when they know they are being watched.`,
            question: "남자가 하는 말의 주제로 가장 적절한 것은?",
            choices: ["The difficulty of quantum physics", "How to measure tire pressure", "The definition and examples of the Observer Effect", "The difference between physics and social science", "The history of scientific discovery"],
            answer: 2,
            explanation: "남자는 양자역학의 '관찰자 효과(Observer Effect)'를 정의하고, 타이어 공기압과 사회과학의 예를 들어 설명하고 있습니다."
        },
        // Expanded Advanced (9 more)
        {
            id: "a-r-04",
            level: "Advanced",
            type: "빈칸 추론",
            isListening: false,
            content: "In a rapidly changing world, the ability to unlearn is as important as the ability to learn. Clinging to outdated mental models can hinder adaptation. Therefore, true intelligence is defined not by the accumulation of knowledge, but by the ________ of cognitive frameworks.",
            question: "빈칸에 들어갈 말로 가장 적절한 것은?",
            choices: ["preservation", "flexibility", "rigidity", "rejection", "confirmation"],
            answer: 1,
            explanation: "과거의 모델을 버리고 적응해야 하므로 인지적 틀의 '유연성(flexibility)'이 진정한 지능의 정의가 됩니다."
        },
        {
            id: "a-r-05",
            level: "Advanced",
            type: "문장 삽입",
            isListening: false,
            content: "Evolutionary psychology suggests that our brains are wired for survival in a primitive environment. (A) This explains why we crave high-calorie foods. (B) In the past, food was scarce, so eating as much as possible was a survival strategy. (C) However, in the modern world, this instinct often leads to obesity. (D) We need to consciously override these ancient impulses.",
            question: "다음 문장이 들어갈 위치는?\n'This mismatch between our evolved instincts and our modern environment is known as evolutionary mismatch.'",
            choices: ["(A)", "(B)", "(C)", "(D)", "맨 앞"],
            answer: 3,
            explanation: "(C)에서 과거 본능과 현대 환경의 충돌(비만 문제)을 설명했으므로, 그 현상을 '진화적 불일치(evolutionary mismatch)'라고 정의하는 문장은 (C) 뒤, (D) 앞에 오는 것이 적절합니다."
        },
        {
            id: "a-r-06",
            level: "Advanced",
            type: "함축 의미 추론",
            isListening: false,
            content: "The term 'black swan' refers to an unpredictable event that has severe consequences. Before the discovery of black swans in Australia, people believed all swans were white. This illustrates the fragility of inductive reasoning: ________.",
            question: "빈칸을 완성하여 글의 요지를 파악하시오.",
            choices: ["One single observation can invalidate a general belief.", "All birds will eventually evolve into swans.", "We should not trust scientific observations.", "White swans are superior to black swans.", "Prediction is always accurate."],
            answer: 0,
            explanation: "수천 마리의 흰 백조를 봤어도 한 마리의 검은 백조가 '모든 백조는 희다'는 믿음을 깨뜨립니다. 즉, '단 하나의 관찰이 일반적 믿음을 무효화할 수 있다'는 귀납법의 취약점을 설명합니다."
        },
        {
            id: "a-r-07",
            level: "Advanced",
            type: "어휘 적절성",
            isListening: false,
            content: "The economist argued that 'sunk costs' should be ignored in decision making. Investing more money into a failing project just because you have already spent a lot is (A) [rational / irrational]. Doing so is falling victim to the 'sunk cost fallacy'.",
            question: "(A)에 들어갈 말로 가장 적절한 것은?",
            choices: ["rational", "irrational"],
            answer: 1,
            explanation: "이미 쓴 돈(매몰 비용) 때문에 실패하는 프로젝트에 더 투자하는 것은 '비합리적(irrational)'입니다."
        },
        {
            id: "a-r-08",
            level: "Advanced",
            type: "글의 순서",
            isListening: false,
            content: "(A) This concept, known as 'The Tragedy of the Commons', highlights the conflict between individual interest and the common good. (B) Imagine a shared pasture open to all. (C) Each herdsman will try to keep as many cattle as possible on the commons, eventually depleting the resource.",
            question: "주어진 글의 올바른 순서는?",
            choices: ["(B)-(C)-(A)", "(A)-(B)-(C)", "(C)-(A)-(B)", "(B)-(A)-(C)", "(A)-(C)-(B)"],
            answer: 0,
            explanation: "예시 도입(B: 공유 목초지 상상) -> 전개(C: 개인의 이익 추구로 자원 고갈) -> 개념 정의(A: 공유지의 비극) 순서가 논리적입니다."
        },
        {
            id: "a-l-02",
            level: "Advanced",
            type: "추론 (Listening)",
            isListening: true,
            content: `M: Professor, I read your paper on 'The Paradox of Choice'.
W: Do you have any questions?
M: You said having too many options makes people less happy. But doesn't freedom mean having more choices?
W: That's the paradox. Unlimited choice leads to decision paralysis and regret. We worry if we made the wrong choice.`,
            question: "여자의 주장에 따르면 'Paradox of Choice'의 결과는 무엇인가?",
            choices: ["Increased happiness", "Decision paralysis and regret", "More freedom", "Better quality products", "Economic growth"],
            answer: 1,
            explanation: "여자는 너무 많은 선택권이 '결정 마비(decision paralysis)'와 '후회(regret)'를 초래한다고 설명합니다."
        },
        {
            id: "a-r-09",
            level: "Advanced",
            type: "요약문 완성",
            isListening: false,
            content: "While explicit memory involves conscious recall of facts, implicit memory operates unconsciously. For instance, riding a bike requires implicit memory. You don't consciously think about how to balance; you just do it.",
            question: "Implicit memory allows us to perform tasks ________.",
            choices: ["with great effort", "without conscious awareness", "by reading manuals", "only in childhood", "through verbal instruction"],
            answer: 1,
            explanation: "암묵적 기억(implicit memory)은 무의식적으로 작동하므로 '의식적 자각 없이(without conscious awareness)' 과제를 수행하게 합니다."
        },
        {
            id: "a-r-10",
            level: "Advanced",
            type: "빈칸 추론",
            isListening: false,
            content: "Art is not a mirror to hold up to society, but a hammer with which to ________ it. Art should not just reflect reality; it should challenge and transform it.",
            question: "빈칸에 들어갈 말로 가장 적절한 것은?",
            choices: ["shape", "destroy", "ignore", "copy", "hide"],
            answer: 0,
            explanation: "예술은 사회를 반영(reflect)하는 거울이 아니라 변형(transform)시키는 도구여야 한다는 맥락에서 '형성하다/만들다(shape)'가 가장 적절합니다. (Bertolt Brecht의 인용구 변형)"
        },
        {
            id: "a-l-03",
            level: "Advanced",
            type: "세부 내용 불일치 (Listening)",
            isListening: true,
            content: `M: The 'Dunning-Kruger Effect' is a cognitive bias. People with low ability at a task overestimate their ability. Paradoxically, experts often underestimate their competence, assuming what is easy for them is easy for others.`,
            question: "Dunning-Kruger 효과에 대한 설명으로 일치하지 않는 것은?",
            choices: ["인지 편향의 일종이다.", "능력이 낮은 사람은 자신의 능력을 과대평가한다.", "전문가는 자신의 능력을 과소평가하는 경향이 있다.", "능력이 중간인 사람이 가장 자신감이 높다.", "전문가는 타인도 쉽게 할 것이라고 가정한다."],
            answer: 3,
            explanation: "능력이 중간인 사람에 대한 언급은 대본에 없습니다."
        }
    ] as Question[],
    mock: {
        id: "m-1",
        title: "제1회 실전 모의고사 (Full Set Simulation)",
        timeLimitMinutes: 35,
        questions: [
            // Listening Part (Shortened sample of 5, real set would have 17)
            {
                id: "m-l-1",
                level: "Foundation",
                type: "목적 파악",
                isListening: true,
                content: `M: Attention, students. This is your principal Mr. Parker. As you know, the school library renovation is scheduled to start next week. During this period, the main library will be closed. However, we have set up a temporary study area in the auditorium.`,
                question: "남자가 하는 말의 목적으로 가장 적절한 것은?",
                choices: ["도서관 공사 일정 연기를 알리려고", "임시 도서관 운영 장소를 안내하려고", "도서관 자원봉사자를 모집하려고", "학교 대강당 사용 수칙을 설명하려고", "신착 도서 목록을 소개하려고"],
                answer: 1,
                explanation: "도서관 공사 기간 동안 강당에 임시 학습 공간이 마련되었음을 안내하고 있습니다."
            },
            {
                id: "m-l-2",
                level: "Intermediate",
                type: "의견 파악",
                isListening: true,
                content: `W: I think we should ban smartphones in classrooms completely.
M: I understand your point, but they can be useful educational tools.
W: Using them for learning is fine, but most students get distracted by social media.
M: Then we should teach them how to use them responsibly, rather than just banning them.`,
                question: "남자의 의견으로 가장 적절한 것은?",
                choices: ["스마트폰을 교실에서 완전히 금지해야 한다.", "스마트폰은 교육적으로 유용하지 않다.", "학생들에게 스마트폰의 책임감 있는 사용법을 가르쳐야 한다.", "소셜 미디어 사용을 적극 권장해야 한다.", "학교 예산으로 스마트폰을 지급해야 한다."],
                answer: 2,
                explanation: "남자는 무조건적인 금지보다는 책임감 있는 사용법을 가르쳐야(teach them how to use them responsibly) 한다고 주장합니다."
            },
            // Reading Part (Shortened sample of 10, real set would have 28, mixed difficulties)
            {
                id: "m-r-3",
                level: "Intermediate",
                type: "요지 파악",
                isListening: false,
                content: "We often think that success brings happiness. But research suggests the opposite: happy people are more likely to be successful. A positive mindset increases energy, creativity, and resilience, which are all key factors for achieving goals.",
                question: "다음 글의 요지로 가장 적절한 것은?",
                choices: ["성공하면 반드시 행복해진다.", "행복이 성공의 원동력이 될 수 있다.", "창의력은 타고나는 것이다.", "목표 설정이 가장 중요하다.", "실패는 성공의 어머니이다."],
                answer: 1,
                explanation: "행복한 사람이 성공할 가능성이 높으며, 긍정적 사고가 성공의 핵심 요소를 증진시킨다는 내용입니다."
            },
            {
                id: "m-r-killer-1",
                level: "Advanced",
                type: "빈칸 추론 (3점)",
                isListening: false,
                content: "Scientific knowledge is often presented as objective and universal. However, science is also a social practice. The questions scientists ask, the methods they use, and even the interpretation of their data are influenced by the cultural and historical context in which they work. Therefore, to fully understand science, we must recognize its ________ nature.",
                question: "빈칸에 들어갈 말로 가장 적절한 것은?",
                choices: ["mathematical", "socially constructed", "purely experimental", "absolute and unchanging", "technologically driven"],
                answer: 1,
                explanation: "과학은 사회적 관행(social practice)이며 문화적/역사적 맥락의 영향을 받으므로, 과학의 '사회적으로 구성된(socially constructed)' 본질을 인식해야 합니다."
            },
            {
                id: "m-r-killer-2",
                level: "Advanced",
                type: "문장 삽입 (3점)",
                isListening: false,
                content: "There is difference between knowledge and wisdom. (A) Knowledge is the accumulation of facts and information. (B) You can acquire knowledge by reading books or attending lectures. (C) It involves the ability to apply that knowledge to make good judgments in real-life situations. (D) Wisdom comes from experience and reflection.",
                question: "다음 문장이 들어갈 위치로 가장 적절한 곳은?\n'However, wisdom is deeper than just knowing facts.'",
                choices: ["(A)", "(B)", "(C)", "(D)", "문장의 맨 뒤"],
                answer: 2,
                explanation: "(B)까지는 지식에 대한 설명이고, (C)부터는 지혜의 적용 능력에 대해 설명하고 있습니다. 따라서 역접의 연결사 However와 함께 지혜의 정의를 시작하는 문장은 (C) 앞에 들어가야 자연스럽습니다."
            },
            {
                id: "m-l-3",
                level: "Foundation",
                type: "관계 파악",
                isListening: true,
                content: `M: How would you like your hair done today?
W: Just a trim, please. And I'd like to dye it brown.
M: Sure. The dyeing process will take about an hour. Would you like a magazine?
W: Yes, thank you.`,
                question: "두 사람의 관계로 가장 적절한 것은?",
                choices: ["의사 - 환자", "미용사 - 손님", "교사 - 학생", "경찰 - 운전자", "은행원 - 고객"],
                answer: 1,
                explanation: "머리 손질(hair done), 다듬기(trim), 염색(dye) 등의 대화 내용으로 보아 미용사와 손님의 관계입니다."
            },
            {
                id: "m-l-4",
                level: "Intermediate",
                type: "이유 파악",
                isListening: true,
                content: `W: You're late again, Tom. The meeting started 20 minutes ago.
M: I'm really sorry. My car broke down on the highway.
W: Oh, that's terrible. Did you call a tow truck?
M: Yes, but it took a long time to arrive.`,
                question: "남자가 늦은 이유는?",
                choices: ["늦잠을 자서", "차가 고장 나서", "길을 잃어서", "버스를 놓쳐서", "사고가 나서"],
                answer: 1,
                explanation: "남자는 고속도로에서 차가 고장 났다(My car broke down)고 말했습니다."
            },
            {
                id: "m-r-4",
                level: "Foundation",
                type: "실용문 파악",
                isListening: false,
                content: "[Super Laptop Sale]\n- Model: X-Pro 2026\n- Original Price: $1,200\n- Sale Price: $900\n- Free wireless mouse included.\n- Sale ends this Sunday.",
                question: "광고의 내용과 일치하지 않는 것은?",
                choices: ["모델명은 X-Pro 2026이다.", "원래 가격은 1,200달러이다.", "할인 가격은 1,000달러이다.", "무선 마우스가 무료로 제공된다.", "이번 주 일요일에 세일이 끝난다."],
                answer: 2,
                explanation: "할인 가격은 $900이므로 1,000달러라는 진술은 틀렸습니다."
            },
            {
                id: "m-r-5",
                level: "Intermediate",
                type: "어법성 판단",
                isListening: false,
                content: "The man (A) [who / which] is sitting on the bench is my uncle. The book (B) [who / which] he is reading looks interesting.",
                question: "(A), (B)에 들어갈 말로 가장 적절한 것은?",
                choices: ["who - who", "which - which", "who - which", "which - who", "that - who"],
                answer: 2,
                explanation: "(A) 선행사가 사람(The man)이므로 who, (B) 선행사가 사물(The book)이므로 which가 적절합니다."
            },
            {
                id: "m-r-6",
                level: "Advanced",
                type: "빈칸 추론",
                isListening: false,
                content: "Empathy is the ability to understand and share the feelings of another. It is different from sympathy, which is feeling pity for someone's misfortune. Empathy requires us to step into someone else's shoes and experience their emotions from their ________.",
                question: "빈칸에 들어갈 말로 가장 적절한 것은?",
                choices: ["perspective", "distance", "wallet", "future", "memory"],
                answer: 0,
                explanation: "공감(Empathy)은 상대방의 입장이 되어보는 것이므로, 그들의 '관점(perspective)'에서 감정을 경험해야 합니다."
            },
            {
                id: "m-l-5",
                level: "Advanced",
                type: "담화 주체 파악",
                isListening: true,
                content: `M: Good morning, citizens. This is a special announcement from the City Council. Due to the severe storm warning, all public parks and beaches will be closed until further notice. We advise everyone to stay indoors and avoid unnecessary travel.`,
                question: "화자는 누구인가?",
                choices: ["기상 캐스터", "시의회 관계자", "경찰관", "소방관", "공원 관리인"],
                answer: 1,
                explanation: "화자는 'City Council(시의회)'에서 나온 특별 안내라고 자신을 소개했습니다."
            },
            {
                id: "m-l-6",
                level: "Intermediate",
                type: "그림 정보 파악",
                isListening: true,
                content: `W: Look at this painting I bought.
M: It's beautiful. I like the mountain in the background.
W: Yes, and the cabin by the lake looks so peaceful.
M: Is that a boat on the lake?
W: No, it's a duck.`,
                question: "대화의 내용과 일치하지 않는 그림 요소는?",
                choices: ["배경의 산", "호숫가 오두막", "호수", "호수 위의 배", "오리"],
                answer: 3,
                explanation: "남자가 배냐고 물었지만 여자는 오리(duck)라고 답했습니다. 따라서 배는 그림에 없습니다."
            },
            {
                id: "m-r-7",
                level: "Foundation",
                type: "격언 추론",
                isListening: false,
                content: "When you are angry, count to ten before you speak. If you are very angry, count to one hundred. This saying emphasizes the importance of ________.",
                question: "빈칸에 들어갈 말로 가장 적절한 것은?",
                choices: ["patience", "honesty", "speed", "money", "health"],
                answer: 0,
                explanation: "화가 날 때 숫자를 세라는 것은 '인내심(patience)'과 자제력을 강조하는 격언입니다."
            },
            {
                id: "m-r-8",
                level: "Intermediate",
                type: "글의 순서",
                isListening: false,
                content: "(A) However, paper bags also have a significant environmental impact. (B) Many people believe that using paper bags is better than using plastic ones. (C) Producing paper requires cutting down trees and using a lot of water.",
                question: "주어진 글의 올바른 순서는?",
                choices: ["(A)-(B)-(C)", "(B)-(A)-(C)", "(C)-(A)-(B)", "(B)-(C)-(A)", "(A)-(C)-(B)"],
                answer: 1,
                explanation: "통념(B: 종이가 플라스틱보다 낫다) -> 역접(A: 종이도 환경 영향 크다) -> 근거(C: 나무 벌목, 물 사용) 순서가 적절합니다."
            },
            {
                id: "m-r-9",
                level: "Advanced",
                type: "문맥상 낱말의 쓰임",
                isListening: false,
                content: "Cognitive dissonance occurs when a person holds contradictory beliefs. To reduce this discomfort, people often (A) [reject / accept] new information that conflicts with their existing beliefs. This is why it is so difficult to change someone's mind.",
                question: "(A)에 들어갈 말로 가장 적절한 것은?",
                choices: ["reject", "accept", "create", "share", "analyze"],
                answer: 0,
                explanation: "인지 부조화의 불편함을 줄이미 위해 사람들은 기존 믿음과 충돌하는 정보를 '거부(reject)'하는 경향이 있습니다."
            }
        ] as Question[]
    }
};

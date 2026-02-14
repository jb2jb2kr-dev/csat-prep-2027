import type { DailySet, Question, MockExam } from '../types';

const foundation: Question[] = [
    {
        id: '20260217-f1',
        level: 'Foundation',
        type: '듣기 - 목적 파악',
        isListening: true,
        question: '다음을 듣고, 남자가 하는 말의 목적으로 가장 적절한 것을 고르시오.',
        content: `M: Hello, students. This is your art teacher, Mr. Wilson. As you know, our school library is holding a "Design Your Own Bookmark" contest next month. We want to encourage all of you to participate. This is a great chance to show your creativity. The winning designs will be printed and given to students as gifts. The deadline for submission is next Friday. Don't miss this opportunity to share your artistic talent with everyone. We look forward to seeing your amazing works!`,
        choices: [
            '도서관 이용 시간을 안내하려고',
            '독후감 쓰기 대회를 홍보하려고',
            '책갈피 디자인 대회 참여를 독려하려고',
            '미술 수업 준비물을 공지하려고',
            '도서관 대출 규정 변경을 설명하려고'
        ],
        answer: 2,
        explanation: '남자는 학교 도서관에서 열리는 책갈피 디자인 대회(Design Your Own Bookmark contest)를 언급하며 학생들의 참여를 장려(encourage)하고 있습니다.'
    },
    {
        id: '20260217-f2',
        level: 'Foundation',
        type: '듣기 - 의견 파악',
        isListening: true,
        question: '대화를 듣고, 여자의 의견으로 가장 적절한 것을 고르시오.',
        content: `M: Hey, Sujin. You look really tired today. Are you okay?\nW: Hi, Mike. I stayed up late playing mobile games on my smartphone last night.\nM: Oh, that explains why your eyes are red.\nW: Yeah, I feel like I can't focus on anything today.\nM: You should be careful. Using a smartphone too much before bed is bad for your sleep.\nW: You're right. I think I need to reduce my screen time at night to sleep better.\nM: That's a good idea. Good sleep is essential for your health.\nW: I agree. Cutting down on smartphone use before sleeping is really important for deep rest.`,
        choices: [
            '스마트폰 게임은 스트레스 해소에 도움이 된다.',
            '잠들기 전 스마트폰 사용을 줄여야 한다.',
            '눈 건강을 위해 정기적인 검진이 필요하다.',
            '집중력 향상을 위해 충분한 휴식을 취해야 한다.',
            '아침 일찍 일어나는 습관을 길러야 한다.'
        ],
        answer: 1,
        explanation: '여자는 숙면을 위해 잠들기 전 스마트폰 사용을 줄이는 것(Cutting down on smartphone use before sleeping)이 중요하다고 말하고 있습니다.'
    },
    {
        id: '20260217-f3',
        level: 'Foundation',
        type: '읽기 - 글의 목적',
        question: '다음 글의 목적으로 가장 적절한 것은?',
        content: `Dear Parents,\n\nI am writing to inform you about the upcoming "Eco-Friendly Market" at our school. This event will be held on September 20th in the school gym. The purpose of this market is to teach students the value of recycling and sharing. Students can bring used books, toys, and clothes to sell or exchange with friends. All the money raised from the market will be donated to a local animal shelter. We hope you and your children will join us for this meaningful event.\n\nSincerely,\nPrincipal Olivia Baker`,
        choices: [
            '학교 체육관 보수 공사를 안내하려고',
            '친환경 장터 행사 개최를 알리려고',
            '지역 동물 보호소 봉사활동을 모집하려고',
            '재활용품 분리배출 방법을 설명하려고',
            '자선 바자회 수익금 사용 내역을 보고하려고'
        ],
        answer: 1,
        explanation: "글쓴이는 학교에서 열리는 '친환경 장터(Eco-Friendly Market)'의 개최 소식을 알리고 참여를 독려하고 있습니다."
    },
    {
        id: '20260217-f4',
        level: 'Foundation',
        type: '읽기 - 심경 파악',
        question: '다음 글에 드러난 Dave의 심경 변화로 가장 적절한 것은?',
        content: `Dave stood behind the curtain, waiting for his turn to play the piano. His hands were sweating, and his heart was beating very fast. He worried that he might forget the notes he had practiced so hard. "What if I make a mistake?" he thought. Finally, his name was called. He walked onto the stage and sat down. As he started to play, the melody flowed smoothly from his fingers. The audience listened quietly. When he finished the last note, everyone clapped loudly. Dave stood up and smiled brightly, feeling a warm sense of pride and relief.`,
        choices: [
            'bored → excited',
            'nervous → satisfied',
            'angry → calm',
            'happy → sad',
            'confident → disappointed'
        ],
        answer: 1,
        explanation: 'Dave는 무대에 오르기 전 긴장(nervous)했으나, 연주를 성공적으로 마친 후 만족감과 안도감(satisfied/relieved)을 느꼈습니다.'
    },
    {
        id: '20260217-f5',
        level: 'Foundation',
        type: '읽기 - 요지 파악',
        question: '다음 글의 요지로 가장 적절한 것은?',
        content: `Many people think that to be healthy, they must go to the gym every day and exercise for a long time. However, this is not always true. You can stay healthy by making small changes in your daily life. For example, taking the stairs instead of the elevator is a good way to exercise. Walking to a nearby store instead of driving helps your body too. These small habits add up and have a positive effect on your health. Therefore, incorporating simple physical activities into your routine is an effective way to maintain your health.`,
        choices: [
            '체중 감량을 위해서는 식단 조절이 필수적이다.',
            '일상 속의 작은 활동들이 건강 유지에 도움이 된다.',
            '헬스장에서의 고강도 운동이 가장 효과적이다.',
            '운동 전에는 반드시 준비 운동을 해야 한다.',
            '건강을 위해 엘리베이터 설치를 줄여야 한다.'
        ],
        answer: 1,
        explanation: '이 글은 헬스장에서의 고강도 운동이 아니더라도 일상생활 속의 작은 습관(small habits)들이 건강에 큰 도움이 된다고 주장하고 있습니다.'
    }
];

const intermediate: Question[] = [
    {
        id: '20260217-i1',
        level: 'Intermediate',
        type: '듣기 - 그림 내용 불일치',
        isListening: true,
        question: '대화를 듣고, 그림에서 대화의 내용과 일치하지 않는 것을 고르시오.',
        content: `M: Ms. Baker, look at this photo of the new student lounge. We finished decorating it yesterday.\nW: Wow, it looks very cozy, Mr. Green. I like the striped curtains on the window.\nM: Thanks. They make the room look brighter. Do you see the round clock on the wall?\nW: Yes, it’s simple but modern. I also like the two potted plants in the corner.\nM: I brought them from home. And we put a rectangular table in the center for group discussions.\nW: That’s perfect. Oh, and the lamp next to the sofa looks very stylish.\nM: I’m glad you like it. Students will love this space.`,
        choices: [
            '줄무늬 커튼',
            '원형 시계',
            '두 개의 화분',
            '원형 탁자',
            '소파 옆의 램프'
        ],
        answer: 3,
        explanation: "대화에서 남자는 '직사각형 탁자(rectangular table)'를 두었다고 했으나, 선택지 ④는 '원형 탁자'라고 기술하고 있습니다."
    },
    {
        id: '20260217-i2',
        level: 'Intermediate',
        type: '읽기 - 주제 파악',
        question: '다음 글의 주제로 가장 적절한 것은?',
        content: `In the past, maps were drawn by explorers who traveled to new lands. They recorded mountains, rivers, and roads on paper. Today, mapmaking has changed completely. Satellites orbiting the Earth send pictures and data to computers. This technology allows us to make digital maps that are much more accurate than paper maps. We can check traffic conditions in real-time and even see what a street looks like without going there. Moreover, anyone with a smartphone can access these maps anywhere. This shift from hand-drawn maps to digital mapping systems has revolutionized how we navigate the world.`,
        choices: [
            'the history of space exploration technology',
            'reasons why paper maps are still popular',
            'how digital technology changed mapmaking',
            'the difficulties of traveling to new lands',
            'ways to become a professional explorer'
        ],
        answer: 2,
        explanation: '이 글은 과거의 수작업 지도에서 위성과 디지털 기술을 활용한 현대 지도로의 변화와 그 영향을 다루고 있습니다.'
    },
    {
        id: '20260217-i3',
        level: 'Intermediate',
        type: '읽기 - 제목 파악',
        question: '다음 글의 제목으로 가장 적절한 것은?',
        content: `Many people think that cactus plants only grow in hot, dry deserts. While it is true that many cacti thrive in such environments, some species can actually survive in cold climates. For example, the Prickly Pear cactus can be found in parts of Canada where winters are freezing. These plants have a special way to protect themselves. When the temperature drops, they reduce the amount of water inside their cells. This prevents the water from freezing and damaging the plant. So, the next time you think of a cactus, remember that they are not just desert plants but can be tough survivors in the snow as well.`,
        choices: [
            'Cacti: Plants That Can Survive Cold Winters',
            'Why Cacti Need Water in the Desert',
            'The Most Popular Plants in Canada',
            'How Global Warming Affects Deserts',
            'Various Ways to Grow Plants Indoors'
        ],
        answer: 0,
        explanation: '선인장이 덥고 건조한 곳뿐만 아니라 추운 기후에서도 살아남을 수 있다는 사실과 그 생존 방식을 설명하고 있습니다.'
    },
    {
        id: '20260217-i4',
        level: 'Intermediate',
        type: '읽기 - 내용 불일치 (안내문)',
        question: '2026 K-Pop Dance Workshop에 관한 다음 안내문의 내용과 일치하지 않는 것은?',
        content: `2026 K-Pop Dance Workshop\n\nDo you love K-Pop? Come and learn the latest dance moves from professional dancers!\n\n* Date: Saturday, March 14, 2026\n* Time: 2:00 p.m. - 5:00 p.m.\n* Location: Star Community Center (Room 301)\n* Participants: Anyone aged 13 to 19\n* Fee: $20 per person (Includes a bottle of water and a snack)\n* Registration: Sign up at www.kpopdance2026.com. Registration closes on March 10.\n* Note: Please wear comfortable shoes and clothes.`,
        choices: [
            '3월 14일 토요일에 열린다.',
            '전문 댄서들에게 최신 춤 동작을 배울 수 있다.',
            '참가비에 물과 간식이 포함되어 있다.',
            '20세 이상의 성인도 참가할 수 있다.',
            '등록 마감일은 3월 10일이다.'
        ],
        answer: 3,
        explanation: '참가 대상은 13세에서 19세(Anyone aged 13 to 19)이므로 성인은 참가할 수 없습니다.'
    },
    {
        id: '20260217-i5',
        level: 'Intermediate',
        type: '읽기 - 어휘 적절성 파악',
        question: '다음 글의 밑줄 친 부분 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?',
        content: `Color affects our appetite more than we realize. Usually, warm colors like red, orange, and yellow stimulate the brain and make us feel hungry. That is why many fast-food restaurants use these colors in their logos and interior design to encourage customers to eat more. On the other hand, blue is a color that rarely occurs naturally in food. Because of this, our ancestors often considered blue objects to be spoiled or poisonous. As a result, the color blue tends to decrease our appetite. If you are on a diet, putting a blue light in your refrigerator or using blue plates can be helpful. It makes the food look less attractive, so you might eat less. Therefore, understanding color psychology can be a useful tool for ignoring your eating habits.`,
        choices: [
            'more',
            'decrease',
            'helpful',
            'less',
            'ignoring'
        ],
        answer: 4,
        explanation: "색채 심리학은 식습관을 '무시하는(ignoring)' 것이 아니라 '관리하거나 조절하는' 도구로 사용되어야 합니다."
    }
];

const advanced: Question[] = [
    {
        id: '20260217-a1',
        level: 'Advanced',
        type: '어법 정확성 파악',
        question: '다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?',
        content: `The concept of "predictive coding" in neuroscience suggests that the brain is not merely a passive receiver of sensory information but an active generator of predictions. Instead of waiting to process external stimuli, the brain constantly anticipates what will happen next based on past experiences. When the incoming sensory data matches the prediction, the brain works efficiently, conserving energy. However, when there is a mismatch—a "prediction error"—the brain must update its internal models. This process is driven by the discrepancy between expectation and reality. Interestingly, the cognitive effort required to resolve these errors is essentially what we perceive as "learning." The predictions are sent down from higher cognitive areas to lower sensory areas, while the prediction errors are sent up, altering the model for future use. This hierarchical exchange explains why we often overlook familiar details; our brains have already successfully predicted them, rendering deep processing unnecessarily.`,
        choices: [
            'what',
            'driven',
            'is',
            'altering',
            'unnecessarily'
        ],
        answer: 4,
        explanation: 'render는 5형식 동사이므로 목적격 보어 자리에 형용사인 unnecessary가 와야 합니다.'
    },
    {
        id: '20260217-a2',
        level: 'Advanced',
        type: '함축 의미 추론',
        question: '밑줄 친 "leasing the library"가 다음 글에서 의미하는 바로 가장 적절한 것은?',
        content: `We live in a community of knowledge, yet we suffer from an illusion of explanatory depth. We fail to distinguish between what is in our own heads and what is in the heads of others. We think we know how a zipper works, or how a flush toilet operates, but when asked to explain the mechanisms in detail, most of us struggle. This is because we confuse the accessibility of knowledge with the possession of it. Just because the information is readily available in our environment—stored in books, the internet, or the minds of experts—we feel a false sense of intellectual mastery. We rely heavily on the division of cognitive labor, seamlessly offloading the burden of understanding to the collective. In essence, we are leasing the library, mistakenly believing that having a library card is the same as having memorized every book on the shelves.`,
        choices: [
            'paying a fee to access premium information services',
            'confusing collective knowledge with personal understanding',
            'accumulating useless facts without practical application',
            'sharing intellectual resources to solve complex problems',
            'relying on temporary memory rather than long-term storage'
        ],
        answer: 1,
        explanation: '집단 지성에 접근할 수 있는 권한을 본인의 지식 소유 및 이해와 혼동한다는 의미입니다.'
    },
    {
        id: '20260217-a3',
        level: 'Advanced',
        type: '빈칸 추론',
        question: '다음 빈칸에 들어갈 말로 가장 적절한 것은?',
        content: `In the realm of environmental economics, the "Jevons Paradox" presents a counterintuitive phenomenon regarding resource efficiency. One might assume that increasing the efficiency with which a resource is used would naturally lead to a decrease in the consumption of that resource. However, William Stanley Jevons observed that technological improvements that increase the efficiency of coal use actually led to increased consumption of coal in a wide range of industries. The logic is straightforward: efficiency reduces the cost of using a resource. As the cost drops, the resource becomes economically viable for new applications and more intensive use in existing ones. Consequently, the savings theoretically gained from efficiency are often negated by the expansion of scale. Therefore, policies solely focused on technological efficiency without addressing demand management may paradoxically result in __________.\n\n`,
        choices: [
            'a rapid depletion of the resource they intend to conserve',
            'a significant reduction in the overall operational costs',
            'a complete shift towards renewable energy sources',
            'the stagnation of technological innovation in the industry',
            'the decoupling of economic growth from resource usage'
        ],
        answer: 0,
        explanation: '효율성이 높아지면 오히려 비용이 낮아져 자원 소비가 가속화되고 고갈될 수 있다는 제본스의 역설을 다루고 있습니다.'
    },
    {
        id: '20260217-a4',
        level: 'Advanced',
        type: '글의 순서 파악',
        question: '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?',
        content: `Algorithm-driven decision-making systems are often touted as objective and neutral, presumably free from the emotional biases that plague human judgment.\n\n(A) For instance, if an AI is trained on historical hiring data where women were systematically disadvantaged, the algorithm will identify "being male" as a predictor of success and downgrade female candidates. The machine is not prejudiced in a human sense, but it is a faithful mirror of a prejudiced reality.\n(B) However, this presumption of neutrality is dangerously misleading. Algorithms learn from data, and data is nothing more than a quantified history of human behavior. If the history itself is marred by inequality or bias, the algorithm will not only learn these patterns but also amplify them.\n(C) Consequently, treating algorithmic output as an undisputable "mathematical truth" allows discrimination to persist under the guise of scientific objectivity. We must recognize that these mathematical models are opinions embedded in code, not impartial arbiters of truth.`,
        choices: [
            '(A) - (C) - (B)',
            '(B) - (A) - (C)',
            '(B) - (C) - (A)',
            '(C) - (A) - (B)',
            '(C) - (B) - (A)'
        ],
        answer: 1,
        explanation: '알고리즘 객관성 신화(주어진 글) -> 그러나 데이터는 편향됨(B) -> 구체적 예시(A) -> 과학적 객관성으로 위장된 차별 지속(C) 순서가 적절합니다.'
    },
    {
        id: '20260217-a5',
        level: 'Advanced',
        type: '문장 삽입',
        question: '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳은?',
        content: `주어진 문장: Instead, it requires the active suppression of the default mode network, a brain system associated with mind-wandering and self-referential thought.\n\nFlow is a state of deep absorption in an activity where time seems to vanish and the self is lost. ( ① ) Athletes call it being "in the zone," and artists refer to it as the height of creative inspiration. ( ② ) Traditionally, psychologists assumed that this state was achieved through hyper-focus, requiring an intense upregulation of the brain's executive control centers to maintain attention. ( ③ ) However, recent neuroimaging studies suggest a different mechanism. ( ④ ) It turns out that entering a flow state does not strictly depend on ramping up cognitive control to the maximum. ( ⑤ ) This deactivation allows for a release from the conscious "self," enabling automatic, fluid performance without the interference of self-criticism or hesitation.`,
        choices: [
            '①',
            '②',
            '③',
            '④',
            '⑤'
        ],
        answer: 4,
        explanation: "몰입이 인지적 통제 강화가 아닌 비활성화(suppression)에 근거한다는 흐름이므로, 'not strictly depend on ramping up' 뒤인 ⑤번이 적절합니다."
    },
    {
        id: '20260217-a6',
        level: 'Advanced',
        type: 'Prime Killer - 빈칸 추론',
        question: '다음 빈칸에 들어갈 말로 가장 적절한 것은?',
        content: `The debate between presentism and eternalism in the philosophy of time hinges on the ontological status of the future and the past. Presentism asserts that only the "now" is real, while eternalism posits a "block universe" where past, present, and future exist simultaneously in a four-dimensional spacetime manifold. The challenge for eternalism is explaining our visceral experience of the "flow" of time—the feeling that the future is an open realm of possibility becoming a fixed past. Modern physics, specifically the Second Law of Thermodynamics, offers a potential reconciliation. The increase of entropy creates an asymmetry in time, giving it a direction. However, if the block universe view is correct, this "flow" is not a fundamental feature of reality but a perspectival illusion generated by our consciousness crawling along the timeline. Our brain, an entropy-processing machine, relies on memories (traces of low entropy) to anticipate the future (high entropy). Thus, the sensation of "becoming" is not the universe unfolding, but rather __________.\n\n`,
        choices: [
            'a thermodynamic artifact of our cognitive access to the static temporal structure',
            'the fundamental mechanism by which the universe expands into new dimensions',
            'a proof that the future is ontologically distinct from the fixed past',
            'the objective accumulation of historical events within the spacetime continuum',
            'a clear indicator that human consciousness exists outside the laws of physics'
        ],
        answer: 0,
        explanation: "블록 우주론 관점에서 시간의 흐름(Becoming)은 객관적 실재가 아니라 인간 뇌의 엔트로피 처리 과정에서 발생하는 '인지적 산물(artifact)'임을 추론해야 하는 고난도 문항입니다."
    }
];

const mockExam: MockExam = {
    id: '20260217-m',
    title: '2026-02-17 실전 모의고사',
    timeLimitMinutes: 10,
    questions: [
        {
            id: '20260217-m1',
            level: 'Advanced',
            type: '제목 파악',
            question: '다음 글의 제목으로 가장 적절한 것은?',
            content: `The narrative that algorithms are neutral and objective decision-makers is a pervasive myth. In reality, algorithms are fed data that reflects the historical biases and inequalities of the society that produced them. When an algorithm is tasked with predicting future outcomes—such as loan defaults or criminal recidivism—it relies on patterns found in past data. If that past data contains discriminatory practices, the algorithm will inevitably reproduce those prejudices, often amplifying them under the guise of computational objectivity. Moreover, the "black box" nature of deep learning models makes it difficult to pinpoint exactly how a decision was reached, shielding these biased outcomes from scrutiny. Therefore, without rigorous oversight and ethical auditing, the deployment of automated systems can serve to entrench, rather than eliminate, existing social disparities.`,
            choices: [
                'The Myth of Neutrality: How Algorithms Perpetuate Social Bias',
                'Why Computational Objectivity Is Essential for Future Justice',
                'The Black Box: Unlocking the Secrets of Deep Learning',
                'Historical Data: The Most Reliable Source for Predictions',
                'Automated Systems as a Solution to Human Discrimination'
            ],
            answer: 0,
            explanation: '알고리즘의 중립성 신화를 비판하며 데이터에 내재된 편향이 재생산되는 현상을 제목으로 표현했습니다.'
        },
        {
            id: '20260217-m2',
            level: 'Advanced',
            type: '어법상 틀린 것 파악',
            question: '다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?',
            content: `The concept of "desirable difficulty" suggests that learning is most effective when it requires a certain degree of effort. Rereading a textbook might feel fluent and easy, giving the illusion of mastery, but this fluency can be deceptive. In contrast, testing yourself on the material requires far more mental effort. When you struggle to retrieve an idea from memory, you strengthen the neural pathways associated with that concept, making it easier to recall in the future. Psychologists have found that students who study by taking practice tests outperform those who spend the same amount of time merely reviewing their notes. This phenomenon, known as the "testing effect," demonstrates that the act of retrieval is not just a neutral assessment of what you know, but a powerful tool what modifies the memory itself. Thus, embracing the struggle of retrieval, rather than avoiding it, is key to achieving long-term retention.`,
            choices: [
                'requires',
                'easier',
                'reviewing',
                'what',
                'achieving'
            ],
            answer: 3,
            explanation: '선행사 a powerful tool이 있으므로 what을 관계대명사 that이나 which로 고쳐야 합니다.'
        },
        {
            id: '20260217-m3',
            level: 'Advanced',
            type: '어휘 적절성 파악',
            question: '다음 글의 밑줄 친 부분 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?',
            content: `In the ecosystem, efficiency is often achieved through specialization. Just as a factory assembly line becomes more efficient when each worker focuses on a single task, ecosystems benefit when species occupy distinct niches. This evolutionary pressure encourages organisms to diverge in their traits and behaviors to minimize competition. For instance, Darwin’s finches evolved different beak shapes to exploit various food sources, thereby reducing direct conflict over resources. However, this high degree of specialization comes with a cost. While it maximizes efficiency under stable conditions, it makes species vulnerable to rapid environmental changes. A generalist species, which can thrive on a variety of foods and habitats, is often more resilient when faced with disruption. Therefore, in a volatile environment, the very traits that ensure peak performance in stable times can become a guarantee for survival when the ecosystem shifts dramatically.`,
            choices: [
                'diverge',
                'reducing',
                'vulnerable',
                'resilient',
                'guarantee'
            ],
            answer: 4,
            explanation: "환경이 급변할 때 전문화는 생존을 위한 '보장(guarantee)'이 아니라 유리하지 않은 점이나 '약점(liability)'이 됩니다."
        },
        {
            id: '20260217-m4',
            level: 'Advanced',
            type: '빈칸 추론',
            question: '다음 빈칸에 들어갈 말로 가장 적절한 것은?',
            content: `Ideally, science is a self-correcting process. New evidence overturns old theories, and the scientific community moves closer to the truth. However, the human element of science introduces a complication: the attachment to established ideas. Renowned scientists often build their careers on specific theories, and when contradictory evidence emerges, they may subconsciously resist it to protect their professional legacy. This phenomenon is famously summarized by the physicist Max Planck, who noted that a new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it. In other words, scientific progress is sometimes slowed not by a lack of data, but by the ______________ of the human mind.`,
            choices: [
                'insatiable curiosity',
                'persistent inertia',
                'objective neutrality',
                'rational flexibility',
                'creative intuition'
            ],
            answer: 1,
            explanation: '기존의 이론이나 상태를 유지하려는 경향인 관성(inertia) 때문에 과학의 진보가 늦어질 수 있다는 내용입니다.'
        },
        {
            id: '20260217-m5',
            level: 'Advanced',
            type: '요약문 완성',
            question: '다음 글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
            content: `Consider the "fixed pie" bias in negotiations. This is the belief that the situation is a zero-sum game: whatever one side wins, the other side must lose. For example, if two people are negotiating over a salary, the employee might assume that a higher salary for them means a direct loss for the employer. However, this perspective ignores the possibility of creating value through trade-offs. The employer might be willing to pay a higher salary if the employee agrees to a longer contract term or takes on additional responsibilities. By expanding the scope of the negotiation to include multiple issues, both parties can gain. The key is to move beyond the assumption that interests are perfectly opposed and to search for complementary interests where a concession on an issue of low value to one side yields a high value to the other.\n\n⇩\n\nNegotiators often fall into the trap of viewing the available resources as (A) __________, failing to recognize that integrating diverse interests can lead to a mutually (B) __________ outcome.`,
            choices: [
                '(A) flexible …… (B) competitive',
                '(A) limited …… (B) beneficial',
                '(A) shared …… (B) neutral',
                '(A) fixed …… (B) harmful',
                '(A) abundant …… (B) exclusive'
            ],
            answer: 1,
            explanation: '자원이 제한적(limited)이라는 편향에서 벗어나 이해관계를 통합하면 상호 이로운(beneficial) 결과를 얻을 수 있다는 요약문이 적절합니다.'
        }
    ]
};

export const daily20260217: DailySet = {
    foundation,
    intermediate,
    advanced,
    mock: mockExam
};

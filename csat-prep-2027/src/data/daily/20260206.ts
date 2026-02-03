import type { Question } from '../questions';

const foundation: Question[] = [
    {
        id: "d-20260206-f-1",
        level: "Foundation",
        type: "Reading",
        isListening: false,
        content: "In 2026, a new type of technology called 'Agentic AI' is becoming popular in businesses. Traditional AI tools, like chatbots, only wait for a human to give them a command. However, Agentic AI is different. It can think, plan, and act on its own to finish complex tasks. For example, it can plan a full travel schedule or manage a project without constant help from a person. Experts say this technology will make companies more efficient because the software can make decisions independently.",
        question: "According to the text, what is the main difference between Agentic AI and traditional AI?",
        choices: [
            "Agentic AI is cheaper to build.",
            "Agentic AI can act independently.",
            "Agentic AI requires more human commands.",
            "Agentic AI is only used for travel planning."
        ],
        answer: 1,
        explanation: "The text states that unlike traditional AI which waits for commands, Agentic AI 'can think, plan, and act on its own' and make decisions independently."
    },
    {
        id: "d-20260206-f-2",
        level: "Foundation",
        type: "Reading",
        isListening: false,
        content: "Many companies are changing how they sell products in 2026. Instead of selling an item to a customer, they use a model called 'Product-as-a-Service.' In this model, the customer pays a monthly fee to use the product, but the company still owns it. For example, a business might pay for 'lighting as a service' rather than buying light bulbs. When the product breaks, the company repairs or replaces it. This helps the circular economy because products are used for a longer time and are not thrown away quickly.",
        question: "What is a major benefit of the 'Product-as-a-Service' model mentioned in the text?",
        choices: [
            "Customers can own more products.",
            "Products are thrown away faster.",
            "Products are repaired and used longer.",
            "It is cheaper to buy light bulbs."
        ],
        answer: 2,
        explanation: "The text says 'When the product breaks, the company repairs or replaces it... products are used for a longer time'."
    },
    {
        id: "d-20260206-f-3",
        level: "Foundation",
        type: "Reading",
        isListening: false,
        content: "In 2026, the energy landscape presents a paradox. While solar and wind deployment reached all-time highs in the previous year, global fossil fuel demand has rebounded faster than expected. This resurgence is largely driven by the explosive power consumption of AI and data centers, which S&P Global notes is reviving legacy gas and coal plants. Additionally, 2026 is predicted to see the first year-over-year decline in global solar additions, primarily due to a slowdown in China.",
        question: "According to the text, what specific factor is complicating the transition to renewable energy in 2026 despite record solar and wind deployments?",
        choices: [
            "A worldwide ban on the importation of solar panels",
            "The rapid increase in power demand driven by AI and data centers",
            "A complete collapse of the global wind energy market",
            "The discontinuation of electric vehicle manufacturing in China"
        ],
        answer: 1,
        explanation: "The text explicitly links the resurgence in fossil fuel demand to 'the explosive power consumption of AI and data centers'."
    },
    {
        id: "d-20260206-f-4",
        level: "Foundation",
        type: "Reading",
        isListening: false,
        content: "The rapid expansion of AI-driven data centers in 2026 is putting pressure on natural resources. While these centers power advanced computing, their electricity consumption is projected to nearly double. Additionally, water use for cooling these facilities is expected to follow a similar trend, creating stress in regions where water is already scarce. Managing water use is now a top priority for the technology industry.",
        question: "Which resource challenge related to data centers is highlighted in the passage?",
        choices: [
            "Increased consumption of water for cooling systems",
            "A shortage of skilled workers to build them",
            "The lack of physical space to build new servers",
            "Excessive noise pollution affecting local communities"
        ],
        answer: 0,
        explanation: "The text states that a major problem is their 'water use for cooling... creating stress in regions where water is already scarce'."
    },
    {
        id: "d-20260206-f-5",
        level: "Foundation",
        type: "Reading",
        isListening: false,
        content: "In 2026, fusion energy is shifting from a science fiction promise to a strategic reality. With recent breakthroughs, governments and corporations are professionalizing their fusion roadmaps. While it may not yet outpace traditional energy sources immediately, the focus has moved toward investing in and positioning around its potential as a future source of abundant clean power.",
        question: "What is the main status of fusion energy in 2026 according to the text?",
        choices: [
            "It has been proven impossible and funding has stopped",
            "It is fully replacing all nuclear fission plants immediately",
            "It is transitioning from a theoretical concept to a strategic investment reality",
            "It is currently generating 50% of the world's electricity"
        ],
        answer: 2,
        explanation: "The text states 'fusion energy is shifting from a science fiction promise to a strategic reality' and attracting investment."
    }
];

const intermediate: Question[] = [
    {
        id: "d-20260206-i-1",
        level: "Intermediate",
        type: "Reading",
        isListening: false,
        content: "In 2026, the technological landscape has evolved from passive tools to 'agentic AI' systems capable of autonomously reasoning, planning, and executing complex workflows. This shift compels enterprises to modernize infrastructure beyond traditional cloud approaches to handle real-time decision-making.",
        question: "Based on this trend, what distinguishes agentic AI from previous generations of artificial intelligence?",
        choices: [
            "It relies exclusively on manual data entry for every task.",
            "It functions solely as a passive database for information retrieval.",
            "It can autonomously plan and act to achieve complex goals.",
            "It is designed primarily to reduce internet bandwidth usage."
        ],
        answer: 2,
        explanation: "Agentic AI is defined by its capability to 'autonomously reason, plan, and execute complex workflows'."
    },
    {
        id: "d-20260206-i-2",
        level: "Intermediate",
        type: "Reading",
        isListening: false,
        content: "The implementation of the Carbon Border Adjustment Mechanism (CBAM) in 2026 requires importers of goods like steel and cement to purchase certificates reflecting embedded emissions. This policy aims to prevent 'carbon leakage' by ensuring companies cannot simply relocate to countries with laxer climate rules.",
        question: "What is a secondary economic effect of this regulation?",
        choices: [
            "It incentivizes the adoption of circular material strategies to lower carbon costs.",
            "It completely bans the importation of all fossil-fuel-based products.",
            "It eliminates the need for digital product passports in the EU.",
            "It shifts all manufacturing strictly to developing nations."
        ],
        answer: 0,
        explanation: "CBAM encourages companies to lower embedded emissions, thus incentivizing 'circular material strategies' to reduce carbon costs."
    },
    {
        id: "d-20260206-i-3",
        level: "Intermediate",
        type: "Reading",
        isListening: false,
        content: "By 2026, biotechnology has advanced to the point where CRISPR-based systems are used to correct genetic mutations in living human cells, addressing the root causes of conditions like sickle cell disease and cystic fibrosis. This moves medicine beyond symptom management.",
        question: "What is the primary significance of this therapeutic shift?",
        choices: [
            "It focuses on cosmetic genetic enhancements rather than medical cures.",
            "It enables the potential eradication of previously permanent inherited disorders.",
            "It replaces the need for all traditional pharmaceutical drugs.",
            "It relies exclusively on robotic surgery for administration."
        ],
        answer: 1,
        explanation: "The text highlights the ability to 'address root causes' and potentially 'eradicate previously permanent inherited disorders'."
    },
    {
        id: "d-20260206-i-4",
        level: "Intermediate",
        type: "Reading",
        isListening: false,
        content: "Water scarcity has transitioned from an environmental concern to a critical business risk in 2026, driving a surge in 'water tech' investments such as smart leak detection and low-energy desalination. This trend is driven by the realization that water security is essential for operational continuity.",
        question: "Which factor is accelerating this investment?",
        choices: [
            "The global reduction in agricultural water consumption.",
            "The need to mitigate supply chain risks in water-stressed regions.",
            "The complete privatization of all global water utilities.",
            "The decline in data center energy and cooling requirements."
        ],
        answer: 1,
        explanation: "Investment is driven by the need for 'operational continuity' and mitigating risks, i.e., supply chain risks in water-stressed regions."
    },
    {
        id: "d-20260206-i-5",
        level: "Intermediate",
        type: "Reading",
        isListening: false,
        content: "In 2026, the healthcare sector is utilizing AI-driven diagnostics to analyze patient history, imaging, and lab results with high accuracy. These systems identify anomalies, such as early-stage cancers, before visible symptoms manifest.",
        question: "What is the core benefit of this integration into modern medicine?",
        choices: [
            "It automates the billing process to increase hospital revenue.",
            "It replaces the role of human doctors in making final decisions.",
            "It shifts healthcare from a reactive to a proactive, preventative model.",
            "It restricts medical data access to ensure patient privacy."
        ],
        answer: 2,
        explanation: "Identifying anomalies 'before visible symptoms manifest' enables a shift to a 'proactive, preventative model'."
    }
];

const advanced: Question[] = [
    {
        id: "d-20260206-a-1",
        level: "Advanced",
        type: "Reading",
        isListening: false,
        content: "In 2026, the circular economy has ceased to be a mere aspirational framework, hardening instead into an operational reality governed by stringent mandates like the Packaging and Packaging Waste Regulation (PPWR). What distinguishes this regulatory landscape is not merely the sheer volume of statutes but their __________. Policies are now engineered to function cohesively, utilizing shared data architectures and lifecycle traceability—epitomized by Digital Product Passports—to enforce tangible outcomes.",
        question: "Choose the best answer for the blank.",
        choices: [
            "punitive enforcement mechanisms regarding non-compliance",
            "interconnected and synergistic nature across supply chains",
            "exclusive focus on voluntary corporate disclosures",
            "heavy reliance on legacy manufacturing protocols",
            "limited applicability to non-European markets"
        ],
        answer: 1,
        explanation: "The text mentions policies are 'engineered to function cohesively' and utilize 'shared data architectures,' pointing to their 'interconnected and synergistic nature'."
    },
    {
        id: "d-20260206-a-2",
        level: "Advanced",
        type: "Reading",
        isListening: false,
        content: "Deloitte emphasizes the convergence of AI and robotics, a trend called 'AI goes physical.' This development extends intelligence into the real world, powering autonomous machines such as industrial robots, warehouse fleets, and smart manufacturing equipment. By combining AI with physical systems, organisations can improve operational efficiency, reduce human error, and optimise supply chain processes.",
        question: "How does the trend of 'AI goes physical' differ from traditional digital AI applications?",
        choices: [
            "It focuses on replacing human decision-making solely in administrative workflows.",
            "It extends intelligence into autonomous machines like industrial robots.",
            "It relies exclusively on satellite-based networks for global logistics.",
            "It prioritizes generative AI for creative design tasks."
        ],
        answer: 1,
        explanation: "The text states it 'extends intelligence into the real world, powering autonomous machines... moving beyond simple automation'."
    },
    {
        id: "d-20260206-a-3",
        level: "Advanced",
        type: "Reading",
        isListening: false,
        content: "In 2026, the global sustainability narrative is defined by a distinct tension between immediate exigencies—such as energy security and the voracious power demands of AI infrastructure—and long-term climate imperatives. Analysts note that multilateralism is increasingly ceding ground to fragmentation, forcing businesses to navigate a 'multiregional' policy landscape. In this context, the strategic priority for global corporations shifts from pursuing a singular, universal sustainability standard to __________.",
        question: "Choose the best answer for the blank.",
        choices: [
            "abandoning environmental commitments to maximize short-term profit",
            "crafting durable strategies that can withstand geopolitical divergence",
            "relying exclusively on international treaties for regulatory guidance",
            "eliminating regional supply chains to centralize production",
            "prioritizing theoretical climate models over operational realities"
        ],
        answer: 1,
        explanation: "Given the 'fragmentation' and 'multiregional' landscape, businesses must craft 'durable strategies that can withstand geopolitical divergence'."
    },
    {
        id: "d-20260206-a-4",
        level: "Advanced",
        type: "Reading",
        isListening: false,
        content: "In 2026, fusion will shift from sci-fi promise to strategic reality. Yet progress won’t be fast enough to outpace the near-term rise of advanced fission and SMRs, which will increasingly serve surging demand from data centers. The real story won’t be 'fusion vs. fission,' but how the world finances the coming clean-energy megacycle.",
        question: "While fusion energy gains traction, which technology is expected to meet the immediate surging demand from data centers?",
        choices: [
            "Green hydrogen export infrastructure.",
            "Utility-scale solar with battery storage.",
            "Advanced fission and SMRs.",
            "Plant cell cultivation."
        ],
        answer: 2,
        explanation: "The passage states that 'advanced fission and SMRs... will increasingly serve surging demand from data centers'."
    },
    {
        id: "d-20260206-a-5",
        level: "Advanced",
        type: "Reading",
        isListening: false,
        content: "With the rise of quantum computing capability in 2026, traditional encryption methods are at risk. In response, 'Confidential Computing' has emerged as a critical trend. This technology focuses on protecting data in use, isolating it within a secure enclave during processing, ensuring that even if the host environment is compromised, the data remains encrypted and inaccessible.",
        question: "What specific security gap does Confidential Computing address?",
        choices: [
            "It secures data specifically while it is being processed in memory.",
            "It prevents data from being deleted by unauthorized administrators.",
            "It encrypts data only when it is stored on a hard drive.",
            "It automatically generates quantum-resistant passwords for users."
        ],
        answer: 0,
        explanation: "Confidential Computing protects 'data in use' by 'isolating it within a secure enclave during processing'."
    },
    {
        id: "d-20260206-prime",
        level: "Advanced",
        type: "Reading",
        isListening: false,
        content: "The 2026 biotechnology landscape is characterized by the 'refinement of gene editing,' where CRISPR systems can now correct mutations in living cells. However, this precipitates profound ethical dilemmas. As noted in the sources, innovations compel society to ask: 'Who owns your genetic data?' and 'Can AI make life-or-death decisions?' The convergence of these capabilities with accessibility challenges necessitates strict regulatory frameworks to prevent the exacerbation of societal inequities while deploying therapies for conditions like sickle cell disease.",
        question: "Based on the ethical and regulatory paradoxes described, which outcome represents the most significant systemic risk if 'accessibility challenges' remain unaddressed?",
        choices: [
            "The immediate obsolescence of traditional pharmaceutical manufacturing.",
            "The stagnation of technological innovation due to lack of capital.",
            "The stratification of healthcare where life-altering therapies become exclusive to the wealthy.",
            "The global democratization of gene editing allowing unregulated experimentation."
        ],
        answer: 2,
        explanation: "The text warns against 'exacerbation of societal inequities,' implying a risk of 'stratification of healthcare' where therapies become exclusive."
    }
];

const mockExamQuestions: Question[] = [
    {
        id: "d-20260206-m-1",
        level: "Foundation",
        type: "Listening",
        isListening: true,
        content: `M: In the year 2026, wearable technology has advanced significantly beyond simple fitness tracking. Modern devices, such as smartwatches and implantable sensors, now serve as powerful medical tools. They are capable of tracking heart rhythms, monitoring glucose levels continuously, and detecting early signs of disease. Furthermore, these wearables can alert doctors in real-time if they detect anomalies, allowing for better management of chronic conditions without constant hospital visits.`,
        question: "According to the speaker, what is a key new function of wearable devices in 2026?",
        choices: [
            "Replacing the need for all doctors",
            "Tracking heart rhythms and monitoring glucose levels",
            "Manufacturing medicine inside the body",
            "Functioning only when inside a hospital"
        ],
        answer: 1,
        explanation: "The speaker explicitly states that wearables in 2026 can 'track heart rhythms' and 'monitor glucose levels'."
    },
    {
        id: "d-20260206-m-2",
        level: "Intermediate",
        type: "Reading",
        isListening: false,
        content: "The Ecodesign for Sustainable Products Regulation (ESPR) marks a major shift in EU product policy. Effective July 19, 2026, the regulation bans the destruction of unsold apparel and footwear. Crucially, it introduces Digital Product Passports (DPPs), requiring manufacturers to capture and share data on material composition and lifecycle impacts in structured, digital formats. This ensures circularity is embedded from the design stage.",
        question: "According to the passage, what is a primary obligation for manufacturers under the new ESPR framework in 2026?",
        choices: [
            "To obtain a physical passport for every employee involved in product design.",
            "To exclusively use recycled materials for all apparel and footwear products.",
            "To digitally record and share data regarding product materials and lifecycle impacts.",
            "To incinerate unsold inventory to prevent market saturation."
        ],
        answer: 2,
        explanation: "The passage states DPPs require manufacturers to 'capture and share data on material composition and lifecycle impacts'."
    },
    {
        id: "d-20260206-m-3",
        level: "Advanced",
        type: "Reading",
        isListening: false,
        content: "As businesses look toward 2026, Deloitte’s research highlights a fundamental shift in artificial intelligence known as 'agentic AI.' Unlike traditional AI tools that simply assist humans by processing requests, agentic AI systems possess the capability to reason, plan, and act autonomously to achieve complex goals. These AI agents integrate directly into enterprise business processes and workflows, making applications increasingly self-directed.",
        question: "How does 'agentic AI' differ from traditional AI tools according to the passage?",
        choices: [
            "Agentic AI is restricted to hardware robotics and cannot integrate with enterprise software.",
            "Agentic AI acts as a passive assistant that requires human input for every specific action.",
            "Agentic AI possesses the autonomy to reason, plan, and execute complex goals.",
            "Agentic AI is primarily designed to replace legacy IT infrastructures rather than enhance workflows."
        ],
        answer: 2,
        explanation: "The passage contrasts traditional AI with agentic AI, which can 'reason, plan, and act autonomously'."
    },
    {
        id: "d-20260206-m-4",
        level: "Advanced",
        type: "Reading",
        isListening: false,
        content: "In 2026, CRISPR-based systems have evolved from laboratory curiosities into powerful tools capable of precisely editing DNA to correct genetic mutations within living human cells. This technology is now achieving feats once considered impossible, such as potentially eradicating inherited disorders like sickle cell disease and cystic fibrosis. By editing the specific genes responsible for these severe diseases, researchers are redefining conditions previously thought to be permanent as 'curable.'",
        question: "Based on the passage, what distinguishes the 2026 advancements in CRISPR technology from its earlier developmental stages?",
        choices: [
            "It has moved from experimental labs to actively correcting mutations in living human cells.",
            "It is now used primarily for diagnosing infectious diseases rather than treating them.",
            "It has been restricted to agricultural use due to safety concerns in humans.",
            "It focuses on suppressing symptoms rather than addressing the genetic source of disease."
        ],
        answer: 0,
        explanation: "The text highlight the shift from 'laboratory curiosities' to 'correcting genetic mutations within living human cells'."
    },
    {
        id: "d-20260206-m-5",
        level: "Advanced",
        type: "Reading",
        isListening: false,
        content: "While much of the world reassesses hydrogen strategies in 2026, China is rapidly scaling green hydrogen production and exports. Driven by falling electrolyzer costs and robust policy support, Chinese firms are exporting both the technology and the clean molecules themselves. This aggressive expansion positions China as the global leader in the sector, contrasting sharply with other regions where market hesitation and strategic reassessment remain prevalent.",
        question: "What key trend in the 2026 green hydrogen market does the passage highlight?",
        choices: [
            "Global consensus has led to a uniform ban on hydrogen exports.",
            "Rising electrolyzer costs have stalled production worldwide, including in China.",
            "China is expanding production and leadership while other regions pause to reassess.",
            "Western nations have surpassed China in exporting green hydrogen technology."
        ],
        answer: 2,
        explanation: "The text emphasizes China's 'aggressive expansion... contrasting sharply with other regions'."
    }
];

export const daily20260206 = {
    foundation,
    intermediate,
    advanced,
    mock: {
        id: "m-20260206",
        title: "2026-02-06 Mock Exam",
        timeLimitMinutes: 20,
        questions: mockExamQuestions
    }
};

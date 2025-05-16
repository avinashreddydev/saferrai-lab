// Publications data
export interface Publication {
    id: string;
    title: string;
    authors: string[];
    venue: string;
    year: number;
    abstract: string;
    link?: string;
    code?: string;
    pdf?: string;
    keywords: string[];
}

export const publications: Publication[] = [
    {
        id: "robust-llm-2023",
        title: "Towards Robust Large Language Models: A Safety and Reliability Benchmark",
        authors: ["Jane Smith", "John Doe", "Alice Johnson"],
        venue: "NeurIPS",
        year: 2023,
        abstract: "In this paper, we introduce a comprehensive benchmark for evaluating the safety and reliability of large language models. We propose a suite of tests that assess models' resilience against adversarial attacks, sensitivity to distribution shifts, and ability to maintain factual consistency. Our findings indicate significant gaps in current model robustness that must be addressed for deployment in critical applications.",
        link: "https://example.com/publication1",
        code: "https://github.com/saferrai/robust-llm-benchmark",
        pdf: "/papers/robust-llm-2023.pdf",
        keywords: ["large language models", "benchmarking", "robustness", "safety"]
    },
    {
        id: "adversarial-rl-2023",
        title: "Adversarial Robustness in Reinforcement Learning for Safety-Critical Systems",
        authors: ["Robert Chen", "Sarah Williams", "Michael Brown"],
        venue: "ICML",
        year: 2023,
        abstract: "Reinforcement learning systems deployed in safety-critical domains must be robust to adversarial perturbations. We present a novel approach to training reinforcement learning agents that can withstand targeted attacks while maintaining performance. Our method incorporates worst-case scenario planning and robust optimization techniques, demonstrating significant improvements in safety metrics across multiple environments.",
        link: "https://example.com/publication2",
        code: "https://github.com/saferrai/adversarial-rl",
        pdf: "/papers/adversarial-rl-2023.pdf",
        keywords: ["reinforcement learning", "adversarial robustness", "safety", "optimization"]
    },
    {
        id: "verification-2022",
        title: "Formal Verification Methods for Neural Network Control Systems",
        authors: ["David Wilson", "Elena Martinez", "Chris Taylor"],
        venue: "ICLR",
        year: 2022,
        abstract: "This paper addresses the challenge of formally verifying neural network-based control systems. We introduce a scalable verification framework that can provide guarantees about the behavior of neural controllers even in the presence of uncertain inputs. Our approach combines abstract interpretation with reachability analysis to efficiently handle nonlinear neural networks in closed-loop systems.",
        link: "https://example.com/publication3",
        pdf: "/papers/verification-2022.pdf",
        keywords: ["formal verification", "neural networks", "control systems", "safety guarantees"]
    },
    {
        id: "explainable-ai-2022",
        title: "Towards Human-Aligned Explanations in Artificial Intelligence Systems",
        authors: ["Lisa Johnson", "Mark Thompson", "Wei Zhang"],
        venue: "AAAI",
        year: 2022,
        abstract: "Explainable AI systems must provide justifications that align with human understanding. We propose a novel framework for generating explanations that match human mental models while maintaining fidelity to the underlying AI system. Through human studies, we demonstrate that our approach produces explanations that are both more interpretable and more useful for enabling effective human oversight.",
        link: "https://example.com/publication4",
        code: "https://github.com/saferrai/human-aligned-xai",
        pdf: "/papers/explainable-ai-2022.pdf",
        keywords: ["explainable AI", "human-computer interaction", "mental models", "interpretability"]
    },
    {
        id: "distribution-shift-2022",
        title: "Detecting and Adapting to Distribution Shifts in Deep Learning Systems",
        authors: ["Thomas Lee", "Jennifer Garcia", "Ryan Kim"],
        venue: "CVPR",
        year: 2022,
        abstract: "Distribution shifts pose significant challenges to deployed machine learning systems. We present a framework for continuously monitoring and adapting to distribution shifts in real-time. Our approach combines statistical tests for shift detection with adaptive retraining strategies, enabling systems to maintain performance in changing environments without requiring manual intervention.",
        link: "https://example.com/publication5",
        pdf: "/papers/distribution-shift-2022.pdf",
        keywords: ["distribution shift", "continual learning", "adaptation", "robustness"]
    },
    {
        id: "ethical-framework-2021",
        title: "An Ethical Framework for AI Development in High-Stakes Domains",
        authors: ["Sophia Rodriguez", "Daniel Park", "Maria Nguyen"],
        venue: "FAccT",
        year: 2021,
        abstract: "Deploying AI systems in high-stakes domains requires careful ethical consideration. We propose a comprehensive framework for ethically developing and evaluating AI systems that impact human well-being. Our framework integrates principles from philosophy, risk assessment, and stakeholder engagement to provide practical guidance for AI practitioners working in sensitive areas such as healthcare, criminal justice, and financial services.",
        link: "https://example.com/publication6",
        pdf: "/papers/ethical-framework-2021.pdf",
        keywords: ["AI ethics", "responsible AI", "high-stakes AI", "ethical framework"]
    },
    {
        id: "multimodal-robustness-2023",
        title: "Robustness in Multimodal AI Systems: Challenges and Solutions",
        authors: ["Alex Wong", "Priya Patel", "James Wilson"],
        venue: "ICCV",
        year: 2023,
        abstract: "Multimodal AI systems combining vision, language, and audio face unique robustness challenges. We present a comprehensive analysis of failure modes in multimodal systems and propose novel defense mechanisms. Our evaluation across multiple benchmarks shows significant improvements in cross-modal robustness.",
        link: "https://example.com/publication7",
        code: "https://github.com/saferrai/multimodal-robustness",
        pdf: "/papers/multimodal-robustness-2023.pdf",
        keywords: ["multimodal AI", "computer vision", "robustness", "cross-modal learning"]
    },
    {
        id: "federated-safety-2023",
        title: "Safety Guarantees in Federated Learning Systems",
        authors: ["Emma Davis", "Carlos Rodriguez", "Yuki Tanaka"],
        venue: "ICML",
        year: 2023,
        abstract: "Federated learning introduces unique safety challenges due to its distributed nature. We develop a framework for ensuring safety guarantees in federated learning systems while maintaining privacy. Our approach combines differential privacy with robust aggregation methods to prevent both privacy leaks and adversarial attacks.",
        link: "https://example.com/publication8",
        code: "https://github.com/saferrai/federated-safety",
        pdf: "/papers/federated-safety-2023.pdf",
        keywords: ["federated learning", "privacy", "safety guarantees", "distributed systems"]
    },
    {
        id: "uncertainty-quantification-2023",
        title: "Uncertainty Quantification for Deep Learning in Safety-Critical Applications",
        authors: ["Michael Chang", "Sarah Anderson", "Raj Patel"],
        venue: "NeurIPS",
        year: 2023,
        abstract: "Accurate uncertainty quantification is crucial for deploying deep learning in safety-critical applications. We propose a novel framework that combines Bayesian neural networks with conformal prediction to provide reliable uncertainty estimates. Our method achieves state-of-the-art performance on multiple safety-critical benchmarks.",
        link: "https://example.com/publication9",
        code: "https://github.com/saferrai/uncertainty-quantification",
        pdf: "/papers/uncertainty-quantification-2023.pdf",
        keywords: ["uncertainty quantification", "Bayesian neural networks", "safety-critical AI", "conformal prediction"]
    },
    {
        id: "robust-nlp-2023",
        title: "Robust Natural Language Processing for Low-Resource Languages",
        authors: ["Ling Wei", "David Kumar", "Maria Garcia"],
        venue: "ACL",
        year: 2023,
        abstract: "NLP systems for low-resource languages face unique robustness challenges. We present a novel approach that leverages cross-lingual transfer learning and adversarial training to improve robustness. Our method shows significant improvements in handling code-switching, dialect variations, and noisy inputs.",
        link: "https://example.com/publication10",
        code: "https://github.com/saferrai/robust-nlp",
        pdf: "/papers/robust-nlp-2023.pdf",
        keywords: ["natural language processing", "low-resource languages", "robustness", "cross-lingual learning"]
    },
    {
        id: "ai-alignment-2023",
        title: "Technical Approaches to AI Alignment: A Survey",
        authors: ["Rachel Green", "Tom Wilson", "Hiroshi Tanaka"],
        venue: "AIES",
        year: 2023,
        abstract: "This survey paper examines technical approaches to AI alignment, focusing on methods for ensuring AI systems behave according to human values. We analyze various alignment techniques, their limitations, and future research directions. Our analysis provides a comprehensive overview of the current state of AI alignment research.",
        link: "https://example.com/publication11",
        pdf: "/papers/ai-alignment-2023.pdf",
        keywords: ["AI alignment", "value alignment", "technical safety", "survey"]
    },
    {
        id: "robust-computer-vision-2023",
        title: "Robust Computer Vision for Autonomous Systems",
        authors: ["Kevin Zhang", "Lisa Brown", "Ahmed Hassan"],
        venue: "CVPR",
        year: 2023,
        abstract: "Autonomous systems require highly robust computer vision capabilities. We present a novel framework that combines adversarial training with uncertainty-aware decision making. Our approach significantly improves robustness against various types of visual perturbations while maintaining high performance on clean inputs.",
        link: "https://example.com/publication12",
        code: "https://github.com/saferrai/robust-vision",
        pdf: "/papers/robust-vision-2023.pdf",
        keywords: ["computer vision", "autonomous systems", "robustness", "uncertainty"]
    },
    {
        id: "formal-methods-2023",
        title: "Formal Methods for Neural Network Verification",
        authors: ["Sophie Martin", "Rajesh Kumar", "Emma Wilson"],
        venue: "CAV",
        year: 2023,
        abstract: "We present novel formal methods for verifying neural network properties. Our approach combines symbolic execution with abstract interpretation to efficiently verify complex properties. The method scales to large networks while providing strong guarantees about network behavior.",
        link: "https://example.com/publication13",
        code: "https://github.com/saferrai/formal-nn-verification",
        pdf: "/papers/formal-methods-2023.pdf",
        keywords: ["formal methods", "neural networks", "verification", "symbolic execution"]
    },
    {
        id: "robust-rl-2023",
        title: "Robust Reinforcement Learning for Real-World Applications",
        authors: ["Daniel Lee", "Priya Sharma", "Marcus Chen"],
        venue: "ICML",
        year: 2023,
        abstract: "Real-world applications of reinforcement learning require robust performance under uncertainty. We propose a novel framework that combines robust optimization with meta-learning to improve generalization. Our method shows significant improvements in handling distribution shifts and adversarial perturbations.",
        link: "https://example.com/publication14",
        code: "https://github.com/saferrai/robust-rl",
        pdf: "/papers/robust-rl-2023.pdf",
        keywords: ["reinforcement learning", "robustness", "meta-learning", "real-world applications"]
    },
    {
        id: "ai-safety-benchmarks-2023",
        title: "Comprehensive Benchmarks for AI Safety Evaluation",
        authors: ["Anna White", "Carlos Rodriguez", "Yuki Tanaka"],
        venue: "NeurIPS",
        year: 2023,
        abstract: "We introduce a comprehensive suite of benchmarks for evaluating AI safety. Our benchmarks cover various aspects including robustness, fairness, privacy, and alignment. The suite provides standardized evaluation protocols and metrics for comparing different safety approaches.",
        link: "https://example.com/publication15",
        code: "https://github.com/saferrai/safety-benchmarks",
        pdf: "/papers/safety-benchmarks-2023.pdf",
        keywords: ["AI safety", "benchmarking", "evaluation", "metrics"]
    },
    {
        id: "robust-ml-2022",
        title: "Robust Machine Learning: Theory and Practice",
        authors: ["Michael Brown", "Sarah Johnson", "David Wilson"],
        venue: "JMLR",
        year: 2022,
        abstract: "This paper presents a comprehensive study of robust machine learning from both theoretical and practical perspectives. We analyze various robustness guarantees and their implications for real-world applications. Our findings provide insights into the trade-offs between robustness and performance.",
        link: "https://example.com/publication16",
        pdf: "/papers/robust-ml-2022.pdf",
        keywords: ["robust machine learning", "theoretical guarantees", "practical applications"]
    },
    {
        id: "ai-ethics-2022",
        title: "Ethical Considerations in AI Development",
        authors: ["Emma Davis", "James Wilson", "Maria Garcia"],
        venue: "AIES",
        year: 2022,
        abstract: "We examine key ethical considerations in AI development and deployment. The paper discusses issues of fairness, transparency, and accountability, providing practical guidelines for ethical AI development. Our framework helps organizations navigate complex ethical challenges in AI projects.",
        link: "https://example.com/publication17",
        pdf: "/papers/ai-ethics-2022.pdf",
        keywords: ["AI ethics", "fairness", "transparency", "accountability"]
    },
    {
        id: "robust-nlp-2022",
        title: "Robust Natural Language Processing",
        authors: ["Ling Wei", "Tom Chen", "Priya Patel"],
        venue: "ACL",
        year: 2022,
        abstract: "This paper presents novel approaches to improving robustness in natural language processing systems. We address challenges in handling noisy inputs, adversarial attacks, and distribution shifts. Our methods show significant improvements in maintaining performance under various types of perturbations.",
        link: "https://example.com/publication18",
        code: "https://github.com/saferrai/robust-nlp-2022",
        pdf: "/papers/robust-nlp-2022.pdf",
        keywords: ["natural language processing", "robustness", "adversarial attacks"]
    },
    {
        id: "formal-verification-2022",
        title: "Formal Verification of Deep Learning Systems",
        authors: ["Sophie Martin", "Rajesh Kumar", "Emma Wilson"],
        venue: "CAV",
        year: 2022,
        abstract: "We present novel methods for formal verification of deep learning systems. Our approach combines symbolic execution with abstract interpretation to efficiently verify complex properties. The method scales to large networks while providing strong guarantees about network behavior.",
        link: "https://example.com/publication19",
        code: "https://github.com/saferrai/formal-verification-2022",
        pdf: "/papers/formal-verification-2022.pdf",
        keywords: ["formal verification", "deep learning", "symbolic execution"]
    },
    {
        id: "robust-cv-2022",
        title: "Robust Computer Vision Systems",
        authors: ["Kevin Zhang", "Lisa Brown", "Ahmed Hassan"],
        venue: "CVPR",
        year: 2022,
        abstract: "This paper presents novel approaches to improving robustness in computer vision systems. We address challenges in handling adversarial attacks, distribution shifts, and real-world perturbations. Our methods show significant improvements in maintaining performance under various types of visual perturbations.",
        link: "https://example.com/publication20",
        code: "https://github.com/saferrai/robust-cv-2022",
        pdf: "/papers/robust-cv-2022.pdf",
        keywords: ["computer vision", "robustness", "adversarial attacks"]
    },
    {
        id: "ai-safety-2022",
        title: "AI Safety: Current Challenges and Future Directions",
        authors: ["Anna White", "Carlos Rodriguez", "Yuki Tanaka"],
        venue: "AIES",
        year: 2022,
        abstract: "We examine current challenges and future directions in AI safety research. The paper discusses various aspects of safety including robustness, alignment, and ethical considerations. Our analysis provides insights into key research areas and potential solutions.",
        link: "https://example.com/publication21",
        pdf: "/papers/ai-safety-2022.pdf",
        keywords: ["AI safety", "challenges", "future directions"]
    },
    {
        id: "robust-ml-2021",
        title: "Robust Machine Learning: A Survey",
        authors: ["Michael Brown", "Sarah Johnson", "David Wilson"],
        venue: "JMLR",
        year: 2021,
        abstract: "This survey paper examines various approaches to robust machine learning. We analyze different robustness guarantees, defense mechanisms, and evaluation methods. Our analysis provides a comprehensive overview of the current state of robust machine learning research.",
        link: "https://example.com/publication22",
        pdf: "/papers/robust-ml-survey-2021.pdf",
        keywords: ["robust machine learning", "survey", "defense mechanisms"]
    },
    {
        id: "ai-ethics-2021",
        title: "Ethical AI: Principles and Practices",
        authors: ["Emma Davis", "James Wilson", "Maria Garcia"],
        venue: "AIES",
        year: 2021,
        abstract: "We present a comprehensive framework for ethical AI development and deployment. The paper discusses key principles and practical guidelines for ensuring ethical AI systems. Our framework helps organizations navigate complex ethical challenges in AI projects.",
        link: "https://example.com/publication23",
        pdf: "/papers/ai-ethics-2021.pdf",
        keywords: ["AI ethics", "principles", "practices"]
    },
    {
        id: "robust-nlp-2021",
        title: "Robust Natural Language Processing: Challenges and Solutions",
        authors: ["Ling Wei", "Tom Chen", "Priya Patel"],
        venue: "ACL",
        year: 2021,
        abstract: "This paper examines challenges and solutions in robust natural language processing. We address issues in handling noisy inputs, adversarial attacks, and distribution shifts. Our methods show significant improvements in maintaining performance under various types of perturbations.",
        link: "https://example.com/publication24",
        code: "https://github.com/saferrai/robust-nlp-2021",
        pdf: "/papers/robust-nlp-2021.pdf",
        keywords: ["natural language processing", "robustness", "challenges"]
    },
    {
        id: "formal-verification-2021",
        title: "Formal Verification Methods for AI Systems",
        authors: ["Sophie Martin", "Rajesh Kumar", "Emma Wilson"],
        venue: "CAV",
        year: 2021,
        abstract: "We present novel methods for formal verification of AI systems. Our approach combines symbolic execution with abstract interpretation to efficiently verify complex properties. The method scales to large systems while providing strong guarantees about system behavior.",
        link: "https://example.com/publication25",
        code: "https://github.com/saferrai/formal-verification-2021",
        pdf: "/papers/formal-verification-2021.pdf",
        keywords: ["formal verification", "AI systems", "symbolic execution"]
    },
    {
        id: "robust-cv-2021",
        title: "Robust Computer Vision: Theory and Applications",
        authors: ["Kevin Zhang", "Lisa Brown", "Ahmed Hassan"],
        venue: "CVPR",
        year: 2021,
        abstract: "This paper presents theoretical foundations and practical applications of robust computer vision. We address challenges in handling adversarial attacks, distribution shifts, and real-world perturbations. Our methods show significant improvements in maintaining performance under various types of visual perturbations.",
        link: "https://example.com/publication26",
        code: "https://github.com/saferrai/robust-cv-2021",
        pdf: "/papers/robust-cv-2021.pdf",
        keywords: ["computer vision", "robustness", "applications"]
    },
    {
        id: "ai-safety-2021",
        title: "AI Safety: A Comprehensive Review",
        authors: ["Anna White", "Carlos Rodriguez", "Yuki Tanaka"],
        venue: "AIES",
        year: 2021,
        abstract: "We present a comprehensive review of AI safety research. The paper examines various aspects of safety including robustness, alignment, and ethical considerations. Our analysis provides insights into key research areas and potential solutions.",
        link: "https://example.com/publication27",
        pdf: "/papers/ai-safety-review-2021.pdf",
        keywords: ["AI safety", "review", "research areas"]
    },
    {
        id: "robust-ml-2020",
        title: "Robust Machine Learning: Foundations and Applications",
        authors: ["Michael Brown", "Sarah Johnson", "David Wilson"],
        venue: "JMLR",
        year: 2020,
        abstract: "This paper examines foundations and applications of robust machine learning. We analyze different robustness guarantees, defense mechanisms, and evaluation methods. Our analysis provides insights into the trade-offs between robustness and performance.",
        link: "https://example.com/publication28",
        pdf: "/papers/robust-ml-2020.pdf",
        keywords: ["robust machine learning", "foundations", "applications"]
    },
    {
        id: "ai-ethics-2020",
        title: "Ethical AI Development: A Framework",
        authors: ["Emma Davis", "James Wilson", "Maria Garcia"],
        venue: "AIES",
        year: 2020,
        abstract: "We present a framework for ethical AI development. The paper discusses key principles and practical guidelines for ensuring ethical AI systems. Our framework helps organizations navigate complex ethical challenges in AI projects.",
        link: "https://example.com/publication29",
        pdf: "/papers/ai-ethics-2020.pdf",
        keywords: ["AI ethics", "framework", "guidelines"]
    },
    {
        id: "robust-nlp-2020",
        title: "Robust Natural Language Processing Systems",
        authors: ["Ling Wei", "Tom Chen", "Priya Patel"],
        venue: "ACL",
        year: 2020,
        abstract: "This paper presents novel approaches to building robust natural language processing systems. We address challenges in handling noisy inputs, adversarial attacks, and distribution shifts. Our methods show significant improvements in maintaining performance under various types of perturbations.",
        link: "https://example.com/publication30",
        code: "https://github.com/saferrai/robust-nlp-2020",
        pdf: "/papers/robust-nlp-2020.pdf",
        keywords: ["natural language processing", "robustness", "systems"]
    },
    {
        id: "formal-verification-2020",
        title: "Formal Verification of Machine Learning Systems",
        authors: ["Sophie Martin", "Rajesh Kumar", "Emma Wilson"],
        venue: "CAV",
        year: 2020,
        abstract: "We present novel methods for formal verification of machine learning systems. Our approach combines symbolic execution with abstract interpretation to efficiently verify complex properties. The method scales to large systems while providing strong guarantees about system behavior.",
        link: "https://example.com/publication31",
        code: "https://github.com/saferrai/formal-verification-2020",
        pdf: "/papers/formal-verification-2020.pdf",
        keywords: ["formal verification", "machine learning", "symbolic execution"]
    },
    {
        id: "robust-cv-2020",
        title: "Robust Computer Vision: Methods and Applications",
        authors: ["Kevin Zhang", "Lisa Brown", "Ahmed Hassan"],
        venue: "CVPR",
        year: 2020,
        abstract: "This paper presents methods and applications of robust computer vision. We address challenges in handling adversarial attacks, distribution shifts, and real-world perturbations. Our methods show significant improvements in maintaining performance under various types of visual perturbations.",
        link: "https://example.com/publication32",
        code: "https://github.com/saferrai/robust-cv-2020",
        pdf: "/papers/robust-cv-2020.pdf",
        keywords: ["computer vision", "robustness", "methods"]
    },
    {
        id: "ai-safety-2020",
        title: "AI Safety: Current State and Future Directions",
        authors: ["Anna White", "Carlos Rodriguez", "Yuki Tanaka"],
        venue: "AIES",
        year: 2020,
        abstract: "We examine the current state and future directions of AI safety research. The paper discusses various aspects of safety including robustness, alignment, and ethical considerations. Our analysis provides insights into key research areas and potential solutions.",
        link: "https://example.com/publication33",
        pdf: "/papers/ai-safety-2020.pdf",
        keywords: ["AI safety", "current state", "future directions"]
    },
    {
        id: "robust-ml-2019",
        title: "Robust Machine Learning: A Comprehensive Study",
        authors: ["Michael Brown", "Sarah Johnson", "David Wilson"],
        venue: "JMLR",
        year: 2019,
        abstract: "This paper presents a comprehensive study of robust machine learning. We analyze different robustness guarantees, defense mechanisms, and evaluation methods. Our analysis provides insights into the trade-offs between robustness and performance.",
        link: "https://example.com/publication34",
        pdf: "/papers/robust-ml-2019.pdf",
        keywords: ["robust machine learning", "study", "defense mechanisms"]
    },
    {
        id: "ai-ethics-2019",
        title: "Ethical AI: Principles and Implementation",
        authors: ["Emma Davis", "James Wilson", "Maria Garcia"],
        venue: "AIES",
        year: 2019,
        abstract: "We present principles and implementation guidelines for ethical AI development. The paper discusses key considerations and practical approaches for ensuring ethical AI systems. Our framework helps organizations navigate complex ethical challenges in AI projects.",
        link: "https://example.com/publication35",
        pdf: "/papers/ai-ethics-2019.pdf",
        keywords: ["AI ethics", "principles", "implementation"]
    },
    {
        id: "robust-nlp-2019",
        title: "Robust Natural Language Processing: A Survey",
        authors: ["Ling Wei", "Tom Chen", "Priya Patel"],
        venue: "ACL",
        year: 2019,
        abstract: "This survey paper examines approaches to robust natural language processing. We address challenges in handling noisy inputs, adversarial attacks, and distribution shifts. Our analysis provides a comprehensive overview of current methods and future directions.",
        link: "https://example.com/publication36",
        pdf: "/papers/robust-nlp-survey-2019.pdf",
        keywords: ["natural language processing", "robustness", "survey"]
    },
    {
        id: "formal-verification-2019",
        title: "Formal Verification of AI Systems: A Survey",
        authors: ["Sophie Martin", "Rajesh Kumar", "Emma Wilson"],
        venue: "CAV",
        year: 2019,
        abstract: "We present a survey of formal verification methods for AI systems. Our analysis covers various approaches to verifying system properties and behavior. The survey provides insights into current methods and future research directions.",
        link: "https://example.com/publication37",
        pdf: "/papers/formal-verification-survey-2019.pdf",
        keywords: ["formal verification", "AI systems", "survey"]
    },
    {
        id: "robust-cv-2019",
        title: "Robust Computer Vision: A Survey",
        authors: ["Kevin Zhang", "Lisa Brown", "Ahmed Hassan"],
        venue: "CVPR",
        year: 2019,
        abstract: "This survey paper examines approaches to robust computer vision. We address challenges in handling adversarial attacks, distribution shifts, and real-world perturbations. Our analysis provides a comprehensive overview of current methods and future directions.",
        link: "https://example.com/publication38",
        pdf: "/papers/robust-cv-survey-2019.pdf",
        keywords: ["computer vision", "robustness", "survey"]
    },
    {
        id: "ai-safety-2019",
        title: "AI Safety: A Survey of Current Approaches",
        authors: ["Anna White", "Carlos Rodriguez", "Yuki Tanaka"],
        venue: "AIES",
        year: 2019,
        abstract: "We present a survey of current approaches to AI safety. The paper examines various aspects of safety including robustness, alignment, and ethical considerations. Our analysis provides insights into key research areas and potential solutions.",
        link: "https://example.com/publication39",
        pdf: "/papers/ai-safety-survey-2019.pdf",
        keywords: ["AI safety", "survey", "approaches"]
    },
    {
        id: "robust-ml-2018",
        title: "Robust Machine Learning: Early Approaches",
        authors: ["Michael Brown", "Sarah Johnson", "David Wilson"],
        venue: "JMLR",
        year: 2018,
        abstract: "This paper examines early approaches to robust machine learning. We analyze different robustness guarantees, defense mechanisms, and evaluation methods. Our analysis provides insights into the evolution of robust machine learning research.",
        link: "https://example.com/publication40",
        pdf: "/papers/robust-ml-2018.pdf",
        keywords: ["robust machine learning", "early approaches", "evolution"]
    },
    {
        id: "ai-ethics-2018",
        title: "Ethical AI: Early Considerations",
        authors: ["Emma Davis", "James Wilson", "Maria Garcia"],
        venue: "AIES",
        year: 2018,
        abstract: "We examine early considerations in ethical AI development. The paper discusses key principles and practical guidelines for ensuring ethical AI systems. Our analysis provides insights into the evolution of ethical AI research.",
        link: "https://example.com/publication41",
        pdf: "/papers/ai-ethics-2018.pdf",
        keywords: ["AI ethics", "early considerations", "evolution"]
    },
    {
        id: "robust-nlp-2018",
        title: "Robust Natural Language Processing: Early Methods",
        authors: ["Ling Wei", "Tom Chen", "Priya Patel"],
        venue: "ACL",
        year: 2018,
        abstract: "This paper examines early methods in robust natural language processing. We address challenges in handling noisy inputs, adversarial attacks, and distribution shifts. Our analysis provides insights into the evolution of robust NLP research.",
        link: "https://example.com/publication42",
        pdf: "/papers/robust-nlp-2018.pdf",
        keywords: ["natural language processing", "robustness", "early methods"]
    },
    {
        id: "formal-verification-2018",
        title: "Formal Verification of AI Systems: Early Approaches",
        authors: ["Sophie Martin", "Rajesh Kumar", "Emma Wilson"],
        venue: "CAV",
        year: 2018,
        abstract: "We examine early approaches to formal verification of AI systems. Our analysis covers various methods for verifying system properties and behavior. The paper provides insights into the evolution of formal verification research.",
        link: "https://example.com/publication43",
        pdf: "/papers/formal-verification-2018.pdf",
        keywords: ["formal verification", "AI systems", "early approaches"]
    },
    {
        id: "robust-cv-2018",
        title: "Robust Computer Vision: Early Methods",
        authors: ["Kevin Zhang", "Lisa Brown", "Ahmed Hassan"],
        venue: "CVPR",
        year: 2018,
        abstract: "This paper examines early methods in robust computer vision. We address challenges in handling adversarial attacks, distribution shifts, and real-world perturbations. Our analysis provides insights into the evolution of robust computer vision research.",
        link: "https://example.com/publication44",
        pdf: "/papers/robust-cv-2018.pdf",
        keywords: ["computer vision", "robustness", "early methods"]
    },
    {
        id: "ai-safety-2018",
        title: "AI Safety: Early Research Directions",
        authors: ["Anna White", "Carlos Rodriguez", "Yuki Tanaka"],
        venue: "AIES",
        year: 2018,
        abstract: "We examine early research directions in AI safety. The paper discusses various aspects of safety including robustness, alignment, and ethical considerations. Our analysis provides insights into the evolution of AI safety research.",
        link: "https://example.com/publication45",
        pdf: "/papers/ai-safety-2018.pdf",
        keywords: ["AI safety", "early research", "evolution"]
    },
    {
        id: "robust-ml-2017",
        title: "Robust Machine Learning: Foundations",
        authors: ["Michael Brown", "Sarah Johnson", "David Wilson"],
        venue: "JMLR",
        year: 2017,
        abstract: "This paper examines foundational work in robust machine learning. We analyze different robustness guarantees, defense mechanisms, and evaluation methods. Our analysis provides insights into the early development of robust machine learning research.",
        link: "https://example.com/publication46",
        pdf: "/papers/robust-ml-2017.pdf",
        keywords: ["robust machine learning", "foundations", "early development"]
    },
    {
        id: "ai-ethics-2017",
        title: "Ethical AI: Foundational Principles",
        authors: ["Emma Davis", "James Wilson", "Maria Garcia"],
        venue: "AIES",
        year: 2017,
        abstract: "We examine foundational principles in ethical AI development. The paper discusses key considerations and practical approaches for ensuring ethical AI systems. Our analysis provides insights into the early development of ethical AI research.",
        link: "https://example.com/publication47",
        pdf: "/papers/ai-ethics-2017.pdf",
        keywords: ["AI ethics", "foundational principles", "early development"]
    },
    {
        id: "robust-nlp-2017",
        title: "Robust Natural Language Processing: Foundations",
        authors: ["Ling Wei", "Tom Chen", "Priya Patel"],
        venue: "ACL",
        year: 2017,
        abstract: "This paper examines foundational work in robust natural language processing. We address challenges in handling noisy inputs, adversarial attacks, and distribution shifts. Our analysis provides insights into the early development of robust NLP research.",
        link: "https://example.com/publication48",
        pdf: "/papers/robust-nlp-2017.pdf",
        keywords: ["natural language processing", "robustness", "foundations"]
    },
    {
        id: "formal-verification-2017",
        title: "Formal Verification of AI Systems: Foundations",
        authors: ["Sophie Martin", "Rajesh Kumar", "Emma Wilson"],
        venue: "CAV",
        year: 2017,
        abstract: "We examine foundational work in formal verification of AI systems. Our analysis covers various methods for verifying system properties and behavior. The paper provides insights into the early development of formal verification research.",
        link: "https://example.com/publication49",
        pdf: "/papers/formal-verification-2017.pdf",
        keywords: ["formal verification", "AI systems", "foundations"]
    },
    {
        id: "robust-cv-2017",
        title: "Robust Computer Vision: Foundations",
        authors: ["Kevin Zhang", "Lisa Brown", "Ahmed Hassan"],
        venue: "CVPR",
        year: 2017,
        abstract: "This paper examines foundational work in robust computer vision. We address challenges in handling adversarial attacks, distribution shifts, and real-world perturbations. Our analysis provides insights into the early development of robust computer vision research.",
        link: "https://example.com/publication50",
        pdf: "/papers/robust-cv-2017.pdf",
        keywords: ["computer vision", "robustness", "foundations"]
    }
];

// People data
export interface Person {
    id: string;
    name: string;
    title: string;
    image: string;
    role: "faculty" | "phd" | "masters" | "undergrad" | "alumni" | "staff";
    bio: string;
    interests: string[];
    website?: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
    scholar?: string;
    email?: string;
}

export const people: Person[] = [
    {
        id: "amrit-bedi",
        name: "Prof. Amrit Singh Bedi",
        title: "Assistant Professor, Lab Director",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQGwAdbGEznnNQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671755146478?e=1752710400&v=beta&t=2GUM74n1pQBGC48fcY97o_ZNikGFPsSl6aPw8Z1JpLU",
        role: "faculty",
        bio: "Amrit Singh Bedi is a Professor of Computer Science specializing in AI safety and reliability. He has published over 100 papers and received numerous awards for his work on robust AI systems.",
        interests: ["AI safety", "Reinforcement Learning", "AI alignment"],
        website: "https://sites.google.com/view/amritsinghbedi/home",
        github: "https://github.com/amritsinghbedi",
        twitter: "https://x.com/amritsinghbedi3",
        linkedin: "https://www.linkedin.com/in/amrit-singh-bedi-3284089a/",
        scholar: "https://scholar.google.com/citations?user=91WLA6QAAAAJ&hl=en",
        email: "amritsinghbedi@gmail.com"
    },

    {
        id: "alice-johnson",
        name: "Dr. Alice Johnson",
        title: "Research Scientist",
        image: "/people/alice-johnson.jpg",
        role: "staff",
        bio: "Alice Johnson specializes in developing explainable AI systems that can communicate their decisions in human-understandable terms.",
        interests: ["Explainable AI", "Human-AI Interaction", "Machine Learning"],
        website: "https://example.com/alicejohnson",
        github: "https://github.com/alicejohnson",
        linkedin: "https://linkedin.com/in/alicejohnson",
        scholar: "https://scholar.google.com/citations?user=alicejohnson",
        email: "alice.johnson@example.edu"
    },
    {
        id: "robert-chen",
        name: "Robert Chen",
        title: "PhD Student",
        image: "/people/robert-chen.jpg",
        role: "phd",
        bio: "Robert is investigating robust reinforcement learning algorithms that can safely operate in uncertain environments.",
        interests: ["Reinforcement Learning", "Robustness", "Safety-Critical Systems"],
        github: "https://github.com/robertchen",
        twitter: "https://twitter.com/robertchen",
        email: "robert.chen@example.edu"
    },
    {
        id: "sarah-williams",
        name: "Sarah Williams",
        title: "PhD Student",
        image: "/people/sarah-williams.jpg",
        role: "phd",
        bio: "Sarah's research focuses on developing formal verification techniques for deep learning systems to provide guarantees about their behavior.",
        interests: ["Formal Verification", "Neural Networks", "Safety Guarantees"],
        github: "https://github.com/sarahwilliams",
        linkedin: "https://linkedin.com/in/sarahwilliams",
        email: "sarah.williams@example.edu"
    },
    {
        id: "michael-brown",
        name: "Michael Brown",
        title: "PhD Student",
        image: "/people/michael-brown.jpg",
        role: "phd",
        bio: "Michael is working on methods to detect and mitigate distribution shifts in deployed AI systems.",
        interests: ["Distribution Shift", "Continual Learning", "Adaptive AI"],
        github: "https://github.com/michaelbrown",
        scholar: "https://scholar.google.com/citations?user=michaelbrown",
        email: "michael.brown@example.edu"
    },
    {
        id: "elena-martinez",
        name: "Elena Martinez",
        title: "Masters Student",
        image: "/people/elena-martinez.jpg",
        role: "masters",
        bio: "Elena is researching approaches to make large language models more reliable and factually consistent.",
        interests: ["Language Models", "Factuality", "Reliability"],
        github: "https://github.com/elenamartinez",
        email: "elena.martinez@example.edu"
    },
    {
        id: "chris-taylor",
        name: "Chris Taylor",
        title: "Masters Student",
        image: "/people/chris-taylor.jpg",
        role: "masters",
        bio: "Chris is developing tools for testing and evaluating the robustness of vision-based AI systems.",
        interests: ["Computer Vision", "Robustness Testing", "Adversarial Examples"],
        github: "https://github.com/christaylor",
        linkedin: "https://linkedin.com/in/christaylor",
        email: "chris.taylor@example.edu"
    },
    {
        id: "lisa-johnson",
        name: "Lisa Johnson",
        title: "Undergraduate Researcher",
        image: "/people/lisa-johnson.jpg",
        role: "undergrad",
        bio: "Lisa is assisting with projects on explainable AI and human-AI collaboration.",
        interests: ["Explainable AI", "Human-Computer Interaction"],
        github: "https://github.com/lisajohnson",
        email: "lisa.johnson@example.edu"
    }
];

// Blog posts data
export interface BlogPost {
    id: string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
    image?: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: "new-paper-neurips-2023",
        title: "New paper accepted at NeurIPS 2023",
        author: "Jane Smith",
        date: "2023-06-15",
        excerpt: "We're excited to announce that our paper on robust reinforcement learning has been accepted at NeurIPS 2023. This work represents a significant advancement in creating RL systems that can withstand adversarial attacks.",
        image: "/blog/paper-neurips.jpg",
        tags: ["publication", "reinforcement learning", "robustness"]
    },
    {
        id: "lab-grant-2023",
        title: "Lab receives major grant for LLM robustness research",
        author: "John Doe",
        date: "2023-05-03",
        excerpt: "We're thrilled to announce that our lab has received a $2M grant to study adversarial robustness in large language models. This funding will support our work on making LLMs more reliable and secure against attacks.",
        image: "/blog/grant-announcement.jpg",
        tags: ["grant", "funding", "large language models"]
    },
    {
        id: "new-phd-students-2023",
        title: "Welcoming new PhD students to the lab",
        author: "Alice Johnson",
        date: "2023-04-21",
        excerpt: "We're delighted to welcome three new PhD students joining our lab this fall semester. Each brings unique expertise that will strengthen our research in AI safety and reliability.",
        image: "/blog/new-students.jpg",
        tags: ["lab news", "students"]
    },
    {
        id: "workshop-ai-safety-2023",
        title: "Upcoming Workshop on AI Safety",
        author: "Robert Chen",
        date: "2023-03-15",
        excerpt: "We're organizing a workshop on AI safety and reliability, bringing together experts from academia and industry to discuss the latest advances and challenges in the field.",
        image: "/blog/workshop.jpg",
        tags: ["event", "workshop", "AI safety"]
    },
    {
        id: "tutorial-formal-verification-2023",
        title: "Tutorial: Formal Verification for Neural Networks",
        author: "Sarah Williams",
        date: "2023-02-10",
        excerpt: "Check out our new tutorial on applying formal verification techniques to neural networks. This step-by-step guide helps researchers implement verification methods for their own models.",
        image: "/blog/tutorial.jpg",
        tags: ["tutorial", "formal verification", "neural networks"]
    }
];

// Research projects data
export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string;
    leadResearchers: string[];
    collaborators?: string[];
    funding?: string[];
}

export const projects: Project[] = [
    {
        id: "robust-llm",
        title: "Robustness in Large Language Models",
        description: "This project aims to develop techniques for improving the robustness of large language models against adversarial attacks, distribution shifts, and out-of-distribution inputs. We're creating benchmarks, evaluation frameworks, and defensive training strategies.",
        image: "/projects/robust-llm.jpg",
        leadResearchers: ["Jane Smith", "Robert Chen"],
        collaborators: ["AI Safety Institute", "TechCorp Research"],
        funding: ["National Science Foundation", "Industry Partnership Program"]
    },
    {
        id: "formal-verification",
        title: "Formal Verification for Deep Learning",
        description: "We're developing scalable formal verification techniques for deep neural networks that can provide guarantees about model behavior. Our methods combine abstract interpretation, SMT solving, and specialized relaxation techniques.",
        image: "/projects/formal-verification.jpg",
        leadResearchers: ["John Doe", "Sarah Williams"],
        funding: ["DARPA", "AI Safety Initiative"]
    },
    {
        id: "explainable-ai",
        title: "Human-Aligned Explainable AI",
        description: "This project focuses on creating explanation methods that align with human mental models and reasoning processes. We're developing techniques that generate explanations that are not only faithful to the model but also useful for human understanding.",
        image: "/projects/explainable-ai.jpg",
        leadResearchers: ["Alice Johnson", "Lisa Johnson"],
        collaborators: ["Human-Computer Interaction Lab", "Cognitive Science Department"],
        funding: ["National Science Foundation"]
    },
    {
        id: "safety-rl",
        title: "Safe Reinforcement Learning",
        description: "We're developing reinforcement learning algorithms that can safely learn in complex environments while respecting safety constraints. Our approach combines constrained optimization, risk-sensitive learning, and formal safety guarantees.",
        image: "/projects/safety-rl.jpg",
        leadResearchers: ["Jane Smith", "Michael Brown"],
        collaborators: ["Robotics Lab", "Autonomous Systems Group"],
        funding: ["Office of Naval Research", "Industry Partnership Program"]
    },
    {
        id: "ethical-ai",
        title: "Ethical AI Deployment Frameworks",
        description: "This project aims to develop practical frameworks and tools for ethical AI deployment in high-stakes domains. We're creating assessment methodologies, governance structures, and monitoring tools that enable responsible AI implementation.",
        image: "/projects/ethical-ai.jpg",
        leadResearchers: ["John Doe", "Elena Martinez"],
        collaborators: ["Ethics in Technology Center", "Policy Research Institute"],
        funding: ["National Institute of Standards and Technology"]
    }
]; 
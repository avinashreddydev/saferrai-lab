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
        id: "nips-24-fact-free-riding",
        title: "FACT or Fiction: Can Truthful Mechanisms Eliminate Federated Free Riding?",
        authors: ["M. Bosnstein", "A. S. Bedi", "A. Mohamed", "F. Huang"],
        venue: "NeurIPS",
        year: 2024,
        abstract: "",
        link: "https://arxiv.org/pdf/2405.13879",
        code: "",
        pdf: "",
        keywords: ["federated learning", "mechanism design", "truthfulness", "free riding", "distributed systems"]
    },
    {
        id: "nips-24-transferq-llm-alignment",
        title: "Transfer Q*: Principled Decoding for LLM Alignment",
        authors: ["S. Chakraborty", "S. Ghoshal", "M. Yin", "D. Manocha", "M. Wang", "A. S. Bedi", "F. Huang"],
        venue: "NeurIPS",
        year: 2024,
        abstract: "",
        link: "https://arxiv.org/pdf/2405.20495",
        code: "",
        pdf: "",
        keywords: ["large language models", "alignment", "decoding", "LLM", "transfer learning"]
    },
    {
        id: "iros-24-selective-multi-robot-rl",
        title: "When, What, and with Whom to Communicate: Enhancing RL-based Multi-Robot Navigation through Selective Communication",
        authors: ["S. H. Arul", "A. S. Bedi", "D. Manocha"],
        venue: "IROS",
        year: 2024,
        abstract: "",
        link: "",
        code: "",
        pdf: "",
        keywords: ["multi-robot", "reinforcement learning", "selective communication", "robot navigation"]
    },
    {
        id: "iros-24-lancar-language-robot",
        title: "LANCAR: Leveraging Language for Context-Aware Robot Locomotion in Unstructured Environments",
        authors: ["C. L. Shek", "X. Wu", "W. A. Suttle", "C. Busart", "E. Zaroukian", "D. Manocha", "P. Tokekar", "A. S. Bedi"],
        venue: "IROS",
        year: 2024,
        abstract: "",
        link: "https://arxiv.org/pdf/2310.00481",
        code: "",
        pdf: "",
        keywords: ["robot locomotion", "natural language", "context-aware", "unstructured environments"]
    },
    {
        id: "iros-24-trustnavgpt-audio-nav",
        title: "TrustNavGPT: Trust-Driven Audio-Guided Robot Navigation under Uncertainty with Large Language Models",
        authors: ["X. Sun", "Y. Zhang", "X. Tang", "A. S. Bedi", "A. Bera"],
        venue: "IROS",
        year: 2024,
        abstract: "",
        link: "",
        code: "",
        pdf: "",
        keywords: ["robot navigation", "audio guidance", "uncertainty", "large language models", "trust"]
    },
    {
        id: "icml-24-piper-hierarchical-rl",
        title: "PIPER: Primitive-Informed Preference-based Hierarchical Reinforcement Learning via Hindsight Relabeling",
        authors: ["U. Singh", "W. A. Suttle", "B. M. Sadler", "V. P. Namboodiri", "A. S. Bedi"],
        venue: "ICML",
        year: 2024,
        abstract: "",
        link: "https://openreview.net/pdf/486d2e3f8b1d6cd84cc050e257c70fda5c2f6980.pdf",
        code: "",
        pdf: "",
        keywords: ["hierarchical reinforcement learning", "preference learning", "primitives", "hindsight relabeling"]
    },
    {
        id: "icml-24-maxmin-rlhf-alignment",
        title: "MaxMin-RLHF: Towards Equitable Alignment of Large Language Models with Diverse Human Preferences",
        authors: ["S. Chakraborty", "J. Qiu", "H. Yuan", "A. Koppel", "F. Huang", "D. Manocha", "A. S. Bedi", "M. Wang"],
        venue: "ICML",
        year: 2024,
        abstract: "",
        link: "https://arxiv.org/pdf/2402.08925",
        code: "",
        pdf: "",
        keywords: ["RLHF", "LLM alignment", "human preferences", "large language models", "equity"]
    },
    {
        id: "icml-24-ai-text-detection",
        title: "On the possibilities of ai-generated text detection",
        authors: ["S. Chakraborty*", "A. S. Bedi*", "S.", "Zhu", "B. An", "D. Manocha", "F. Huang"],
        venue: "ICML",
        year: 2024,
        abstract: "",
        link: "https://arxiv.org/pdf/2304.04736",
        code: "",
        pdf: "",
        keywords: ["AI-generated text", "text detection", "deep learning", "LLM"]
    },
    {
        id: "iclr-24-parl-policy-align",
        title: "PARL: A Unified Framework for Policy Alignment in Reinforcement Learning",
        authors: ["S. Chakraborty", "A. S. Bedi", "A. Koppel", "D. Manocha", "H. Wang", "M. Wang", "F. Huang"],
        venue: "ICLR",
        year: 2024,
        abstract: "",
        link: "https://arxiv.org/pdf/2308.02585.pdf",
        code: "",
        pdf: "",
        keywords: ["policy alignment", "reinforcement learning", "RL", "framework"]
    },
    {
        id: "icml-23-steering-model-based-rl",
        title: "STEERING: Stein Information Directed Exploration for Model-Based Reinforcement Learning",
        authors: ["S. Chakraborty", "A. S. Bedi", "A. Koppel", "M. Wang", "F. Huang", "D. Manocha"],
        venue: "ICML",
        year: 2023,
        abstract: "",
        link: "https://arxiv.org/pdf/2301.12038.pdf",
        code: "",
        pdf: "",
        keywords: ["model-based RL", "Stein information", "exploration", "reinforcement learning"]
    },
    {
        id: "icml-23-multilevel-montecarlo-rl",
        title: "Beyond Exponentially Fast Mixing in Average-Reward Reinforcement Learning via Multi-Level Monte Carlo Actor-Critic",
        authors: ["A. S. Bedi*", "W. Suttle*", "B. Patel", "B. Sadler", "A. Koppel", "D. Manocha"],
        venue: "ICML",
        year: 2023,
        abstract: "",
        link: "https://arxiv.org/pdf/2301.12083.pdf",
        code: "",
        pdf: "",
        keywords: ["reinforcement learning", "average reward", "Monte Carlo", "actor-critic"]
    },
    {
        id: "iclr-23-swift-federated-learning",
        title: "SWIFT: Rapid Decentralized Federated Learning via Wait-Free Model Communication",
        authors: ["M. Bornstein", "T. Rabbani", "E. Wang", "A. S. Bedi", "F. Huang"],
        venue: "ICLR",
        year: 2023,
        abstract: "",
        link: "https://openreview.net/pdf?id=jh1nCir1R3d",
        code: "",
        pdf: "",
        keywords: ["federated learning", "decentralized", "wait-free", "communication", "distributed systems"]
    },
    {
        id: "icra-23-sparse-rewards-rl",
        title: "Dealing with Sparse Rewards in Continuous Control Robotics via Heavy-Tailed Policy Optimization",
        authors: ["S.Chakraborty", "A. S. Bedi", "K. Weerakoon", "P. Poddar", "A. Koppel", "P. Tokekar", "D. Manocha"],
        venue: "ICRA",
        year: 2023,
        abstract: "",
        link: "https://arxiv.org/search/cs?searchtype=author&query=Bedi%2C+A+S",
        code: "",
        pdf: "",
        keywords: ["sparse rewards", "policy optimization", "robotics", "reinforcement learning", "heavy-tailed"]
    },
    {
        id: "icra-23-multi-robot-task-rl",
        title: "RTAW: An Attention Inspired Reinforcement Learning Method for Multi-Robot Task Allocation in Warehouse Environments",
        authors: ["A. Aggarwal", "A. S. Bedi", "D. Manocha"],
        venue: "ICRA",
        year: 2023,
        abstract: "",
        link: "https://arxiv.org/search/cs?searchtype=author&query=Bedi%2C+A+S",
        code: "",
        pdf: "",
        keywords: ["multi-robot", "task allocation", "warehouse", "attention", "reinforcement learning"]
    },
    {
        id: "icra-23-decentralized-exploration",
        title: "Decentralized Multi-agent Exploration with Limited Inter-agent Communications",
        authors: ["H. He", "A. Koppel", "A. S. Bedi", "D. Stilwell", "M. Farhood"],
        venue: "ICRA",
        year: 2023,
        abstract: "",
        link: "https://arxiv.org/search/cs?searchtype=author&query=Bedi%2C+A+S",
        code: "",
        pdf: "",
        keywords: ["decentralized", "multi-agent", "exploration", "communication", "robotics"]
    },
    {
        id: "aaai-23-constrained-rl",
        title: "Achieving Zero Constraint Violation for Constrained Reinforcement Learning via Conservative Natural Policy Gradient Primal-Dual Algorithm",
        authors: ["Q. Bai", "A. S. Bedi", "V. Aggarwal"],
        venue: "AAAI",
        year: 2023,
        abstract: "",
        link: "https://arxiv.org/search/cs?searchtype=author&query=Bai%2C+Q",
        code: "",
        pdf: "",
        keywords: ["constrained RL", "policy gradient", "primal-dual", "reinforcement learning"]
    },
    {
        id: "aaai-23-coreset-stein-rl",
        title: "Posterior Coreset Construction with Kernelized Stein Discrepancy for Model-Based Reinforcement Learning",
        authors: ["S.Chakraborty", "A. S. Bedi", "A. Koppel", "B. Sadler", "F. Huang", "P. Tokekar", "D. Manocha"],
        venue: "AAAI",
        year: 2023,
        abstract: "",
        link: "https://arxiv.org/search/cs?searchtype=author&query=Bedi%2C+A+S",
        code: "",
        pdf: "",
        keywords: ["coreset", "Stein discrepancy", "model-based RL", "reinforcement learning"]
    },
];

// People data
export interface Person {
    id: string;
    name: string;
    title: string;
    image: string;
    role: "faculty" | "phd" | "masters" | "undergrad" | "alumni" | "staff" | "collaborator" | "postdoc";
    bio: string;
    interests: string[];
    website?: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
    orcid?: string;
    scholar?: string;
    email?: string;
}

export const people: Person[] = [
    {
        id: "amrit-bedi",
        name: "Prof. Amrit Singh Bedi",
        title: "Assistant Professor, Lab Director, UCF",
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
        id: "avinash-reddy",
        name: "Avinash Reddy",
        title: "Ph.D. Student, UCF",
        image: "https://media.licdn.com/dms/image/v2/D5603AQGixIHCW1QQ3g/profile-displayphoto-shrink_400_400/B56ZTkOMB9HoAg-/0/1738995713129?e=1752710400&v=beta&t=oToLh1Au9jXXdckMWSPz2gCowmYWERpbArOyzPEiu0c", // No image URL provided
        role: "phd",
        bio: "Ph.D. student interested in AI alignment and diffusion models.",
        interests: [
            "AI alignment",
            "Reasoning",
            "Diffusion models"
        ],
        website: "avinashreddy.dev", // No personal website provided
        github: "https://github.com/avinashreddydev",
        twitter: "https://x.com/avinashreddydev", // No Twitter provided
        linkedin: "https://www.linkedin.com/in/avinashreddydev/",
        scholar: "https://scholar.google.com/citations?user=IlXEKrcAAAAJ&hl=en",
        email: "avinashreddy.idio@gmail.com"
    },
    {
        id: "souradip-chakraborty",
        name: "Souradip Chakraborty",
        title: "Ph.D. Student, UMD",
        image: "https://media.licdn.com/dms/image/v2/C5103AQFsBBuJQpVWgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1568575410679?e=1752710400&v=beta&t=yOic5lGWsbBia2jqWMtW3CuYdozSx8qrZPWVM1xHOzk", // No image URL provided
        role: "collaborator",
        bio: "Souradip Chakraborty is a Ph.D. student at the University of Maryland focused on developing principled reinforcement learning algorithms to align AI agents in adaptive environments. His work aims to ensure AI systems are safe, robust, and aligned with human behavior.",
        interests: [
            "Reinforcement Learning",
            "Alignment",
            "Language Models",
            "Optimization"
        ],
        website: "https://souradip-umd.github.io/",
        github: "https://github.com/souradip-chakraborty",
        twitter: "", // No Twitter provided
        linkedin: "https://www.linkedin.com/in/souradip-chakraborty/",
        scholar: "https://scholar.google.co.in/citations?hl=en&user=pvETm1wAAAAJ&view_op=list_works&sortby=pubdate",
        email: "schakra3@umd.edu"
    },
    {
        id: "soumyasuvra-ghosal",
        name: "Soumya Suvra Ghosal",
        title: "Ph.D. Student, UMD",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHeELGDGy7dhw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722836299945?e=1752710400&v=beta&t=Bypl9r5pr7QWwzAuuNsIJZwHOAvWd2lM2GNFeyf-dN0", // No image URL provided
        role: "collaborator",
        bio: "I am a Ph.D. student in the CS department at the University of Maryland, College Park. Prior to this, I completed my Master's in Computer Science at the University of Wisconsin-Madison. I am interested in the broad domain of LLM Alignment, and Trustworthy AI.",
        interests: ["LLM Alignment", "Trustworthy AI"],
        website: "https://soumya1612-rasha.github.io/Soumya/",
        github: "https://github.com/Soumya1612-Rasha",
        twitter: "", // No Twitter provided
        linkedin: "https://www.linkedin.com/in/soumya-suvra-ghosal-583691140/",
        scholar: "https://scholar.google.com/citations?user=zE8aFIwAAAAJ&hl=en",
        email: "sghosal@umd.edu"
    },


    {
        id: "soumik-ghosh",
        name: "Soumik Ghosh",
        title: "Ph.D. Student, UCF",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQEno77SkTKEhw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696221990946?e=1752710400&v=beta&t=fcM4omBLVFcVxertNpD53cFUnk5Ny1DjYV9XktbDKuM", // No image URL provided
        role: "phd",
        bio: "Soumik Ghosh is a Computer Science Ph.D. candidate at UCF researching generative models, diffusion alignment, and responsible AI, with a focus on machine unlearning. He holds a BS-MS in Physics and a PG diploma in condensed matter physics, and enjoys cooking, gardening, photography, and bass guitar.",
        interests: [
            "Generative Models",
            "Alignment of Diffusion Models",
            "Safety in T2I models",
            "Machine Unlearning"
        ],
        website: "", // No personal website provided
        github: "https://github.com/soumikg08",
        twitter: "", // No Twitter provided
        linkedin: "https://www.linkedin.com/in/soumikg08/",
        scholar: "https://scholar.google.com/citations?user=TPFV3hsAAAAJ&hl=en",
        email: "soumik.ghosh@ucf.edu"
    },



    {
        id: "prashant-trivedi",
        name: "Prashant Trivedi",
        title: "Post-doctoral Scholar, UCF",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQG1cVuJrtMdrQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667656459333?e=1752710400&v=beta&t=n-qrmTAD2l32rdpScn-ObAfheMh71aO0DID3B_7k-uI", // No image URL provided
        role: "postdoc",
        bio: "Prashant Trivedi is a post-doctoral scholar at UCF working closely with Prof. Amrit Singh Bedi. He received his Ph.D. from IIT Bombay under the supervision of Prof. N. Hemachandra. His research focuses on advancing decision-making under uncertainty, with an emphasis on both theoretical and practical aspects of machine learning, optimization, reinforcement learning (RL), multi-agent systems, and AI alignment.",
        interests: [
            "Reinforcement Learning (RL)",
            "Multi-Agent Reinforcement Learning (MARL)",
            "Optimization",
            "AI Alignment"
        ],
        website: "https://prashantrivedi.github.io/",
        github: "https://github.com/PrashanTrivedi",
        twitter: "", // No Twitter provided
        linkedin: "https://www.linkedin.com/in/prashant-trivedi-59784a143/",
        scholar: "https://scholar.google.com/citations?user=05_8-qUAAAAJ&hl=en",
        email: "prashant.trivedi@ucf.edu"
    },

    {
        id: "anirudh-thatipelli",
        name: "Anirudh Thatipelli",
        title: "Ph.D. Student, UCF",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQFRzTRdnyyu0A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723563969594?e=1752710400&v=beta&t=wBAmDxldNu0t8AZappBp6Zr5f30kQphPEnXFDGuGyBs", // No image URL provided
        role: "phd",
        bio: "Ph.D. student interested in AI alignment and diffusion models.",
        interests: [
            "AI alignment",
            "Reasoning",
            "Diffusion models"
        ],
        website: "", // No personal website provided
        github: "https://github.com/Anirudh257",
        twitter: "", // No Twitter provided
        linkedin: "https://www.linkedin.com/in/anirudh-thatipelli/",
        scholar: "https://scholar.google.com/citations?user=siY4W9gAAAAJ",
        email: "an555391@ucf.edu"
    },

    {
        id: "utsav-singh",
        name: "Utsav Singh",
        title: "Researcher, IIT Kanpur",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQE9II0AW0puqw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709489137998?e=1752710400&v=beta&t=1LhyLGpbDgIEnK2C7IUIf7ca4MqM3E0c9J-_UGYZsKM", // No image URL provided
        role: "postdoc",
        bio: "ML enthusiast trying to decipher and bridge the gap between theoretical machine learning and real-world applications.",
        interests: [
            "Reinforcement Learning",
            "AI Alignment",
            "Robotics",
            "LLMs"
        ],
        website: "", // No personal website provided
        github: "https://github.com/Utsavz/",
        twitter: "", // No Twitter provided
        linkedin: "https://www.linkedin.com/in/utsavz",
        scholar: "https://scholar.google.com/citations?user=VzkTu6kAAAAJ&hl=en&oi=ao",
        email: "utsavz@iitk.ac.in"
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

export interface News {
    id: string;
    title: string;
    date: Date;
    excerpt: string;
    link?: string;
}

export const news: News[] = [
    {
        id: "new-student-2025",
        title: "Welcoming a new PhD student to the lab",
        date: new Date("2025-08-20T12:00:00Z"),
        excerpt: "We're delighted to welcome a new PhD student, Jivjot Singh, joining our lab this Fall 2025 semester.",
    },
    {
        id: "new-paper-icml-2025",
        title: "New paper accepted at ICML 2025",
        date: new Date("2025-05-07T12:00:00Z"),
        excerpt: "We're excited to announce that our paper `Inference-Time Alignment of LLMs via User-Specified Multi-Criteria Transfer Decoding` has been accepted at ICML 2025. This work represents a inference-time alignment of LLMs that can be used to align LLMs with user-specified criteria.",
        link: "/blog/inference-time-alignment-multi-criteria"
    },
    {
        id: "new-paper-aaai-2024",
        title: "New paper accepted at AAAI 2024",
        date: new Date("2024-12-12T12:00:00Z"),
        excerpt: "Our paper titled `Align-Pro: A principled approach to alignment of LLMs` has been accepted at AAAI 2024. This work represents a principled approach to alignment of LLMs that can be used to align LLMs by employing a trainable prompter",
        link: "/blog/align-pro"
    },
    {
        id: "new-phd-student-2024",
        title: "Welcoming a PhD student to the lab",
        date: new Date("2024-08-19T12:00:00Z"),
        excerpt: "We're delighted to welcome a new PhD student, Avinash Reddy, joining our lab this fall semester. He will be working on the broad topic of `Alignment of Language Models`.",
    },
    {
        id: "launch-of-saferr-ai-lab",
        title: "Launch of SAFERR AI Lab",
        date: new Date("2024-08-19T12:00:00Z"),
        excerpt: "We're excited to announce the launch of SAFERR AI Lab. This lab is dedicated to the research of safety, reliability, and robustness of AI systems.",
    }
].sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort by date, newest first

export const programsData = {
  gsoc: {
    id: 'gsoc',
    name: 'Google Summer of Code',
    type: 'Open Source',
    mentorText: "Listen up. GSoC isn't just an internship; it's a golden ticket to the global tech elite. I've seen students go from unknown to getting direct offers from Google and Red Hat just because they merged a few PRs here. The secret? Don't wait until the application opens. Start contributing to your target organization in November. Be relentless. Be polite. Be visible.",
    eligibility: [
      "Must be 18 years or older.",
      "Must be a university student or a beginner to open source.",
      "No strict CGPA requirement—your code speaks for you."
    ],
    applicationProTips: [
      "Find an organization 3-4 months before the official timeline.",
      "Join their Discord/Slack and introduce yourself to the maintainers.",
      "Solve 3-5 'good first issues' before you even write your proposal.",
      "Write a proposal that proves you already understand their codebase architecture."
    ],
    officialLink: "https://summerofcode.withgoogle.com/"
  },
  lfx: {
    id: 'lfx',
    name: 'LFX Mentorship',
    type: 'Open Source',
    mentorText: "LFX is the hidden gem of open source. While everyone fights over GSoC, the real heavy hitters are at LFX working on Kubernetes, Linux kernel, and Hyperledger. This is enterprise-grade open source. The maintainers here are principal engineers at massive cloud companies. If you impress them, you don't just get a stipend, you get a career.",
    eligibility: [
      "Open to anyone, but students are highly preferred.",
      "Strong proficiency in C, Go, or Rust depending on the project.",
      "Familiarity with cloud-native technologies (Docker, Kubernetes)."
    ],
    applicationProTips: [
      "Master Git. I mean really master it (rebasing, cherry-picking).",
      "Read the documentation of the specific CNCF project you are targeting.",
      "Your cover letter should highlight your understanding of distributed systems.",
      "Submit small, high-quality PRs (even documentation fixes) before applying."
    ],
    officialLink: "https://lfx.linuxfoundation.org/mentorship/"
  },
  mlh: {
    id: 'mlh',
    name: 'MLH Hackathons',
    type: 'Open Source',
    mentorText: "Hackathons aren't about sleep deprivation; they are rapid prototyping bootcamps. MLH is the global league. Winning an MLH hackathon proves you can take an idea, build it under immense pressure, and pitch it like a founder. Recruiters look for hackathon winners because they know you aren't just a leetcode monkey—you are an actual builder.",
    eligibility: [
      "Current university students or recent graduates.",
      "No prior coding experience strictly required (great for beginners).",
      "Must abide by the MLH Code of Conduct."
    ],
    applicationProTips: [
      "Form a team with diverse skills: 1 UI/UX, 1 Frontend, 1 Backend/ML, 1 Pitcher.",
      "Don't build everything from scratch. Use APIs, Firebase, and existing libraries.",
      "The pitch is 50% of the score. Build a compelling narrative around your project.",
      "Focus on a clean, working core feature rather than 10 broken features."
    ],
    officialLink: "https://mlh.io/"
  },
  bounty: {
    id: 'bounty',
    name: 'Bug Bounty & CVEs',
    type: 'Cybersecurity',
    mentorText: "Bug bounty hunting is modern-day digital mercenary work. You are legally hacking Apple, Tesla, and the Pentagon. It's grueling, and you will face massive imposter syndrome. But the moment you find an IDOR or an RCE and get paid $10,000 for a weekend's work? It changes you. Earning a CVE in a major library makes you immortal in the security world.",
    eligibility: [
      "Absolutely no degree or age requirements.",
      "Must strictly follow the rules of engagement (Safe Harbor).",
      "Deep understanding of web protocols, OWASP Top 10, and networking."
    ],
    applicationProTips: [
      "Don't start on HackerOne public programs right away; they are too crowded.",
      "Look for Vulnerability Disclosure Programs (VDPs) first to build reputation.",
      "Automate your recon. Learn bash scripting, amass, subfinder, and nuclei.",
      "Write impeccable reports. A good PoC (Proof of Concept) video doubles your bounty."
    ],
    officialLink: "https://www.hackerone.com/"
  },
  mitacs: {
    id: 'mitacs',
    name: 'MITACS Globalink',
    type: 'Research',
    mentorText: "MITACS is your passport to North American academia. Canadian universities use this as a direct pipeline to recruit their master's and PhD students. If you want to do bleeding-edge AI research abroad with everything paid for, this is it. The trick isn't just having a good CGPA; it's aligning your past projects perfectly with the professor's current research papers.",
    eligibility: [
      "Pre-final year undergraduate student.",
      "CGPA > 8.0 (8.5+ highly recommended for AI/ML roles).",
      "Prior research experience or strong project portfolio."
    ],
    applicationProTips: [
      "You apply to 7 different projects. Do not pick randomly.",
      "Read at least 2 recent papers published by the professor for each project.",
      "In your rationale, explicitly state how your skills solve the bottleneck in their current research.",
      "Get a stellar Letter of Recommendation from a professor who actually knows you."
    ],
    officialLink: "https://www.mitacs.ca/en/programs/globalink/globalink-research-internship"
  },
  daad: {
    id: 'daad',
    name: 'DAAD WISE',
    type: 'Research',
    mentorText: "Germany is the engineering powerhouse of Europe, and DAAD is the golden key. What I love about DAAD is the immense independence you get. You aren't just an intern; you are treated as a visiting researcher. If you are serious about robotics, automotive AI, or heavy-duty ML engineering, a DAAD internship puts a stamp of absolute quality on your resume.",
    eligibility: [
      "Must be in the 5th or 6th semester of a 4-year B.Tech program.",
      "CGPA above 8.5 is generally expected.",
      "Must have an official invitation letter from a German professor."
    ],
    applicationProTips: [
      "The hardest part is getting the invitation letter. Start cold-emailing professors in August.",
      "Your cold email should be under 200 words. Attach a customized research proposal.",
      "Do not send mass emails. Read their latest publications and suggest an extension.",
      "Ensure your university issues a 'No Objection Certificate' (NOC) early."
    ],
    officialLink: "https://www.daad.de/en/"
  },
  eth: {
    id: 'eth',
    name: 'ETH Zurich Summer',
    type: 'Research',
    mentorText: "ETH Zurich. Einstein's alma mater. This is top 10 globally. The competition for their summer program is bloodthirsty. They don't just want smart students; they want prodigies. If you have publications in IEEE or NeurIPS, this is where you go. Surviving a summer here proves you have the intellectual stamina to handle a PhD anywhere on the planet.",
    eligibility: [
      "Open to undergrads and master's students globally.",
      "Exceptional academic record (Top 5% of your class).",
      "Demonstrated ability to conduct independent research."
    ],
    applicationProTips: [
      "Your Statement of Purpose (SOP) is everything. Don't write a generic sob story.",
      "Clearly articulate a complex technical problem you want to solve during the summer.",
      "Have a github repo with clean, undocumented, advanced code (PyTorch/CUDA).",
      "References must be from highly credible academics."
    ],
    officialLink: "https://inf.ethz.ch/studies/summer-research-fellowship.html"
  },
  cern: {
    id: 'cern',
    name: 'CERN Openlab',
    type: 'Research',
    mentorText: "You are dealing with petabytes of data from the Large Hadron Collider. CERN isn't just a physics lab; it's the birthplace of the World Wide Web and the ultimate testbed for distributed computing and quantum machine learning. Being an Openlab summer student is a flex that literally no company on earth will ignore.",
    eligibility: [
      "Completed at least 3 years of full-time studies at university level.",
      "Strong background in computing, data science, or engineering.",
      "Proficient in C++, Python, and distributed systems."
    ],
    applicationProTips: [
      "Highlight any experience you have with Big Data (Hadoop, Spark, Kafka).",
      "Familiarize yourself with ROOT (CERN's data analysis framework).",
      "Your CV must be hyper-technical. Focus on performance optimizations you've built.",
      "Prepare for a rigorous technical interview if shortlisted."
    ],
    officialLink: "https://openlab.cern/education/summer-student-programme"
  },
  caltech: {
    id: 'caltech',
    name: 'Caltech SURF',
    type: 'Research',
    mentorText: "Caltech is small, intense, and produces Nobel laureates like a factory. SURF is incredible because you draft the research proposal WITH the mentor before the summer even starts. It's a deep, collaborative process. If you want to work on JPL space rovers or quantum neural networks, there is no better place in the United States.",
    eligibility: [
      "Continuing undergraduate student.",
      "GPA of 2.5/4.0 minimum (though effectively much higher is needed).",
      "Must have a Caltech faculty mentor agree to sponsor you before applying."
    ],
    applicationProTips: [
      "You must identify and contact a Caltech mentor months in advance.",
      "Your initial email must pitch a concrete idea that fits their lab.",
      "The research proposal is heavily scrutinized. Write it like a professional grant.",
      "Be prepared to secure external funding if lab funding is limited."
    ],
    officialLink: "https://sfp.caltech.edu/programs/surf"
  },
  epfl: {
    id: 'epfl',
    name: 'EPFL Excellence',
    type: 'Research',
    mentorText: "Lausanne, Switzerland. EPFL is the MIT of Europe. The Excellence Fellowship is insanely prestigious. They throw you into labs working on Brain-Computer Interfaces, neuromorphic computing, and advanced cryptography. It's highly paid, visually stunning, and academically ruthless. Getting this means you are undeniably world-class.",
    eligibility: [
      "Enrolled in a bachelor's or master's program.",
      "Outstanding academic record.",
      "Strong interest in a specific EPFL lab's research domain."
    ],
    applicationProTips: [
      "Target specific labs and mention them in your application.",
      "Showcase any prior independent research or thesis work.",
      "Swiss academics value extreme precision. Your application should be flawless.",
      "Learn basic French (not mandatory, but shows cultural dedication)."
    ],
    officialLink: "https://www.epfl.ch/education/international/en/summer-internships/"
  },
  icpc: {
    id: 'icpc',
    name: 'ICPC World Finals',
    type: 'Competitive Programming',
    mentorText: "ICPC is the Olympics of programming. Winning a medal here guarantees you an interview at literally any HFT (High-Frequency Trading) firm or FAANG company on the planet. It proves you can solve mathematically brutal problems under extreme time pressure with absolute perfect syntax. It's not just coding; it's elite cognitive athletics.",
    eligibility: [
      "Must be an enrolled university student.",
      "Teams must consist of exactly three students and one coach.",
      "Extreme proficiency in C++ or Java and advanced data structures."
    ],
    applicationProTips: [
      "Start practicing as a team of 3 immediately. Synergy is more important than individual skill.",
      "Master Segment Trees, Dynamic Programming, and Graph Theory.",
      "Participate in every Codeforces Div 2/Div 1 round.",
      "Compete in your regional preliminaries to qualify for the World Finals."
    ],
    officialLink: "https://icpc.global/"
  },
  cp: {
    id: 'cp',
    name: 'Competitive Programming',
    type: 'Algorithmic Sport',
    mentorText: "If you want to breeze through Google or Citadel technical interviews, this is the way. Getting to Candidate Master on Codeforces or Guardian on LeetCode puts you in the top 1% of problem solvers globally. Companies will literally bypass the standard recruitment process and reach out to you directly if your rating is high enough.",
    eligibility: [
      "Open to absolutely everyone.",
      "A laptop, an internet connection, and immense willpower.",
      "Patience to fail hundreds of times before seeing the 'Accepted' green text."
    ],
    applicationProTips: [
      "Do not just solve easy problems. You only grow when you struggle with problems slightly above your rating.",
      "After a contest, you MUST upsolve (solve the problems you couldn't solve during the contest).",
      "Learn C++ STL (Standard Template Library) intimately.",
      "Follow the CSES Problem Set to build your foundation."
    ],
    officialLink: "https://codeforces.com/"
  }
};

export const COMPANY = {
  name: "Nautilus Research & Intelligence Consultancy",
  tagline: "Polymaths & Generalists",
  latinTagline: "Omnium Artium Periti",
  founder: "Stanley Tembo, BPharm",
  location: "Lusaka, Zambia",
  contact: {
    whatsapp: "+260 962 450 788",
    email: "tembstan.ly@gmail.com",
    whatsappLink: "https://wa.me/260962450788",
  },
};

export const MISSION =
  "To provide integrated research and analytical services for students and organizations who need rigorous thinking across disciplines — delivering expert guidance without the overhead of assembling multiple specialists.";

export const VALUES = [
  {
    title: "Rigor",
    description: "Academic and professional standards in everything we do.",
  },
  {
    title: "Clarity",
    description: "Complex ideas made accessible without oversimplification.",
  },
  {
    title: "Integration",
    description: "Cross-disciplinary thinking that sees the whole picture.",
  },
  {
    title: "Integrity",
    description: "Honest about what we can and cannot do.",
  },
];

export const VALUE_PROPS = {
  students: {
    quote:
      "I help students turn research panic into a clear path from proposal to successful defense.",
    label: "For Students",
  },
  organizations: {
    quote:
      "I help organizations complete research and win contracts without assembling a team of specialists.",
    label: "For Organizations",
  },
  universal: {
    quote:
      "I'm a pharmacist, researcher, and educator — I help people think through complex problems rigorously.",
    label: "Universal",
  },
};

export const REASONS_TO_CHOOSE = [
  {
    title: "One point of contact",
    desc: "No coordination overhead across multiple vendors.",
  },
  {
    title: "Integrated capability",
    desc: "Research, analysis, and writing under one roof.",
  },
  {
    title: "Rigorous standards",
    desc: "Academic and regulatory quality without academic timelines.",
  },
  {
    title: "Fixed pricing",
    desc: "No hourly billing surprises.",
  },
];

export const SERVICES = [
  {
    target: "Students",
    quote: VALUE_PROPS.students.quote,
    narrative: "You're smart enough to be here. But somewhere between the research question and the final draft, things got tangled. The methodology chapter keeps getting sent back. The statistics feel like a foreign language. Your supervisor's feedback is vague. The deadline is real.\n\nI've been in that room with dozens of students. Here's what I've learned: the problem is rarely that you're not capable. It's that no one showed you the structure.",
    items: [
      {
        title: "Thesis Design & Supervision",
        description: "From refining your research question to defending your methodology choices. I'll push back like a good supervisor should.",
      },
      {
        title: "Research Methodology",
        description: "Sampling strategies, study designs, ethical clearance applications. The \"why\" behind every choice, so you can defend it.",
      },
      {
        title: "Data Analysis",
        description: "R, SPSS, Excel, Python. Not just running the tests—understanding what your results actually mean and how to present them.",
      },
      {
        title: "One-on-One Tutoring",
        description: "Statistics, research methods, programming fundamentals. We go at your pace until it clicks.",
      },
      {
        title: "The Panic Package",
        description: "You have two weeks, a mess of data, and a deadline. We triage, prioritize, and get you across the line.",
      },
    ],
  },
  {
    target: "Organizations",
    quote: VALUE_PROPS.organizations.quote,
    narrative: "You need a situational analysis, a baseline study, a tender response, a policy brief. You need it rigorous enough to withstand scrutiny and clear enough that decision-makers actually read it.\n\nYou could hire a research firm (expensive, slow), assemble freelancers (coordination nightmare), or task an internal team (they have day jobs).\n\nOr you could work with one generalist who handles research design, data collection oversight, analysis, and writing—all under one roof.",
    items: [
      {
        title: "Research Design",
        description: "Study protocols, sampling frameworks, data collection instruments. Built to answer your actual question.",
      },
      {
        title: "Data Analysis & Visualization",
        description: "From raw data to insights. Clear charts, defensible statistics, interpretations that inform decisions.",
      },
      {
        title: "Technical Writing",
        description: "Reports, proposals, briefs. Academic rigor without academic jargon.",
      },
      {
        title: "Tender Preparation",
        description: "Compliance matrices, technical proposals, pricing schedules. I've seen what wins and what gets disqualified on page two.",
      },
      {
        title: "Literature Reviews",
        description: "Systematic, scoping, narrative. Properly structured, properly cited.",
      },
    ],
  },
];

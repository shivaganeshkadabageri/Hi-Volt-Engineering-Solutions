export interface AnalysisEntry {
  id: string;
  createdAt: string;
  company: string;
  role: string;
  jdText: string;
  extractedSkills: {
    coreCS: string[];
    languages: string[];
    web: string[];
    data: string[];
    cloud: string[];
    testing: string[];
    other: string[];
  };
  roundMapping: { roundTitle: string; focusAreas: string[]; whyItMatters: string }[];
  checklist: { roundTitle: string; items: string[] }[];
  plan7Days: { day: string; focus: string; tasks: string[] }[];
  questions: string[];
  baseScore: number;
  skillConfidenceMap: Record<string, 'know' | 'practice'>;
  finalScore: number;
  updatedAt: string;
}

const SKILL_CATEGORIES = {
  coreCS: ['DSA', 'OOP', 'DBMS', 'OS', 'Networks', 'System Design', 'Algorithms', 'Data Structures'],
  languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'C#', 'Go', 'Rust'],
  web: ['React', 'Next.js', 'Node.js', 'Express', 'REST', 'GraphQL', 'Angular', 'Vue', 'HTML', 'CSS'],
  data: ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Kafka', 'Elasticsearch'],
  cloud: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Terraform'],
  testing: ['Selenium', 'Cypress', 'Playwright', 'JUnit', 'PyTest', 'Jest'],
};

const ENTERPRISE_COMPANIES = ['Amazon', 'Microsoft', 'Google', 'Meta', 'Netflix', 'Apple', 'TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant', 'IBM', 'Oracle', 'JPMorgan', 'Goldman Sachs'];

export function analyzeJD(text: string, company: string = '', role: string = ''): Partial<AnalysisEntry> {
  const result: any = {
    extractedSkills: { coreCS: [], languages: [], web: [], data: [], cloud: [], testing: [], other: [] },
  };

  const lowerText = text.toLowerCase();
  
  // 1. Skill Extraction
  let foundAny = false;
  Object.entries(SKILL_CATEGORIES).forEach(([category, skills]) => {
    skills.forEach(skill => {
      // Regex bounded by non-alphanumeric or exact start/end to avoid partial match (like 'go' in 'good')
      const regex = new RegExp(`(?:[^a-zA-Z0-9]|^)(${skill.toLowerCase()})(?:[^a-zA-Z0-9]|$)`, 'i');
      if (regex.test(lowerText) || lowerText.includes(skill.toLowerCase())) {
        // Safe check for includes vs regex: e.g. "go" needs regex, "C++" needs exact includes because + is non-alphanumeric... 
        // We will just use includes but check cautiously, or simple includes for safety for heuristic.
        // Let's refine:
        let isMatch = false;
        if (['Go', 'C', 'R'].includes(skill)) {
           isMatch = regex.test(lowerText);
        } else {
           isMatch = lowerText.includes(skill.toLowerCase());
        }

        if (isMatch) {
          result.extractedSkills[category].push(skill);
          foundAny = true;
        }
      }
    });
  });

  if (!foundAny) {
    result.extractedSkills.other = ["Communication", "Problem solving", "Basic coding", "Projects"];
  }

  const allSkills = Object.values(result.extractedSkills).flat() as string[];
  const hasReact = allSkills.includes('React');
  const hasSQL = allSkills.includes('SQL');
  const hasNode = allSkills.includes('Node.js');
  const hasDSA = allSkills.includes('DSA') || allSkills.includes('Data Structures');

  // 2. Company Intel & Round Mapping
  const isEnterprise = ENTERPRISE_COMPANIES.some(c => company.toLowerCase().includes(c.toLowerCase()));
  
  if (isEnterprise || (hasDSA && allSkills.length < 5)) {
    result.roundMapping = [
      { roundTitle: "Round 1: Online Test", focusAreas: ["DSA", "Aptitude"], whyItMatters: "Filters out 80% candidates; proves logical baseline." },
      { roundTitle: "Round 2: Technical Interview", focusAreas: ["DSA", "Core CS"], whyItMatters: "Assesses raw problem-solving speed and memory constraints." },
      { roundTitle: "Round 3: Tech + Projects", focusAreas: ["Resume Drill", "System Design"], whyItMatters: "Verifies you actually built your projects." },
      { roundTitle: "Round 4: Managerial / HR", focusAreas: ["Behavioral", "Culture"], whyItMatters: "Checks team fit and long-term retention." }
    ];
  } else {
    result.roundMapping = [
      { roundTitle: "Round 1: Practical Coding", focusAreas: ["Take-home assignment", "Live Debugging"], whyItMatters: "Startups need you to build from day 1." },
      { roundTitle: "Round 2: System Discussion", focusAreas: ["Architecture", "Stack selection"], whyItMatters: "Assesses how you scale minimum viable products." },
      { roundTitle: "Round 3: Culture Fit / Founder", focusAreas: ["Vision alignment", "Autonomy"], whyItMatters: "Can you survive in ambiguity?" }
    ];
  }

  // 3. Checklist Generation
  result.checklist = result.roundMapping.map((r: any) => ({
    roundTitle: r.roundTitle,
    items: [
      `Review ${r.focusAreas[0]} basics`,
      `Practice 5 problems on ${r.focusAreas.join(' and ')}`,
      `Prepare 2 stories for ${r.roundTitle.includes('HR') || r.roundTitle.includes('Culture') ? 'behavioral' : 'technical'} deep dive`,
      `Draft answers for "Why this role?"`,
      `Mock test simulation`
    ]
  }));

  // 4. 7-Day Plan
  result.plan7Days = [
    { day: "Day 1-2", focus: "Basics + Core", tasks: ["Revise OOP & DBMS", "Set up environment", "Review old projects"] },
    { day: "Day 3-4", focus: "DSA + Coding", tasks: ["Practice Arrays & Strings", "Solve 10 medium LC", "Mock test 1"] },
    { day: "Day 5", focus: "Project Alignment", tasks: ["Update Resume", "Prepare STAR method stories", hasReact ? "Revise React state & hooks" : "Review backend architecture"] },
    { day: "Day 6", focus: "Mock Interview Prep", tasks: ["Record a mock interview", "Review system design concepts", hasSQL ? "Write complex JOIN queries" : "Review NoSQL schemas"] },
    { day: "Day 7", focus: "Revision", tasks: ["Go over weak areas", "Rest and hydrate", "Organize workspace"] },
  ];

  // 5. Questions Gen
  result.questions = [
    allSkills.length > 0 ? `How would you utilize ${allSkills[0]} in a scalable environment?` : "Walk me through your most complex project.",
    hasReact ? "Explain state management options and when to use Context vs Redux/Zustand." : "How do you handle asynchronous operations and error states?",
    hasSQL ? "Explain indexing and when it helps vs when it hurts." : "How do you ensure data consistency in a distributed system?",
    hasNode ? "Explain the event loop and how it handles concurrency." : "What is your approach to securing an API?",
    hasDSA ? "How would you optimize search in a sorted vs unsorted dataset?" : "Describe a time you optimized poorly performing code.",
    "Tell me about a time you disagreed with a team decision.",
    "How do you keep up with new technology?",
    "Explain [Project] deeply - what was the hardest technical challenge?",
    "How do you handle failing tests in CI/CD pipeline?",
    "What happens when you type google.com in the browser?"
  ];

  // 6. Base Score Calculation
  let baseScore = 35;
  const categoriesPresent = Object.keys(result.extractedSkills).filter((k) => k !== 'other' && result.extractedSkills[k].length > 0).length;
  baseScore += categoriesPresent * 5; // max 30
  if (company.trim().length > 0) baseScore += 10;
  if (role.trim().length > 0) baseScore += 10;
  if (text.length > 800) baseScore += 10;
  
  if (baseScore > 100) baseScore = 100;
  
  result.baseScore = baseScore;
  result.finalScore = baseScore;
  
  // 7. Initialize Map
  result.skillConfidenceMap = {};
  allSkills.forEach(s => {
    result.skillConfidenceMap[s] = 'practice';
  });

  return result;
}

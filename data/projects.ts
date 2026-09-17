// The shape of one project. string[] means a list of strings; null means no video yet.
export type Project = {
  title: string;
  status: "ongoing" | "completed";
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  // Optional: add a full https:// URL to show a Visit Site link.
  liveUrl?: string;
  youtubeId: string | null;
};

// Add a project here to display another card on the Projects page.
// Replace null with the video's ID (the part after "v=" in a YouTube URL).
// Project[] requires every entry to follow the type above. Array order is display order.
// Change status to "completed" when an ongoing project is finished.
export const projects: Project[] = [
  {
    title: "SpendMe",
    status: "ongoing",
    category: "In development",
    // Replace this temporary description with your project overview.
    description: "SpendMe is an iOS personal finance app designed to help users understand where their money is going and make more confident spending decisions.",
    technologies: ["Swift", "Supabase", "Next.js", "React", "Typescript",
      "Tailwind", "Github"
    ],
    githubUrl: null,
    youtubeId: "XCGkqnu2Xfg",
    liveUrl: "https://spendme.org/"
    // Add liveUrl: "https://your-site-address" when ready.
  },
  {
    status: "completed",
    title: "Distributed Bulletin Board",
    category: "Networks & systems",
    description:
      "A shared bulletin board where multiple clients can post, find, and pin notes. A custom TCP protocol and synchronized operations keep the board consistent while clients connect through a Java Swing interface.",
    technologies: ["Java", "TCP Sockets", "Multithreading", "Swing"],
    githubUrl: "https://github.com/xxSahil/Bulliten-Board-System",
    youtubeId: "YkI4n7fMtM0",
  },
  {
    status: "completed",
    title: "BudgetBridge",
    category: "Full-stack development",
    description:
      "A team-built expense tracker for recording transactions, organizing spending, and reviewing financial summaries. I contributed aggregation queries and the reporting workflow, connecting stored transactions to useful summaries.",
    technologies: ["JavaScript", "HTML / CSS", "Node.js", "MySQL"],
    githubUrl: "https://github.com/xxSahil/budgetbridge-expense-tracker",
    youtubeId: null,
  },
  {
    status: "completed",
    title: "Zero-Shot & Few-Shot Classification",
    category: "Computer vision",
    description:
      "An image classification experiment comparing CLIP text prompts with three example images per class. Side-by-side probability charts show how the two approaches identify dogs, cars, and people.",
    technologies: ["Python", "PyTorch", "CLIP", "Matplotlib"],
    githubUrl: "https://github.com/xxSahil/Zero-shot-Few-shot-Image-Processing",
    youtubeId: "ikoGYH5hvfM",
  },
  {
    status: "completed",
    title: "N-Puzzle Solver",
    category: "Artificial intelligence",
    description:
      "A sliding-puzzle solver built around A* search. Experiments compare Misplaced Tile, Manhattan Distance, and Linear Conflict heuristics to explore how each affects search time and the number of states explored.",
    technologies: ["Python", "A* Search", "Heuristics"],
    githubUrl: "https://github.com/xxSahil/N-Puzzle-Solver---AI-Search-Algorithm",
    youtubeId: "9zz0-Rpuj68",
  },
];

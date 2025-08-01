export type Citation = {
  title: string;
  authors: string[];
  venue: string;
  bib?: string;
  text?: string;
  deck?: string;
  errata?: string;
};

export const CITATIONS: Citation[] = [
  {
    title:
      "Compiler-Driven FPGA Virtualization with Synergy (Research Summary)",
    authors: [
      "Joshua Landgraf",
      "Tiffany Yang",
      "Will Lin",
      "Christopher Rossbach",
      "Eric Schkufza",
    ],
    venue: "Communications of the ACM Research Highlights, May 2024",
    bib: "https://dblp.org/rec/journals/cacm/LandgrafYLRS24.html?view=bibtex",
  },
  {
    title: "Compiler-Driven FPGA Virtualization with Synergy",
    authors: [
      "Joshua Landgraf",
      "Tiffany Yang",
      "Will Lin",
      "Christopher Rossbach",
      "Eric Schkufza",
    ],
    venue: "ASPLOS 2021",
    bib: "https://dblp.org/rec/conf/asplos/LandgrafYLRS21.html?view=bibtex",
    text: "asplos_21.pdf",
  },
  {
    title:
      "Just-in-Time Compilation for Verilog --- A New Technique for Improving the FPGA Programming Experience",
    authors: ["Eric Schkufza", "Michael Wei", "Christopher Rossbach"],
    venue: "ASPLOS 2019",
    bib: "https://dblp.uni-trier.de/rec/bibtex/conf/asplos/SchkufzaWR19",
    text: "asplos_19.pdf",
    deck: "asplos_19.pdf",
  },
  {
    title:
      "Sharing, Protection and Compatibility for Reconfigurable Fabric with AmorphOS",
    authors: [
      "Ahmed Khawaja",
      "Joshua Landgraf",
      "Rohith Prakash",
      "Michael Wei",
      "Eric Schkufza",
      "Christopher Rossbach",
    ],
    venue: "OSDI 2018",
    bib: "https://dblp.uni-trier.de/rec/bibtex/conf/asplos/SchkufzaWR19",
  },
  {
    title:
      "A Compiler-Insensitive Technique for Identifying Third-Party Components in x86-64 Binaries",
    authors: ["Berkeley Churchill", "Eric Schkufza"],
    venue: "VMware Research Technical Report 2017",
    bib: "vmware_17.bib",
  },
  {
    title: "Stochastic Program Optimization (Research Summary)",
    authors: ["Eric Schkufza", "Rahul Sharma", "Alex Aiken"],
    venue: "Communications of the ACM Research Highlights, February 2016",
    bib: "https://dblp.org/rec/journals/cacm/Schkufza0A16.html?view=bibtex",
  },
  {
    title:
      "Stratified Synthesis: Automatically Learning the x86-64 Instruction Set",
    authors: ["Stefan Heule", "Eric Schkufza", "Rahul Sharma", "Alex Aiken"],
    venue: "PLDI 2016",
    bib: "http://dblp.uni-trier.de/rec/bibtex/conf/pldi/HeuleS0A16",
    text: "pldi_16.pdf",
  },
  {
    title:
      "A Sampling-Based Approach to Accelerating Queries in Log Management Systems",
    authors: ["Tal Wagner", "Eric Schkufza", "Udi Wieder"],
    venue: "SPLASH 2016",
    bib: "http://dblp.uni-trier.de/rec/bibtex/conf/oopsla/WagnerSW16",
  },
  {
    title: "NVMOVE: Helping Programmers Move to Byte-Based Persistence",
    authors: [
      "Himanshu Chauhan",
      "Irina Calciu",
      "Vijay Chidambaram",
      "Eric Schkufza",
      "Onur Mutlu",
      "Pratap Subrahmanyam",
    ],
    venue: "INFLOW@OSDI 2016",
    bib: "http://dblp.uni-trier.de/rec/bibtex/conf/osdi/ChauhanCCSMS16",
  },
  {
    title: "Conditionally Correct Superoptimization",
    authors: [
      "Rahul Sharma",
      "Eric Schkufza",
      "Berkeley R. Churchill",
      "Alex Aiken",
    ],
    venue: "OOPSLA 2015",
    bib: "http://dblp.uni-trier.de/rec/bibtex/conf/oopsla/0001SCA15",
    text: "oopsla_15.pdf",
  },
  {
    title: "Stochastic Program Optimization for x86_64 Binaries",
    authors: ["Eric Schkufza"],
    venue: "Stanford University Thesis 2015",
    bib: "thesis.bib",
    text: "thesis.pdf",
    deck: "defense.pdf",
  },
  {
    title:
      "Stochastic Optimization of Floating-Point Programs with Tunable Precision",
    authors: ["Eric Schkufza", "Rahul Sharma", "Alex Aiken"],
    venue: "PLDI 2014",
    bib: "http://dblp.uni-trier.de/rec/bibtex/conf/pldi/Schkufza0A14",
    text: "pldi_14.pdf",
    deck: "pldi_14.pdf",
  },
  {
    title: "Optimizing Out Overcomputation",
    authors: ["Eric Schkufza", "Alex Aiken"],
    venue: "APPROX 2014",
    bib: "approx_14.bib",
  },
  {
    title: "Quantitative Binary Synthesis",
    authors: [
      "Eric Schkufza",
      "Rahul Sharma",
      "Berkeley R. Churchill",
      "Alex Aiken",
    ],
    venue: "Stanford University Technical Report 2014",
    bib: "stanford_14.bib",
  },
  {
    title: "Data-Driven Equivalence Checking",
    authors: [
      "Rahul Sharma",
      "Eric Schkufza",
      "Berkeley R. Churchill",
      "Alex Aiken",
    ],
    venue: "OOPSLA 2013",
    bib: "http://dblp.uni-trier.de/rec/bibtex/conf/oopsla/0001SCA13",
    text: "oopsla_13.pdf",
  },
  {
    title: "Stochastic Superoptimization",
    authors: ["Eric Schkufza", "Rahul Sharma", "Alex Aiken"],
    venue: "ASPLOS 2013",
    bib: "http://dblp.uni-trier.de/rec/bibtex/conf/asplos/Schkufza0A13",
    text: "asplos_13.pdf",
    deck: "asplos_13.pdf",
    errata: "asplos_13.txt",
  },
  {
    title: "Interactive Furniture Layout Using Interior Design Guidelines",
    authors: [
      "Paul Merrell",
      "Eric Schkufza",
      "Zeyang Li",
      "Maneesh Agrawala",
      "Vladlen Koltun",
    ],
    venue: "SIGGRAPH 2011",
    bib: "http://dblp.uni-trier.de/rec/bibtex/journals/tog/MerrellSLAK11",
    text: "siggraph_11.pdf",
  },
  {
    title:
      "Programming the Memory Hierarchy Revisited: Supporting Irregular Parallelism in Sequoia",
    authors: ["Michael Bauer", "John Clark", "Eric Schkufza", "Alex Aiken"],
    venue: "PPOPP 2011",
    bib: "http://dblp.uni-trier.de/rec/bibtex/conf/ppopp/BauerCSA11",
    text: "ppopp_11.pdf",
  },
  {
    title: "Visage: A Domain-Specific Language for Document Feature Extraction",
    authors: ["Eric Schkufza", "Trishul Chilimbi", "James Larus"],
    venue: "Microsoft Research Technical Report 2011",
    bib: "msr_11.bib",
  },
  {
    title: "Computer-Generated Residential Building Layouts",
    authors: ["Paul Merrell", "Eric Schkufza", "Vladlen Koltun"],
    venue: "SIGGRAPH ASIA 2010",
    bib: "http://dblp.uni-trier.de/rec/bibtex/journals/tog/MerrellSK10",
    text: "siggraph_asia_10.pdf",
  },
  {
    title: "Factoring General Games using Propositional Automata",
    authors: [
      "Evan Cox",
      "Eric Schkufza",
      "Ryan Madsen",
      "Michael R. Genesereth",
    ],
    venue: "GIGA 2009",
    bib: "giga_09.bib",
  },
  {
    title:
      "Propositional Automata and Cell Automata: Representational Frameworks for Discrete Dynamic Systems",
    authors: ["Eric Schkufza", "Nathaniel Love", "Michael R. Genesereth"],
    venue: "AI 2008",
    bib: "http://dblp.uni-trier.de/rec/bibtex/conf/ausai/SchkufzaLG08",
  },
  {
    title: "Game Description Language Specification",
    authors: [
      "Nat Love",
      "Tim Hinrichs",
      "David Haley",
      "Eric Schkufza",
      "Michael R. Genesereth",
    ],
    venue: "Stanford University Technical Report 2008",
    bib: "stanford_08.bib",
  },
  {
    title: "Decomposition of Games for Efficient Reasoning",
    authors: ["Eric Schkufza"],
    venue: "SARA 2008",
    bib: "http://dblp.uni-trier.de/rec/bibtex/conf/sara/Schkufza07",
  },
];

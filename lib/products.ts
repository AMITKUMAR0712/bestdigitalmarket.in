export type ProductFamily = "Business Software" | "Education Products" | "Custom Systems";

export type ProductScreen = {
  image: string;
  width: number;
  height: number;
  caption: string;
};

export type Product = {
  slug: string;
  family: ProductFamily;
  name: string;
  tag: string;
  whatItDoes: string;
  coreModules: string[];
  problemItSolves: string;
  bestSuitedFor: string;
  businessOutcome: string;
  worksWellWith: string[];
  dashboardScreen: ProductScreen;
  detailScreen: ProductScreen;
  mobileCaption: string;
};

export const productOverviewStats = {
  readyProducts: 10,
  screenPreviews: 30,
  solutionCategories: 3,
  customisable: "100%",
};

export const productFamilies: { title: ProductFamily; description: string }[] = [
  {
    title: "Business Software",
    description: "Operational systems for customers, resources, people and revenue.",
  },
  {
    title: "Education Products",
    description: "Purpose-built platforms for institutes, schools and assessment.",
  },
  {
    title: "Custom Systems",
    description: "Built around requirements that no standard product covers.",
  },
];

export const products: Product[] = [
  {
    slug: "crm-software",
    family: "Business Software",
    name: "CRM Software",
    tag: "LEAD & SALES",
    whatItDoes:
      "Keeps every enquiry, customer, call and follow-up inside one controlled system instead of scattered spreadsheets and chat threads. Leads are captured from every source, assigned to the right owner, moved through defined pipeline stages and reviewed on sales dashboards.",
    coreModules: [
      "Lead capture from web, calls, ads",
      "Auto-assignment to sales owners",
      "Stage-wise sales pipeline",
      "Follow-up reminders & tasks",
      "Complete customer history",
      "Quotation & proposal tracking",
      "Role-based staff access",
      "Sales performance dashboard",
      "Bulk import / export",
    ],
    problemItSolves:
      "Leads go cold because follow-ups are manual, customer history sits with individuals, and owners cannot see team activity in one place.",
    bestSuitedFor: "Real estate teams, education businesses, clinics, agencies, manufacturers and multi-person service teams.",
    businessOutcome: "Higher enquiry-to-sale conversion, zero missed follow-ups and clear visibility of who is doing what.",
    worksWellWith: ["Billing Software", "Custom Software", "Real Estate CRM"],
    dashboardScreen: {
      image: "/products/crm-software-dashboard.png",
      width: 862,
      height: 444,
      caption: "Lead pipeline view with source-wise capture, owner assignment and stage tracking.",
    },
    detailScreen: {
      image: "/products/crm-software-detail.png",
      width: 760,
      height: 732,
      caption: "Lead record with full interaction history, ownership and next-action tracking.",
    },
    mobileCaption: "Sales team mobile app for field follow-ups and on-the-go lead updates.",
  },
  {
    slug: "erp-software",
    family: "Business Software",
    name: "ERP Software",
    tag: "OPERATIONS",
    whatItDoes:
      "Connects departments that normally work in isolation – purchase, inventory, production, sales, accounts and reporting – so a single entry flows through the whole chain instead of being re-typed at every step.",
    coreModules: [
      "Department & workflow control",
      "Inventory and stock movement",
      "Purchase & vendor management",
      "Order and dispatch tracking",
      "Production / job-work modules",
      "Accounts and financial reports",
      "Approval hierarchies",
      "Resource allocation",
      "Consolidated MIS dashboard",
    ],
    problemItSolves: "Duplicate data entry across departments, stock mismatches, delayed approvals and no single source of truth for management reporting.",
    bestSuitedFor: "Manufacturing units, trading and distribution, logistics, and organisations running several departments or locations.",
    businessOutcome: "Faster operational cycles, accurate stock and cost figures, and management reports available on demand.",
    worksWellWith: ["Billing Software", "HRMS Software", "Custom Software"],
    dashboardScreen: {
      image: "/products/erp-software-dashboard.png",
      width: 758,
      height: 397,
      caption: "Operations dashboard showing stock position, dispatch trend and pending approvals.",
    },
    detailScreen: {
      image: "/products/erp-software-detail.png",
      width: 755,
      height: 751,
      caption: "Inventory analytics showing stock health, value trend and warehouse-wise distribution.",
    },
    mobileCaption: "Supervisor app for stock checks, approvals and dispatch confirmation on the floor.",
  },
  {
    slug: "hrms-software",
    family: "Business Software",
    name: "HRMS Software",
    tag: "PEOPLE & PAYROLL",
    whatItDoes:
      "Handles the full employee lifecycle from joining to exit – records, attendance, leave, salary and performance – with a self-service portal so staff raise their own requests instead of routing everything through the HR desk.",
    coreModules: [
      "Employee master records",
      "Biometric / app attendance",
      "Leave application & approval",
      "Shift and roster planning",
      "Payroll and salary slips",
      "Statutory deduction handling",
      "Employee self-service portal",
      "Performance & appraisal tracking",
      "HR reports and registers",
    ],
    problemItSolves: "Attendance registers and salary sheets maintained manually, leave approvals lost over chat, and payroll errors discovered only after disbursement.",
    bestSuitedFor: "Corporate offices, manufacturing units, retail chains, hospitals and any organisation with a growing employee count.",
    businessOutcome: "Payroll processed in hours instead of days, transparent attendance and leave records, and far less HR paperwork.",
    worksWellWith: ["ERP Software", "Billing Software", "Custom Software"],
    dashboardScreen: {
      image: "/products/hrms-software-dashboard.png",
      width: 755,
      height: 395,
      caption: "Daily attendance register with shift tracking and payroll cycle status.",
    },
    detailScreen: {
      image: "/products/hrms-software-detail.png",
      width: 752,
      height: 749,
      caption: "Employee record combining attendance, leave balance, payroll and appraisal history.",
    },
    mobileCaption: "Employee self-service app for punch-in, leave requests and salary slips.",
  },
  {
    slug: "billing-software",
    family: "Business Software",
    name: "Billing Software",
    tag: "INVOICE & PAYMENTS",
    whatItDoes:
      "Generates professional invoices, tracks what has been paid and what is outstanding, and keeps billing history organised for accounting and audit. Recurring bills and payment reminders run automatically without manual chasing.",
    coreModules: [
      "Invoice & estimate creation",
      "Tax-compliant billing formats",
      "Payment and receipt tracking",
      "Outstanding / due register",
      "Recurring & subscription billing",
      "Automated payment reminders",
      "Customer ledger statements",
      "Expense recording",
      "Revenue and collection reports",
    ],
    problemItSolves: "Invoices raised in spreadsheets, payments tracked from memory, and month-end reconciliation taking days with unclear outstanding figures.",
    bestSuitedFor: "Service businesses, consultants, retail and wholesale shops, agencies and freelancing professionals.",
    businessOutcome: "Faster collections, professional client-facing documents and an accurate, always-current picture of receivables.",
    worksWellWith: ["CRM Software", "ERP Software", "Coaching Management Software"],
    dashboardScreen: {
      image: "/products/billing-software-dashboard.png",
      width: 753,
      height: 398,
      caption: "Invoice register with payment status, outstanding balance and collection trend.",
    },
    detailScreen: {
      image: "/products/billing-software-detail.png",
      width: 755,
      height: 718,
      caption: "Invoice view with payment history, balance tracking and automated reminder log.",
    },
    mobileCaption: "Mobile billing app for raising invoices and recording payments on the move.",
  },
  {
    slug: "coaching-management-software",
    family: "Education Products",
    name: "Coaching Management Software",
    tag: "INSTITUTE ERP",
    whatItDoes:
      "A complete institute operating system covering admissions, batches, fee collection, attendance, tests and staff – designed to run single-branch as well as multi-branch coaching operations from one login.",
    coreModules: [
      "Enquiry & admission management",
      "Student profiles and documents",
      "Batch, timing & faculty mapping",
      "Fee plans, instalments, receipts",
      "Due tracking and reminders",
      "Batch-wise attendance",
      "Test scheduling & marks entry",
      "Result analysis and report cards",
      "Faculty & staff records",
      "Parent / student login portal",
      "Multi-branch access control",
      "Admission & fee reports",
    ],
    problemItSolves: "Student records, batch plans, fee registers and test results are maintained manually, making collections and performance tracking slow and error-prone.",
    bestSuitedFor: "Competitive exam coaching, tuition centres, skill and computer institutes, and multi-branch coaching chains.",
    businessOutcome: "Centralised student data, visible fee dues, disciplined attendance and an exam workflow that scales with student count.",
    worksWellWith: ["Online Exam System", "Billing Software", "CRM Software"],
    dashboardScreen: {
      image: "/products/coaching-management-dashboard.png",
      width: 751,
      height: 391,
      caption: "Institute dashboard covering enrolment, batch load, fee collection and outstanding dues.",
    },
    detailScreen: {
      image: "/products/coaching-management-detail.png",
      width: 745,
      height: 747,
      caption: "Student record linking fee instalments, attendance percentage and test performance.",
    },
    mobileCaption: "Student and parent app for fees, attendance and test results.",
  },
  {
    slug: "school-management-software",
    family: "Education Products",
    name: "School Management Software",
    tag: "SCHOOL ERP",
    whatItDoes:
      "Runs academic and administrative work side by side – admissions, classes and sections, attendance, homework, fees, examinations and parent communication – across an entire academic session.",
    coreModules: [
      "Online / offline admission flow",
      "Class and section management",
      "Subject & timetable planning",
      "Daily attendance registers",
      "Fee heads, collection & dues",
      "Homework and assignment sharing",
      "Notice board & circulars",
      "Parent-teacher communication",
      "Examination scheduling",
      "Marks entry and report cards",
      "Transport / hostel modules",
      "Academic and admin reports",
    ],
    problemItSolves: "Admission paperwork, fee registers, attendance sheets and result preparation consume staff time, while parents have no direct visibility into progress.",
    bestSuitedFor: "Schools, high schools, pre-schools, and institutions running multiple campuses under one management.",
    businessOutcome: "Smoother admission season, transparent parent communication and automated report card generation.",
    worksWellWith: ["Online Exam System", "Billing Software", "HRMS Software"],
    dashboardScreen: {
      image: "/products/school-management-dashboard.png",
      width: 751,
      height: 392,
      caption: "Academic console with class-wise strength, attendance percentage and fee due tracking.",
    },
    detailScreen: {
      image: "/products/school-management-detail.png",
      width: 760,
      height: 750,
      caption: "Academic analytics covering attendance split, session trend and class-wise results.",
    },
    mobileCaption: "Parent app for homework, notices, attendance and fee payment.",
  },
  {
    slug: "online-exam-system",
    family: "Education Products",
    name: "Online Exam System",
    tag: "ASSESSMENT",
    whatItDoes:
      "A secure assessment platform for conducting tests online – question banks, timed papers, automatic evaluation and detailed performance analytics for both the student and the institute.",
    coreModules: [
      "Question bank by subject / topic",
      "MCQ, descriptive & mixed papers",
      "Difficulty-wise paper generation",
      "Timed tests with auto-submit",
      "Randomised question order",
      "Secure exam environment controls",
      "Instant auto-evaluation",
      "Negative marking rules",
      "Rank list & percentile reports",
      "Topic-wise strength analysis",
      "Result cards and certificates",
      "Student attempt history",
    ],
    problemItSolves: "Paper-based tests take days to evaluate, question papers are rebuilt from scratch each time, and performance trends are never analysed.",
    bestSuitedFor: "Coaching institutes, schools, universities, certification bodies and recruitment or entrance test organisers.",
    businessOutcome: "Results within minutes of submission, reusable question banks and topic-level insight into where students actually lose marks.",
    worksWellWith: ["Coaching Management Software", "School Management Software"],
    dashboardScreen: {
      image: "/products/online-exam-system-dashboard.png",
      width: 755,
      height: 393,
      caption: "Assessment analytics with subject-wise averages, attempt volume and evaluation status.",
    },
    detailScreen: {
      image: "/products/online-exam-system-detail.png",
      width: 761,
      height: 718,
      caption: "Result analytics with score-band distribution, trend line and subject-wise averages.",
    },
    mobileCaption: "Student exam app for attempting tests and reviewing detailed results.",
  },
  {
    slug: "custom-software",
    family: "Custom Systems",
    name: "Custom Software",
    tag: "TAILOR-MADE",
    whatItDoes:
      "Software designed from the client's actual process rather than a fixed template. Modules, user roles, screens, approvals and reports are defined during requirement mapping and built specifically for that workflow.",
    coreModules: [
      "Requirement & process mapping",
      "Custom module development",
      "Role and permission design",
      "Admin control dashboard",
      "Business-specific reports",
      "Third-party API integration",
      "Data import & migration",
      "Document / file management",
      "Scalable, upgrade-ready structure",
    ],
    problemItSolves: "Off-the-shelf products force the business to change its process, or cover only half the requirement and leave the rest on spreadsheets.",
    bestSuitedFor: "Startups, growing businesses, and organisations whose process is a competitive advantage rather than a standard template.",
    businessOutcome: "A system that matches how the business actually works, with room to add modules as the operation grows.",
    worksWellWith: ["CRM Software", "ERP Software", "Billing Software"],
    dashboardScreen: {
      image: "/products/custom-software-dashboard.png",
      width: 748,
      height: 391,
      caption: "Custom workflow console with configurable modules, approval stages and role-based queues.",
    },
    detailScreen: {
      image: "/products/custom-software-detail.png",
      width: 760,
      height: 748,
      caption: "Workflow analytics showing approval status, throughput trend and department-wise load.",
    },
    mobileCaption: "Approvals and field-entry app configured to the client's own workflow.",
  },
  {
    slug: "property-portal",
    family: "Custom Systems",
    name: "Property Portal",
    tag: "LISTINGS & LEADS",
    whatItDoes:
      "A public-facing property platform with structured listings, powerful search filters and an agent back-office. Buyers filter and enquire; agents manage inventory and receive automatically routed leads.",
    coreModules: [
      "Property listing management",
      "Location, budget & type filters",
      "Image gallery and floor plans",
      "Featured / premium listings",
      "Enquiry capture on each listing",
      "Automatic lead routing to agents",
      "Agent and builder accounts",
      "Saved searches & shortlists",
      "Map-based property view",
      "Listing approval workflow",
      "Payment gateway for paid plans",
      "Listing performance reports",
    ],
    problemItSolves: "Inventory is spread across brochures and chat groups, enquiries reach no one in particular, and there is no record of which listing actually generates interest.",
    bestSuitedFor: "Real estate agencies, property dealers, builders and property management companies.",
    businessOutcome: "A single searchable inventory, enquiries that reach the right agent instantly, and data on which listings actually perform.",
    worksWellWith: ["Real Estate CRM", "CRM Software", "Custom Software"],
    dashboardScreen: {
      image: "/products/property-portal-dashboard.png",
      width: 756,
      height: 395,
      caption: "Listing manager with live inventory, enquiry volume and approval status per property.",
    },
    detailScreen: {
      image: "/products/property-portal-detail.png",
      width: 758,
      height: 744,
      caption: "Listing record with specification fields, enquiry volume and performance history.",
    },
    mobileCaption: "Buyer-facing app for searching listings, shortlisting and sending enquiries.",
  },
  {
    slug: "real-estate-crm",
    family: "Custom Systems",
    name: "Real Estate CRM",
    tag: "PROPERTY SALES",
    whatItDoes:
      "A sales system built for the property cycle specifically – from first enquiry through site visits, negotiation and booking – with site-visit scheduling and commission tracking that a generic CRM does not provide.",
    coreModules: [
      "Multi-source lead capture",
      "Lead qualification & scoring",
      "Agent-wise lead assignment",
      "Site visit scheduling & status",
      "Property-to-client matching",
      "Follow-up call reminders",
      "Booking and payment stages",
      "Builder / project inventory link",
      "Commission calculation",
      "Client interaction history",
      "Team performance dashboard",
      "Conversion funnel reports",
    ],
    problemItSolves: "Site visits are scheduled over phone with no record, leads are shared informally between agents, and commission disputes arise at the closing stage.",
    bestSuitedFor: "Real estate agencies, property consultants, channel partners and in-house builder sales teams.",
    businessOutcome: "Structured site-visit discipline, higher conversion from the same lead volume and transparent, dispute-free commission records.",
    worksWellWith: ["Property Portal", "Billing Software", "Custom Software"],
    dashboardScreen: {
      image: "/products/real-estate-crm-dashboard.png",
      width: 752,
      height: 393,
      caption: "Site-visit tracker linking leads to projects, visit outcome and booking conversion.",
    },
    detailScreen: {
      image: "/products/real-estate-crm-detail.png",
      width: 754,
      height: 703,
      caption: "Client record tying enquiry, shortlisted projects, site visits and booking stage together.",
    },
    mobileCaption: "Agent app for managing site visits, client notes and booking updates in the field.",
  },
];

export const productComparisonMatrix = [
  { product: "CRM Software", category: "Business", primaryUsers: "Sales teams, owners", coreValue: "Convert more enquiries" },
  { product: "ERP Software", category: "Business", primaryUsers: "Operations, departments", coreValue: "Connect the whole chain" },
  { product: "HRMS Software", category: "Business", primaryUsers: "HR, admin, employees", coreValue: "Automate people & payroll" },
  { product: "Billing Software", category: "Business", primaryUsers: "Accounts, front desk", coreValue: "Faster, cleaner collections" },
  { product: "Coaching Management", category: "Education", primaryUsers: "Institute admin, faculty", coreValue: "Run the institute centrally" },
  { product: "School Management", category: "Education", primaryUsers: "School admin, teachers", coreValue: "Academic + admin in one" },
  { product: "Online Exam System", category: "Education", primaryUsers: "Examiners, students", coreValue: "Test and evaluate instantly" },
  { product: "Custom Software", category: "Custom", primaryUsers: "Any defined workflow", coreValue: "Exact process fit" },
  { product: "Property Portal", category: "Custom", primaryUsers: "Agents, buyers, builders", coreValue: "Searchable live inventory" },
  { product: "Real Estate CRM", category: "Custom", primaryUsers: "Property sales teams", coreValue: "Visit-to-booking control" },
];

export const productImplementationProcess = [
  { step: "01", title: "Requirement Discovery", text: "Current process, team structure, user roles, pain points and reporting needs are documented." },
  { step: "02", title: "Module & Workflow Planning", text: "The right modules are selected, screens and approvals are mapped, and scope is frozen in writing." },
  { step: "03", title: "Configuration & Development", text: "The base product is configured and custom modules are built, with progress shared at each milestone." },
  { step: "04", title: "Data Migration & Testing", text: "Existing records are imported, workflows are tested against real scenarios and corrections applied." },
  { step: "05", title: "Training & Go-Live", text: "The team is trained on daily use, the system goes live, and post-launch support handles refinements." },
];

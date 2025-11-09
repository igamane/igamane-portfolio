export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I collaborate closely with clients to build dependable AI powered apps",
    description: "Clear communication and fast iterations are my default.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am flexible across time zones for smooth delivery",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    // description: "React • Next.js • Node.js • TypeScript • Express • React Native • Tailwind • MongoDB • SQL",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Engineer focused on AI products and applied research",
    description: "I integrate LLM and design practical user experiences.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Software Engineer at Tunepact",
    description: "Building tools for independent artists and teams",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to start a project together",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    "id": 1,
    "title": "TunePact - AI-Powered Music Career Platform with Affiliate System",
    "des": "A comprehensive SaaS platform empowering independent musicians with AI-driven marketing, fan engagement, and monetization tools, plus a robust affiliate program for music influencers to earn recurring commissions.",
    "img": "/tunepact-hero.svg",
    "iconLists": ["/next.svg", "/ts.svg", "/react.png", "/tailwind.png", "/mongodb.svg", "/stripe.png", "/openai.png", "/aws.png"],
    "link": "/projects/1",
    "caseStudy": {
      "industry": "Music Technology & Creator Economy",
      "technologies": [
        "Next.js 14 (App Router)",
        "TypeScript",
        "MongoDB & Mongoose",
        "Stripe (Payments & Connect)",
        "Stripe Identity Verification",
        "OpenAI API (AI Marketing)",
        "AWS S3 (Media Storage)",
        "Google Cloud Secret Manager",
        "GoHighLevel CRM API",
        "Nodemailer (Email)",
        "Recharts & ECharts (Analytics)",
        "Tailwind CSS v4",
        "shadcn/ui Components",
        "React Hook Form & Zod",
        "Passport.js (Authentication)",
        "SWR (Data Fetching)"
      ],
      "background": "Independent musicians face significant challenges in building sustainable careers: managing fan relationships, creating consistent marketing content, monetizing their work, and understanding their audience analytics. Traditional solutions are fragmented across multiple platforms, expensive, and lack AI-powered automation.\n\nTunePact was built to consolidate these essential tools into a single, affordable platform specifically designed for independent artists. The client needed a comprehensive solution that could handle everything from bio link pages and song sharing to AI-generated marketing campaigns and direct fan monetization through tips and secure song sharing.\n\n**The Affiliate Opportunity:**\nRecognizing that music influencers, coaches, and industry professionals could drive significant user acquisition, the client also required a **separate affiliate program platform** where partners could earn recurring commissions by promoting TunePact to their audiences. This dual-platform approach would create a sustainable growth engine while rewarding community advocates.",
      "challenge": "The project required building **two interconnected platforms**:\n\n**Main Platform Challenges:**\n1. A tiered subscription model (Free/Pro/Premium) with Stripe billing and trial management\n2. AI-powered marketing campaign generation using OpenAI with multi-step wizard flows\n3. Secure song sharing with email verification and access codes for unreleased tracks\n4. Stripe Connect integration for artist payouts with identity verification and compliance\n5. Real-time analytics with historical data retention based on plan tiers (7/180/365 days)\n6. Fan management with CSV imports, email campaigns, and engagement tracking\n7. A customizable bio link page (Tunepage) with Spotify integration, Linktree imports, and Shopify product embedding\n8. Calendar system for content planning with marketing idea integration\n9. Tunepact Academy with progress tracking and badge gamification\n\n**Affiliate Platform Challenges:**\n1. Separate authentication and dashboard system for affiliate partners\n2. Unique referral link generation with click tracking and conversion analytics\n3. Commission calculation engine: **20% recurring on subscriptions + 10% on gift cards**\n4. Real-time earnings dashboard with breakdown by commission type\n5. Multi-method withdrawal system (Stripe Connect, PayPal, Bank Transfer) with $10 minimum\n6. Discount code creation and management for affiliates to offer special deals\n7. Email verification flow for affiliate account activation\n8. Comprehensive analytics: total clicks, musicians joined, conversion rates\n\n**Cross-Platform Challenges:**\n- Admin dashboard for platform oversight with user impersonation and affiliate tracking\n- Ensuring accurate commission attribution across subscription renewals and gift card purchases\n- Handling complex business logic around plan limits, token-based messaging quotas, and secure media storage while maintaining excellent performance",
      "solution": "**Main Platform Architecture:**\nBuilt a full-stack Next.js 14 application with MongoDB for flexible data modeling and Stripe for payments and payouts. Implemented a sophisticated plan management system with server-side enforcement of limits (song uploads, analytics history, messaging tokens) and client-side upsell modals for seamless upgrade flows.\n\nCreated an **AI Marketing Planner** using OpenAI API with a multi-step wizard that generates 3-7 day campaigns with post concepts, hashtags, and sample video recommendations - free users can preview the wizard but generation requires upgrade.\n\nDeveloped a secure song sharing system with two modes: public links with analytics tracking and secure sharing (Pro/Premium) with email verification, unique access codes, and recipient management.\n\nIntegrated Stripe Connect for artist earnings with automated identity verification flows, bank account management, and configurable payout schedules. Built comprehensive analytics dashboards using Recharts with date range filtering, plan-based data retention, and real-time KPI tracking.\n\nImplemented fan management with CSV import, location-based filtering, email campaign scheduling with audience targeting, and comment moderation. Created a highly customizable Tunepage (bio link) with drag-and-drop sections, Spotify artist integration, Linktree import functionality, custom links, and embedded Shopify products.\n\n**Affiliate Platform Architecture:**\nBuilt a **completely separate affiliate dashboard** with its own authentication flow and email verification system. Each affiliate receives a unique referral link with UTM tracking that attributes signups and monitors conversion rates.\n\nImplemented a **sophisticated commission engine** that:\n- Tracks 20% recurring commissions on all subscription payments ($20/month Pro, $39/month Premium)\n- Calculates 10% commissions on every gift card purchase sent to referred musicians\n- Maintains real-time earnings breakdown with pie charts showing subscription vs. gift card revenue\n- Displays recent earnings feed with transaction details and timestamps\n\nCreated a **multi-method withdrawal system** supporting:\n- Stripe Connect (1-2 business days)\n- PayPal (3-5 business days)\n- Bank Transfer (5-7 business days)\n- $10 minimum withdrawal threshold\n- Withdrawal history with status tracking (completed/pending)\n\nDeveloped **discount code management** allowing affiliates to create custom codes with fixed 20% discounts for musicians who sign up, with tracking of how many musicians used each code.\n\nBuilt comprehensive **affiliate analytics** showing:\n- Total referral link clicks\n- Musicians joined (conversions)\n- Conversion rate percentage\n- Month-over-month growth metrics\n- Total earnings with historical tracking\n\n**Technical Implementation:**\nUsed AWS S3 with presigned URLs for secure media uploads, Google Cloud Secret Manager for sensitive credentials, and GoHighLevel API for CRM integration. Implemented authentication with Passport.js supporting email/password and Google OAuth, with email verification flows and password reset functionality for both platforms.",
      "conclusion": "TunePact successfully delivers a **dual-platform ecosystem** that serves both musicians and affiliate partners:\n\n**For Musicians:**\nA professional-grade music career platform that rivals enterprise solutions while remaining accessible to independent artists. The platform is now used by musicians worldwide to manage fan relationships, create AI-powered marketing campaigns, monetize their work through tips and secure song sharing, and gain insights into their audience. The tiered pricing model (Free/Pro at $19/month/Premium at $39/month) with 14-day trials has proven effective for user acquisition and conversion.\n\n**For Affiliates:**\nA transparent, high-earning affiliate program with **20% recurring commissions** on subscriptions and **10% on gift cards**, creating sustainable passive income for music influencers, coaches, and industry professionals. The comprehensive dashboard with real-time analytics, multiple withdrawal methods, and discount code creation empowers affiliates to effectively promote TunePact to their audiences.\n\n**Platform Success Metrics:**\n- The AI Marketing Planner has become a standout feature, generating complete multi-day campaigns with actionable content ideas\n- Stripe Connect integration enables artists to receive payments directly with automated compliance\n- The affiliate program drives significant user acquisition with conversion rates tracked in real-time\n- The platform handles complex business logic around plan limits, commission calculations, and feature gating while maintaining excellent UX\n\n**Business Impact:**\nThe dual-platform approach creates a sustainable growth flywheel: affiliates drive new musician signups, musicians upgrade to paid plans and receive gift cards from fans, affiliates earn recurring commissions, and the cycle continues. This architecture has proven highly effective for scaling a music SaaS business.",
      "learnings": "This project provided invaluable experience in building **multi-platform SaaS ecosystems** with interconnected but separate user experiences:\n\n**Technical Mastery:**\n- Deepened expertise in complex multi-tenant SaaS platforms with tiered subscription models and sophisticated business logic\n- Gained extensive experience with Stripe's advanced features: Checkout Sessions with trials, subscription management, Connect for marketplace payouts, and Identity verification for compliance\n- Learned to architect **separate but connected platforms** sharing a database but with distinct authentication flows and user experiences\n- Mastered building **commission calculation engines** that track recurring revenue, one-time payments, and attribute earnings accurately across multiple transaction types\n\n**AI Integration:**\n- Working with OpenAI API taught me how to build AI-powered features with proper error handling, streaming responses, and user-friendly wizard flows\n- Learned to implement plan-based feature gating both on the server (hard limits) and client (soft gates with upsell modals) for optimal conversion\n\n**Payment Systems:**\n- Implemented **multi-method withdrawal systems** with different processing times and fee structures\n- Built real-time earnings dashboards with breakdown visualizations using Recharts\n- Handled complex scenarios like recurring commission tracking and gift card commission calculations\n\n**Affiliate Program Architecture:**\n- Learned to build **referral tracking systems** with unique links, click analytics, and conversion attribution\n- Implemented discount code generation and management with usage tracking\n- Created transparent earnings dashboards that build trust with affiliate partners\n\n**Security & Compliance:**\n- Reinforced best practices for handling sensitive data (Secret Manager), secure file uploads (S3 presigned URLs), and email verification flows\n- Implemented Stripe Identity verification for compliance with financial regulations\n\n**Full-Stack Skills:**\n- Developed skills in building complex admin dashboards with user impersonation, affiliate tracking, and platform-wide analytics\n- Gained experience integrating multiple third-party APIs (Stripe, OpenAI, AWS, GoHighLevel, Spotify) while maintaining code quality and error handling\n- Learned to balance feature richness with performance using techniques like SWR for data fetching, optimistic updates, and skeleton loading states\n\n**Business Understanding:**\n- Understood how to design **growth-oriented features** like affiliate programs that align incentives between the platform and its promoters\n- Learned to build transparent commission systems that encourage affiliate participation and trust\n- Gained insight into creating sustainable revenue models with recurring commissions and multiple monetization streams",
      "dashboards": [
        {
          "name": "Musician Dashboard",
          "demoVideo": 'https://youtu.be/3Okqdi76lBw',
          "screenshots": '/projects-screenshots/1/d-1'
        },
        {
          "name": "Affiliate Dashboard",
          "demoVideo": 'https://youtu.be/IYM7mICzpvE',
          "screenshots": '/projects-screenshots/1/d-2'
        },
        {
          "name": "TunePage (Musician Bio Link)",
          "demoVideo": 'https://youtu.be/aDgQB-D9118',
          "screenshots": '/projects-screenshots/1/d-3'
        },
      ]
    }
  },
  {
    "id": 2,
    "title": "Labas AI - Intelligent Hospital & Patient Management System",
    "des": "Implemented AI patient intake system for iOS and Android platforms with automated symptom summarization, doctor task assignment workflows, QR-code patient lookup functionality, and auto-generated PDF visit reports. Streamlined pre-consultation triage processes and enhanced cross-department patient handoff procedures through a mobile-first design to improve hospital efficiency.",
    "img": "/labas-ai.png",
    "iconLists": ["/react-native.png", "/expo.png", "/ts.svg", "/nodejs.svg", "/openai.png", "/mongodb.svg"],
    "link": "/projects/2",
    "caseStudy": {
      "industry": "Healthcare & Hospital Automation",
      "technologies": [
        "React Native",
        "Expo",
        "TypeScript",
        "Redux Toolkit",
        "React Native Paper",
        "React Native Reanimated",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "OpenAI GPT-4 & Whisper",
        "Anthropic Claude",
        "Cloudinary",
        "JWT Authentication",
        "PDFKit"
      ],
      "background": "Labas AI was developed to transform how hospitals manage patient intake and consultations by integrating artificial intelligence directly into everyday clinical workflows. The system was Built for a Saudi Arabia healthcare organization to reduce manual data entry, accelerate triage, and improve coordination between departments. Traditional patient admission processes involved repetitive paperwork and inconsistent communication between nurses, doctors, and lab technicians. The goal was to create a connected digital platform where patients, doctors, and administrators interact seamlessly through AI-assisted tools accessible on both iOS and Android.",
      "challenge": "Building a complete hospital ecosystem from scratch presented several layers of complexity. The system required three connected environments—backend, hospital app, and patient app—all communicating through secure REST APIs. The first challenge was designing a reliable AI intake system capable of understanding natural patient conversations and summarizing symptoms accurately. The second was implementing a role-based structure for hospitals where admins, doctors, and patients each have distinct experiences. Finally, the platform needed to support multilingual use (English and Arabic with RTL layout), offline caching, QR-based patient lookups, and auto-generated PDF visit reports—all while keeping performance high and ensuring compliance with healthcare data security standards.",
      "solution": "The project was delivered as a fully modular AI ecosystem with clear separation of responsibilities between backend and mobile layers.\n\n**Backend (Node.js + MongoDB)** handled all authentication, AI communication, PDF generation, and task tracking. I integrated OpenAI’s GPT-4 and Anthropic Claude models using function calling for structured medical intake flows, allowing the AI to automatically summarize patient complaints and suggest follow-up questions. Whisper handled doctor dictation and converted audio to structured notes. Every completed consultation triggered automatic PDF generation with two versions — one for hospital records and one simplified for patients.\n\n**Hospital App (React Native + Expo)** served as the operational hub. Doctors could view assigned patients, record consultations, assign medical tasks (tests, follow-ups), generate reports, and scan QR codes to access patient data instantly. Admins managed doctors, patients, tasks, and hospital settings directly from their mobile dashboard. AI-assisted summaries provided pre-consultation insights that saved time and standardized care delivery.\n\n**Patient App** focused on accessibility and communication. Patients could chat with the AI assistant to describe symptoms, visualize affected body parts, and attach photos for context. They could review previous consultations, manage assigned tasks, view their doctor’s information, and download visit summaries as PDFs. The app’s bilingual interface (English/Arabic) ensured usability for a wider demographic.\n\nAcross all layers, Cloudinary handled secure media storage, and JWT authentication ensured safe data access. Redux Toolkit and Expo Router made the mobile experience smooth and predictable, while PDFKit generated branded visit summaries directly from the backend.",
      "conclusion": "This project highlighted my ability to design and deliver a complete AI-driven SaaS healthcare solution that merges intelligent automation with user-centric design. I contributed across all layers — backend architecture, AI integration, and mobile app development — ensuring both performance and reliability. I gained deep expertise in multi-agent AI orchestration using function calling, cross-platform development with React Native, and building secure medical data flows. The solution delivered measurable operational efficiency for the client’s hospital network while showcasing how AI can enhance real-world healthcare management.",
      "dashboards": [
        {
          "name": "Hospital Dashboard",
          "demoVideo": 'hhttps://youtu.be/H9zHqtmbBQM',
          "screenshots": '/projects-screenshots/2/d-1'
        },
        {
          "name": "Patient Dashboard",
          "demoVideo": 'https://youtube.com/shorts/3_9ict-Xyyk',
          "screenshots": '/projects-screenshots/2/d-2'
        },
        {
          "name": "Doctor Dashboard",
          "demoVideo": 'https://youtu.be/xnB0SYrlH4A',
          "screenshots": '/projects-screenshots/2/d-3'
        },
      ]
    }
  },
  {
    "id": 3,
    "title": "Blood Test AI Mobile App (IOS & Android)",
    "des": "AI-powered mobile health platform that analyzes blood test results and provides personalized diet, exercise, and medication recommendations for iOS and Android.",
    "img": "/blood-test-ai.png",
    "iconLists": ["/react-native.png", "/expo.png", "/ts.svg", "/openai.png", "/mongodb.svg", "/nodejs.svg"],
    "link": "/projects/3",
    "caseStudy": {
      "industry": "Healthcare & Wellness Technology",
      "technologies": [
        "React Native",
        "Expo",
        "TypeScript",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose ODM",
        "OpenAI API (GPT-4 Vision & Assistants)",
        "Cloudinary",
        "JWT Authentication",
        "React Native Paper",
        "React Native Reanimated",
        "Axios",
        "date-fns"
      ],
      "background": "A healthcare client needed a comprehensive mobile solution to help users understand their blood test results and receive personalized health recommendations. The challenge was to bridge the gap between clinical medical data and actionable everyday health decisions. Users often receive blood test results but struggle to interpret complex medical terminology and don't know what steps to take to improve their health markers.\n\nThe solution required building both a sophisticated **React Native mobile application** for iOS and Android, and a **Node.js backend API** with AI integration to process medical data and generate personalized recommendations.",
      "challenge": "The project presented several complex technical challenges:\n\n**AI Integration Complexity**: Implementing OpenAI's vision models to accurately extract structured data from blood test images with 9 different test panels (liver enzymes, complete blood count, renal panel, glucose, iron, lipid profile, thyroid, vitamin D, and miscellaneous tests). Each biomarker needed proper classification with status indicators (reassuring, caution, warning) and personalized improvement tips.\n\n**Real-time Health Recommendations**: Creating an AI system that analyzes blood test results and generates personalized weekly meal plans and exercise routines based on specific biomarker deficiencies. For example, low iron levels trigger iron-rich food recommendations, while elevated hematocrit suggests hydration-focused plans.\n\n**Cross-platform Mobile Development**: Building a performant React Native app with complex features including camera integration for test uploads, interactive chat with AI assistants, progress tracking with animated visualizations, and offline-capable data management.\n\n**Data Security & Privacy**: Implementing secure authentication with JWT tokens, encrypted password storage with bcrypt, and ensuring HIPAA-consideration for sensitive medical data handling.\n\n**Complex State Management**: Managing interconnected data flows between blood tests, diet plans, exercise sessions, medications, and reminders across multiple screens with real-time updates and progress tracking.",
          "solution": "I delivered a full-stack mobile health solution that brought together artificial intelligence, secure data processing, and an intuitive user interface. The mobile app was built using React Native with Expo for seamless deployment across iOS and Android. Redux Toolkit provided centralized, predictable state management for handling authentication, test data, diet plans, workouts, and reminders. The app integrated the Expo Camera and Image Picker for blood test uploads, which were optimized and stored securely through Cloudinary. Once uploaded, GPT-4 Vision analyzed the report image, extracted over fifty biomarkers across nine medical panels, and returned structured data with reference ranges and health classifications.\n\nThe AI assistants played a key role in transforming raw data into practical insights. One assistant handled image extraction, another compared results across multiple tests to detect trends, and a conversational assistant explained the outcomes in plain language. A dedicated AI-generated recommendation engine then created weekly diet and workout plans tailored to the user’s specific deficiencies and health goals. For example, users with low vitamin D received plans that included foods and exercises that boost vitamin D levels. The app also featured a chat interface where users could ask follow-up questions and receive natural, contextual responses from the AI.\n\nOn the backend, I built a Node.js and Express API connected to MongoDB via Mongoose ODM. The database architecture supported nested schemas for complex data such as meal plans and exercise sessions, while also ensuring that each user’s data was isolated and protected. JWT-based authentication managed secure access, while middleware layers validated input and handled errors gracefully. I also implemented Stripe-ready modular structures to support future monetization. Cloudinary managed all image storage, ensuring high-speed retrieval and automatic optimization for mobile devices. OpenAI’s Assistants API was integrated with function calling, allowing structured communication between the AI and backend functions for processing test data, generating insights, and updating user records in real time.\n\nEvery feature of the app was designed with a focus on user clarity and usability. Blood test results were displayed with visual cues showing which biomarkers were normal, elevated, or low, supported by progress bars and icons. Users could easily navigate through their weekly meal and exercise plans, track completion percentages, and receive reminders for medications and health tasks. The multi-language support (English and Arabic) made the app accessible to a broader audience, complete with right-to-left layout for Arabic users. Performance optimization and React Native Reanimated ensured smooth animations even with data-heavy screens, maintaining a professional, reliable experience across devices.",

      "conclusion": "This project significantly expanded my expertise in building production-ready healthcare applications with AI integration. I successfully delivered a comprehensive mobile health platform that transforms complex medical data into actionable insights, helping users make informed health decisions.\n\nKey technical achievements include mastering OpenAI's Assistants API with function calling for structured data extraction, implementing complex state management with Redux Toolkit across interconnected health features, and building performant React Native applications with advanced animations and real-time updates.\n\nI gained deep experience in healthcare data modeling, secure authentication patterns, and creating intuitive UIs for complex medical information. The project taught me how to balance AI-powered automation with user control, implement offline-first mobile architectures, and design scalable backend systems that handle sensitive health data securely.\n\nWorking with real-world health data processing challenges enhanced my problem-solving skills in areas like image analysis, trend detection, and personalized recommendation algorithms. The client was extremely satisfied with the platform's ability to make medical data accessible and actionable for everyday users.",
      "dashboards": [
        {
          "name": "Project Demo",
          "demoVideo": 'https://youtu.be/51CtWBLk_Kw',
          "screenshots": '/projects-screenshots/3/d-1'
        },
      ]
    }
  },
  {
    "id": 6,
    "title": "Emti7ani - Morocco Exam Preparation Platform",
    "des": "Founded and launched Morocco-focused exam preparation platform serving 6,000+ students with realistic exam simulations, competitive leaderboards, and comprehensive affiliate management system.",
    "img": "/emtihani-preview.svg",
    "iconLists": ["/nodejs.svg", "/express.png", "/mongodb.svg", "/cloudinary.png", "/html.png", "/css.png", "/javascript.png"],
    "link": "/projects/6",
    "caseStudy": {
      "industry": "Education Technology (EdTech)",
      "technologies": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose ODM",
        "EJS Templating Engine",
        "Passport.js (Local Authentication)",
        "Cloudinary API (Image Storage)",
        "Nodemailer (Email Service)",
        "Express Session & Connect-Mongo",
        "Multer (File Upload)",
        "Puppeteer (PDF Generation)",
        "Helmet.js (Security)",
        "Express Mongo Sanitize",
        "Joi (Validation)",
        "Moment.js (Date Handling)",
        "Handlebars (Email Templates)",
        "Shortid (Unique ID Generation)"
      ],
      "background": "I founded **Emti7ani** to revolutionize how Moroccan students prepare for their critical Baccalaureate exams. The platform addresses a fundamental gap in exam preparation by creating **realistic exam simulations** that mirror actual testing conditions. Students can experience the real exam environment, practice time management under pressure, and build confidence to overcome test anxiety—all while mastering the academic content itself.\n\nThe platform serves students across multiple academic levels including **2bac** (Baccalaureate), **1bac** (First Year Baccalaureate), and **3ac** (Third Year College), supporting various tracks like Sciences Mathématiques (SM), Sciences Expérimentales (SVT), and Sciences Économiques (EC). Beyond just practice tests, I integrated **gamification through competitive leaderboards** with awards for the top 3 performers in each major, creating a motivating environment that drives engagement and excellence.",
      "challenge": "Building Emti7ani required solving multiple complex technical and business challenges simultaneously. The core technical challenge was creating a **secure, timed examination system** that could simulate real exam conditions while preventing cheating and ensuring fair competition. This meant implementing precise timing controls, secure submission handling, and robust anti-tampering measures.\n\nFrom a business perspective, I needed to build a **sustainable growth engine** from scratch. This required architecting a sophisticated affiliate marketing system where education content creators could partner with the platform, track their referrals through unique links and coupon codes, and earn commissions. The system had to handle complex attribution logic across multiple sources (direct signups, affiliate links, coupon codes, and personal invitations) while maintaining accurate commission calculations and withdrawal management.\n\nThe platform also needed to support **Morocco-specific payment methods** including CashPlus, bank transfers, and online payments, each requiring manual verification workflows. Scaling to serve thousands of students during peak exam periods while maintaining three completely different user experiences (student portal, affiliate dashboard, and admin operations center) added significant architectural complexity. Finally, building comprehensive analytics to track user acquisition, conversion funnels, and revenue attribution was essential for data-driven growth decisions.",
      "solution": "I architected a **full-stack Node.js application** using Express.js and MongoDB, chosen for their flexibility in handling complex, evolving data relationships. The authentication system leverages Passport.js with custom serialization logic to elegantly manage three distinct user types within a unified system.\n\nThe **exam simulation engine** delivers timed assessments with automatic grade calculations using coefficient weighting, mirroring the actual Moroccan exam scoring system. Students experience realistic time pressure and receive immediate feedback through detailed results pages. The competitive leaderboard system only displays rankings when sufficient participants exist, maintaining fairness while driving engagement through gamification.\n\nFor the **affiliate marketing infrastructure**, I built a complete referral ecosystem using shortid for unique tracking links, discount coupon management with usage limits, and automated commission calculations. The system tracks every user's acquisition source and attributes revenue accordingly, enabling transparent performance analytics for content creator partners. Affiliates access a dedicated dashboard showing real-time metrics, earnings, and withdrawal management with multiple payout methods.\n\nThe **payment verification workflow** integrates Cloudinary for receipt image storage, allowing students to upload payment proofs that admins review before account activation. This manual verification step was crucial for supporting Morocco's payment landscape while preventing fraud. Email workflows powered by Nodemailer and Handlebars templates handle verification, payment confirmations, and withdrawal notifications.\n\nThe **admin operations center** provides comprehensive control through MongoDB aggregation pipelines that generate real-time analytics across custom date ranges. Admins can track user growth, verify payments, process withdrawals, manage content, and analyze revenue attribution—all through an intuitive interface. The dashboard includes financial reporting, user segmentation by acquisition source, and performance metrics for each affiliate partner.",
      "marketing": "The marketing journey of Emti7ani began during my **first year of bachelor's degree** when I was just starting to learn full-stack web development. This platform was actually the dream project I had envisioned back in high school—the very motivation that pushed me to learn development and turn ideas into reality.\n\nIn that first year, I focused on building the **core platform features**: the user dashboard and the realistic exam simulation system. To validate the concept, I partnered with **3 YouTube education content creators** who promoted the platform to their audiences. Watching **500 students register** and actually use something I built was an incredible validation moment. Seeing real users interact with my code, take exams, and benefit from the platform transformed my understanding of what it means to build products that matter.\n\nBy my second year, I was ready to scale, but faced a critical constraint: **limited funds as a student**. I needed a marketing strategy that could go viral without breaking the bank. This constraint forced me to get creative, and I developed a three-pronged approach that would ultimately drive massive growth.\n\n**First, I became a content creator myself.** Starting in November 2022, I began producing exam preparation content using just voice recordings and animated video editing—no fancy equipment or production team. I focused on topics that resonated deeply with my target audience of Baccalaureate students, sharing study strategies, exam tips, and motivational content. The authenticity of being a student creating content for students resonated powerfully. By June 2023, just six months later, I had built an audience of **100,000+ followers across Instagram, YouTube, and TikTok**. This organic reach became the foundation of the platform's visibility.\n\n**Second, I engineered the affiliate marketing system** not just as a technical feature, but as a core growth strategy. I built the entire infrastructure from scratch—tracking links, commission calculations, analytics dashboards—specifically designed to make it easy and profitable for education content creators to partner with Emti7ani. I personally reached out to creators, demonstrated the value proposition, and successfully recruited **12 education content creators** into the affiliate program. Each creator received their own dashboard to track performance, earnings, and student conversions, creating a win-win ecosystem where their success directly tied to platform growth.\n\n**Third, I secured a strategic partnership** with a famous content creator who was also a Baccalaureate student at the time. This partnership was transformative—they became the face of the platform, lending credibility and relatability. Having someone who was actively going through the same exam preparation journey as the target users created powerful social proof and trust.\n\nThis comprehensive go-to-market strategy delivered remarkable results: **2 million+ campaign views** and explosive user growth from 500 to 6,000+ active students. The combination of owned content, affiliate partnerships, and strategic influencer collaboration created multiple acquisition channels that reinforced each other, building momentum that carried the platform through its critical growth phase.",
      "results": {
        "userGrowth": "Successfully grew to **6,000+ active students** across multiple academic levels and tracks",
        "marketingSuccess": "Led go-to-market strategy achieving **2M+ campaign views** and building **100k+ social media followers** in under 6 months",
        "affiliateNetwork": "Secured strategic partnerships with **10+ education content creators** through the affiliate system",
        "platformStability": "Built scalable architecture supporting thousands of concurrent users during peak exam periods with zero downtime",
        "businessModel": "Established sustainable revenue model with multi-method payment processing and automated commission tracking"
      },
      "conclusion": "Emti7ani demonstrates my ability to **build and scale a complete EdTech business** from concept to 6,000+ users. Beyond the technical achievement of architecting a multi-tenant platform with sophisticated exam delivery, affiliate marketing, and payment systems, this project showcases entrepreneurial execution—from product development to go-to-market strategy to creator partnerships.\n\nThe platform's success validates my approach to solving real educational challenges through technology. By focusing on **realistic exam simulation** rather than just content delivery, I created genuine value for students preparing for high-stakes exams. The gamification elements and competitive leaderboards transformed exam preparation from a solitary activity into an engaging, motivating experience.\n\nFrom a technical perspective, the three-dashboard architecture handling complex user relationships, financial transactions, and real-time analytics proves my capability to build production-ready SaaS platforms. The affiliate system with its sophisticated attribution logic and commission management demonstrates expertise in building scalable business infrastructure, not just educational features.",
      "keyLearnings": "Building Emti7ani taught me invaluable lessons about **full-stack entrepreneurship**. On the technical side, I mastered multi-tenant architecture with role-based access control, MongoDB aggregation for real-time analytics, and integrating multiple third-party services while maintaining security. Implementing the affiliate marketing system deepened my understanding of attribution modeling, financial transaction management, and building transparent reporting systems.\n\nThe **go-to-market experience** was equally transformative. Achieving 2M+ views and 100k+ followers required understanding content marketing, social media strategy, and partnership development. Working directly with education content creators taught me how to build mutually beneficial relationships and design systems that align incentives.\n\nMost importantly, I learned that **successful EdTech requires understanding both technology and pedagogy**. The exam simulation approach succeeded because it addressed real student needs—time management, anxiety reduction, and realistic practice—not just content delivery. Building for the Moroccan market taught me the importance of localization, from supporting regional payment methods to understanding cultural context in education. This project proved that technical excellence must be paired with market understanding and user empathy to create products that truly scale.",
      "dashboards": [
        {
          "name": "Student Dashboard",
          "demoVideo": 'https://youtu.be/LRGOj75gcYI',
          "screenshots": '/projects-screenshots/6/d-1'
        },
        {
          "name": "Affiliate Dashboard",
          "demoVideo": 'https://youtu.be/z-WHPVgroDw',
          "screenshots": '/projects-screenshots/6/d-2'
        },
        {
          "name": "Admin Dashboard",
          "demoVideo": 'https://vimeo.com/1133805182',
          "screenshots": '/projects-screenshots/6/d-3'
        },
      ]
    }
  },
  {
    "id": 11,
    "title": "AI-Based Voice Agent for Automated Sales Calls",
    "des": "AI voice agent platform built as part of an IEEE-published research project on conversational AI and sales automation, demonstrating real-world application of NLP, speech processing, and telephony integration.",
    "img": "/igamane-ai.svg",
    "iconLists": ["/next.svg", "/ts.svg", "/react.png", "/mongodb.svg", "/tailwind.png", "/openai.png"],
    "link": "/projects/1",
    "caseStudy": {
      "industry": "Sales Automation & AI Research",
  
      "technologies": [
        "Next.js 15",
        "TypeScript",
        "MongoDB",
        "NextAuth",
        "Twilio API",
        "Deepgram (Speech-to-Text)",
        "ElevenLabs (Text-to-Speech)",
        "GPT-3.5 Turbo",
        "Tailwind CSS",
        "Framer Motion",
        "Recharts",
        "shadcn/ui"
      ],
  
      "background": "I designed and co-authored this project as part of a research paper accepted and published by the **IEEE Conference on Artificial Intelligence 2024**, marking a major academic and technical milestone in my career. The work focused on creating an **AI-based voice sales agent** capable of holding human-like conversations that could autonomously conduct sales calls, convert leads, and schedule appointments.\n\nThe research addressed one of the biggest inefficiencies in modern sales operations: human dependency. Traditional sales teams struggle with consistency, scalability, and cost. My research aimed to prove that artificial intelligence—through the integration of **speech recognition, text-to-speech synthesis, and natural language reasoning**—could perform sales conversations at near-human quality while operating 24/7. The IEEE publication formally validated this system’s performance, reporting an **average response time of 1.7 seconds** and a **conversion rate of 8%**, both exceeding current industry benchmarks.",
  
      "challenge": "Developing this system required tackling both **research-level** and **engineering-level** challenges.\n\nFrom a research perspective, we had to design a **complete conversational framework** guided by sales psychology, including greeting, need discovery, objection handling, and closing phases. Unlike typical chatbot systems, this agent required **adaptive reasoning and emotional tone control**, which weachieved through dynamic prompt chaining and structured memory management.\n\nOn the engineering side, the challenge was to achieve **real-time interaction**—each AI response needed to be generated, converted, and delivered in under two seconds. Integrating Twilio, Deepgram, ElevenLabs, and GPT-3.5 into a synchronized microservice architecture demanded efficient data streaming and latency reduction strategies. Additionally, ensuring conversational coherence and preventing repetitive dialogue required fine-tuned state tracking between components.\n\nwealso faced the challenge of validating the AI’s conversational realism and measuring success quantitatively. This included designing evaluation metrics for **response latency**, **speech quality**, and **conversion efficiency**, forming the core of the paper’s experimental framework.",
  
      "solution": "To solve these challenges, we developed a **modular AI-driven telephony system** built around a microservices architecture.\n\nAt its core, the **AI Conversation Engine** combined four real-time components: **Twilio** for call handling, **Deepgram** for speech-to-text transcription, **OpenAI GPT-4** for conversational reasoning, and **ElevenLabs** for generating natural-sounding responses. The AI maintained a persistent context memory throughout each call, which allowed it to handle complex, multi-turn conversations without losing coherence.\n\nwe implemented an internal **multi-agent pipeline**, where one agent handled listening and intent detection, another handled reasoning and content generation, and a third managed delivery and tone adaptation. This multi-agent framework was one of the core research contributions discussed in the IEEE paper, demonstrating how conversational control could be distributed across AI submodules for better flow and accuracy.\n\nEach interaction followed a structured flow derived from behavioral sales theory: greeting → qualification → presentation → objection resolution → closing. The agent learned to detect emotional cues (e.g., hesitations or excitement) based on pauses and tone patterns, adjusting its responses dynamically. The backend’s microservice design enabled parallel processing and asynchronous API calls, achieving an average **end-to-end latency of 1.7 seconds**.\n\nwe complemented this research with a **monitoring and analytics dashboard** built using Next.js, Tailwind, and Recharts. This interface provided visual insights into conversion rates, call durations, and agent performance, forming the experimental visualization toolset for the IEEE evaluation phase.",
  
      "conclusion": "This was a **research-backed innovation** bridging academia and industry. Through this work, we demonstrated how **AI conversational systems can achieve measurable business impact while contributing academically to the field of NLP and speech interaction**.\n\nThe published IEEE paper, *“AI-Based Voice Agent for Enhanced Customer Engagement and Sales Automation”*, presented our experimental results and system architecture to the academic community, validating its scientific and technical contributions.\n\nThe system achieved an **8% conversion rate**, outperformed traditional human benchmarks, and maintained a **1.7-second average response time**. Over 70% of surveyed customers described the AI’s voice as “almost human,” rating it 4.8/5 for friendliness and 5.0/5 for clarity. Beyond metrics, the experience deepened my expertise in **speech intelligence, multi-agent design, and AI-human interaction research**.\n\nWhat makes this project special is that it represents the intersection of engineering precision and academic rigor—**a full-scale AI system validated through peer-reviewed IEEE publication**. This combination of real-world deployment and scientific recognition makes it one of my most defining works as both an AI developer and researcher.",
  
      "researchPublication": {
        "title": "AI-Based Voice Agent for Enhanced Customer Engagement and Sales Automation",
        "conference": "IEEE Conference on Artificial Intelligence 2024",
        "doi": "10.1109/ICAI.2024.10836508",
        "link": "https://ieeexplore.ieee.org/document/10836508",
        "views": "300+",
        "keyFindings": [
          "Average response time of 1.7 seconds across all system components",
          "8% conversion rate vs. 2–5% industry average",
          "70% of customers rated the AI as nearly human in tone and clarity",
          "High realism and emotional consistency in live interactions",
          "Demonstrated real-time multi-agent orchestration validated through IEEE publication"
        ]
      },
      "dashboards": [
        {
          "name": "User Dashboard",
          "demoVideo": 'https://youtu.be/hdNKznpane0',
          "screenshots": '/projects-screenshots/11/d-1'
        }
      ]
    }
  },
  {
    "id": 4,
    "title": "POD University - AI SAAS Platform for Print-on-Demand Sellers",
    "des": "Comprehensive AI toolkit for ShineOn sellers featuring image generation, market research, ad strategy, and automated content creation - serving 2,000+ active users.",
    "img": "/pod-university.svg",
    "iconLists": ["/nodejs.svg", "/express.png", "/mongodb.svg", "/openai.png", "/stripe.png", "/aws.png", "/html.png", "/css.png", "/javascript.png"],
    "link": "/projects/4",
    "caseStudy": {
      "industry": "E-commerce SaaS / Print-on-Demand",
      "technologies": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Passport.js (OAuth2)",
        "OpenAI API",
        "Anthropic Claude",
        "Fal.ai",
        "Stripe",
        "Cloudinary",
        "Puppeteer",
        "Socket.io",
        "Google Sheets API",
        "RapidAPI",
        "AWS S3"
      ],
      "background": "POD University was developed to address the growing needs of ShineOn sellers in the competitive print-on-demand marketplace. As the POD industry became increasingly saturated, sellers needed more than just basic tools—they needed intelligent systems that could help them stand out, research their competition, and create compelling marketing materials at scale.\n\nThe platform was designed to be a comprehensive solution that would empower sellers with professional-grade AI tools previously only available to large enterprises. The vision was to create a seamless experience where sellers could generate stunning product images, analyze market trends on Etsy, craft effective Facebook ad campaigns, and automate their content creation—all from a single integrated platform.\n\nA critical requirement was deep integration with ShineOn's existing ecosystem through single sign-on authentication, allowing sellers to access POD University without managing separate credentials. The platform also needed flexible subscription management to accommodate different user tiers and usage patterns, from trial users exploring the tools to power users running multiple stores.",
      "challenge": "The primary challenge was building a platform that could orchestrate multiple AI providers while maintaining a simple, intuitive user experience. Sellers needed access to cutting-edge AI capabilities from OpenAI, Claude, and specialized image generation models, but they shouldn't have to understand the technical complexity behind these integrations. The system needed to intelligently route requests, handle failures gracefully, and provide consistent results regardless of which AI provider was processing the request.\n\nImage generation presented its own unique set of challenges. The platform needed to support multiple workflows—from text-to-image generation for creating original designs, to image-to-image transformations for style variations, to complex canvas-based editing for fine-tuning results. Each workflow required different technical approaches, but the user experience needed to feel cohesive and intuitive. Performance was critical since users often generate dozens of images in a single session.\n\nThe Etsy market research tool required building a sophisticated data collection system that could reliably gather information about competitor shops, trending products, and market dynamics. This meant dealing with rate limits, handling data inconsistencies, and building fallback mechanisms when primary data sources failed. The system needed to process this data in real-time and present actionable insights that sellers could immediately use to inform their business decisions.\n\nAuthentication and access control added another layer of complexity. The platform needed to integrate with ShineOn's OAuth2 system while also supporting trial users with limited access and managing a flexible credit system that could accommodate different subscription tiers, promotional offers, and usage patterns. Every tool interaction needed to be tracked, credits needed to be managed accurately, and the system needed to prevent abuse while maintaining a smooth user experience.",
      "solution": "POD University was built as a full-stack web application that brings together multiple AI services into a unified platform. The architecture centers around a flexible bot system that allows administrators to create and configure different AI assistants for specific tasks. Each bot can be customized with its own personality, capabilities, and knowledge base, giving sellers access to specialized tools for different aspects of their business.\n\n**The AI Image Generator** became one of the platform's flagship features, leveraging Fal.ai's advanced Flux Pro and Flux Dev models to create high-quality product designs. Users can describe their vision in natural language, adjust aspect ratios for different product types, and generate multiple variations to find the perfect design. The system handles all the complexity of managing AI requests, processing images, and delivering results through a clean interface that feels instant and responsive.\n\nFor sellers who already have designs, **the Image-to-Image Transformation tool** provides powerful capabilities to reimagine existing artwork. Users can upload their current designs and apply different artistic styles, adjust compositions, or create variations while maintaining the core elements of their original concept. This feature has become essential for sellers who want to test different aesthetic approaches without starting from scratch, enabling rapid iteration on proven designs.\n\n**The AI Image Suite** takes editing further with a comprehensive canvas-based editor that rivals professional design software. Sellers can apply sophisticated filters, add custom text overlays with multiple fonts, adjust colors and saturation, crop and resize for different products, and make precise modifications to their generated images. The tool includes advanced features like background removal, object manipulation, and layer management—capabilities typically found in expensive design software but simplified for quick, efficient editing workflows.\n\n**Etsy Market Research** gives sellers competitive intelligence by automatically scraping and analyzing competitor shops, tracking trending products, and identifying successful strategies in their niche. The system uses a combination of RapidAPI and Oxylabs proxies to reliably gather data from Etsy, then enriches this information with pricing trends, review analysis, and sales velocity estimates. Sellers can search for specific niches, analyze top-performing shops, and discover untapped opportunities in the marketplace. This feature has become invaluable for product research and competitive positioning.\n\n**The Facebook Ad Strategy Generator** helps sellers create compelling ad campaigns by analyzing their products and generating complete ad strategies. The tool produces attention-grabbing headlines, persuasive ad copy, audience targeting recommendations, and even suggests visual approaches for ad creatives. It understands the nuances of Facebook's advertising platform and tailors suggestions to maximize engagement and conversions for print-on-demand products.\n\n**The Phrase Builder and Phrase Lab** automate the tedious process of creating product titles, descriptions, and marketing copy. These tools understand POD-specific terminology, SEO best practices, and platform requirements for marketplaces like Etsy and Amazon. Sellers can generate dozens of variations, save their favorites, and quickly populate their product listings with professional, optimized content that drives traffic and conversions.\n\n**The Brand Name Generator** helps sellers establish their brand identity by creating unique, memorable names and checking domain availability in real-time. The tool considers industry trends, target audience psychology, and trademark considerations to suggest names that resonate with customers and stand out in the marketplace.\n\n**ShineOn SSO Integration** provides seamless authentication through OAuth2, allowing sellers to access POD University with their existing ShineOn credentials. The system maintains session state, handles token refresh automatically, and provides a frictionless experience that feels like a natural extension of the ShineOn ecosystem.\n\n**Stripe Subscription Management** powers the platform's flexible monetization model with support for multiple subscription tiers, trial periods, and usage-based credits. The system handles webhook events for subscription changes, manages promotional offers, tracks usage across all tools, and provides detailed analytics for both users and administrators. Sellers can easily upgrade, downgrade, or manage their subscriptions without leaving the platform.\n\nThe platform also includes real-time updates through Socket.io for long-running operations like image generation and market research, ensuring users always know the status of their requests. An admin dashboard provides comprehensive control over user access, bot configurations, and system monitoring, making it easy to manage the platform as it scales.",
      "conclusion": "POD University successfully launched as a production SaaS platform serving over 2,000 active users in the print-on-demand industry. The platform has become an essential tool for ShineOn sellers, with users generating thousands of images, researching hundreds of competitor shops, and creating countless ad campaigns every month.\n\nThe success of the platform demonstrates that complex AI capabilities can be packaged into accessible tools that deliver real business value. Sellers who previously struggled with design, market research, and marketing now have professional-grade tools at their fingertips. The seamless integration with ShineOn's ecosystem and flexible subscription model has made it easy for sellers to adopt and integrate POD University into their daily workflows.\n\nThe platform continues to evolve based on user feedback, with new AI tools and features being added regularly. The architecture's flexibility allows for rapid iteration and experimentation with new AI models and capabilities as they become available. What started as a collection of AI tools has grown into a comprehensive platform that addresses nearly every aspect of running a successful print-on-demand business.",
      "dashboards": [
        {
          "name": "User Dashboard",
          "demoVideo": 'https://youtu.be/hY17DVuXxVU',
          "screenshots": '/projects-screenshots/4/d-1'
        }
      ]
    }
  },
  {
    "id": 5,
    "title": "Buzzify AI - Personal Brand Assistant for LinkedIn/X",
    "des": "AI-powered platform that automates industry news curation and generates personalized social media content for thought leadership on LinkedIn and X (Twitter).",
    "img": "/buzzify-preview.svg",
    "iconLists": ["/next.svg", "/react.png", "/tail.svg", "/ts.svg", "/openai.png", "/stripe.png", "/mongodb.svg", "/nodejs.svg"],
    "link": "/projects/5",
    "caseStudy": {
      "industry": "SaaS & Social Media Marketing",
      "technologies": [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose ODM",
        "OpenAI GPT-4",
        "Stripe Payment Processing",
        "LinkedIn API",
        "Twitter API v2",
        "OAuth 2.0 & OAuth 1.0a",
        "SerpAPI",
        "RSS Parser",
        "Puppeteer",
        "Cheerio",
        "BullMQ",
        "Redis",
        "JWT Authentication",
        "Framer Motion",
        "Zustand State Management",
        "Axios",
        "Shadcn UI Components"
      ],
      "background": "A client approached me with a vision to help professionals and entrepreneurs maintain consistent thought leadership on social media without spending hours researching industry news and crafting posts. The challenge was to build a comprehensive SaaS platform that could **intelligently aggregate personalized news** based on user interests, **generate authentic-sounding social media content** using AI, and **automate the entire publishing workflow** across multiple platforms.\n\nThe client needed a solution that would:\n- Automatically fetch and curate industry-specific news from multiple sources\n- Use AI to understand user writing styles and generate platform-appropriate content\n- Handle OAuth authentication for LinkedIn and Twitter/X\n- Implement a subscription-based business model with Stripe\n- Provide comprehensive analytics and content management dashboards\n- Support both free and premium tiers with feature gating",
      "challenge": "The project introduced several difficult engineering and design challenges.\n\nThe first was **building an intelligent news aggregation engine** that could process thousands of articles daily from Google News, RSS feeds, and niche websites. It had to handle JavaScript-heavy sites using Puppeteer, summarize content via OpenAI GPT API, and eliminate duplicates across sources.\n\nThe second challenge involved **style-conditioned AI generation**. The system needed to learn a user’s writing tone from a few examples and create posts that felt human and platform-appropriate. It had to adapt to LinkedIn’s professional tone while respecting Twitter’s shorter, conversational format.\n\nThe third challenge was **multi-platform OAuth authentication**. Twitter required OAuth 1.0a and LinkedIn used OAuth 2.0, both with distinct token refresh and session management rules. Managing these securely while keeping the user experience simple required meticulous handling of token encryption and state.\n\nFinally, the SaaS layer demanded robust **subscription management and performance optimization**. Stripe had to handle tier-based billing with webhooks, Redis managed background tasks, and MongoDB indexing ensured fast news retrieval for every user feed.",

    "solution": "I developed a full-stack SaaS platform that automates personal branding through AI-driven content creation and news curation.\n\nThe **backend**, built with Node.js and Express, handles all API routes, authentication, and third-party integrations. I implemented JWT-based authentication with role-based permissions for users and admins. The core system runs a scheduled job via node-cron that aggregates industry news daily from Google News and RSS feeds using SerpAPI, RSS Parser, Puppeteer, and Cheerio. OpenAI GPT-4 processes each article to summarize key points, extract metadata, and generate short, publish-ready descriptions.\n\nThe **AI content engine** creates authentic social posts conditioned on each user’s writing examples. When users connect their LinkedIn or X accounts, the AI analyzes their past posts to understand structure, tone, and phrasing. It then generates new posts aligned with those patterns. The system supports post refinement, letting users tweak tone or length before publishing.\n\nFor **social media integration**, I implemented OAuth 2.0 for LinkedIn and OAuth 1.0a for Twitter, storing encrypted tokens securely in MongoDB. The unified posting API adapts automatically to each platform’s endpoint and format. Redis with BullMQ manages background posting and rate limits, ensuring reliability during high-load events.\n\nThe **frontend**, developed with Next.js 14 and TypeScript, provides a fast, elegant experience with Tailwind CSS and Shadcn UI. Zustand manages global state for authentication, preferences, and dashboard data. Framer Motion adds smooth micro-interactions throughout the interface.\n\nUsers access multiple dashboards: a personalized **News Feed** that filters articles by industries, brands, or keywords; a **Post Generation Interface** for AI-assisted writing; a **Subscription Portal** powered by Stripe; and an **Admin Panel** for managing users, RSS sources, and analytics. Each dashboard supports live previews, pagination, and role-based access.\n\nStripe webhooks manage subscription events like upgrades, renewals, or cancellations, ensuring immediate feature gating. The system supports both free and premium tiers, with daily generation limits for free users and unlimited content for paid users.\n\nAll processes are supported by BullMQ queues for background jobs (news ingestion, summarization, and publishing) and Redis caching to improve response time and scalability.",

    "conclusion": "Buzzify AI successfully automated the process of building and maintaining a personal brand online. Users can now receive daily curated news, generate authentic posts with one click, and schedule or publish them directly to LinkedIn or X.\n\nThis project honed my expertise in **AI integration**, **OAuth architecture**, and **SaaS scalability**. I mastered multi-platform authentication, learned to design rate-efficient background jobs, and implemented AI systems that blend automation with user personality.\n\nThe result is a scalable, production-grade SaaS that empowers professionals to stay visible online with minimal effort — combining reliable automation with intelligent, human-quality output.",
    "dashboards": [
      {
        "name": "User Dashboard",
        "demoVideo": 'https://youtu.be/4xGduGfCVWU',
        "screenshots": '/projects-screenshots/5/d-1'
      },
    ]
    }
  },
  {
    "id": 7,
    "title": "AI Activity Program Planner",
    "description": "Enterprise-grade AI-powered activity planning platform for aged care facilities with comprehensive user management, community engagement, and administrative tools.",
    "img": "/projects/activity-program.svg",
    "iconLists": ["/next.svg", "/react.png", "/ts.svg", "/tailwind.png", "/openai.png", "/maps.png"],
    "link": "/projects/7",
    "caseStudy": {
      "industry": "Healthcare & Aged Care Technology - SaaS Platform",
  
      "technologies": [
        "Next.js 16 (App Router)",
        "React 19 with TypeScript",
        "Tailwind CSS",
        "shadcn/ui Components",
        "React Hook Form",
        "Zod Validation",
        "OpenAI Assistants API",
        "OpenAI Function Calling",
        "Vector Store (Knowledge Files)",
        "Australia Events APIs",
        "Google Maps API",
        "docx (Document generation)",
        "date-fns (Date manipulation)",
        "LocalStorage (Client-side state)",
        "File-saver (Export functionality)"
      ],
  
      "background": "Australian aged care facilities face critical challenges in creating meaningful, personalized activity programs for residents.\n\nCare coordinators spend 8+ hours manually researching community events, attractions, and activity ideas, often leading to repetitive or non-inclusive programs.\n\nThe Activity Program AI Generator solves this by combining AI intelligence with real-time local data to generate tailored, diverse activity plans in under 5 minutes—considering facility constraints, resident preferences, and nearby community resources.",
  
      "challenge": "Developing this platform required solving several enterprise-level challenges:\n\n**Complex Multi-Step Workflow** — Designing a 5-step form that gathers over 20 inputs (program type, schedule, resources, etc.) while staying intuitive for non-technical users.\n\n**AI Orchestration** — Integrating OpenAI Assistants with external data sources (Australia Events, Google Maps) and facility knowledge bases for personalized, localized recommendations.\n\n**Scheduling Intelligence** — Building a dynamic planner that respects recurring activities, mealtimes, outings, staff shifts, and accessibility needs.\n\n**Scalable Architecture** — Managing thousands of users, multiple roles, subscription tiers, and isolated tenant data securely.\n\n**Administrative Control** — Equipping admins with tools for analytics, support, and moderation without affecting user experience.",
  
      "solution": "The delivered solution is a modern SaaS platform built to streamline activity planning while ensuring personalization and efficiency.\n\nThe system begins with an onboarding and authentication module supporting role-based access for users and administrators. Once logged in, coordinators can launch the **AI-powered 5-step wizard**, which collects facility details, resident demographics, available resources, and scheduling preferences.\n\nAt its core, the **AI Program Generator** uses the OpenAI Assistants API combined with real-world data from Australia Events and Google Maps. Knowledge files from each facility are embedded into a vector store, allowing the AI to consider unique contexts such as dementia-friendly programs or cultural diversity needs. GPT-4 with function calling then processes all data in multiple passes—analyzing, structuring, and generating full plan with balanced indoor and outdoor activities. Each generated program is output as structured JSON, later formatted into a visually polished Word document using docx templates.\n\nUsers can review the generated plan through an **interactive calendar editor**, make adjustments in real time, and export the result in A4 or A3 format. This ensures every facility receives a ready-to-print, fully customized weekly schedule.\n\nA **dashboard system** allows users to manage all programs, view statistics, and monitor upcoming events, while admins can oversee users, handle support requests, moderate community discussions, and track subscription analytics.\n\nThe platform also includes a **Learning Hub** with short video tutorials and downloadable resources, plus a **Community Forum** where coordinators share program ideas and best practices.\n\nThe interface was built with Tailwind CSS and Framer Motion for a smooth, responsive experience, ensuring accessibility on both desktop and mobile. Every form, validation, and feedback mechanism was carefully designed to reduce friction and maintain clarity for care staff users.",
  
      "conclusion": "The Activity Program AI Generator transformed how aged care facilities plan and deliver activities, cutting preparation time from over eight hours to just minutes.\n\nIt combines AI automation, localized data integration, and intuitive design to empower coordinators to create inclusive, engaging, and compliant programs without technical barriers.\n\nThis project highlights expertise in AI workflow design, multi-agent orchestration with OpenAI APIs, full-stack SaaS development, and UX principles tailored for enterprise users.",
      "dashboards": [
        {
          "name": "User Dashboard",
          "demoVideo": 'https://youtu.be/dQ1DlJZxOQc',
          "screenshots": '/projects-screenshots/7/d-1'
        },
        {
          "name": "Admin Dashboard",
          "demoVideo": 'https://youtu.be/hzDy-ZJ2iAc',
          "screenshots": '/projects-screenshots/7/d-2'
        },
      ]
    }
  },
  {
    "id": 8,
    "title": "OAM AI - AI-Powered WhatsApp Concierge for Property Management",
    "des": "An intelligent WhatsApp and SMS concierge system that automates guest check-in/out, amenity assistance, and provides personalized local recommendations for vacation rental properties.",
    "img": "/oam-ai-preview.svg",
    "iconLists": ["/nodejs.svg", "/express.png", "/mongodb.svg", "/aws.png", "/openai.png", "/whatsapp.png", "/html.png", "/css.png", "/javascript.png"],
    "link": "/projects/8",
    "caseStudy": {
      "industry": "Hospitality & Property Management",
  
      "technologies": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenAI Assistants API",
        "WhatsApp Business API",
        "AWS S3",
        "Cloudinary",
        "Passport.js",
        "EJS Templates",
        "Nodemailer"
      ],
  
      "background": "The vacation rental industry faces constant challenges in offering around-the-clock guest support while managing multiple properties. Hosts often spend hours answering repetitive questions about check-in instructions, amenities, or nearby attractions. OAM AI was designed to solve this problem by becoming a 24/7 AI-powered concierge available on WhatsApp and SMS—the platforms guests already use. Each property needed its own personalized assistant capable of understanding house-specific details and interacting naturally with guests while providing fast, accurate, and friendly responses.",
  
      "challenge": "Several major technical and operational challenges had to be overcome to make OAM AI function as a scalable, intelligent concierge.\n\nThe first was **multi-property knowledge management**. Each property required its own AI knowledge base containing unique details such as access codes, Wi-Fi information, nearby landmarks, and local recommendations. The system needed to create and manage independent assistants dynamically while maintaining smooth context between ongoing guest conversations.\n\nThe second challenge was **real-time WhatsApp integration**. The WhatsApp Business API uses strict webhook timeouts, so the backend had to acknowledge messages instantly while processing them asynchronously in the background to avoid duplicate responses.\n\nAnother key challenge was **document ingestion and retrieval**. Property managers had to be able to upload PDF guides and manuals that the AI could use to answer guest questions. This meant building a secure storage and retrieval pipeline that linked AWS S3 with OpenAI’s file-processing capabilities.\n\nFinally, the system needed a secure, intuitive dashboard for property managers—complete with authentication, file management, status tracking, and role-based access for different team members.",
  
      "solution": "I developed a complete AI concierge ecosystem powered by Node.js and Express, integrating multiple APIs and cloud services into a seamless hospitality platform.\n\nAt the **core architecture level**, I built a RESTful backend with user authentication handled through Passport.js, supporting both local credentials and Google OAuth. MongoDB served as the database, with schemas for users and properties. Password reset and verification flows were implemented with secure token generation and Nodemailer for email delivery.\n\nThe **AI integration layer** used the OpenAI Assistants API to create an independent AI concierge for every property. Each assistant was trained on property-specific content uploaded by the host, ensuring highly contextual and accurate answers. Conversations were organized through a custom function that linked guest phone numbers to active conversation threads. This allowed guests to resume chats at any time with full context continuity.\n\nTo handle **real-time WhatsApp communication**, I built a webhook handler that instantly acknowledges incoming messages with a 200 response, then processes them asynchronously. A Set-based cache with a five-minute TTL was added to prevent duplicate responses from webhook retries. This design ensured both reliability and performance.\n\nFor **file and knowledge management**, I integrated AWS S3 for secure document uploads and Cloudinary for image hosting. Files were processed using a memory-based Multer configuration, then passed through an automated pipeline that uploaded property guides to S3, registered them in OpenAI, and connected them to each property’s assistant. This system allowed AI assistants to provide detailed, document-backed answers.\n\nThe **property management dashboard** was built using EJS templates, featuring intuitive CRUD operations, modal-based property creation, and real-time status indicators. Managers could upload files, edit property details, assign WhatsApp contacts, and track activity in one place. I also implemented copy-to-clipboard utilities for sharing property codes and visual indicators for active or ready states.\n\nFor **security**, the application employed express-mongo-sanitize to prevent injection attacks, session-based authentication with httpOnly cookies, and encrypted passwords using passport-local-mongoose. All key operations, from login to document upload, were protected by middleware-level access control.\n\nTogether, these systems created a reliable, secure, and intelligent platform that feels like a true digital concierge—capable of handling guest questions, sending recommendations, and managing property-specific interactions autonomously.",
  
      "conclusion": "OAM AI transformed property management by automating guest communication across WhatsApp and SMS. It provides a 24/7 AI concierge that answers questions, assists with check-in, and recommends local experiences—all tailored to each property. The project reached the **Top-5 on Product Hunt**, validating its innovation and usability.\n\nThrough this project, I gained hands-on expertise in **multi-assistant orchestration**, **real-time messaging pipelines**, and **AI-driven knowledge management**. I also mastered asynchronous webhook design and deepened my understanding of cloud storage, authentication patterns, and API-based automation.\n\nThe platform’s success demonstrated how AI can bridge the gap between human hospitality and automation—offering guests a natural, intelligent experience while giving hosts powerful management tools for scaling their business.",
      "dashboards": [
        {
          "name": "Project Demo",
          "demoVideo": 'https://youtu.be/_bIZqW3eJrY',
          "screenshots": '/projects-screenshots/8/d-1'
        },
      ]
    }
  },
  {
    "id": 9,
    "title": "AI Proposal Generator SaaS",
    "des": "Automate business proposal creation with AI-powered document generation. Streamline the proposal process by combining RFP analysis with customizable templates and multi-step AI agents.",
    "img": "/proposal-generator.svg",
    "iconLists": ["/next.svg", "/react.png", "/ts.svg", "/tail.svg", "/openai.png"],
    "link": "/projects/9",
    "caseStudy": {
      "industry": "Enterprise Software & Business Automation",
      "technologies": [
        "Next.js 15 (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "React UI Components (shadcn/ui)",
        "Document Processing (mammoth, docx)",
        "Zustand (State Management)",
        "Axios (API Integration)",
        "OpenAI API (Multi-step Agentic Workflow)",
        "Function Calling for Structured Content Generation",
        "date-fns (Date Handling)"
      ],
      "background": "The AI Proposal Generator was developed to solve a critical pain point for consulting firms and service businesses: the time-consuming and repetitive process of creating professional proposals.\n\nTraditional proposal creation involves manual document editing, inconsistent formatting across templates, and difficulty in extracting and responding to RFP requirements.\n\nThe platform needed to enable teams to generate polished, AI-enhanced proposals in minutes rather than hours, while maintaining brand consistency and quality standards across all submissions.",
      "challenge": "The core challenges were multifaceted:\n\n**Document Management** - handling both .docx and .pdf file uploads for RFPs and templates with reliable parsing and preview capabilities.\n\n**AI Integration** - building an advanced AI-driven engine capable of analyzing complex RFPs, breaking them into sections, and generating long-form, multi-page proposals. Standard single-pass text generation from AI models is limited by token constraints, so a multi-step agent-based pipeline was required to generate, refine, and structure each proposal section while maintaining contextual coherence.\n\n**User Experience** - creating an intuitive interface for non-technical users to manage multiple document types, templates, and generated proposals.\n\n**Real-time Processing** - simulating progress states during document analysis and generation to maintain user engagement during potentially long-running operations.\n\n**State Management** - coordinating complex workflows involving template selection, RFP uploads, customization, and final generation across multiple UI sections.",
      "solution": "Architected a comprehensive proposal generation platform with three core systems:\n\n**Frontend Architecture** - Built with Next.js App Router using TypeScript for type safety. Implemented a multi-section playground component that guides users through template selection/upload, RFP selection/upload, and proposal configuration. Used Framer Motion extensively for smooth animations and visual feedback throughout the generation workflow.\n\n**Document Handling** - Integrated mammoth library for real-time .docx preview and parsing, supporting both document and PDF formats for RFPs. Implemented drag-and-drop file upload with validation and progress tracking.\n\n**AI Integration Pipeline** - Developed a multi-agent workflow using OpenAI’s API to generate full multi-page proposals.\n\nThe first agent analyzes the uploaded RFP document, identifying key sections, client requirements, and structure. The second agent drafts detailed proposal sections for each identified part, maintaining continuity across sections. The final agent refines tone, consistency, and formatting alignment with the chosen template.\n\nFunction calling was used to retrieve structured outputs, breaking down each generated section (executive summary, methodology, pricing, timeline, etc.) into organized JSON objects. These structured results were then programmatically inserted into the user-selected or uploaded Word proposal template.\n\nThis approach allowed for the creation of complete, multi-page proposals with precise formatting, ensuring no content truncation due to token limits.\n\n**Proposal Management System** - Created a three-tier organization structure: Templates (reusable proposal sections), RFPs (client requirements), and Generated Proposals (final outputs). Implemented comprehensive filtering, search, and sorting across all sections.\n\n**State Management** - Utilized a combination of React hooks and local state management for form data, with provisions for Zustand integration for scalable state management.\n\n**UI/UX Design** - Applied consistent green color scheme (#4CAF50 primary, #2E7D32 dark) with thoughtful use of neutrals and accent colors. Implemented responsive layouts using flexbox and Tailwind CSS, with grid views for proposals/templates and detailed list views.\n\n**Authentication** - Integrated role-based access with separate user and admin dashboards, authenticated via middleware with JWT support.\n\n**Animation & Interactivity** - Added generation progress indicators, smooth transitions between states, and interactive card animations for enhanced engagement.",
      "conclusion": "Successfully delivered a full-featured SaaS platform that reduced proposal creation time from hours to minutes for clients.\n\nThe multi-agent AI pipeline became the core differentiator of the product, enabling the generation of structured, professional proposals that adhere to specific RFPs while ensuring completeness and stylistic consistency.\n\nThe platform empowers consulting teams to maintain uniform proposal quality while leveraging AI to handle repetitive writing tasks at scale.\n\nKey achievements include building a sophisticated document pipeline that reliably processes multiple file formats, implementing multi-step AI orchestration with OpenAI and function calling for structured proposal content, and creating an intuitive playground interface that guides users through complex workflows.\n\nThrough this project, I gained deep expertise in orchestrating multi-agent AI systems, structured data extraction from language model outputs, real-time document processing, and building scalable SaaS architectures that merge AI intelligence with business automation.\n\nThe implementation of animation-driven UX taught me how motion and real-time feedback can guide users through long-running AI processes while maintaining engagement and trust.",
      "dashboards": [
        {
          "name": "User Dashboard",
          "demoVideo": 'https://youtu.be/QWsLLFZVJ48',
          "screenshots": '/projects-screenshots/9/d-1'
        },
        {
          "name": "Admin Dashboard",
          "screenshots": '/projects-screenshots/9/d-2'
        },
      ]
    }
  },
  {
    "id": 10,
    "title": "ChatBotYard - AI Chatbot Builder",
    "des": "A no-code AI chatbot builder enabling businesses to create, train, customize, and deploy intelligent conversational agents across their websites with AI-generated avatars.",
    "img": "/projects/chatbotyard.svg",
    "iconLists": ["/next.svg", "/tail.svg", "/ts.svg", "/react.png", "/openai.png"],
    "link": "/projects/10",
    "caseStudy": {
      "industry": "SaaS & AI Automation | Customer Service & Engagement",
      "technologies": [
        "Next.js 15 (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "React",
        "Zustand (State Management)",
        "Axios (API Calls)",
        "OpenAI API (Chatbot Intelligence)",
        "Flux AI API (Avatar Generation)",
        "Vercel (Hosting & Deployment)",
        "date-fns (Date Formatting)"
      ],
      "background": "The client approached us with a vision to democratize AI chatbot technology for small to mid-sized businesses.\n\nMany companies lacked technical expertise or budgets for custom chatbot development, yet needed 24/7 customer engagement solutions. They required a platform that could simplify the entire chatbot creation workflow—from initial setup through deployment—while incorporating cutting-edge AI capabilities like avatar generation.\n\nThe challenge was to build an intuitive, full-stack SaaS platform that would make AI chatbot creation accessible to non-technical users.",
      "challenge": "Creating a comprehensive SaaS platform required solving multiple interconnected problems:\n\n- **1) No-Code Workflow**: Building an intuitive UI that guides users through complex AI training without requiring technical knowledge.\n- **2) AI Integration Complexity**: Integrating OpenAI's powerful language models while managing context, fine-tuning, and response accuracy. Avatar generation needed seamless integration with Flux AI for realistic, customizable avatars.\n- **3) Real-time Customization**: Implementing a live preview system where changes to chatbot appearance, behavior, and responses are immediately visible.\n- **4) Multi-tenant Architecture**: Managing separate projects, training data, and deployments for multiple users with proper isolation.\n- **5) Scalability**: Handling concurrent chatbot conversations while maintaining low latency and high availability.",
      "solution": "We architected a modern, scalable SaaS platform with distinct user-facing and admin components.\n\n- **Frontend Architecture**: Built with Next.js 15 App Router for optimal performance, leveraging React Server Components for data fetching and Framer Motion for premium animations. State management uses Zustand with Axios for API communication.\n- **Chatbot Builder Flow**: Created a 5-step wizard (Setup → Train → Customize → Preview → Deploy) that abstracts complexity while giving users full control.\n- **AI Integration**: OpenAI's GPT models power conversational intelligence, with custom system prompts tailored to each business's knowledge base. Vector embeddings from uploaded documents enable semantic search for accurate responses.\n- **Avatar Generation**: Integrated Flux AI to generate professional avatars from text descriptions, with a library of pre-made expert personas (dentist, plumber, chef, etc.) for quick selection.\n- **Live Preview System**: Implemented a split-screen editor (configuration panel + live chat preview) using React layout components and Framer Motion for smooth transitions.\n- **Training System**: Supported multiple training methods—website crawling, FAQ uploads, and document imports for knowledge base expansion.\n- **Deployment Widget**: Generated embeddable JavaScript snippets that inject the chatbot widget into any website with customizable position, theme colors, and launcher icons.\n- **Analytics Dashboard**: Project owners can monitor conversation history, session analytics, and engagement metrics.\n- **Admin Dashboard**: Comprehensive management tools for user administration, avatar management, subscription tracking, support tickets, and analytics.",
      "conclusion": "Successfully delivered a production-ready SaaS platform that transformed how businesses deploy AI chatbots.\n\nThe client went from concept to market-ready product in 4 months, attracting early customers including legal marketing firms and media buying companies.\n\nKey learnings included mastering OpenAI's chat completion API with context management, implementing efficient state management at scale with Zustand, and designing intuitive UX for technical features.",
      "dashboards": [
        {
          "name": "User Dashboard",
          "demoVideo": 'https://youtu.be/Da5xWsjHWk4',
          "screenshots": '/projects-screenshots/10/d-1'
        },
      ]
    },
  },
  {
    "id": 12,
    "title": "カテキョ365 - AI Japanese Tutoring SAAS Platform",
    "des": "A comprehensive AI tutoring SaaS platform built for Japanese students, featuring multi-modal learning with text, images, and PDF reference materials.",
    "img": "/projects/katekyo365-hero.svg",
    "iconLists": ["/next.svg", "/tail.svg", "/ts.svg", "/openai.png", "/firebase.png", "/stripe.png"],
    "link": "/projects/12",
    "caseStudy": {
      "industry": "Education Technology (EdTech)",
  
      "technologies": [
        "Next.js 14",
        "TypeScript",
        "React 18",
        "Tailwind CSS",
        "OpenAI API (GPT-5)",
        "Firebase Admin",
        "Firestore Database",
        "Stripe Payments",
        "JWT Authentication",
        "shadcn/ui Components",
        "OpenAI Files API",
        "Markdown Rendering"
      ],
  
      "background": "A Japanese client sought to create a modern AI tutoring platform capable of assisting students across multiple subjects using both text and visual materials.\n\nThe platform needed to handle Japanese-language interaction naturally, allowing students to ask questions, upload images of their homework, and reference textbooks in PDF format during conversations.\n\nThe business model required a subscription-based structure with three tiers offering different question limits, and a full admin control panel for user and AI management. The goal was to provide personalized, interactive, and accessible tutoring while maintaining academic quality.",
  
      "challenge": "Developing this system introduced multiple technical and product-level challenges.\n\nThe first challenge was integrating multi-modal AI capabilities that could process not only text but also images and PDF documents while maintaining context across sessions. The AI needed to understand Japanese input and respond pedagogically in an age-appropriate and culturally accurate manner.\n\nThe second challenge was building a reliable subscription architecture powered by Stripe, with precise question usage tracking, automatic monthly resets, and seamless handling of payment renewals and failures.\n\nReal-time synchronization was another hurdle: user progress, file uploads, and chat histories had to stay consistent across sessions through Firestore while handling concurrent updates efficiently.\n\nFinally, strict access control and data protection were essential to ensure students could only use paid features after successful payment verification, while administrators required their own secure authentication layer.",
  
      "solution": "The delivered solution is a full-featured AI tutoring SaaS built to combine educational depth with cutting-edge AI technology.\n\nAt its core, the platform leverages **OpenAI GPT-5** through the Responses API to enable multi-modal learning. Students can chat with an AI tutor in Japanese, upload images of assignments for problem analysis, and reference textbooks directly within their conversations. The backend processes these inputs through a unified message pipeline that supports text, image, and PDF types simultaneously. Uploaded study materials are stored in Firestore and indexed via the **OpenAI Files API**, allowing the AI to retrieve and reference them during tutoring sessions.\n\nA three-tier **subscription system** was implemented using Stripe, offering Basic (¥980/month), Standard (¥1,980/month), and Premium (¥3,980/month) plans. Webhooks were integrated to automate every subscription event—from creation to cancellation—ensuring that access permissions and question counters remained synchronized with the payment state. The platform enforces question usage limits per tier in real time and resets them automatically with each new billing cycle.\n\nThe **student experience** was designed for clarity and engagement. The dashboard includes a chat interface where users interact with their AI tutor, a book management section for uploading reference materials, and a profile page showing question usage and subscription status. The interface supports markdown-rendered responses, syntax highlighting, and smooth transitions built with Tailwind CSS and shadcn/ui components.\n\nFor administrators, a dedicated **admin panel** provides full control over users, subscriptions, and AI configurations. Admins can adjust system prompts to fine-tune the AI’s tone and teaching style, view active users and analytics in real time, and oversee payment verification statuses.\n\nOn the technical side, the platform runs on **Next.js 14** with Firebase Admin SDK handling backend operations. Firestore serves as the primary database for users, questions, and uploaded materials. JWT-based authentication secures all routes, and strict role-based permissions protect both student and admin areas.\n\nTogether, these implementations created a reliable, responsive, and intelligent system that meets the client’s educational and business goals.",
  
      "conclusion": "カテキョ365 successfully introduced an AI tutoring experience that feels natural, supportive, and distinctly Japanese in tone and pedagogy.\n\nThe system handles complex AI interactions across text, images, and documents while maintaining smooth real-time performance and strict security standards.\n\nThrough this project, I gained deep expertise in **multi-modal AI integration**, **payment lifecycle automation**, and **real-time database management** with Firebase. It also strengthened my understanding of **localization and UX design** for non-English learning environments.\n\nThe result is a scalable, production-ready platform that supports personalized, AI-driven education while ensuring reliability, transparency, and ease of use for both students and administrators.",
      "dashboards": [
        {
          "name": "User Dashboard",
          "demoVideo": 'https://youtu.be/w67idG_B4x4',
          "screenshots": '/projects-screenshots/12/d-1'
        },
        {
          "name": "Admin Dashboard",
          "demoVideo": 'https://youtu.be/jz5CQXNE0Kg',
          "screenshots": '/projects-screenshots/12/d-2'
        },
      ]
    }
  },
  {
    "id": 13,
    "title": "BearisterAI - AI Legal SAAS Platform",
    "des": "A comprehensive SaaS platform providing AI-powered legal assistance for attorneys and law students with subscription-based access to specialized legal research tools.",
    "img": "/bearisterai.svg",
    "iconLists": ["/next.svg", "/ts.svg", "/mongodb.svg", "/openai.png", "/stripe.png"],
    "link": "/projects/13",
    "caseStudy": {
      "industry": "Legal Technology & AI-Powered SaaS",
  
      "technologies": [
        "Next.js 14 (App Router)",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "MongoDB & Mongoose",
        "OpenAI API (GPT-4.1)",
        "Stripe Payments",
        "JWT Authentication",
        "Zustand State Management",
        "Server-Sent Events (SSE)",
        "Vercel Deployment"
      ],
  
      "background": "A legal professional approached me through Fiverr to build a sophisticated AI-powered legal research platform designed for both licensed attorneys and law students.\n\nThe client required a multi-tier SaaS application with AI assistance that adapts to each user's subscription level. The goal was to automate time-consuming legal workflows such as case law research, motion drafting, and police report analysis. Each plan (Basic, Core, Advanced, Pro) offered unique AI capabilities, message limits, and access to specialized legal knowledge bases.",
  
      "challenge": "The project presented several technical and architectural challenges.\n\nIt required a dynamic system that could tailor AI behavior and access depending on the user's subscription plan, including unique system prompts, knowledge vectors, and file access.\n\nReal-time streaming responses were essential for an authentic chat experience, so Server-Sent Events (SSE) had to be implemented for efficient message streaming with low latency.\n\nAccurate usage tracking across plans was critical to monitor message and document limits and reset them monthly.\n\nIn addition, integrating Stripe securely for automated billing and subscription lifecycle management required consistent synchronization with MongoDB.\n\nThe platform also needed a powerful document processing system capable of handling large legal PDFs while integrating with OpenAI’s file search and vectorization features.\n\nFinally, an admin dashboard was needed to oversee users, configure AI parameters, and manage the entire system from one place.",
  
      "solution": "The delivered solution was a production-ready, full-stack SaaS platform that merged AI, legal data processing, and subscription-based access into a seamless experience.\n\nThe **AI integration architecture** formed the heart of the system. Each subscription tier was assigned unique AI settings, including specific system prompts and OpenAI vector store IDs stored in MongoDB. When users interacted with the AI, the backend dynamically fetched the appropriate configuration to ensure that responses matched the plan’s complexity level. The chat interface streamed real-time responses using Server-Sent Events, with typing indicators to maintain engagement. OpenAI’s GPT-4.1 was used for conversational intelligence, while file search and embeddings provided context-aware reasoning over uploaded documents.\n\nThe **authentication and authorization system** used JWT tokens with HTTP-only cookies for security, ensuring that all routes were protected by middleware enforcing both authentication and active payment status. Admins had separate role-based access to manage users and platform settings.\n\nFor **payment and subscription management**, Stripe Checkout was integrated to handle tiered pricing plans ($10 to $60/month). Webhooks were built to react to every subscription event—creation, update, or cancellation—automatically updating user data in MongoDB. A Stripe Customer Portal was included for easy plan management, while usage limits were enforced in real time with progress indicators inside the chat interface.\n\nThe **database architecture** was designed with Mongoose models for users, messages, chats, and AI settings. Relationships between users and their chat sessions were optimized for quick retrieval, and pagination was implemented for chat history. Each user's usage was tracked and reset monthly to ensure fairness and transparency across plans.\n\nA robust **file upload and analysis system** allowed users to upload large PDF files (up to 32MB). Each file was validated, indexed through OpenAI’s file search, and linked to the ongoing conversation for intelligent document-based reasoning. The AI could then extract insights, summarize arguments, or cross-reference relevant laws based on the uploaded content.\n\nThe **frontend interface** was built using Next.js and Tailwind CSS with a focus on clarity and responsiveness. Users could interact with a clean, professional chat interface where AI responses streamed live with markdown formatting and attachment previews. Tooltips, usage notifications, and upgrade prompts were included to guide users smoothly between features and plans.\n\nFinally, the **admin dashboard** provided a full control panel for managing users, viewing subscriptions, adjusting system prompts, configuring vector stores, and monitoring analytics such as total users, revenue trends, and message usage. This allowed the client to operate and scale the platform without manual backend intervention.",
  
      "conclusion": "BearisterAI delivered a reliable, scalable solution that brings AI-powered efficiency to the legal sector. It automates legal research and drafting tasks while maintaining accuracy and professional quality across different subscription levels.\n\nThe platform demonstrated advanced integration of OpenAI APIs for contextual reasoning, secure subscription automation via Stripe, and real-time chat experiences through SSE.\n\nThis project strengthened my expertise in full-stack SaaS architecture, payment lifecycle automation, real-time streaming, and plan-based AI behavior orchestration.\n\nThe end result is a production-ready system that allows attorneys and students to access AI-powered legal support with seamless usability, transparency, and performance.",
      "dashboards": [
        {
          "name": "User Dashboard",
          "demoVideo": 'https://youtu.be/-eW_lV2Z5Qs',
          "screenshots": '/projects-screenshots/13/d-1'
        },
        {
          "name": "Admin Dashboard",
          "demoVideo": 'https://youtu.be/nozLvhTCaJI',
          "screenshots": '/projects-screenshots/13/d-2'
        },
      ]
    }
  },
  {
    "id": 14,
    "title": "AI ATS Resume Generator",
    "des": "An intelligent resume generation platform that transforms Arabic user input into professional, ATS-compliant resumes using GPT-4, serving job seekers in Saudi Arabia.",
    "img": "/ATS_Resume_3c1b048b_page1.png",
    "iconLists": ["/nodejs.svg", "/express.png", "/mongodb.svg", "/openai.png", "/html.png", "/css.png", "/javascript.png"],
    "link": "/projects/14",
    "caseStudy": {
      "industry": "HR Technology & Career Services",
      "technologies": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "OpenAI GPT-4 API",
        "Passport.js",
        "EJS Templating",
        "PDFKit",
        "Puppeteer",
        "Sharp",
        "Canvas",
        "Docx Library",
        "Archiver",
        "Connect-Mongo",
        "Vanilla JavaScript"
      ],
      "background": "A Saudi Arabian client needed a specialized resume generation platform to help Arabic-speaking job seekers create professional, ATS-compliant resumes in English. The challenge was unique: users would input their information in Arabic (their native language), but the system needed to generate polished, professional English resumes that could pass through Applicant Tracking Systems used by international companies. The platform needed to go beyond simple translation—it required intelligent content transformation that understood cultural context, professional terminology, and ATS optimization requirements. The client wanted a solution that would democratize access to professional resume writing services for the Saudi job market.",
      "challenge": "The project presented several complex technical and UX challenges. First, implementing OpenAI's GPT-4 with function calling to ensure structured, consistent resume output while maintaining natural language quality. The AI needed to transform Arabic descriptions into professional English without losing meaning or context. Second, creating pixel-perfect resumes in both PDF and DOCX formats with identical formatting, proper font rendering, and ATS-compliant structure required working with multiple document generation libraries simultaneously. Third, building an intelligent system that doesn't just translate but professionally rewrites content, understanding job market terminology, action verbs, and achievement-oriented language. Fourth, developing a secure admin dashboard where the client could modify AI prompts in real-time to improve output quality without requiring developer intervention. Finally, implementing a preview system with strategically blurred resume sections to showcase quality while protecting the full content until payment, requiring sophisticated image processing.",
      "solution": "I architected a full-stack Node.js application with Express.js and MongoDB, integrating cutting-edge AI capabilities. The core solution involved implementing OpenAI GPT-4 with structured function calling, using a customizable prompt template system. The AI receives Arabic input and generates professionally written English resumes with proper ATS keywords, action verbs, and quantifiable achievements. The prompt template is stored in a text file and can be modified through the admin dashboard, allowing real-time optimization. For document generation, I built a sophisticated dual-format system using PDFKit for PDF creation and the Docx library for Word documents. Both generators use identical styling logic to ensure perfect consistency, handling complex formatting including custom fonts, precise spacing, bullet points, and section headers. The preview system uses pdf2pic to convert the first page to PNG, then Sharp to create strategically blurred sections—keeping the header visible while obscuring the main content. I implemented Passport.js authentication with local strategy, creating a protected admin area where the client can edit the AI prompt template with live preview, view comprehensive statistics of all generated resumes, access detailed user input and AI output data, and monitor system usage. The user-facing interface features an intuitive, Arabic-language multi-step form with progressive disclosure, breaking the resume creation process into manageable steps with validation, character counters, and helpful examples. All user inputs and AI-generated resumes are stored in MongoDB, enabling the client to analyze usage patterns and continuously improve the system.",
      "conclusion": "This project allowed me to deliver a complete SaaS solution that empowered my Saudi Arabian client to serve their market independently. I helped them by building a robust admin system where they could fine-tune AI prompts without technical knowledge, view detailed analytics, and maintain full control over their platform. Through this project, I deepened my expertise in OpenAI function calling and prompt engineering, mastered complex document generation with PDFKit and Docx libraries, and learned advanced image processing techniques with Sharp and Canvas. The experience strengthened my ability to architect full-stack applications that balance sophisticated AI integration with practical business needs.",
      "dashboards": [
        {
          "name": "Project Demo",
          "demoVideo": 'https://youtu.be/3P4TbQ9dqjI',
          "screenshots": '/projects-screenshots/14/d-1'
        },
      ]
    }
  },
  {
    "id": 15,
    "title": "TeamFirst - Blockchain-Powered Football Club Donations",
    "des": "A transparent donation platform connecting African football fans with their favorite clubs using Hedera blockchain technology.",
    "img": "/logo.png",
    "iconLists": ["/hedera.png", "/metamask.png", "/next.svg", "/tail.svg", "/ts.svg", "/react.png", "/mongodb.svg"],
    "link": "/projects/15",
    "caseStudy": {
      "industry": "Blockchain & Sports Technology",
      "technologies": [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS v4",
        "Hedera Hashgraph SDK",
        "Hedera Consensus Service (HCS)",
        "Hedera Token Service (HTS)",
        "RainbowKit",
        "Wagmi",
        "MongoDB",
        "Mongoose",
        "SWR",
        "shadcn/ui",
        "Viem"
      ],
      "background": "**TeamFirst** was developed as our submission for the **Hedera Africa Hackathon**, Africa's largest blockchain hackathon. As a team of two—myself as lead developer and my partner handling design and business strategy—we identified a critical challenge in African football: the lack of transparent, accessible funding mechanisms for local clubs.\n\nAfrican football clubs, despite their passionate fan bases, often struggle with financial sustainability. Traditional donation systems lack transparency, have high transaction fees, and don't provide donors with verifiable proof of their contributions. We saw an opportunity to leverage **Hedera's fast, low-cost, and transparent blockchain** to revolutionize how fans support their favorite teams.",
      "challenge": "The project presented several complex technical challenges:\n\n- **Multi-chain wallet integration**: Supporting various wallet providers (HashPack, MetaMask, Trust Wallet) while maintaining a seamless user experience across Hedera's EVM-compatible layer\n\n- **Real-time transparency**: Implementing live donation feeds that update instantly across all users while maintaining data consistency between blockchain records and our database\n\n- **Hedera Consensus Service integration**: Recording immutable donation receipts on HCS topics for complete transparency and auditability\n\n- **NFT badge system**: Designing and implementing a tiered NFT badge system (Bronze/Silver/Gold) using Hedera Token Service, with automatic minting based on donation amounts and handling token associations\n\n- **Cross-continental scope**: Representing 40+ football clubs from 10 African countries (Morocco, Egypt, Senegal, Côte d'Ivoire, South Africa, Cameroon, Mali, Nigeria, Algeria, Tunisia) with accurate data and localized content\n\n- **Performance optimization**: Ensuring fast load times and smooth interactions despite complex blockchain operations and real-time data synchronization",
      "solution": "We architected a full-stack Next.js application with deep Hedera blockchain integration:\n\n**Frontend Architecture:**\n- Built with **Next.js 14 App Router** for optimal performance and SEO\n- Implemented **RainbowKit + Wagmi** for multi-wallet support with seamless Hedera testnet integration\n- Created a real-time context provider using **SWR** for live donation feeds and leaderboard updates\n- Designed responsive UI with **Tailwind CSS v4** and **shadcn/ui** components\n- Integrated **flag-icons** for visual country representation\n\n**Blockchain Integration:**\n- Utilized **Hedera Hashgraph SDK** for native blockchain operations\n- Implemented **Hedera Consensus Service (HCS)** to record immutable donation receipts with topic creation and message submission\n- Built **NFT badge system** using Hedera Token Service with three tiers:\n  - Bronze: < 50 HBAR\n  - Silver: 50-300 HBAR  \n  - Gold: > 300 HBAR\n- Integrated **Hedera Mirror Node API** for balance checking and transaction verification\n- Supported both native Hedera accounts and EVM-compatible addresses\n\n**Backend & Database:**\n- Created **MongoDB schemas** for donations, users, and NFTs with proper indexing\n- Built **API routes** for donation processing, leaderboard generation, NFT minting/claiming, and HCS receipt submission\n- Implemented server-side Hedera client with operator account management\n- Designed efficient data aggregation pipelines for real-time statistics\n\n**Key Features Delivered:**\n- Live donation feed with WebSocket-style updates\n- Club-specific pages with donation history and top donor leaderboards\n- User profile dashboard showing donation history and collected badges\n- Admin panel for adding new clubs with Hedera account integration\n- Transparent transaction tracking via HashScan integration\n- Quick donation amounts and custom input with balance validation",
      "conclusion": "As the **lead developer** on this hackathon project, I successfully architected and implemented a production-ready blockchain application that demonstrates the real-world utility of Hedera technology in solving African sports funding challenges.\n\nThis project significantly expanded my expertise in **blockchain development**, particularly with Hedera's unique consensus mechanism, HCS for immutable record-keeping, and HTS for NFT creation. I gained deep knowledge of **Web3 wallet integration patterns**, managing the complexities of multi-provider support and handling edge cases like token associations and account aliases.\n\nThe experience taught me valuable lessons in **real-time data synchronization** between blockchain and traditional databases, **performance optimization** for blockchain-heavy applications, and **building user-friendly interfaces** for complex Web3 interactions. Working within hackathon time constraints sharpened my ability to prioritize features, make architectural decisions quickly, and deliver a polished product under pressure.\n\nMost importantly, I learned how to bridge the gap between blockchain technology and real-world problems, creating an application that's not just technically impressive but genuinely useful for African football communities.",
      "dashboards": [
        {
          "name": "Project Demo",
          "demoVideo": 'https://youtu.be/QcfN5536EBo',
          "screenshots": '/projects-screenshots/15/d-1'
        },
      ]
    }
  },
  {
    "id": 16,
    "title": "AI Automated Blog for E-Commerce",
    "des": "A complete AI-driven automation that posts daily SEO-optimized articles with AI-generated images directly to Shopify and WordPress blogs, boosting organic traffic for e-commerce stores worldwide.",
    "img": "/projects/ai-blog-automation.svg",
    "iconLists": ["/nodejs.svg", "/openai.png", "/shopify.png", "/wordpress.png"],
    "link": "/projects/16",
    "caseStudy": {
      "industry": "E-Commerce Automation & Content Marketing",
  
      "technologies": [
        "Node.js",
        "OpenAI API (GPT-4 & DALL-E 3)",
        "Shopify Admin API",
        "WordPress REST API",
        "JSDOM (HTML parsing)",
        "cron (Task scheduling)",
        "dotenv (Environment configuration)",
        "Fetch API",
        "docx & HTML formatting"
      ],
  
      "background": "Many Shopify and WooCommerce store owners struggle to keep their blogs active due to limited time and writing expertise. Static or infrequently updated blogs hurt their SEO ranking and organic traffic potential.\n\nThis project was designed to automate the entire content pipeline—title generation, article writing, image creation, meta description generation, and publication—so that e-commerce sites could consistently post fresh, keyword-rich content without manual effort. The solution is now used by over 20 clients globally, each benefiting from steady traffic growth and improved search visibility.",
  
      "challenge": "Building a fully automated system that could create and publish blog posts daily without human intervention presented several challenges.\n\nIt needed to integrate seamlessly with both Shopify and WordPress APIs while maintaining brand relevance across multiple niches. The AI content had to be long-form, coherent, and SEO-optimized with appropriate formatting and keyword density.\n\nAnother key challenge was image generation and attachment, ensuring that each article had a unique DALL-E-generated visual aligned with the blog topic. In addition, the system required an efficient scheduler, fault-tolerant retry mechanisms, and robust HTML cleaning to ensure perfect formatting upon publishing.",
  
      "solution": "I engineered a Node.js automation that runs continuously, leveraging the OpenAI GPT-4 model for content generation and DALL-E 3 for image creation. The workflow begins by fetching or generating a new SEO-focused article title using OpenAI. Once a title is defined, the script instructs GPT-4 to produce a full HTML article with headings, outlines, internal sections, and keyword optimization for readability and ranking.\n\nThe generated HTML is then parsed with JSDOM to clean unnecessary elements, remove styles, and insert promotional product banners dynamically within the article. DALL-E 3 generates a corresponding featured image, encoded in base64 and attached directly to Shopify or WordPress through their respective APIs.\n\nA meta description is generated in a separate GPT-4 call for SEO metadata. Finally, the complete article (title, body, summary, and image) is uploaded through a secure API request to Shopify or WordPress. A cron scheduler triggers the workflow multiple times daily depending on configuration, ensuring hands-free content publishing for every connected store.\n\nThis system created a reliable, scalable pipeline where each article is unique, keyword-rich, visually enhanced, and automatically published, eliminating the need for manual blog management.",
  
      "conclusion": "Through this project, I helped e-commerce businesses automate their entire content strategy—saving hours of manual writing while improving their online visibility.\n\nI gained deeper expertise in building autonomous AI pipelines, working with OpenAI’s GPT-4 function workflows, DALL-E 3 image generation, and large-scale API integrations with Shopify and WordPress. This project strengthened my skills in orchestrating AI automation for real-world commercial use cases and designing resilient, production-ready Node.js systems.",
      
      "dashboards": [
        {
          "name": "Automation Demo",
          "screenshots": '/projects-screenshots/16/d-1'
        },
      ]
    }
  },
  {
    "id": 17,
    "title": "Jarvis AI for Trello - Voice-Enabled Project Management Assistant",
    "des": "An intelligent voice-activated AI assistant that seamlessly integrates with Trello, enabling hands-free project management through natural language commands.",
    "img": "/jarvis-trello.svg",
    "iconLists": ["/nodejs.svg", "/openai.png", "/trello.png", "/express.png"],
    "link": "/projects/17",
    "caseStudy": {
      "industry": "Productivity & Project Management",
      "technologies": [
        "Node.js",
        "Express.js",
        "OpenAI GPT Assistant API",
        "OpenAI Whisper (Speech-to-Text)",
        "OpenAI TTS (Text-to-Speech)",
        "Trello API",
        "FFmpeg",
        "Multer",
        "EJS Templating",
        "JavaScript"
      ],
  
      "background": "A client managing multiple projects across several Trello boards needed a more natural and efficient way to organize their tasks. Constantly switching between boards, typing updates, and managing cards manually was slowing down their workflow. The client envisioned a hands-free assistant capable of understanding spoken commands and performing Trello actions—such as creating cards, moving tasks, or adding comments—through natural conversation. The system also needed to respond audibly, creating a real-time conversational loop between user and AI.",
  
      "challenge": "The project posed several technical and design challenges that required a deep integration between AI, voice processing, and Trello’s API.\n\nThe first challenge was **natural language understanding**. The assistant had to recognize multiple ways users might express the same command (for example, “add a card”, “create a task”, or “make a note”) and map those variations to Trello operations.\n\nThe second challenge involved the **voice processing pipeline**. It had to accurately capture audio, convert speech to text, process commands, and produce natural voice responses with minimal delay. Managing this full audio loop while maintaining conversational flow required careful synchronization between Whisper, GPT, and TTS models.\n\nThe third challenge was **error resilience**. Since users might mispronounce board or card names, the system needed to intelligently find the closest matches using fuzzy logic, rather than forcing the user to repeat commands. It also had to recover gracefully from failed or incomplete operations.\n\nFinally, the AI had to support **complex Trello operations**—not just basic card creation, but also checklists, attachments, labels, members, and movement between boards—all through conversational AI integrated via function calling.",
  
      "solution": "I developed a complete **voice-enabled AI assistant** that combines OpenAI’s Assistant API with Trello’s API, wrapped in a Node.js + Express backend.\n\nThe **voice processing pipeline** forms the foundation of the system. It begins with Multer handling audio uploads, which are converted into standardized MP3 format using FFmpeg. The audio is then passed to OpenAI Whisper for transcription, producing highly accurate text from spoken input. Once the command is understood, it’s sent to the GPT-powered OpenAI assistant with function calling capability, which analyzes intent, performs the appropriate Trello function, and returns both a text and spoken response generated via OpenAI’s Text-to-Speech API. The response audio is then played back instantly, completing the conversational loop.\n\nThe **AI assistant architecture** leverages OpenAI’s function calling capabilities. I designed 11 specialized function tools to map natural language requests to Trello operations such as creating, editing, or deleting cards, lists, and checklists. The assistant automatically determines which tool to invoke, executes it, and returns results in real time. It maintains context through threaded conversations, allowing users to follow up naturally (e.g., “move it to the Done list”) without re-specifying details.\n\nThe **Trello integration layer** is built as a modular wrapper that communicates with Trello’s REST API. It supports full CRUD operations across boards, lists, cards, comments, and attachments. I implemented intelligent **fuzzy matching** logic that automatically corrects small variations in names caused by speech recognition. The system retries actions silently with the corrected values, ensuring smooth, uninterrupted use.\n\nFor the **frontend**, I created a minimal EJS-based web interface featuring both voice and text input modes. Users can start recording with a single click, view live transcriptions, and receive real-time AI feedback with synchronized audio playback. The UI visually indicates processing and playback states, making the experience transparent and responsive.\n\nThis design produced a natural, fluid workflow where users can manage Trello entirely through conversation—speaking commands like “add a task called Budget Review in Marketing Board” and immediately hearing confirmation from the AI.",
  
      "conclusion": "Jarvis AI for Trello redefines productivity by introducing true hands-free project management. The system allows professionals to control every Trello operation using natural conversation, powered by AI that listens, understands, and speaks back.\n\nThis project deepened my expertise in **voice-driven AI architecture**, **OpenAI’s Assistant API with function calling**, and **real-time audio processing**. I also mastered advanced techniques in fuzzy matching for speech interfaces, which made the assistant feel genuinely intelligent and human-like.\n\nThe result was a production-ready assistant that dramatically improved the client’s efficiency and became a foundation for future voice-enabled workflow automation projects.",
      "dashboards": [
        {
          "name": "Project Demo",
          "screenshots": '/projects-screenshots/17/d-1'
        },
      ]
    }
  },
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
]

export const testimonials = [
  {
    quote:
      "Collaborating with Mohamed was an absolute pleasure. Professional, prompt, and dedicated to great results.",
    name: "Client review",
    title: "Fiverr",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
]

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
]

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/igamane",
    label: "GitHub",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/mohamed-igamane/",
    label: "LinkedIn",
  },
];

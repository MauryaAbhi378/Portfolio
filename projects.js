const projects = [
  {
    title: "Job Hunt",
    slug: "job-hunt",
    techStack: {
      frontend: ["React", "Redux", "Shadcn UI"],
      backend: ["Node", "Express"],
      database: ["MongoDB"],
      authentication: ["JWT"],
    },
    image : "/jobhunt.png",
    shortDesc: "A full-stack job portal connecting employers and job seekers with advanced search and application tracking.",
    description: {
      para1:
        "Built with a modern tech stack, it offers a seamless experience for both user roles — employers can post, edit, and manage job listings through a dedicated dashboard, while job seekers can explore curated opportunities, apply with ease, and track their application status in real time. The platform features advanced job search with powerful filters for role, location, salary range, and experience level, ensuring candidates find the most relevant positions quickly and efficiently.",
      para2:
        "The application is powered by secure, role-based authentication that ensures each user only accesses what they're meant to see. State management is handled using Redux, keeping the UI consistent and predictable across complex workflows.",
    },
    whatILearned: [
      {
        title: "Backend Architecture & Database Design",
        desc: "Building this project gave me hands-on experience with Node.js, Express.js, and MongoDB to design a robust REST API. I wrote dynamic queries using MongoDB operators like $regex, $or, and $elemMatch to power an advanced multi-filter job search. I also implemented JWT-based authentication with role-based access control, ensuring secure and scoped access for both employers and job seekers.",
      },
      {
        title: "State Management & Frontend Data Flow",
        desc: "Working with Redux taught me how to manage complex cross-component state in a clean and scalable way. I structured the store into distinct slices for auth, job listings, and application tracking, handling async API calls through Redux Thunk.",
      },
    ],
    live: "https://job-hunt-yjwx.onrender.com/",
    github: "https://github.com/MauryaAbhi378/Job-Hunt",
    web: "true",
  },
  {
    title: "Devlog",
    slug: "devlog",
    techStack: {
      frontend: ["Next.js", "Shadcn UI"],
      database: ["Convex"],
      authentication: ["better-auth"],
    },
    image : "/devlog.png",
    shortDesc: "A full-featured blogging platform with a rich writing experience, real-time commenting, and dynamic search capabilities.",
    description: {
      para1:
        "Devlog is a full-featured blogging platform where users can create, publish, and explore blog posts on a wide range of topics. The platform provides a rich writing experience with a powerful media text editor, allowing authors to format their content with ease. Readers can engage with posts through a real-time commenting system, where new comments appear instantly without needing to refresh the page. The application also includes a dynamic search feature that lets users find posts by title, content, making it easy to discover content quickly.",
      para2:
        "Devlog is built with Next.js and TypeScript, providing a fast, scalable, and type-safe frontend. Quill.js is integrated as the rich text editor, enabling a smooth and expressive writing experience for authors. Convex is used as the backend database, powering real-time data syncing ",
    },
    whatILearned: [
      {
        title: "Next.js Advanced Concepts",
        desc: "Building Devlog deepened my understanding of Next.js. I explored the App Router's file-based routing system to structure pages and layouts cleanly, used Server Actions to handle form submissions and data mutations directly on the server without writing separate API routes, and learned how Next.js handles caching at multiple levels  including full-route caching, data caching, and revalidation strategies to keep the app both fast and up to date.",
      },
      {
        title: "Convex as a Real-Time Backend",
        desc: "While building Devlog, I got hands-on experience with Convex as a backend-as-a-service platform. I learned how to define database schemas, write queries and mutations using Convex's built-in methods, and leverage its real-time reactivity to instantly sync data across clients which powered the live commenting feature.",
      },
    ],
    live: "https://devlog-brown.vercel.app/",
    github: "https://github.com/MauryaAbhi378/Devlog",
    web: "true",
  },
  {
    title: "AI Mock Interview",
    slug: "ai-mock-interview",
    techStack: {
      frontend: ["React", "Shadcn UI"],
      database: ["Firebase"],
      AI: ["Gemini API"],
      authentication: ["Clerk"],
    },
    image : "/ai-mock-interview.png",
    shortDesc: "A web app that simulates real interview experiences using AI-generated questions and provides detailed feedback.",
    description: {
      para1:
        "AI Mock Interview is a web application built with React that simulates a real interview experience using artificial intelligence. The app leverages the Gemini API to dynamically generate role-specific interview questions, while Firebase and Drizzle ORM handle data persistence storing user sessions, responses, and interview history in a structured and scalable way.",
      para2:
        "The application offers a voice-interactive interview flow, allowing users to speak their answers just as they would in a real interview setting. Once the session is complete, the Gemini API analyzes the responses and delivers detailed feedback, helping candidates understand their strengths and areas for improvement. This makes AI Mock Interview a practical, end-to-end preparation tool for anyone looking to build interview confidence.",
    },
    whatILearned: [
      {
        title: "Integrating Gemini AI APIs ",
        desc: "Building this project gave me hands-on experience working with the Gemini API beyond just basic prompting. I learned how to engineer context-aware prompts that generate role-specific interview questions, handle streamed or async API responses gracefully within React, and structure the AI's feedback output in a way that's meaningful and readable for the end user.",
      },
      {
        title: "Voice Interaction & Browser-Native Web APIs",
        desc: "Implementing voice interaction introduced me to the Web Speech API handling speech recognition, managing microphone permissions, and syncing voice input with React's state in real time.",
      },
    ],
    live: "https://ai-mock-interview-ochre-ten.vercel.app/",
    github: "https://github.com/MauryaAbhi378/AI-Mock-Interview",
    web: "true",
  },
];

export default projects;

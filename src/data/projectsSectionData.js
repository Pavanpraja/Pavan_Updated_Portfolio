export const projects = [
  {
    id: 1,
    title: "PDF Page Selector — A Utility Web App",
    description:
      "A lightweight PDF utility tool that enables users to select, extract, and download specific pages from a PDF file.",
    image: "/projects/pdf_page_selector.png", // Replace with actual image path
    category: "Web App / Utility",
    tech: [
      "React JS",
      "Tailwind CSS",
      "FileSaver.js",
      "PDF.js",
      "Vercel",
    ],
    liveLink: "https://pdf-selector1-0.vercel.app/",
    longDescription:
      "PDF Page Selector is a user-friendly web application designed to extract specific pages from PDF documents with precision. Users can preview their PDFs, select desired pages, and download them either individually or as a combined file. The tool also allows copying content from selected pages for quick access. It was developed to address a real-world need, with emphasis on smooth user experience, efficient file handling, and fully client-side PDF processing using libraries like PDF.js and FileSaver.js. Deployed seamlessly via Vercel for global accessibility.",
  },
  {
    id: 2,
    title: "Web Content Website — Introduction to Web Languages",
    description:
      "An informational website designed to help beginners understand the basics of HTML, CSS, and JavaScript.",
    image: "/projects/web_content_website.png", // Replace with actual image path
    category: "Web Development / Education",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Netlify"
    ],
    liveLink: "https://main--singular-tiramisu-8b4ef8.netlify.app/",
    longDescription:
      "This educational website is tailored for users who are completely new to web development. It provides easy-to-understand explanations of core web technologies — HTML, CSS, and JavaScript. The goal is to make web language concepts accessible and engaging for absolute beginners. With a clean and responsive design, this static site allows users to explore content without any prior technical background. Deployed via Netlify, it's a great entry-level resource for curious learners."
  },
  {
    id: 3,
    title: "ChatterSparkle — Real-Time Chat Application",
    description:
      "A real-time chat app to connect with friends and family via shared links, supporting multiple users and live conversations.",
    image: "/projects/chattersparkle_chat_app.png", // Update this to match your actual file
    category: "Full Stack / Chat App",
    tech: [
      "React JS",
      "Vite JS",
      "Tailwind CSS",
      "CSS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Socket.io"
    ],
    liveLink: "https://angchat-app-personal.onrender.com/",
    longDescription:
      "ChatterSparkle is a personal, real-time chat application that allows users to connect with friends and family by simply sharing the app's URL. Built with React (Vite) on the frontend and Node.js/Express on the backend, the app leverages Socket.io to enable live communication across multiple users simultaneously. MongoDB is used for storing user and message data securely. The interface is styled using Tailwind CSS and custom CSS, ensuring a clean and responsive design. Whether it’s one-on-one chatting or group conversations, ChatterSparkle provides a seamless and engaging experience directly from the browser."
  },
];

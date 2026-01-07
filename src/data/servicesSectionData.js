import { Code, Palette, PenTool } from "lucide-react";
export const services = [
    {
      id: 1,
      number: "01",
      title: "Web Development",
      description: "I use my knowledge of various programming languages such as HTML5, CSS3, SCSS, JAVASCRIPT, NODE JS, EXPRESS JS, REACT JS, NEXT JS, TAILWIND CSS, ON-PAGE OPTIMIZATION to build digital solutions for users.",
      icon: <Code size={32} />,
      bgColor: "bg-cyan-400",
      textColor: "text-gray-900"
    },
    {
      id: 2,
      number: "02",
      title: "UI Design",
      description: "Crafting user-centric digital experiences that seamlessly blend aesthetics and functionality. Expert in user-centered design and responsive interfaces.",
      icon: <Palette size={32} />,
      bgColor: "bg-gray-700",
      textColor: "text-white"
    },
    {
      id: 3,
      number: "03",
      title: "Content Writing",
      description: "Weaving impactful narratives and delivering engaging content that resonates with readers. Skillfully combining creativity with research to create compelling pieces.",
      icon: <PenTool size={32} />,
      bgColor: "bg-gray-700",
      textColor: "text-white"
    }
  ];
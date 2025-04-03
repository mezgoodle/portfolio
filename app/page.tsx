import Hobbies from "@/components/Hobbies";
import Hobby from "@/lib/interfaces/Hobby";
import Image from "next/image";
import Link from "next/link";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiJavascript, SiSupabase } from "react-icons/si";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string; // e.g., FontAwesome class name ('fab fa-github')
}

export default function Page() {
  const skills: Skill[] = [
    { name: "React", icon: <FaReact /> }, // Example with FontAwesome
    { name: "Next.js", icon: <RiNextjsFill /> }, // Example with local image
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Git", icon: <FaGit /> },
  ];

  const hobbies: Hobby[] = [
    {
      name: "Reading",
      icon: "fas fa-book",
      description:
        "I enjoy reading books about science, history, and philosophy.",
    }, // FontAwesome
    {
      name: "Hiking",
      icon: "fas fa-hiking",
      description: "Exploring nature trails and mountains.",
    },
    {
      name: "Photography",
      icon: "fas fa-camera",
      description: "Capturing moments and scenes through my lens.",
    },
    { name: "Playing Guitar", icon: "fas fa-guitar" }, // Example
  ];

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/mezgoodle",
      icon: "fab fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mezgoodle",
      icon: "fab fa-linkedin",
    },
    {
      name: "Email",
      url: "mailto:ZkM9o@example.com",
      icon: "fas fa-envelope",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/sylvenis",
      icon: "fab fa-instagram",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4 text-center mb-4">
          {/* Profile Picture */}
          <Image
            src="https://srcdpgjsavojeassrvej.supabase.co/storage/v1/object/sign/photos/Classic%20gradient%2002.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3MvQ2xhc3NpYyBncmFkaWVudCAwMi5wbmciLCJpYXQiOjE3NDMxOTM4MjUsImV4cCI6MTEyMDM5OTM4MjV9.ltnUBJ5O0QOx1twHFPAh-8x4m1mTDt9556YLrQiAOXM" // Replace with your actual image path
            alt="Your Name"
            width={250} // Adjust as needed
            height={250} // Adjust as needed
            className="rounded-circle img-thumbnail" // Bootstrap classes for styling
            priority // Use priority for the main image on the page (LCP optimization)
          />
        </div>
        <div className="col-lg-8">
          {/* About Me */}
          <h1 className="mb-3">Maksym Zavalniuk</h1>
          <h4 className="mb-4 text-muted">Web Developer</h4>
          <p className="lead">
            I&apos;m a passionate web developer with experience in building
            modern and responsive websites and web applications. I specialize in
            front-end development using React, Next.js, and TypeScript. I&apos;m
            also proficient in back-end technologies like Node.js and Supabase.
            I&apos;m always eager to learn new technologies and improve my
            skills.
          </p>
          <p>
            {" "}
            I love to build things that are both useful, beautiful, and
            user-friendly. I have a strong focus on writing clean, maintainable
            code and am a big proponent of testing and continuous
            integration/continuous deployment (CI/CD). I also believe in open
            source and contribute to projects when I can. I enjoy working in
            collaborative environments and believe that communication and
            teamwork are essential for successful projects.
          </p>

          {/* Social Links */}
          <div className="d-flex justify-content-start mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
                title={link.name}
              >
                <i className={`${link.icon} fa-2x`} />{" "}
                {/* Use FontAwesome icons */}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="row mt-5">
        <div className="col">
          <h2>Programming skills</h2>
          <div className="d-flex flex-wrap">
            {skills.map((skill) => (
              <span key={skill.name} className="badge bg-primary m-1 p-2 fs-6">
                {" "}
                {/* Larger badge */}
                {skill.icon && skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hobbies */}
      <Hobbies hobbies={hobbies} />

      {/* Contact Section (Optional) */}
      <div className="row mt-5">
        <div className="col">
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me via email or connect with me on social
            media:
          </p>
          <p>
            Email:{" "}
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
        </div>
      </div>

      {/* Call to Action (Optional) */}
      <div className="row mt-5">
        <div className="col text-center">
          <Link href="/projects" className="btn btn-primary btn-lg">
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

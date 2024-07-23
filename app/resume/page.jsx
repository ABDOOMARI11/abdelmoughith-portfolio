"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaJava,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaBootstrap,
  FaPython,
  FaVuejs,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiCodeigniter,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "about me",
  description:
    "I am a 22-year-old Junior Full Stack Developer, highly motivated to learn new skills in computer science. I am eager to gain experience, improve my abilities, and advance my career towards becoming a software development engineer.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "EL Aoumari Abdelmoughith",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+212) 620 865 442",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Discord",
      fieldValue: "@abdoel2",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Moroccan",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic,English,French",
    },
  ],
};

const experience = {
  title: "My experience",
  description:
    "I have developed multiple web applications using technologies like MERN, React JS, Tailwind CSS, Laravel, Bootstrap, and PHP. Through various internships and projects, I have gained valuable full-stack development experience and enhanced my technical skills.",
  items: [
    {
      company: "Mediaverse",
      position: "Full Stack Developer Intern",
      duration: "Apr 2024 - Jun 2024",
    },
    {
      company: "Rehamna Province",
      position: "Full Stack Developer Intern",
      duration: "Apr 2023 - Jun 2023",
    },
    {
      company: "Higher School of Technology of Safi",
      position: "Full Stack Developer (Student) ",
      duration: "Dec 2022 - Jun 2023",
    },
    {
      company: "I.S.A.T",
      position: "Full Stack Developer Intern",
      duration: "Jul 2022 - Aug 2022",
    },
  ],
};

const education = {
  title: "my education",
  description:
    "I have a Bachelor's Degree in Information Systems and Networks Engineering and a University Diploma in Computer Engineering from the Higher School of Technology of Safi. I also studied Mathematics, Computer Science, Physics, and Chemistry at the Faculty of Science and Technology of Beni Mellal.",
  items: [
    {
      institution: "Higher School of Technology of Safi",
      degree: " Bachelor major Information Systems and Networks Engineering ",
      duration: "2023 - 2024",
    },
    {
      institution: "Higher School of Technology of Safi",
      degree: "University Diploma of Technology in Computer Engineering",
      duration: "2021 - 2023",
    },
    {
      institution: "Faculty of Science and Technology of Beni Mellal",
      degree: "1st Year major M.I.P.C",
      duration: "2020 - 2021",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I have a Bachelor's Degree in Information Systems and Networks Engineering and a University Diploma in Computer Engineering from the Higher School of Technology of Safi. I also studied Mathematics, Computer Science, Physics, and Chemistry at the Faculty of Science and Technology of Beni Mellal.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap 5",
    },

    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaLaravel />,
      name: "laravel",
    },
    {
      icon: <SiCodeigniter />,
      name: "codeigniter 4",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "node js",
    },
    {
      icon: <FaReact />,
      name: "react js",
    },
    {
      icon: <FaVuejs />,
      name: "vue js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next js",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <SiPostgresql />,
      name: "postgres sql",
    },
    {
      icon: <SiMongodb />,
      name: "mongo db",
    },
    {
      icon: <SiRedis />,
      name: "redis",
    },
    {
      icon: <SiFirebase />,
      name: "google firebase",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 items-center xl:items-start">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[360px] min-h-[70px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ScrollArea className="h-[350px]">
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3  md:grid-cols-4  xl:gap-[30px]">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group w-full h-[156px] bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-6xl transition-all duration-300 rounded-xl flex justify-center items-center group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent
            value="about"
            className="w-full text-center xl:text-left"
          >
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold ">{about.title}</h3>
              <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0 break-words overflow-wrap">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[1000px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex flex-col items-center xl:flex-row xl:items-center xl:justify-start gap-4 text-center xl:text-left break-words overflow-wrap"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default Resume;

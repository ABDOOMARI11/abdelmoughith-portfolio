"use client";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in creating stunning and functional websites tailored to meet your needs. From responsive design to seamless user experiences, I use the latest web technologies to build sites that are not only visually appealing but also perform exceptionally well across all devices. Whether you need a personal blog, a portfolio site, or a complex web application, I’m here to bring your vision to life.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I focus on designing intuitive and engaging user interfaces that enhance user experiences. My approach includes user research, wireframing, prototyping, and usability testing to ensure that your product is both aesthetically pleasing and easy to use. Whether you're looking to revamp an existing design or create something entirely new, I’ll help you achieve a design that resonates with your audience.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover: -webkit-text-stroke-hover: 1px #12B2F1;">
                    {service.num}
                  </div>
                  <Link href={service.href} className="hover:-rotate-45">
                    <BsArrowDownRight className="text-white text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

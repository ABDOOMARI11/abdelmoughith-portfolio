"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+212) 620 865 442",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abdelmoughithelaoumari@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Ben Guerir 43150, Morocco",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { firstname, lastname, email, phone, service, message } = formData;
    const mailtoLink = `mailto:abdelmoughithelaoumari@gmail.com?subject=Contact%20Form%20Submission&body=First Name: ${firstname}%0D%0ALast Name: ${lastname}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="py-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 xl:flex-row xl:gap-[30px]">
          <div className="flex flex-col xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="flex flex-col p-6 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-accent">
                Let's work together
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-white/60">
                To create innovative solutions and achieve extraordinary
                results.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-6 mt-4">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Select
                name="service"
                className="mt-4"
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                  </SelectGroup>
                  <SelectItem value="Web Developement">
                    Web Developement
                  </SelectItem>
                  <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[150px] md:h-[200px] mt-4"
                name="message"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" size="md" className="max-w-xs mt-4">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex flex-1 items-center xl:justify-end xl:w-[46%] order-1 xl:order-none">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4 sm:gap-6">
                  <div className="w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[20px] sm:text-[24px] xl:text-[28px]">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-white/60">
                      {item.title}
                    </p>
                    <h3 className="text-[12px] sm:text-[12px] xl:text-xl">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

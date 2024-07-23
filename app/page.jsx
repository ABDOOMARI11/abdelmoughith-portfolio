import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4 md:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-20">
          <div className="text-center xl:text-left order-2 xl:order-none mt-6 xl:mt-0">
            <span className="block text-lg md:text-xl lg:text-2xl">Software Developer</span>
            <h1 className="h1 mb-4 text-3xl md:text-4xl lg:text-5xl">
              Hello I&apos;m <br />
              <span className="text-accent">El Aoumari Abdelmoughith</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-white/80 text-sm md:text-base lg:text-lg">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-4 md:gap-6 lg:gap-8">
              <a href="/assets/cv/abdelmoughith-cv.pdf" download="abdelmoughith-cv.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mt-4 xl:mt-0">
                <Socials containerStyles="flex gap-4 md:gap-5 lg:gap-6" iconStyles="w-8 h-8 md:w-9 md:h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-6 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

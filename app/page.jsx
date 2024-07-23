import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-20 gap-8 xl:gap-0">
          <div className="order-2 xl:order-1 text-center xl:text-left flex flex-col items-center xl:items-start mb-6 xl:mb-0">
            <span className="block text-lg sm:text-xl font-semibold mb-2">Software Developer</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Hello I&apos;m <br />
              <span className="text-accent">El Aoumari Abdelmoughith</span>
            </h1>
            <p className="max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl mb-6 text-white/80 mx-auto xl:mx-0">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a href="/assets/cv/abdelmoughith-cv.pdf" download="abdelmoughith-cv.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <Socials containerStyles="flex gap-4 sm:gap-6 mt-4 sm:mt-0" iconStyles="w-8 h-8 sm:w-9 sm:h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500" />
            </div>
          </div>
          <div className="order-1 xl:order-2 mb-6 xl:mb-0 flex justify-center xl:justify-end w-full xl:w-auto">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

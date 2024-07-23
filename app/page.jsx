import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-20">
          <div className="text-center xl:text-left xl:order-none mb-6 xl:mb-0">
            <span className="block text-lg sm:text-xl font-semibold">Software Developer</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Hello I&apos;m <br />
              <span className="text-accent">El Aoumari Abdelmoughith</span>
            </h1>
            <p className="max-w-[90%] sm:max-w-[80%] lg:max-w-[500px] mb-6 text-white/80 mx-auto">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <a href="/assets/cv/abdelmoughith-cv.pdf" download="abdelmoughith-cv.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="flex gap-6">
                <Socials containerStyles="flex gap-4 sm:gap-6" iconStyles="w-8 h-8 sm:w-9 sm:h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500" />
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

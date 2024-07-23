import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-20 pt-6 pb-10">
          <div className="text-center xl:text-left order-2 xl:order-none mb-3 xl:mb-0">
            <span className="block text-sm xl:text-base text-gray-500">
              Software Developer
            </span>
            <h1 className="text-3xl xl:text-5xl font-bold mb-2">
              Hello I&apos;m <br />
              <span className="text-accent">El Aoumari Abdelmoughith</span>
            </h1>
            <p className="max-w-[500px] mx-auto xl:mx-0 mb-4 text-white/80 text-sm xl:text-base">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/cv/abdelmoughith-cv.pdf"
                download="abdelmoughith-cv.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div>
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-2 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

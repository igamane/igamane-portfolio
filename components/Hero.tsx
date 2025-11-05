import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const PROFILE_SRC = "/profile.jpg"; // place your image at /public/profile.jpg

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        {/* two-column hero: text left, avatar right */}
        <div className="max-w-[89vw] md:max-w-3xl lg:max-w-[60vw] w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Left: heading and CTA */}
          <div className="flex flex-col items-center md:items-start justify-center flex-1">
            <p className="uppercase tracking-widest text-xs text-center md:text-left text-blue-100 max-w-80">
              Mohamed Igamane • Full stack and mobile Developer
            </p>

            <TextGenerateEffect
              words="Full-stack developer building reliable AI SaaS products from front to back"
              className="text-center md:text-left text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              I love shipping useful software and applying AI where it truly moves the needle.
            </p>

            <a href="#about" className="mt-6">
              <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" />
            </a>
          </div>

          {/* Right: circular avatar */}
          <div className="md:mt-0">
            <div className="relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={PROFILE_SRC}
                alt="Mohamed Igamane profile"
                className="w-full h-full object-cover"
              />
              {/* subtle ring glow */}
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10"></div>
              <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-tr from-purple/20 to-blue/10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

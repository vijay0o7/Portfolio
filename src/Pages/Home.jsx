import React, { useState, useEffect, useCallback, memo } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Sparkles,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Memoized Components
const StatusBadge = memo(() => (
  <div
    className="hidden sm:inline-block animate-float"
    data-aos="zoom-in"
    data-aos-delay="400"
  >
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
          Full-Stack
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
          Developer
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#3b82f6]/20 to-[#06b6d4]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon
            className={`w-4 h-4 text-gray-200 ${
              text === "Contact"
                ? "group-hover:translate-x-1"
                : "group-hover:rotate-45"
            } transform transition-all duration-300 z-10`}
          />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["CS Engineering Student", "Android Developer"];
const TECH_STACK = ["Java", "Python", "Javascript", "Kotlin"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/vijay0o7" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/vijay-s-70a810265/" },
  {
    icon: Instagram,
    link: "https://www.instagram.com/imvijxyy?igsh=YXRpNmN5a2Rxa3I0",
  },
];

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  const lottieOptions = {
    src: "https://lottie.host/d6000562-294a-4010-aa5f-c86d004741f4/Fe06iruOsr.lottie",
    loop: true,
    autoplay: true,
    style: { width: "100%", height: "100%" },
    className: `transition-all duration-500 ${
      isHovering
        ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
        : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
    }`,
  };

  return (
    <div className="min-h-screen bg-[#030014]" id="Home">
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-between h-full lg:h-screen gap-10 sm:gap-14">
            {/* Left Section */}
            <div
              className="w-full lg:w-1/2 space-y-6 text-left"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <StatusBadge />
              <MainTitle />
              <div
                className="h-8 flex items-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                  {text}
                </span>
                <span className="w-[3px] h-6 bg-gradient-to-t from-[#3b82f6] to-[#06b6d4] ml-1 animate-blink"></span>
              </div>
              <p
                className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Turning Ideas into Scalable Web & Mobile Applications.
              </p>
              <div
                className="flex flex-wrap gap-3"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                {TECH_STACK.map((tech, index) => (
                  <TechStack key={index} tech={tech} />
                ))}
              </div>
              <div
                className="flex gap-3"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                <CTAButton
                  href="#Portofolio"
                  text="Projects"
                  icon={ExternalLink}
                />
                <CTAButton href="#Contact" text="Contact" icon={Mail} />
              </div>
              <div
                className="hidden sm:flex gap-4"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                {SOCIAL_LINKS.map((social, index) => (
                  <SocialLink key={index} {...social} />
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div
              className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div
                className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#3b82f6]/10 to-[#06b6d4]/10 rounded-3xl blur-3xl transition-all duration-700 ${
                    isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
                  }`}
                ></div>
                <div
                  className={`relative z-10 opacity-90 transition-transform duration-500 ${
                    isHovering ? "scale-105" : "scale-100"
                  }`}
                >
                  <DotLottieReact {...lottieOptions} />
                </div>
                <div className="absolute inset-0 pointer-events-none transition-all duration-700">
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl animate-pulse ${
                      isHovering ? "scale-110" : "scale-100"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);

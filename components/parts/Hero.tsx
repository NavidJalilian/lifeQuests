'use client'

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import hero from '../../public/hero.png'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={hero}
            alt="LifeQuest Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
            placeholder="blur"
            style={{
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
            }}
          />
          {/* Darker overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <span className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/20 text-white font-medium backdrop-blur-sm animate-fade-in">
          Introducing LifeQuest
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in drop-shadow-lg">
          Turn Your Life Into a Game.
          <br />
          <span className="text-primary-light">Get Rewarded for Real Achievements.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto animate-fade-in drop-shadow-lg font-medium">
          Earn points for completing everyday activities like fitness exercises and exchange them
          for in-game rewards, making self-improvement fun and rewarding.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
         
         <a 
          className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-full font-medium transition-colors duration-200 transform hover:scale-105 shadow-xl" href="#early-access">

           Get Early Access
         </a>

          {/* <button className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-xl">
            Learn More
          </button> */}
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-6 h-6 text-white drop-shadow-xl" />
      </div>
    </section>
  );
};

export default Hero;
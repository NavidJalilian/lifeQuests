"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import hero from "../../public/hero.webp";
import SignupForm from "./SignupForm";

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className='relative min-h-screen flex flex-col justify-center items-center px-4 py-20 w-full overflow-hidden'>
        {/* Background Image Container */}
        <div className='absolute inset-0 w-full h-full'>
          <div className='relative w-full h-full'>
            <Image
              src={hero}
              alt='LifeQuest Hero Background'
              fill
              priority
              sizes='100vw'
              className='object-cover object-center'
              quality={90}
              placeholder='blur'
              style={{
                transform: "translate3d(0, 0, 0)",
                backfaceVisibility: "hidden",
              }}
            />
            {/* Darker overlay for better text contrast */}
            <div className='absolute inset-0 bg-black/50' />
          </div>
        </div>

        {/* Main Content Container */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='relative z-10 text-center max-w-4xl mx-auto'
        >
          {/* USP Section */}

          <span className='inline-block px-4 py-1 mb-4 sm:mb-6 rounded-full bg-primary/20 text-white text-sm sm:text-base font-medium backdrop-blur-sm animate-fade-in'>
            Introducing LifeQuest
          </span>
          <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight animate-fade-in drop-shadow-lg px-4'>
            Turn Your Life Into a Game.
            <br />
            <span className='text-primary-light'>
              Get Rewarded for Real Achievements.
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in drop-shadow-lg font-medium px-4'>
            Earn points for completing everyday activities like fitness
            exercises and exchange them for in-game rewards, making
            self-improvement fun and rewarding.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in'>
            {/* <button className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-xl">
            Learn More
          </button> */}
          </div>

          {/* CTA Section */}
          <div id='signup' className='mb-12'>
            <SignupForm />
          </div>

          {/* Social Proof */}
          <div className='mb-16'>
            <div className='flex flex-col items-center gap-4'>
              <div className='flex items-center gap-1 text-yellow-400'>
                <Star className='w-5 h-5 fill-current' />
                <Star className='w-5 h-5 fill-current' />
                <Star className='w-5 h-5 fill-current' />
                <Star className='w-5 h-5 fill-current' />
                <Star className='w-5 h-5 fill-current' />
              </div>
              <p className='text-white font-medium'>
                "The gamification aspect makes working out actually fun. I've
                never been so consistent with my exercise routine."
              </p>
              <p className='text-gray-300'>- Sarah K., Software Developer</p>
            </div>
          </div>
        </m.div>

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10'>
          <ChevronDown className='w-6 h-6 text-white drop-shadow-xl' />
        </div>
      </section>
    </LazyMotion>
  );
};

export default Hero;

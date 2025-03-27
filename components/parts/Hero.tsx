"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import SignupForm from "./SignupForm";
import PhoneFrame from "./PhoneFrame";

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className='relative min-h-screen flex items-center px-4 py-20 w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 relative'>
        {/* Background Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-1/2 -right-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl opacity-30' />
          <div className='absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl opacity-30' />
        </div>

        {/* Main Content Container */}
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left Side - Text Content */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='text-left max-w-xl mx-auto lg:mx-0'
          >
            {/* Character & Desire */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight'>
                Become a <span className='text-primary'>Fitness Champion</span>
              </h1>
              <p className='text-xl text-gray-300 mb-4'>
                Tired of losing motivation? We understand the struggle of
                maintaining a consistent workout routine.
              </p>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='text-xl text-gray-300 mb-4'
            >
              We Make Fitness Fun. Our AI-powered platform turns exercise into a
              game—keeping you engaged, consistent, and feeling great.
            </m.div>
            {/* Call to Action */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='mb-8'
            >
              <SignupForm />
            </m.div>
          </m.div>

          {/* Right Side - Phone Frame */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex justify-center lg:justify-end max-w-xl mx-auto lg:mx-0 -mt-[10px] pb-8 lg:pb-0'
          >
            <PhoneFrame />
          </m.div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-0 left-0 right-0'>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className='flex flex-col items-center gap-2 text-center'
          >
            <span className='text-sm text-gray-400'>See how it works</span>
            <ChevronDown className='w-6 h-6 text-primary animate-bounce' />
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Hero;

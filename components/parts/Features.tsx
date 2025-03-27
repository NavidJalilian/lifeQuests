"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  Camera,
  Activity,
  Timer,
  Dumbbell,
  Zap,
  Medal,
  Gift,
  Sparkles,
  Joystick,
  Gem,
  Star,
  Trophy,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      step: "01",
      title: "Track Progress",
      description:
        "Our AI automatically tracks your workouts and progress, making it easy to stay on track.",
      icon: Camera,
      features: [
        "Camera-based tracking",
        "Exercise recognition",
        "Real-time feedback",
      ],
    },
    {
      step: "02",
      title: "Earn Rewards",
      description:
        "Every workout earns you points and unlocks achievements in your favorite games.",
      icon: Gift,
      features: ["Point system", "Achievement tiers", "Gaming integration"],
    },
    {
      step: "03",
      title: "Level Up",
      description:
        "Watch your fitness level increase as you unlock new challenges and rewards.",
      icon: Joystick,
      features: [
        "Progress tracking",
        "Milestone rewards",
        "Achievement system",
      ],
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className='text-center mb-16'
        >
          <span className='text-primary font-semibold mb-2 block'>
            THE FUTURE OF FITNESS GAMING
          </span>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Your Path to Success
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Be among the first to experience our innovative approach to fitness
            gamification.
          </p>
        </m.div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
          {features.map((feature, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300'
            >
              <div className='w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4'>
                <feature.icon className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-bold mb-3 text-white'>
                {feature.title}
              </h3>
              <p className='text-gray-300 mb-4'>{feature.description}</p>
              <ul className='space-y-2'>
                {feature.features.map((item, i) => (
                  <li key={i} className='flex items-center gap-2 text-gray-300'>
                    <CheckCircle className='w-5 h-5 text-primary' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>

        {/* Success Outcomes */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className='bg-black/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden mx-4 sm:mx-6 mt-12 border border-white/10'
        >
          <h3 className='text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 relative'>
            Your Success Story Starts Here
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
            <div className='p-4 rounded-xl bg-black/50'>
              <div className='w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3'>
                <Trophy className='w-6 h-6 text-primary' />
              </div>
              <p className='text-gray-300'>Achieve Your Goals</p>
            </div>
            <div className='p-4 rounded-xl bg-black/50'>
              <div className='w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3'>
                <Medal className='w-6 h-6 text-primary' />
              </div>
              <p className='text-gray-300'>Stay Motivated</p>
            </div>
            <div className='p-4 rounded-xl bg-black/50'>
              <div className='w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3'>
                <Sparkles className='w-6 h-6 text-primary' />
              </div>
              <p className='text-gray-300'>Have Fun</p>
            </div>
          </div>
          <a
            href='#signup-section'
            className='inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors text-lg'
          >
            Start Your Journey <ArrowRight className='w-5 h-5' />
          </a>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default Features;

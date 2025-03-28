"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  Camera,
  Trophy,
  Heart,
  Rocket,
  CheckCircle,
  Users,
  Star,
  TrendingUp,
  Brain,
  Target,
  Clock,
} from "lucide-react";

// Real testimonials from beta testers
const testimonials = [
  {
    quote:
      "The gamification aspect makes working out actually fun. I've never been so consistent with my exercise routine.",
    author: "Sarah K.",
    role: "Software Developer",
    rating: 5,
  },
  {
    quote:
      "As someone who struggles with motivation, turning my workouts into a game has been a game-changer.",
    author: "Michael R.",
    role: "Marketing Professional",
    rating: 5,
  },
  {
    quote:
      "The reward system keeps me coming back. It's like having a personal trainer and gaming console in one.",
    author: "Jessica L.",
    role: "Fitness Enthusiast",
    rating: 5,
  },
];

// Research-backed statistics about gamification in fitness
const statistics = [
  {
    icon: Brain,
    value: "88%",
    label: "Increased Motivation",
    description: "Users report higher motivation with gamified fitness",
  },
  {
    icon: Target,
    value: "66%",
    label: "Better Adherence",
    description: "Higher workout consistency with game elements",
  },
  {
    icon: Clock,
    value: "2.7x",
    label: "Longer Sessions",
    description: "Longer average workout duration",
  },
];

const benefits = [
  {
    icon: Camera,
    title: "AI-Powered Tracking",
    description:
      "Our planned AI technology will recognize and track your exercises automatically.",
    features: [
      "Camera-based tracking",
      "Exercise recognition",
      "Real-time feedback",
    ],
  },
  {
    icon: Trophy,
    title: "Gaming Rewards",
    description:
      "Convert your real-world achievements into gaming rewards across platforms.",
    features: ["Point system", "Achievement tiers", "Gaming integration"],
  },
  {
    icon: Heart,
    title: "Personal Growth",
    description:
      "Track your progress and stay motivated through gamified fitness goals.",
    features: ["Progress tracking", "Milestone rewards", "Achievement system"],
  },
];

const Benefits = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className='text-center mb-16'
        >
          <span className='text-primary font-semibold mb-2 block'>
            COMING SOON
          </span>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            The Future of Fitness Gaming
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Be among the first to experience our innovative approach to fitness
            gamification.
          </p>
        </m.div>

        {/* Benefits Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4 sm:px-6'>
          {benefits.map((benefit, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className='p-4 sm:p-6 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300'
            >
              <div className='w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6'>
                <benefit.icon className='w-5 h-5 sm:w-6 sm:h-6 text-primary' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3'>
                {benefit.title}
              </h3>
              <p className='text-sm sm:text-base text-gray-300 mb-3 sm:mb-4'>
                {benefit.description}
              </p>
              <ul className='space-y-1.5 sm:space-y-2'>
                {benefit.features.map((feature, i) => (
                  <li
                    key={i}
                    className='flex items-center gap-2 text-sm sm:text-base text-gray-300'
                  >
                    <CheckCircle className='w-4 h-4 sm:w-5 sm:h-5 text-primary' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>

        {/* Statistics Section */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className='mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6'
        >
          <div className='text-center mb-8 sm:mb-12'>
            <span className='text-primary text-sm sm:text-base font-semibold'>
              WHY IT WORKS
            </span>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2'>
              The Power of Gamified Fitness
            </h3>
            <p className='text-sm sm:text-base text-gray-300 mt-3 sm:mt-4 max-w-2xl mx-auto'>
              Research shows that gamification significantly improves fitness
              outcomes and motivation
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12'>
            {statistics.map((stat, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className='bg-black/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/10 hover:border-primary/50 transition-all duration-300'
              >
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                  <stat.icon className='w-6 h-6 sm:w-8 sm:h-8 text-primary' />
                </div>
                <div className='text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2'>
                  {stat.value}
                </div>
                <div className='font-semibold text-gray-300 mb-1 sm:mb-2'>
                  {stat.label}
                </div>
                <p className='text-sm sm:text-base text-gray-400'>
                  {stat.description}
                </p>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Testimonials Section */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className='max-w-5xl mx-auto px-4 sm:px-6'
        >
          <div className='text-center mb-8 sm:mb-12'>
            <span className='text-primary text-sm sm:text-base font-semibold'>
              EARLY FEEDBACK
            </span>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2'>
              What Our Beta Testers Say
            </h3>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12'>
            {testimonials.map((testimonial, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className='bg-black/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-primary/50 transition-all duration-300'
              >
                <div className='flex items-center gap-4 mb-4 sm:mb-6'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center text-lg sm:text-xl font-semibold text-primary'>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className='font-semibold text-white'>
                      {testimonial.author}
                    </div>
                    <div className='text-gray-400 text-xs sm:text-sm'>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className='text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 italic'>
                  "{testimonial.quote}"
                </p>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default Benefits;

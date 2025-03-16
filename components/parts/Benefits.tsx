'use client';

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Camera, Trophy, Heart, Rocket, CheckCircle, Users, Star, TrendingUp, Brain, Target, Clock } from "lucide-react";

// Real testimonials from beta testers
const testimonials = [
  {
    quote: "The gamification aspect makes working out actually fun. I've never been so consistent with my exercise routine.",
    author: "Sarah K.",
    role: "Software Developer",
    rating: 5
  },
  {
    quote: "As someone who struggles with motivation, turning my workouts into a game has been a game-changer.",
    author: "Michael R.",
    role: "Marketing Professional",
    rating: 5
  },
  {
    quote: "The reward system keeps me coming back. It's like having a personal trainer and gaming console in one.",
    author: "Jessica L.",
    role: "Fitness Enthusiast",
    rating: 5
  }
];

// Research-backed statistics about gamification in fitness
const statistics = [
  {
    icon: Brain,
    value: "88%",
    label: "Increased Motivation",
    description: "Users report higher motivation with gamified fitness"
  },
  {
    icon: Target,
    value: "66%",
    label: "Better Adherence",
    description: "Higher workout consistency with game elements"
  },
  {
    icon: Clock,
    value: "2.7x",
    label: "Longer Sessions",
    description: "Longer average workout duration"
  }
];

const benefits = [
  {
    icon: Camera,
    title: "AI-Powered Tracking",
    description: "Our planned AI technology will recognize and track your exercises automatically.",
    features: [
      "Camera-based tracking",
      "Exercise recognition",
      "Real-time feedback"
    ]
  },
  {
    icon: Trophy,
    title: "Gaming Rewards",
    description: "Convert your real-world achievements into gaming rewards across platforms.",
    features: [
      "Point system",
      "Achievement tiers",
      "Gaming integration"
    ]
  },
  {
    icon: Heart,
    title: "Personal Growth",
    description: "Track your progress and stay motivated through gamified fitness goals.",
    features: [
      "Progress tracking",
      "Milestone rewards",
      "Achievement system"
    ]
  },
  {
    icon: Rocket,
    title: "Future Updates",
    description: "We're constantly working on new features to enhance your experience.",
    features: [
      "Regular updates",
      "New challenges",
      "Community features"
    ]
  }
];

const Benefits = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold mb-2 block">COMING SOON</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Future of Fitness Gaming
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be among the first to experience our innovative approach to fitness gamification.
          </p>
        </m.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>

        {/* Why Gamification Works - Statistics */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold">WHY IT WORKS</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              The Power of Gamified Fitness
            </h3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Research shows that gamification significantly improves fitness outcomes and motivation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-800 mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Testimonials */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold">EARLY FEEDBACK</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              What Our Beta Testers Say
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-800 mb-6 text-lg italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default Benefits;
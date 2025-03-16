'use client';

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
  ArrowRight
} from "lucide-react";

const FeatureCard = ({ step, title, description, icons }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl transform -rotate-1 transition-transform group-hover:rotate-0" />
      <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 group-hover:shadow-xl relative">
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg">
          {step}
        </div>
        <div className="flex items-center mb-4 pt-2">
          <div className="mr-4">
            {icons[0].icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 text-lg">
          {description}
        </p>
      </div>
    </m.div>
  );
};

const Features = () => {
  const features = [
    {
      step: "01",
      title: "Move & Track",
      description: "Just start exercising - our app tracks everything automatically!",
      icons: [
        { icon: <Camera className="w-10 h-10 text-primary" />, label: "Auto Tracking" }
      ]
    },
    {
      step: "02",
      title: "Get Rewards",
      description: "Every workout gives you points and rewards - simple!",
      icons: [
        { icon: <Gift className="w-10 h-10 text-primary" />, label: "Rewards" }
      ]
    },
    {
      step: "03",
      title: "Power Up Games",
      description: "Use your rewards to get better at your favorite games!",
      icons: [
        { icon: <Joystick className="w-10 h-10 text-primary" />, label: "Gaming" }
      ]
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Exercise → Earn → Play
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to turn your workouts into gaming rewards
          </p>
        </m.div>

        {/* Feature Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Feature Highlight */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center relative overflow-hidden"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2 relative">
            Start Now!
          </h3>
          <a
            href="#signup-section"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors text-lg relative"
          >
            Join Free <ArrowRight className="w-5 h-5" />
          </a>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default Features;
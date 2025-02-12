'use client';

import { motion } from "framer-motion";
import { Camera, Trophy, Heart, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Camera,
    title: "Track Physical Activities with Ease",
    description: "Use your phone's camera to track movements and exercises automatically.",
  },
  {
    icon: Trophy,
    title: "Earn Points and Rewards",
    description: "Complete activities to earn points and redeem them for exclusive rewards.",
  },
  {
    icon: Heart,
    title: "Gamify Your Fitness Journey",
    description: "Stay motivated with a fun, game-like experience that keeps you engaged.",
  },
  {
    icon: Rocket,
    title: "Personal Growth Beyond Fitness",
    description: "Unlock new opportunities for growth with upcoming life skills features.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Why Choose LifeQuest?
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Experience a revolutionary approach to personal development that makes every
            achievement count.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">{benefit.title}</h3>
              <p className="text-text-light">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
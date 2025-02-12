'use client';

import { motion } from "framer-motion";
import step1 from '../../public/game.png';
import step2 from '../../public/tracking.png';
import Image from "next/image";
import step3 from '../../public/pushUp.jpg';

const steps = [
  {
    id: 1,
    img: step2,
    title: "Track Your Activities",
    description:
      "Use your phone's camera to automatically track exercises and activities.",
  },
  {
    id: 2,
    img: step3,
    title: "Earn Points",
    description:
      "Complete activities to earn points and level up your profile.",
  },
  {
    id: 3,
    img: step1,
    title: "Level Up Your Game",
    description:
      "Use the points you've earned to progress further and unlock new challenges in the game.",
  },

];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-primary-light/10"> {/* Added ID for anchor link */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            How LifeQuest Works
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Get started in minutes and begin your journey to a more rewarding life.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <span className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {step.id}
                </span>
                <Image
                  width={400}
                  height={400}
                  src={step.img}
                  alt={`Step ${step.id}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-text mb-2">
                  {step.title}
                </h3>
                <p className="text-text-light">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
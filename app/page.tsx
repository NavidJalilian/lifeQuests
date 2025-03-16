'use client'

import Image from "next/image";
import Hero from '@/components/parts/Hero';
import Features from '@/components/parts/Features';
import Benefits from '@/components/parts/Benefits';
import SignupForm from '@/components/parts/SignupForm';
import Footer from '@/components/parts/Footer';
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen font-[var(--font-geist-sans)] scroll-smooth">
        {/* Hero Section - Main USP and Initial CTA */}
        <Hero />

        {/* Core Features - What We're Building */}
        <section className="relative py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Features />
          </m.div>
        </section>

        {/* Benefits & Social Proof */}
        <section className="relative py-20 bg-white">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Benefits />
          </m.div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 bg-primary text-white">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="container mx-auto px-4 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Future of Self-Improvement
            </h2>
            <p className="text-xl mb-12 text-white/90">
              Be among the first to experience the revolution in personal development.
              Limited early access spots available!
            </p>
            <div id="signup-section">
              <SignupForm />
            </div>
          </m.div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </LazyMotion>
  );
}

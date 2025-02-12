'use client'

import Image from "next/image";
import Hero from '@/components/parts/Hero';
import Features from '@/components/parts/Features';
import Benefits from '@/components/parts/Benefits';
import SignupForm from '@/components/parts/SignupForm';
import Footer from '@/components/parts/Footer';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen gap-8  font-[var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center w-full">
        <Hero />
        <Features />
        <Benefits />
        <SignupForm />
        <Footer />
      </main>
     
    </div>
  );
}

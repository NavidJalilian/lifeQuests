import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import splash screen images
import splash1 from "@/public/splash1.png";
import splash2 from "@/public/splash2.png";
import splash3 from "@/public/splash3.png";

const PhoneFrame = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: splash1, orientation: "portrait" },
    { src: splash2, orientation: "portrait" },
    { src: splash3, orientation: "landscape" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const isLandscape = images[currentImageIndex].orientation === "landscape";

  return (
    <div className='relative'>
      {/* Decorative Elements */}
      <div className='absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl opacity-50' />

      {/* Phone Frame */}
      <div
        className={`relative mx-auto transition-all duration-500 ${
          isLandscape ? "w-[480px] h-[280px]" : "w-[280px] h-[580px]"
        }`}
      >
        {/* Phone Frame */}
        <motion.div
          layout
          className={`absolute inset-0 bg-gradient-to-b from-gray-900 to-black shadow-2xl border-[14px] border-gray-900 transition-all duration-500 ${
            isLandscape ? "rounded-[2rem]" : "rounded-[3rem]"
          }`}
        >
          {/* Screen Content */}
          <div
            className={`absolute inset-[3px] overflow-hidden bg-black transition-all duration-500 ${
              isLandscape ? "rounded-[1.5rem]" : "rounded-[2.5rem]"
            }`}
          >
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className='relative w-full h-full'
              >
                <Image
                  src={images[currentImageIndex].src}
                  alt={`Demo ${currentImageIndex + 1}`}
                  fill
                  className={`${
                    isLandscape ? "object-contain" : "object-cover"
                  }`}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Notch - Only show in portrait mode */}
          {!isLandscape && (
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[25px] bg-black rounded-b-3xl'>
              <div className='absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-b-3xl' />
            </div>
          )}

          {/* Home Indicator - Only show in portrait mode */}
          {!isLandscape && (
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-gray-800 rounded-full' />
          )}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className='absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-4'>
        <button
          onClick={prevImage}
          className='p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors'
        >
          <ChevronLeft className='w-6 h-6 text-white' />
        </button>
        <button
          onClick={nextImage}
          className='p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors'
        >
          <ChevronRight className='w-6 h-6 text-white' />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-primary w-4"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneFrame;

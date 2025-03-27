import React from "react";

const Footer = () => {
  return (
    <footer className='py-6 sm:py-8 '>
      <div className='container mx-auto px-4 sm:px-6'>
        <p className='text-sm sm:text-base text-center text-gray-600'>
          {new Date().getFullYear()} LifeQuest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

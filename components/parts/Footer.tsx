import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">
          {new Date().getFullYear()} LifeQuest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { FooterBottom } from "./components/FooterBottom/FooterBottom";
import { FooterTop } from "./components/FooterTop/FooterTop";
import { WaveDivider } from "./components/WaveDivider/WaveDivider";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-indigo-50 to-blue-50 shadow-inner">
      {/* Wave divider for modern look */}
      <WaveDivider />
      
      {/* Main footer content */}
      <FooterTop />

      {/* Bottom bar with copyright and legal links */}
      <FooterBottom currentYear={currentYear} />
    </footer>
  );
};

export default Footer;

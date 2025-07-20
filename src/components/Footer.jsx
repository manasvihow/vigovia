import React from 'react';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <div className="font-sans pt-12 border-t break-before-page">
      <div className="flex justify-between items-center">
        
        {/* Column 1: Company Info */}
        <div className="text-sm text-[#364153]">
          <p className="font-bold text-base text-[#101828]">Vigovia Tech Pvt. Ltd</p>
          <p>Registered Office: Hd-109 Cinnabar Hills,</p>
          <p>Links Business Park, Karnataka, India.</p>
        </div>

        {/* Column 2: Contact Info */}
        <div className="text-sm text-[#364153]">
          <p><span className="font-bold text-[#101828]">Phone:</span> +91-99x9999999</p>
          <p><span className="font-bold text-[#101828]">Email ID:</span> Contact@Vigovia.Com</p>
        </div>

        {/* Column 3: Logo */}
        <div>
          <img src={logo} alt="Vigovia Logo" className="h-40 w-auto" />
        </div>

      </div>
    </div>
  );
};

export default Footer;
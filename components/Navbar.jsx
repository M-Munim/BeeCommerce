// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { RxCross2 } from "react-icons/rx";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { usePathname } from 'next/navigation';
// import Button from './Button';

// const Navbar = () => {
//   return (
//     <header className="font-medium bg-transparent fixed z-50 top-0 right-0 left-0">
//       <nav className="flex justify-between items-center h-24 px-16 ">
//         <div className="w-2/12">
//           <Link href="/">
//             <Image src="/Logo.svg" alt="logo" width={100} height={100} className="w-44 h-16" />
//           </Link>
//         </div>

//         <div className=" w-8/12 flex items-center font-semibold text-lg justify-center gap-20">
//           <Link
//             href="/"
//             className={`hover:text-[#F3A920] text-[#504E4E] transition-all duration-200 ${isActive('/') ? 'text-[#F3A920]  underline' : ''
//               }`}
//           >
//             Home
//           </Link>
//           <Link
//             href="#about"
//             className={`hover:text-[#F3A920] text-[#504E4E] transition-all duration-200 ${isActive('/#About') ? 'text-[#F3A920] ' : ''
//               }`}
//           >
//             About us
//           </Link>
//           <Link
//             href="#blog"
//             className={`hover:text-[#F3A920] text-[#504E4E] transition-all duration-200 ${isActive('/Blog') ? 'text-[#F3A920]  ' : ''
//               }`}
//           >
//             Blog
//           </Link>
//           <Link
//             href="#contact"
//             className={`hover:text-[#F3A920] text-[#504E4E] transition-all duration-200 ${isActive('/Contact') ? 'text-[#F3A920]  ' : ''
//               }`}
//           >
//             Contact
//           </Link>
//         </div>

//         <div className="flex items-end justify-center gap-[10px]">
//           <Link href="#">
//             <Image src="/ri_search-line.svg" alt="logo" width={100} height={100} className="w-6 h-6" />
//           </Link>

//           <Link href="#">
//             <Image src="/solar_heart-linear.svg" alt="logo" width={100} height={100} className="w-6 h-6" />
//           </Link>

//           <Link href="#">
//             <Image src="/solar_cart-linear.svg" alt="logo" width={100} height={100} className="w-6 h-6" />
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to scroll smoothly and set active section
  const scrollToSection = (id) => {
    setActiveSection(id);
    setMenuOpen(false); // Close menu on mobile when a link is clicked
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="font-medium bg-transparent fixed z-50 top-0 right-0 left-0">
      <nav className="flex justify-between items-center h-20 px-6 md:px-16">
        {/* Logo */}
        <div className="w-3/12 xl:w-1/12">
          <Link href="/">
            <Image src="/Logo.svg" alt="logo" width={100} height={100} className="w-32 md:w-44 h-14 md:h-16" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-9/12  items-center font-semibold text-lg justify-center gap-20">
          {["home", "about", "blog", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`transition-all duration-200 ${activeSection === section ? "text-[#F3A920] underline" : "text-[#504E4E]"
                } hover:text-[#F3A920]`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Icons Section */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#"><Image src="/ri_search-line.svg" alt="search" width={24} height={24} /></Link>
          <Link href="#"><Image src="/solar_heart-linear.svg" alt="favorites" width={24} height={24} /></Link>
          <Link href="#"><Image src="/solar_cart-linear.svg" alt="cart" width={24} height={24} /></Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <RxCross2 className="text-3xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <GiHamburgerMenu className="text-3xl cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg p-6 flex flex-col items-center gap-6">
          {["home", "about", "blog", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-xl ${activeSection === section ? "text-[#F3A920] underline" : "text-[#504E4E]"
                } hover:text-[#F3A920]`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import nameLogo from "../../assets/name-logo-logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  // Check scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItem = (sectionId) => {
  setActiveSection(sectionId);
  setIsOpen(false);

  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScroll
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* logo */}
<div
  className="text-lg font-semibold cursor-pointer"
  onClick={() => handleMenuItem("about")}
>
  <img
    src={nameLogo}
    alt="Ambika Sahu"
    className="hover:text-[#08d3f7]"
  />
</div>
        
        {/* desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#08fdc0] ${
                activeSection === item.id ? "text-[#09f1d3]" : ""
              } `}
            >
              <button onClick={() => handleMenuItem(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {/* social media icon */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/ambikasahu482"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sahu-ambika/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#08d3f7]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        {/* Mobile icons */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec]cursor-pointer" onClick={()=>setIsOpen(false)} />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec]cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* mobile size items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#422d34] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItem(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
                <a
            href="https://github.com/ambikasahu482"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sahu-ambika/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

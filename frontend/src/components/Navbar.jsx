import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close menu if clicked outside of menu and menu button
      if (
        toggle && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current && 
        !menuButtonRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggle]);

  const handleNavClick = (nav) => {
    setActive(nav.title);
    setToggle(false);
    
    if (nav.id === 'repos' || nav.id === 'now') {
      // These are separate pages, no scroll needed
      return;
    }
    
    // For sections on home page, always navigate to home first if not there
    if (location.pathname !== '/') {
      window.location.href = `/#${nav.id}`;
      return;
    }
    
    // Scroll to section if on home page
    const element = document.getElementById(nav.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            <InlineMath math="\int" /> Ahmed &nbsp;
            <span className='sm:block hidden'>  <InlineMath math="\text{XD}" /></span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavClick(nav)}
            >
              {nav.id === 'repos' || nav.id === 'now' ? (
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              ) : location.pathname !== '/' ? (
                <a href={`/#${nav.id}`}>{nav.title}</a>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            ref={menuButtonRef}
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            ref={menuRef}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => handleNavClick(nav)}
                >
                  {nav.id === 'repos' || nav.id === 'now' ? (
                    <Link to={`/${nav.id}`}>{nav.title}</Link>
                  ) : location.pathname !== '/' ? (
                    <a href={`/#${nav.id}`}>{nav.title}</a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

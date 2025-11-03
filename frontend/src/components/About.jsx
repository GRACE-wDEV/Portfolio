import React, { useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full' options={{
    max: 45,
    scale: 1,
    speed: 450,
  }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const aboutTextRef = useRef(null);
  const charsRef = useRef([]);

  useGSAP(() => {
    if (aboutTextRef.current) {
      const splitText = new SplitText(aboutTextRef.current, { 
        type: "chars",
        charsClass: "char"
      });
      
      charsRef.current = splitText.chars;
      
      gsap.set(charsRef.current, {
        color: "#aaa6c3",
        transition: "color 0.3s ease"
      });
      
      const handleMouseMove = (e) => {
        gsap.to(charsRef.current, {
          color: "#fff",
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      };
      
      const handleMouseLeave = () => {
        gsap.to(charsRef.current, {
          color: "#aaa6c3",
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      };
      
      aboutTextRef.current.addEventListener('mousemove', handleMouseMove);
      aboutTextRef.current.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        if (aboutTextRef.current) {
          aboutTextRef.current.removeEventListener('mousemove', handleMouseMove);
          aboutTextRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex justify-between">
        <motion.p
        // ref={aboutTextRef}
        variants={fadeIn("", "", 0.1, 1)}
        className='aboutText mt-4 text-secondary text-[24px] leading-[35px] max-w-3xl cursor-default select-none'
      >
        I’m Ahmed — a STEM-driven developer and problem solver fueled by the same passion I have for my morning <span className="text-amber-300">coffee</span>.

        I don’t see coding or math as tasks; I see them as puzzles begging to be solved, stories waiting to unfold. From complex algorithms to crafting interactive web experiences, I’m addicted to that rush of finding elegant solutions.

        I study at Gharbiya STEM High School, where competition runs high and curiosity runs deeper. Whether it’s tackling Olympiad-level math, building front-end projects with React, or diving into AI concepts, I’m always chasing the next challenge — the next cup of coffee that keeps me wired and alive.

        I don’t believe in regrets — only lessons, growth, and grit. Every bug fixed, every problem solved, every idea tested brings me closer to mastery.

        The goal? To build things that matter — products that merge logic, creativity, and heart.
        </motion.p>
        <img src="./me.jpg" className="pointer-events-none object-cover w-80 rounded-full " alt="" />
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

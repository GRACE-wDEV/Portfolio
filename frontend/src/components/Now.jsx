import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { InlineMath } from "react-katex";

const CoffeeAnimation = () => {
  const coffeeRef = useRef();

  useGSAP(() => {
    gsap.to(coffeeRef.current, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });

    gsap.to(".steam", {
      opacity: 0.7,
      y: -20,
      duration: 1.5,
      stagger: 0.2,
      repeat: -1,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className="relative" ref={coffeeRef}>
      <div className="text-6xl">☕</div>
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
        <div className="steam text-gray-400 text-sm opacity-0">~</div>
        <div className="steam text-gray-400 text-sm opacity-0 ml-1">~</div>
        <div className="steam text-gray-400 text-sm opacity-0 ml-2">~</div>
      </div>
    </div>
  );
};

const MathFormula = ({ formula, delay = 0 }) => {
  useGSAP(() => {
    gsap.fromTo(".math-formula",
      { scale: 0, rotation: 180 },
      { scale: 1, rotation: 0, duration: 1, delay, ease: "back.out(1.7)" }
    );
  }, [delay]);

  return (
    <motion.div 
      className="math-formula inline-block mx-2 px-3 py-1 bg-purple-900/30 rounded-lg border border-purple-500/30"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(147, 51, 234, 0.2)" }}
    >
      <span className="text-purple-300 font-mono">{formula}</span>
    </motion.div>
  );
};

const PassionCard = ({ title, description, icon, index }) => {
  return (
    <Tilt
      options={{ max: 35, scale: 1.05, speed: 450 }}
      className="xs:w-[300px] w-full"
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex flex-col justify-center items-center text-center'>
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
          <p className="text-secondary text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Now = () => {
  useGSAP(() => {
    gsap.fromTo(".main-title",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(".coffee-love",
      { scale: 0 },
      { scale: 1, duration: 1, delay: 0.5, ease: "back.out(1.7)" }
    );

    gsap.fromTo(".passion-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1, stagger: 0.1 }
    );

    // Floating animation for math symbols
    gsap.to(".floating-math", {
      y: -15,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.3
    });
  }, []);

  const passions = [
    {
      title: "AI Research",
      description: "Building the next generation of artificial intelligence. Every algorithm is a step toward understanding how intelligence really works.",
      icon: "🤖"
    },
    {
      title: "Mathematical Beauty",
      description: "Math isn't just numbers - it's the elegant language that describes everything around us. From calculus to complex analysis.",
      icon: "∫"
    },
    {
      title: "MBZUAI Dream",
      description: "Aspiring to join the MBZUAI, where AI is my next cup of coffee. I believe it's the perfect place to blend my passions for math, coding, and innovation. ",
      icon: "🎓"
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()} className="main-title text-center">
        <p className={`${styles.sectionSubText}`}>What Drives Me</p>
        <h2 className={`${styles.sectionHeadText} flex items-center justify-center gap-4`}>
          Right Now <span className="coffee-love"><CoffeeAnimation /></span>
        </h2>
      </motion.div>

      {/* Hero Section */}
      <div className="mt-12 text-center relative">
        {/* Floating math symbols */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-math absolute top-10 left-10 text-purple-400 text-2xl opacity-30">∑</div>
          <div className="floating-math absolute top-20 right-20 text-cyan-400 text-3xl opacity-30">∂</div>
          <div className="floating-math absolute bottom-20 left-20 text-orange-400 text-2xl opacity-30">∫</div>
          <div className="floating-math absolute bottom-10 right-10 text-green-400 text-2xl opacity-30">∞</div>
          <div className="floating-math absolute top-1/2 left-1/4 text-pink-400 text-2xl opacity-30">π</div>
          <div className="floating-math absolute top-1/3 right-1/3 text-yellow-400 text-2xl opacity-30">Σ</div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h3 className="passion-text text-2xl md:text-3xl font-bold text-white mb-6">
            What I'm working on <span className="text-cyan-400">right now</span> 🚀
          </h3>
          
          <div className="passion-text text-lg text-secondary leading-relaxed mb-8">
            <p className="mb-4">
              My days start with a strong cup of coffee and a mind buzzing with ideas. Studying for my senior high school and preparing to dive into the world of AI research at <MathFormula formula={<InlineMath math="\mu \beta \Z \cup \mathcal{AI}" />} delay={.2}/> where AGI is the future.
              
            </p>
            <p className="mb-4">
              Every day brings new challenges in algorithms, machine learning, and problem-solving. 
              From complex mathematical proofs to cutting-edge AI implementations.
            </p>
            <p className="text-cyan-300 font-medium">
              Building the future, one line of code at a time. ☕✨
            </p>
          </div>

          {/* Mathematical expressions */}
          <div className="passion-text flex flex-wrap items-center justify-center gap-2 mb-8">
            <span className="text-white">Current focus =</span>
            <MathFormula formula="∫(AI + research)dt" delay={0.2} />
            <span className="text-white">+</span>
            <MathFormula formula="Σ(projects)" delay={0.4} />
            <span className="text-white">×</span>
            <MathFormula formula="∞" delay={0.6} />
          </div>
        </motion.div>
      </div>

      {/* Passion Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {passions.map((passion, index) => (
          <PassionCard key={index} {...passion} index={index} />
        ))}
      </div>

      {/* Statement Quote */}
      <motion.div 
        className="mt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div className='bg-tertiary rounded-[20px] p-8'>
            <blockquote className="text-center">
              <p className="text-xl text-white font-light italic mb-4">
                "I don't see coding or math as tasks; I see them as puzzles begging to be solved, 
                stories waiting to unfold. Every bug fixed, every problem solved, every idea tested 
                brings me closer to mastery."
              </p>
              <footer className="text-purple-400 font-semibold">
                — My Development Philosophy ☕
              </footer>
            </blockquote>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <p className="text-2xl text-white mb-4">
          Always learning, always building 🛠️
        </p>
        <p className="text-lg text-secondary mb-6">
          The journey of a thousand algorithms begins with a single line of code.
        </p>
        
        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-tertiary rounded-full text-white font-bold cursor-pointer"
        >
          Let's Build Something <MathFormula formula={<InlineMath math="Amazing" />} delay={0.2} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Now, "now");
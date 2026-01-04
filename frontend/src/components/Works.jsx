import React, { useState, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo,
  onCardClick,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 35,
          scale: 1.02,
          speed: 450,
        }}
        className='relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1624] p-6 rounded-3xl sm:w-[360px] w-full shadow-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden group'
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div 
          className='cursor-pointer relative z-10'
          onClick={onCardClick}
        >
          {/* Image Container with Better Styling */}
          <div className='relative w-full h-[230px] mb-5 rounded-2xl overflow-hidden shadow-lg'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75'
            />

            {/* Gradient Overlay on Image */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

            {/* Top Right Actions */}
            <div className='absolute top-3 right-3 flex gap-2'>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className='bg-black/70 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-purple-600 hover:scale-110 transition-all duration-200 z-20 shadow-lg'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-5 h-5 object-contain invert'
                />
              </div>
            </div>
            
            {/* Hover Overlay with Call to Action */}
            <div className='absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6'>
              <span className='text-white font-bold text-sm bg-purple-600/90 backdrop-blur-sm px-6 py-2.5 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                View Details →
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className='space-y-3'>
            {/* Title with Icon */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
              <h3 className='text-white font-bold text-[22px] group-hover:text-purple-400 transition-colors duration-300'>
                {name}
              </h3>
            </div>

            {/* Description */}
            <p className='text-gray-300 text-[14px] leading-relaxed line-clamp-3'>
              {description}
            </p>

            {/* Tags */}
            <div className='flex flex-wrap gap-2 pt-2'>
              {tags.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className={`text-[12px] font-medium px-3 py-1 rounded-full bg-gradient-to-r ${tag.color} bg-opacity-20 border border-current/20 hover:border-current/40 transition-all duration-200`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 380; // 360px card + 20px gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 380; // 360px card + 20px gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p> 
      </div>

      {/* Projects Carousel Container */}
      <div className='relative mt-20'>
        {/* Horizontal Scrolling Container with enhanced styling */}
        <div 
          ref={scrollContainerRef}
          className='flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-8'
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingRight: '2rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {projects.map((project, index) => (
            <div 
              key={`project-${index}`}
              className='flex-shrink-0'
              style={{ 
                scrollSnapAlign: 'start',
                width: 'clamp(320px, 360px, 90vw)'
              }}
            >
              <ProjectCard 
                index={index} 
                {...project} 
                onCardClick={() => handleProjectClick(project)}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Navigation Buttons */}
        <div className='absolute -bottom-4 right-6 flex gap-3 z-10'>
          <motion.button
            onClick={scrollPrev}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className='group relative w-14 h-14 bg-gradient-to-br from-purple-600/90 to-purple-800/90 backdrop-blur-md hover:from-purple-500 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border-2 border-purple-400/30 hover:border-purple-300/60 overflow-hidden'
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            
            <svg 
              className='w-6 h-6 text-white relative z-10 group-hover:-translate-x-0.5 transition-transform duration-200' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M15 19l-7-7 7-7' />
            </svg>
          </motion.button>
          
          <motion.button
            onClick={scrollNext}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className='group relative w-14 h-14 bg-gradient-to-br from-cyan-600/90 to-cyan-800/90 backdrop-blur-md hover:from-cyan-500 hover:to-cyan-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border-2 border-cyan-400/30 hover:border-cyan-300/60 overflow-hidden'
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            
            <svg 
              className='w-6 h-6 text-white relative z-10 group-hover:translate-x-0.5 transition-transform duration-200' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
            </svg>
          </motion.button>
        </div>
        
        {/* Enhanced fade effect on edges */}
        <div className='absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-primary via-primary/60 to-transparent pointer-events-none'></div>
        <div className='absolute left-0 top-0 bottom-8 w-12 bg-gradient-to-r from-primary via-primary/60 to-transparent pointer-events-none'></div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
};

export default SectionWrapper(Works, "");

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
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div 
          className='cursor-pointer group'
          onClick={onCardClick}
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200 z-10'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            
            {/* Overlay for click indication */}
            <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100'>
              <span className='text-white font-semibold bg-black bg-opacity-50 px-4 py-2 rounded-lg'>
                Click to view details
              </span>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
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
      <div className='relative mt-20 overflow-hidden'>
        {/* Horizontal Scrolling Container */}
        <div 
          ref={scrollContainerRef}
          className='flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-6'
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingRight: '2rem'
          }}
        >
          {projects.map((project, index) => (
            <div 
              key={`project-${index}`}
              className='flex-shrink-0 w-[calc(33.333%-1rem)]'
              style={{ 
                scrollSnapAlign: 'start',
                minWidth: '360px'
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

        {/* Polished Navigation Buttons */}
        <div className='absolute bottom-2 right-6 flex gap-3'>
          <motion.button
            onClick={scrollPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='group w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border border-white/20 hover:border-white/40'
          >
            <svg 
              className='w-6 h-6 text-white group-hover:text-white transition-colors duration-200' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M15 19l-7-7 7-7' />
            </svg>
          </motion.button>
          
          <motion.button
            onClick={scrollNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='group w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border border-white/20 hover:border-white/40'
          >
            <svg 
              className='w-6 h-6 text-white group-hover:text-white transition-colors duration-200' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
            </svg>
          </motion.button>
        </div>
        
        {/* Subtle fade effect on the right edge */}
        <div className='absolute right-0 top-0 bottom-6 w-16 bg-gradient-to-l from-primary to-transparent pointer-events-none'></div>
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

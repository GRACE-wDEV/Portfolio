import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { github, close } from "../assets";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const tabVariants = {
    inactive: {
      scale: 0.95,
      opacity: 0.7,
    },
    active: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-6xl max-h-[90vh] bg-tertiary rounded-2xl shadow-card overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 ">
              <div className="flex items-center space-x-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-white text-2xl font-bold">{project.name}</h2>
                  <p className="text-secondary text-sm">Project Details</p>
                </div>
              </div>
                
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-black-100 hover:bg-black-200 transition-colors duration-200 flex items-center justify-center group"
              >
                <img
                  src={close}
                  alt="close"
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex ">
              <motion.button
                className={` py-4 ml-8 px-6 rounded-lg text-center font-semibold transition-all duration-300 relative ${
                  activeTab === "overview"
                    ? "text-white bg-black-100"
                    : "text-secondary hover:text-white hover:bg-black-200"
                }`}
                onClick={() => setActiveTab("overview")}
                variants={tabVariants}
                animate={activeTab === "overview" ? "active" : "inactive"}
              >
                Overview
                {activeTab === "overview" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
              
              <motion.button
                className={`ml-2 py-4 px-6 rounded-lg text-center font-semibold transition-all duration-300 relative ${
                  activeTab === "preview"
                    ? "text-white bg-black-100"
                    : "text-secondary hover:text-white hover:bg-black-200"
                }`}
                onClick={() => setActiveTab("preview")}
                variants={tabVariants}
                animate={activeTab === "preview" ? "active" : "inactive"}
              >
                Preview
                {activeTab === "preview" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-180px)]">
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                  >
                    {/* Project Image */}
                    <div className="mb-6">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white text-xl font-bold mb-3">Description</h3>
                        <p className="text-secondary text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-white text-xl font-bold mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                          {project.tags?.map((tag, index) => (
                            <motion.span
                              key={index}
                              className={`px-4 py-2 rounded-full text-sm font-medium ${tag.color} bg-black-100`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              #{tag.name}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <motion.button
                          onClick={() => window.open(project.source_code_link, "_blank")}
                          className="flex items-center space-x-2 px-6 py-3 bg-black-100 hover:bg-black-200 rounded-xl transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <img src={github} alt="github" className="w-5 h-5" />
                          <span className="text-white font-medium">View Source</span>
                        </motion.button>
                        
                        {project.live_demo && (
                          <motion.button
                            onClick={() => window.open(project.live_demo, "_blank")}
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 rounded-xl transition-all duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="text-white font-medium">Live Demo</span>
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "preview" && (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                  >
                    <div className="space-y-4">
                      <h3 className="text-white text-xl font-bold">Live Preview</h3>
                      
                      {project.live_demo ? (
                        <div className="relative w-full h-96 bg-black-100 rounded-xl overflow-hidden">
                          <iframe
                            src={project.live_demo}
                            className="w-full h-full border-0"
                            title={`${project.name} Preview`}
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none" />
                        </div>
                      ) : (
                        <div className="w-full h-96 bg-black-100 rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-secondary text-lg mb-4">Preview not available</p>
                            <motion.button
                              onClick={() => window.open(project.source_code_link, "_blank")}
                              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 rounded-xl transition-all duration-200 mx-auto"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <img src={github} alt="github" className="w-5 h-5" />
                              <span className="text-white font-medium">View on GitHub</span>
                            </motion.button>
                          </div>
                        </div>
                      )}
                      
                      <p className="text-secondary text-sm">
                        {project.live_demo 
                          ? "Interact with the live version of this project above."
                          : "This project doesn't have a live demo available, but you can check out the source code."
                        }
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
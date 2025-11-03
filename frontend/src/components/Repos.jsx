import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import axios from "axios";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";

const RepoCard = ({ repo, index }) => {
  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6", 
      Python: "#3776ab",
      HTML: "#e34c26",
      CSS: "#1572B6",
      React: "#61dafb",
      Vue: "#4FC08D",
      Java: "#b07219",
      "C++": "#f34b7d",
      Go: "#00ADD8",
      Rust: "#dea584",
      PHP: "#777bb4"
    };
    return colors[language] || "#8b5cf6";
  };

  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[350px] w-full"
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.1, 0.75)}
        className='w-full bg-gradient-to-r from-purple-500 to-cyan-500 p-[1px] rounded-[20px] shadow-lg'
      >
        <div className='bg-[#1a1a2e] rounded-[20px] py-5 px-6 min-h-[280px] flex flex-col justify-between'>
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <h3 className="text-white text-xl font-bold">
                  {repo.name}
                </h3>
              </div>
              <motion.a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <img src={github} alt="github" className="w-6 h-6 filter invert" />
              </motion.a>
            </div>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {repo.description || "A cool project worth exploring! 🚀"}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {repo.language && (
                <span 
                  className="px-3 py-1 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: getLanguageColor(repo.language) }}
                >
                  {repo.language}
                </span>
              )}
              {repo.topics?.slice(0, 2).map((topic, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700 rounded-full text-xs text-purple-300 font-medium"
                >
                  #{topic}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-400">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">⭐</span>
                {repo.stargazers_count}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-blue-400">🍴</span>
                {repo.forks_count}
              </div>
            </div>
            <div className="text-xs text-gray-400">
              {new Date(repo.updated_at).toLocaleDateString()}
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const CodingStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <motion.div 
        variants={fadeIn("right", "spring", 0, 0.75)}
        className='w-full bg-gradient-to-r from-purple-500 to-cyan-500 p-[1px] rounded-[20px] shadow-lg'
      >
        <div className='bg-[#1a1a2e] rounded-[20px] py-5 px-6 min-h-[180px] flex flex-col justify-center items-center'>
          <div className="text-4xl mb-2">📊</div>
          <h3 className="text-white text-xl font-bold mb-2">Total Repos</h3>
          <p className="text-gray-300 text-lg">{stats.totalRepos}</p>
        </div>
      </motion.div>

      <motion.div 
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className='w-full bg-gradient-to-r from-purple-500 to-cyan-500 p-[1px] rounded-[20px] shadow-lg'
      >
        <div className='bg-[#1a1a2e] rounded-[20px] py-5 px-6 min-h-[180px] flex flex-col justify-center items-center'>
          <div className="text-4xl mb-2">⭐</div>
          <h3 className="text-white text-xl font-bold mb-2">Total Stars</h3>
          <p className="text-gray-300 text-lg">{stats.totalStars}</p>
        </div>
      </motion.div>

      <motion.div 
        variants={fadeIn("left", "spring", 0.4, 0.75)}
        className='w-full bg-gradient-to-r from-purple-500 to-cyan-500 p-[1px] rounded-[20px] shadow-lg'
      >
        <div className='bg-[#1a1a2e] rounded-[20px] py-5 px-6 min-h-[180px] flex flex-col justify-center items-center'>
          <div className="text-4xl mb-2">🍴</div>
          <h3 className="text-white text-xl font-bold mb-2">Total Forks</h3>
          <p className="text-gray-300 text-lg">{stats.totalForks}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/GRACE-wDEV/repos', {
          params: {
            sort: 'updated_at',
            direction: 'desc',
            per_page: 100,
            type: 'all'
          }
        });
        
        setRepos(response.data);
      } catch (err) {
        console.error('Error fetching repos:', err);
        setError(`Failed to fetch repositories: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const stats = {
    totalRepos: repos.length,
    totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
    totalForks: repos.reduce((sum, repo) => sum + repo.forks_count, 0)
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] text-center">
        <div className="text-red-500 text-xl mb-4">{error}</div>
        <p className="text-gray-400">Please check the console for more details.</p>
      </div>
    );
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Code</p>
        <h2 className={styles.sectionHeadText}>Repositories.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]'
      >
        Here are some of my public repositories on GitHub. Feel free to explore my work and reach out if you'd like to collaborate!
      </motion.p>

      <div className="mt-12">
        <CodingStats stats={stats} />
      </div>

      <div className='mt-8 flex flex-wrap gap-7 justify-center'>
        {repos.map((repo, index) => (
          <RepoCard key={repo.id} repo={repo} index={index} />
        ))}
      </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="https://github.com/GRACE-wDEV"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-bold hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={github} alt="github" className="w-6 h-6" />
          Explore More on GitHub
        </motion.a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Repos, "repos");
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
    <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.75)}>
      <Tilt
        options={{
          max: 35,
          scale: 1.02,
          speed: 100,
        }}
        className='relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1624] p-6 rounded-3xl sm:w-[360px] w-full shadow-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden group'
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className='relative z-10 min-h-[280px] flex flex-col justify-between'>
          <div>
            {/* Header with GitHub Link */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                <h3 className='text-white font-bold text-[20px] group-hover:text-purple-400 transition-colors duration-300'>
                  {repo.name}
                </h3>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className='bg-black/70 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-purple-600 hover:scale-110 transition-all duration-200 shadow-lg'
              >
                <img
                  src={github}
                  alt='github'
                  className='w-5 h-5 object-contain invert'
                />
              </a>
            </div>

            {/* Description */}
            <p className='text-gray-300 text-[14px] leading-relaxed mb-4 line-clamp-3'>
              {repo.description || "A cool project worth exploring! 🚀"}
            </p>

            {/* Tags - Language and Topics */}
            <div className="flex flex-wrap gap-2 mb-4">
              {repo.language && (
                <span 
                  className="text-[12px] font-medium px-3 py-1 rounded-full border border-current/20 hover:border-current/40 transition-all duration-200"
                  style={{ 
                    color: getLanguageColor(repo.language),
                    backgroundColor: `${getLanguageColor(repo.language)}20`
                  }}
                >
                  {repo.language}
                </span>
              )}
              {repo.topics?.slice(0, 2).map((topic, i) => (
                <span
                  key={i}
                  className="text-[12px] font-medium px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:border-purple-500/40 transition-all duration-200"
                >
                  #{topic}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Footer */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-yellow-400 transition-colors">
                <span>⭐</span>
                <span className="font-medium">{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-cyan-400 transition-colors">
                <span>🍴</span>
                <span className="font-medium">{repo.forks_count}</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              {new Date(repo.updated_at).toLocaleDateString()}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const CodingStats = ({ stats }) => {
  return (
    <div className="flex items-center justify-between mb-16">
      {/* Left side - Title */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center">
          <span className="text-3xl">📊</span>
        </div>
        <div>
          <h2 className="text-white text-3xl font-bold">Coding Stats</h2>
          <p className="text-gray-400 text-sm">(last year)</p>
        </div>
      </div>

      {/* Right side - Stats Cards */}
      <div className="flex gap-4">
        <motion.div 
          variants={fadeIn("right", "spring", 0, 0.75)}
          className='relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1624] px-8 py-6 rounded-2xl shadow-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden group'
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className='relative z-10 text-center'>
            <p className="text-gray-400 text-sm font-semibold mb-1 uppercase tracking-wider">Total Time</p>
            <p className="text-white text-2xl font-bold">{stats.wakatime?.totalTime || '...'}</p>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className='relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1624] px-8 py-6 rounded-2xl shadow-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden group'
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className='relative z-10 text-center'>
            <p className="text-gray-400 text-sm font-semibold mb-1 uppercase tracking-wider">Daily Avg</p>
            <p className="text-white text-2xl font-bold">{stats.wakatime?.dailyAvg || '...'}</p>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className='relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1624] px-8 py-6 rounded-2xl shadow-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden group'
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className='relative z-10 text-center'>
            <p className="text-gray-400 text-sm font-semibold mb-1 uppercase tracking-wider">Top Langs</p>
            <p className="text-white text-xl font-bold">{stats.wakatime?.topLang || '...'}</p>
            {stats.wakatime?.secondLang && (
              <p className="text-gray-400 text-sm">{stats.wakatime.secondLang}</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wakatimeStats, setWakatimeStats] = useState(null);

  console.log('Repos component mounted');
  console.log('Current state:', { repos: repos.length, loading, error });

  useEffect(() => {
    console.log('useEffect triggered');
    
    const fetchRepos = async () => {
      try {
        console.log('Fetching repos from GitHub...');
        const response = await axios.get('https://api.github.com/users/GRACE-wDEV/repos', {
          params: {
            sort: 'updated',
            direction: 'desc',
            per_page: 100,
            type: 'all'
          },
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        
        console.log('Repos fetched successfully!');
        console.log('Number of repos:', response.data.length);
        setRepos(response.data);
      } catch (err) {
        console.error('❌ Error fetching repos:', err);
        console.error('Error message:', err.message);
        setError(`Failed to fetch repositories: ${err.message}`);
      }
    };

    const fetchWakatimeStats = async () => {
      // WakaTime API has CORS restrictions - using static values
      // Update these values manually from https://wakatime.com/@igrace
      console.log('Setting WakaTime stats (static values)');
      setWakatimeStats({
        totalTime: '127 hrs 8 mins',
        dailyAvg: '1 hr 55 mins',
        topLang: 'JavaScript',
        secondLang: 'C++'
      });
    };

    Promise.all([fetchRepos(), fetchWakatimeStats()]).finally(() => {
      console.log('Setting loading to false');
      setLoading(false);
    });
  }, []);

  const stats = {
    totalRepos: repos.length,
    totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
    totalForks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
    wakatime: wakatimeStats
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
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <CodingStats stats={stats} />
      </motion.div>

      <motion.div 
        className='mt-8 flex flex-wrap gap-7 justify-center'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {repos.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <p className="text-xl mb-4">No repositories found</p>
            <p className="text-sm">This might be due to GitHub API rate limiting or network issues.</p>
          </div>
        ) : (
          repos.map((repo, index) => (
            <RepoCard key={repo.id} repo={repo} index={index} />
          ))
        )}
      </motion.div>

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
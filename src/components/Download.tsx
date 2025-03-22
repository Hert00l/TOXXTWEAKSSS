
import { motion } from 'framer-motion';
import { Download as DownloadIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const downloads = [
  {
    title: 'Free Package',
    description: 'Essential optimizations for better performance. Includes basic Windows tweaks, registry optimizations, and startup improvements. Our most popular package for users looking to enhance their system performance without complex configurations.',
    initialDownloads: 1234,
    link: '/premium'
  },
  {
    title: 'Ultimate Package',
    description: 'Advanced tweaks for maximum optimization. Includes everything in Basic plus GPU optimizations, network tweaks, and advanced system configurations. Perfect for gamers and power users who demand the absolute best performance.',
    initialDownloads: 567,
    link: '/premium'
  }
];

export const Download = () => {
  const [downloadCounts, setDownloadCounts] = useState(
    downloads.map(d => d.initialDownloads)
  );
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate('/premium');
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Compensa la navbar fissa
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="View Free" className="min-h-screen py-20">
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md p-4 flex justify-between items-center z-50">
        <div className="text-white text-2xl font-bold">ToxTweaks</div>
        <div>
          <a onClick={() => handleNavClick('View Free')} className="cursor-pointer text-gray-400 hover:text-white px-4">Downloads</a>
          <a href="/premium" className="text-gray-400 hover:text-white px-4">Premium</a>
          <a href="/contact" className="text-gray-400 hover:text-white px-4">Contact</a>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <h2 className="text-4xl font-bold text-center mb-16">Downloads</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {downloads.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 backdrop-blur-sm rounded-xl p-8 hover:border-purple-500/50 transition-colors min-h-[400px] flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-3xl font-semibold mb-6">{item.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">{item.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <button 
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors text-lg group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-500"
                >
                  <DownloadIcon size={24} />
                  View Premium
                </button>
                <div className="text-right">
                  <div className="text-3xl font-bold">{downloadCounts[index]}</div>
                  <div className="text-sm text-gray-400">Downloads</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

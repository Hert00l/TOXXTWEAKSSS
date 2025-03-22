import { motion } from 'framer-motion';
import { Download as DownloadIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const downloads = [
  {
    title: 'Basic Package',
    description: 'Essential optimizations for better performance. Includes basic Windows tweaks, registry optimizations, and startup improvements. Our most popular package for users looking to enhance their system performance without complex configurations.',
    initialDownloads: 1234,
    link: '/downloads/ToxTweak-Basic.zip'
  },
  {
    title: 'Pro Package',
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

  const handleDownload = (index: number) => {
    setDownloadCounts(prev => 
      prev.map((count, i) => i === index ? count + 1 : count)
    );

    if (index === 0) {
      // Basic package - direct download
      const link = document.createElement('a');
      link.href = downloads[index].link;
      link.download = 'ToxTweak-Basic.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Pro package - navigate to premium page
      navigate('/premium');
    }
  };

  return (
    <section id="download" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
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
                  onClick={() => handleDownload(index)}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors text-lg group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-500"
                >
                  <DownloadIcon size={24} />
                  {index === 0 ? 'Download' : 'View Premium'}
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

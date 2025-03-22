import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const features = [
  {
    title: 'CPU Optimization',
    description: 'Advanced CPU tweaks for better performance',
    icon: '⚙️'
  },
  {
    title: 'Memory Boost',
    description: 'Optimize RAM usage and system memory',
    icon: '⚡'
  },
  {
    title: 'GPU Enhancement',
    description: 'Maximize graphics performance',
    icon: '💻'
  },
  {
    title: 'Network Speed',
    description: 'Optimize network settings for gaming',
    icon: '🌐'
  },
  {
    title: 'Windows Tweaks',
    description: 'System-level optimizations',
    icon: '🔧'
  },
  {
    title: 'Auto Backup',
    description: 'Automatic system restore points',
    icon: '💾'
  }
];

const CARD_WIDTH = 300;
const CARD_GAP = 24;
const TOTAL_WIDTH = features.length * (CARD_WIDTH + CARD_GAP);
const ANIMATION_DURATION = features.length * 5;

export const Features = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: [-TOTAL_WIDTH / 2, -TOTAL_WIDTH],
        transition: {
          duration: ANIMATION_DURATION,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0
        }
      });
    };

    animate();
  }, [controls]);

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Benefits
        </motion.h2>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          className="absolute left-0 top-0 w-[300px] h-full z-10 hidden md:block"
          style={{
            background: 'linear-gradient(to right, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
        
        <div 
          className="absolute right-0 top-0 w-[300px] h-full z-10 hidden md:block"
          style={{
            background: 'linear-gradient(to left, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
        
        <div className="relative w-full overflow-hidden">
          <div className="flex justify-center">
            <motion.div 
              className="flex gap-6"
              animate={controls}
            >
              {[...features, ...features, ...features, ...features].map((feature, index) => (
                <motion.div
                  key={index}
                  className="w-[300px] h-[300px] flex-shrink-0 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300 group"
                >
                  <div>
                    <div className="text-4xl mb-4 relative">
                      <span className="absolute inset-0 text-white [filter:drop-shadow(0_0_2px_rgba(0,0,0,1))_drop-shadow(0_0_4px_rgba(0,0,0,1))] [transform:translate(-1px,-1px)]">
                        {feature.icon}
                      </span>
                      <span className="relative text-white [filter:brightness(10)] transition-transform duration-300 transform group-hover:scale-110">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "4rem" }}
                    transition={{ 
                      delay: 0.3,
                      duration: 0.8,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="h-1 bg-purple-500/50 rounded-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

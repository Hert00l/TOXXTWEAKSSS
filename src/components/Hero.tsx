import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mt-16 mb-6"
        >
          Optimize Your <span className="text-purple-500">PC</span> Like a
          Professional
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12"
        >
          Enhances Performance, Latency, Ping & Input-Delay Within Minutes of
          Optimizing!.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button className="px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-base">
            View Our Products
          </button>
          <button className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-base">
            Our Discord
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 relative group cursor-pointer max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl group-hover:bg-purple-500/30 transition-colors duration-500"></div>
          <img
            src="https://media.discordapp.net/attachments/1316524775820230706/1352406376189657119/image.png?ex=67de8ed6&is=67dd3d56&hm=47d39fa77db2224aad2fa216d8aadbd5fbe466d66f96b35dc53de832fb94de4d&=&format=webp&quality=lossless&width=892&height=513"
            alt="Gaming Setup"
            className="w-full h-auto object-contain rounded-xl border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

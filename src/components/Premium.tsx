import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const premiumPackages = [
  {
    title: 'Pro',
    price: '24.99',
    features: [
      'Advanced GPU Optimization',
      'Network Latency Reduction',
      'Memory Management Suite',
      'Premium Support',
      'Lifetime Updates',
    ],
  },
  {
    title: 'Ultimate',
    price: '39.99',
    features: [
      'Everything in Pro',
      'Custom Optimization Profiles',
      'Priority Support',
      'Advanced Monitoring Tools',
      'Performance Analytics',
    ],
  },
];

export const Premium = () => {
  return (
    <div className="min-h-screen bg-black text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Packages
          </h1>
          <p className="text-xl text-gray-400">
            Unlock the full potential of your system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {premiumPackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl group-hover:bg-purple-500/30 transition-all duration-500"></div>
              <div className="relative border border-white/10 rounded-xl p-8 backdrop-blur-sm group-hover:border-purple-500/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <Zap className="w-8 h-8 text-purple-500" />
                  <h3 className="text-2xl font-bold">{pkg.title}</h3>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold">${pkg.price}</span>
                  <span className="text-gray-400 ml-2">one-time</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-purple-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-500">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

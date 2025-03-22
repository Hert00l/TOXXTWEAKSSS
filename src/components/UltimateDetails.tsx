import { motion } from 'framer-motion';
import { Check, Zap, Shield, Cpu, Network, MemoryStick as Memory, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

export const UltimateDetails = () => {
  return (
    <div className="bg-[#101010] text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-[#101010] to-[#101010]">
      <div className="pt-40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-24"
          >
            <div className="inline-block relative mb-8">
              <Star className="w-16 h-16 text-purple-500" />
              <div className="absolute inset-0 text-purple-500 animate-ping opacity-20">
                <Star className="w-16 h-16" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Ultimate Package</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The most comprehensive optimization suite with advanced features, priority support, and detailed analytics.
            </p>
            <div className="mt-8 flex justify-center items-baseline gap-2">
              <span className="text-5xl font-bold">$39.99</span>
              <span className="text-gray-400">one-time payment</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { icon: Shield, title: "Premium Support", description: "24/7 priority access to our expert support team" },
              { icon: Clock, title: "Early Access", description: "Be the first to try new features and updates" },
              { icon: Cpu, title: "Unlimited Devices", description: "Use ToxTweak on all your computers" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-purple-500/10 rounded-xl blur-lg group-hover:bg-purple-500/20 transition-all duration-500"></div>
                <div className="relative border border-white/10 rounded-xl p-6 backdrop-blur-sm group-hover:border-purple-500/50 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Star className="w-8 h-8 text-purple-500" />
                Ultimate Features
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Custom Optimization Profiles</h3>
                    <p className="text-gray-400">Create and save multiple optimization profiles for different scenarios:</p>
                    <ul className="mt-2 space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>Game-specific configurations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>Work/productivity setups</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>Streaming optimizations</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Monitoring Tools</h3>
                    <p className="text-gray-400">Real-time performance monitoring and analysis tools:</p>
                    <ul className="mt-2 space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>CPU & GPU usage tracking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>Network latency monitoring</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>System resource analysis</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
                    <p className="text-gray-400">Comprehensive performance tracking and reporting:</p>
                    <ul className="mt-2 space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>Detailed performance reports</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>Historical data analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>Optimization recommendations</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="sticky top-24">
                <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl"></div>
                <div className="relative border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold mb-8">Ultimate Benefits</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <Shield className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Priority Support Access</h3>
                        <p className="text-sm text-gray-400">Get instant help from our expert support team whenever you need it.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <Star className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Early Access to Features</h3>
                        <p className="text-sm text-gray-400">Be among the first to try new optimization features and updates.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <Cpu className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Multi-Device Support</h3>
                        <p className="text-sm text-gray-400">Use ToxTweak on all your computers with a single license.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-lg border border-purple-500/20">
                    <h3 className="font-semibold mb-2">The Ultimate Choice</h3>
                    <p className="text-sm text-gray-400">Get the most comprehensive optimization suite with all premium features and priority support.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-6 max-w-xl mx-auto text-center mb-16"
          >
            <h2 className="text-2xl font-bold">Ready for the ultimate experience?</h2>
            <p className="text-gray-400">Get started with our Ultimate package and unlock the full potential of your system.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/premium"
                className="px-8 py-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Packages
              </Link>
              <button className="px-8 py-4 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors">
                Get Ultimate Package
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

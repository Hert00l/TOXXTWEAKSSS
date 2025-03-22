import { motion } from 'framer-motion';
import { Check, Zap, Shield, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

const features = [
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "All optimizations are thoroughly tested and include automatic system restore points"
  },
  {
    icon: Cpu,
    title: "Performance Boost",
    description: "Experience significant improvements in system speed and responsiveness"
  },
  {
    icon: Network,
    title: "Network Optimization",
    description: "Reduce latency and improve connection stability for online gaming"
  }
];

const premiumPackages = [
  {
    title: 'Free',
    price: '00.00',
    features: [
      'Advanced GPU Optimization',
      'Network Latency Reduction',
      'Memory Management Suite',
      'Premium Support',
      'Lifetime Updates',
    ],
    detailsLink: '/pro-details'
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
    detailsLink: '/ultimate-details'
  },
];

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Professional Gamer",
    content: "ToxTweak has significantly improved my gaming performance. The difference in input lag and FPS is remarkable.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Client",
    content: "As a streamer, system performance is crucial. ToxTweak helps me maintain smooth streams without compromising game quality.",
    rating: 5
  },
  {
    name: "Mike Rodriguez",
    role: "eSports Coach",
    content: "I recommend ToxTweak to all my players. It's become an essential tool in our performance optimization strategy.",
    rating: 5
  }
];

export const Premium = () => {
  return (
    <div className="bg-[#101010] text-white bg-[radial-gradient(ellipse_at_top,_#101010,_#101010,_purple-900/40)]">
      <div className="pt-40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-24"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Packages
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Unlock the full potential of your system with our premium optimization packages
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          >
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-purple-500/10 rounded-xl blur-lg group-hover:bg-purple-500/20 transition-all duration-500"></div>
                <div className="relative border border-white/10 rounded-xl p-6 backdrop-blur-sm group-hover:border-purple-500/50 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
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
                  <div className="space-y-4">
                    <button className="w-full py-4 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-500">
                      Get Started
                    </button>
                    <Link
                      to={pkg.detailsLink}
                      className="block w-full py-4 text-center border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all duration-500"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-purple-500/10 rounded-xl blur-lg group-hover:bg-purple-500/20 transition-all duration-500"></div>
                  <div className="relative border border-white/10 rounded-xl p-6 backdrop-blur-sm group-hover:border-purple-500/50 transition-all duration-500">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-400 mb-4">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      animate={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 3 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1, repeat: 2 }}
      >
        <Zap size={64} className="text-purple-500" />
      </motion.div>
    </motion.div>
  );
};
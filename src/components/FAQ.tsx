import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is ToxTweak?',
    answer:
      'ToxTweak is a powerful utility tool designed to optimize and enhance your PC performance through advanced tweaks and customizations.',
  },
  {
    question: 'Is it safe to use?',
    answer:
      'Yes, ToxTweak is completely safe to use. We create restore points before making any changes to ensure you can always revert back if needed.',
  },
  {
    question: 'How do I install ToxTweak?',
    answer:
      "Simply download the package that best suits your needs from our download section and follow the installation wizard. It's that simple!",
  },
  {
    question: 'Will it work with my PC?',
    answer:
      'ToxTweak is compatible with most modern Windows PCs. Check our system requirements in the download section for specific details.',
  },
  {
    question: 'Who made this website?',
    answer: 'This website was made by Hert00l for Tox Tweaks',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-400">{faq.answer}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

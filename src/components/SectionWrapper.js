import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay }}
    style={{ width: '100%' }}
  >
    {children}
  </motion.div>
);

export default SectionWrapper;

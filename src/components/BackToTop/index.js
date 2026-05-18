import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Button = styled(motion.button)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(225deg, #854CE6, #be1adb);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  box-shadow: 0 4px 15px rgba(133, 76, 230, 0.4);

  &:hover {
    box-shadow: 0 6px 20px rgba(133, 76, 230, 0.6);
  }

  @media (max-width: 768px) {
    bottom: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
  }
`;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <Button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <KeyboardArrowUpIcon fontSize="medium" />
        </Button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;

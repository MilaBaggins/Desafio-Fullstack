import { motion } from "framer-motion";

interface iAnimations {
  children: React.ReactNode;
  delay?: number;
}

export const AnimSlideLeft = ({ children, delay = 0 }: iAnimations) => (
  <motion.div
    initial={{ translateX: "100vw" }}
    animate={{ translateX: 0 }}
    transition={{ duration: 1, delay: delay, ease: "easeIn" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideRight = ({ children, delay = 0 }: iAnimations) => (
  <motion.div
    initial={{ translateX: "-100vw" }}
    animate={{ translateX: 0 }}
    transition={{ duration: 1, delay: delay, ease: "easeIn" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideDown = ({ children, delay = 0 }: iAnimations) => (
  <motion.div
    initial={{ translateY: "-100vh", opacity: 0 }}
    animate={{ translateY: 0, opacity: 1 }}
    transition={{ duration: 1, delay: delay, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideUp = ({ children, delay = 0 }: iAnimations) => (
  <motion.div
    initial={{ translateY: 0, opacity: 0.3 }}
    animate={{ translateY: `-150vh`, opacity: 0 }}
    transition={{ duration: 1, delay: delay, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

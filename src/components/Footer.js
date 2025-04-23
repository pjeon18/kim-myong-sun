import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Footer() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.2 }
    );

    if (node) observer.observe(node);
    return () => node && observer.unobserve(node);
  }, [controls]);

  return (
    <motion.footer
      id="contact"
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="bg-blue-900 text-white p-4 text-center mt-10"
    >
      <p>&copy; {new Date().getFullYear()} Author Name. All rights reserved.</p>
    </motion.footer>
  );
}

export default Footer;

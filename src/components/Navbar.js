import { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { label: "Archive", href: "/classic", isAnchor: false },
      { label: "Exhibit", href: "/exhibit", isAnchor: false },
    ],
    []
  );

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 transition-all text-white bg-gradient-to-b from-pink-300/40 via-pink-300/20 to-transparent` }
    >
        <div className="max-w-7xl mx-auto px-4 py-8 flex items-center min-h-[6rem]">
  <Link to="/" className="text-lg md:text-2xl font-bold tracking-wide whitespace-nowrap overflow-x-auto text-left">
    <span className="italic">Kim Myŏng Sun</span>: Unearthing the Story of Korea's Earliest Female Literary Figure
  </Link>

  <div className="flex items-center gap-4 ml-8">
    {/* Desktop menu */}
    <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) =>
          link.isAnchor ? (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="hover:underline"
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={link.href}
              to={link.href}
              className={`hover:underline ${
                location.pathname === link.href ? "font-bold underline" : ""
              }`}
            >
              {link.label}
            </Link>
          )
        )}

      </div>
    </div>
  </div>
    </motion.nav>
  );
}

export default Navbar;

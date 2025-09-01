import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Camera, Gamepad2, Trophy } from "lucide-react";

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { icon: Heart, label: "Home", section: "hero" },
    { icon: MessageCircle, label: "Chats", section: "chat" },
    { icon: Trophy, label: "Basketball", section: "basketball" },
    { icon: Camera, label: "Gallery", section: "gallery" },
    { icon: Gamepad2, label: "Games", section: "games" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback scroll positions
      const positions = {
        hero: 0,
        chat: window.innerHeight,
        basketball: window.innerHeight * 2,
        gallery: window.innerHeight * 3,
        games: window.innerHeight * 4,
      };
      window.scrollTo({ 
        top: positions[sectionId as keyof typeof positions] || 0, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.div
            className="flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-3 shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.section}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection(item.section)}
                className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/40 hover:to-accent/40 transition-all duration-300 group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-5 h-5 text-white group-hover:text-accent transition-colors" />
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  whileHover={{ opacity: 1, y: -10, scale: 1 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap"
                >
                  {item.label}
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
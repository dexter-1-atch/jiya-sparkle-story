import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroBasketball from "@/assets/hero-basketball.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroBasketball})`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 left-10 w-4 h-4 bg-secondary rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-32 left-1/4 w-5 h-5 bg-primary rounded-full"
        />
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-20 right-1/3 w-3 h-3 bg-secondary rounded-full"
        />
      </div>

      <div className="text-center space-y-8 relative z-10 max-w-4xl mx-auto">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white flex items-center justify-center gap-4 flex-wrap text-glow"
            whileHover={{ scale: 1.05 }}
          >
            Hi Jiya
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-12 h-12 md:w-16 md:h-16 text-accent fill-current" />
            </motion.div>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-white/90 font-medium"
          >
            A little story about you... and your amazing energy 😏
          </motion.p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center items-center gap-6 flex-wrap"
        >
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-hero px-6 py-3 rounded-full shadow-basketball hover-glow cursor-pointer"
          >
            <motion.span 
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl"
            >
              🏀
            </motion.span>
            <span className="text-white font-semibold">Basketball Star</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-love px-6 py-3 rounded-full shadow-love hover-glow cursor-pointer"
          >
            <Star className="w-5 h-5 text-white fill-current animate-pulse" />
            <span className="text-white font-semibold">Amazing Energy</span>
          </motion.div>
        </motion.div>

        {/* Interactive elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center gap-4 pt-8"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300"
          >
            Explore Jiya's World ✨
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="pt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/80 text-sm">Scroll to see more</span>
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [2, 14, 2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-white/80 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
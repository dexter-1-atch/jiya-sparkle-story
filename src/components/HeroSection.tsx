import { Heart, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-secondary rounded-full love-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full love-pulse opacity-40" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-primary rounded-full love-pulse opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-secondary rounded-full love-pulse opacity-70" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="text-center space-y-8 relative z-10 max-w-4xl mx-auto">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold gradient-text flex items-center justify-center gap-4 flex-wrap">
            Hi Jiya
            <Heart className="w-12 h-12 md:w-16 md:h-16 text-accent love-pulse fill-current" />
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            A little story about you... and your amazing energy 😏
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2 bg-gradient-hero px-6 py-3 rounded-full shadow-basketball">
            <span className="text-2xl basketball-bounce">🏀</span>
            <span className="text-white font-semibold">Basketball Star</span>
          </div>
          
          <div className="flex items-center gap-2 bg-gradient-love px-6 py-3 rounded-full shadow-love">
            <Star className="w-5 h-5 text-white fill-current" />
            <span className="text-white font-semibold">Amazing Energy</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-16">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-muted-foreground text-sm">Scroll to see more</span>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
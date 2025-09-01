import { Award, Clock, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const basketballStats = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Early Riser",
    stat: "6:00 AM",
    description: "Daily practice starts",
    color: "bg-gradient-hero"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Dedication",
    stat: "100%",
    description: "Always gives her all",
    color: "bg-gradient-love"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Energy Level",
    stat: "∞",
    description: "Unlimited enthusiasm",
    color: "bg-gradient-energy"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Team Spirit",
    stat: "MVP",
    description: "Most Valuable Player vibes",
    color: "bg-gradient-hero"
  }
];

const BasketballSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 flex items-center justify-center gap-4 flex-wrap">
            <span className="text-4xl basketball-bounce">🏀</span>
            Basketball Superstar
            <span className="text-4xl basketball-bounce" style={{animationDelay: '0.5s'}}>⭐</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From early morning practices to incredible game energy - Jiya brings passion to everything she does!
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {basketballStats.map((stat, index) => (
            <Card key={index} className="hover-lift border-0 overflow-hidden group">
              <CardHeader className={`${stat.color} text-white pb-4`}>
                <div className="flex items-center justify-between">
                  <div className="text-white/90">{stat.icon}</div>
                  <CardTitle className="text-white text-right text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.stat}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Player card */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-basketball hover-lift border border-border">
          <div className="text-center space-y-6">
            <div className="inline-block p-6 bg-gradient-hero rounded-full shadow-love">
              <span className="text-6xl">🏀</span>
            </div>
            
            <div>
              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                JIYA
              </h3>
              <p className="text-xl text-muted-foreground mb-4">
                #1 Basketball Enthusiast
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-semibold">Early Bird 🌅</span>
                </div>
                <div className="bg-secondary/10 px-4 py-2 rounded-full">
                  <span className="text-secondary font-semibold">Team Player 🤝</span>
                </div>
                <div className="bg-accent/10 px-4 py-2 rounded-full">
                  <span className="text-accent font-semibold">Amazing Energy ⚡</span>
                </div>
              </div>
            </div>

            <div className="max-w-md mx-auto">
              <blockquote className="text-lg font-medium text-muted-foreground italic">
                "Basketball isn't just a game, it's a passion that drives every morning practice and every moment on the court!"
              </blockquote>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <div className="w-3 h-3 bg-primary rounded-full love-pulse"></div>
              <div className="w-3 h-3 bg-secondary rounded-full love-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-accent rounded-full love-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketballSection;
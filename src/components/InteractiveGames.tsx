import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Zap, Gamepad2 } from "lucide-react";
import Confetti from "react-confetti";
import { useToast } from "@/hooks/use-toast";

const InteractiveGames = () => {
  const { toast } = useToast();
  const [basketballGame, setBasketballGame] = useState({
    score: 0,
    shots: 0,
    isPlaying: false,
    timeLeft: 30
  });
  
  const [clickGame, setClickGame] = useState({
    clicks: 0,
    highScore: 0,
    isActive: false,
    timeLeft: 10
  });

  const [showConfetti, setShowConfetti] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();
  const clickIntervalRef = useRef<NodeJS.Timeout>();

  // Basketball shooting game
  const startBasketballGame = () => {
    setBasketballGame(prev => ({ 
      ...prev, 
      isPlaying: true, 
      score: 0, 
      shots: 0, 
      timeLeft: 30 
    }));
    
    intervalRef.current = setInterval(() => {
      setBasketballGame(prev => {
        if (prev.timeLeft <= 1) {
          clearInterval(intervalRef.current);
          toast({
            title: "Game Over! 🏀",
            description: `Amazing! You scored ${prev.score} out of ${prev.shots} shots!`,
          });
          return { ...prev, isPlaying: false, timeLeft: 0 };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);
  };

  const shootBasketball = () => {
    if (!basketballGame.isPlaying) return;
    
    const isScore = Math.random() > 0.4; // 60% success rate - Jiya's got skills!
    
    setBasketballGame(prev => ({
      ...prev,
      shots: prev.shots + 1,
      score: isScore ? prev.score + 1 : prev.score
    }));

    if (isScore) {
      toast({
        title: "SWISH! 🔥",
        description: "Perfect shot! Jiya's basketball skills are showing!",
      });
    }
  };

  // Click speed game
  const startClickGame = () => {
    setClickGame(prev => ({ 
      ...prev, 
      isActive: true, 
      clicks: 0, 
      timeLeft: 10 
    }));
    
    clickIntervalRef.current = setInterval(() => {
      setClickGame(prev => {
        if (prev.timeLeft <= 1) {
          clearInterval(clickIntervalRef.current);
          const newHighScore = Math.max(prev.highScore, prev.clicks);
          
          if (prev.clicks > prev.highScore) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 3000);
            toast({
              title: "NEW HIGH SCORE! 🎉",
              description: `Incredible speed! ${prev.clicks} clicks in 10 seconds!`,
            });
          } else {
            toast({
              title: "Game Complete! ⚡",
              description: `Great energy! ${prev.clicks} clicks. High score: ${newHighScore}`,
            });
          }
          
          return { 
            ...prev, 
            isActive: false, 
            timeLeft: 0, 
            highScore: newHighScore 
          };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);
  };

  const handleClick = () => {
    if (!clickGame.isActive) return;
    setClickGame(prev => ({ ...prev, clicks: prev.clicks + 1 }));
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (clickIntervalRef.current) clearInterval(clickIntervalRef.current);
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted to-background">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          colors={['#FF6B35', '#F7931E', '#FFD23F', '#FF69B4']}
        />
      )}
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 className="w-8 h-8 text-primary animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Jiya's Games
            </h2>
            <Trophy className="w-8 h-8 text-accent animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground">
            Test your skills and channel Jiya's amazing energy! 🔥
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basketball Shooting Game */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="hover-lift border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl gradient-text">Basketball Challenge</CardTitle>
                </div>
                <p className="text-muted-foreground">
                  Show off your shooting skills like Jiya!
                </p>
              </CardHeader>
              
              <CardContent className="text-center space-y-6">
                <div className="text-6xl animate-bounce cursor-pointer" onClick={shootBasketball}>
                  🏀
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">{basketballGame.score}</div>
                    <div className="text-xs text-muted-foreground">SCORE</div>
                  </div>
                  <div className="bg-secondary/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-secondary">{basketballGame.shots}</div>
                    <div className="text-xs text-muted-foreground">SHOTS</div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-accent">{basketballGame.timeLeft}</div>
                    <div className="text-xs text-muted-foreground">TIME</div>
                  </div>
                </div>

                <Button 
                  onClick={startBasketballGame}
                  disabled={basketballGame.isPlaying}
                  className="w-full bg-gradient-hero hover:opacity-90 text-white font-bold py-3"
                >
                  {basketballGame.isPlaying ? "Game In Progress!" : "Start Shooting! 🏀"}
                </Button>

                {basketballGame.isPlaying && (
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-primary font-semibold animate-pulse"
                  >
                    Click the basketball to shoot!
                  </motion.p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Speed Click Game */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="hover-lift border-2 border-accent/20 bg-gradient-to-br from-card to-accent/5">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="w-6 h-6 text-accent" />
                  <CardTitle className="text-2xl gradient-text">Energy Challenge</CardTitle>
                </div>
                <p className="text-muted-foreground">
                  Match Jiya's incredible energy and speed!
                </p>
              </CardHeader>
              
              <CardContent className="text-center space-y-6">
                <AnimatePresence>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClick}
                    disabled={!clickGame.isActive}
                    className={`
                      w-32 h-32 rounded-full text-4xl font-bold transition-all duration-200
                      ${clickGame.isActive 
                        ? 'bg-gradient-love text-white shadow-love animate-pulse cursor-pointer' 
                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                      }
                    `}
                  >
                    {clickGame.isActive ? '⚡' : '💫'}
                  </motion.button>
                </AnimatePresence>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-accent/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-accent">{clickGame.clicks}</div>
                    <div className="text-xs text-muted-foreground">CLICKS</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">{clickGame.highScore}</div>
                    <div className="text-xs text-muted-foreground">HIGH SCORE</div>
                  </div>
                  <div className="bg-secondary/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-secondary">{clickGame.timeLeft}</div>
                    <div className="text-xs text-muted-foreground">TIME</div>
                  </div>
                </div>

                <Button 
                  onClick={startClickGame}
                  disabled={clickGame.isActive}
                  className="w-full bg-gradient-love hover:opacity-90 text-white font-bold py-3"
                >
                  {clickGame.isActive ? "Click as fast as you can!" : "Start Energy Test! ⚡"}
                </Button>

                {clickGame.isActive && (
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-accent font-semibold animate-pulse"
                  >
                    Show that Jiya-level energy! 🔥
                  </motion.p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20 hover-lift">
            <CardContent className="py-8">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Challenge Accepted! 🏆
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                These games capture just a fraction of Jiya's incredible energy and talent. 
                Keep playing and see if you can match her amazing spirit!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveGames;
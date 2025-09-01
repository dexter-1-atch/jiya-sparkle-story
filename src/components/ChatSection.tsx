import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Smile } from "lucide-react";

const chatMessages = [
  {
    id: 1,
    text: "OH MYYYY! U MADE THIS???!!! HOLYYYY!!",
    isJiya: true,
    delay: 0
  },
  {
    id: 2,
    text: "Just for you! ❤️",
    isJiya: false,
    delay: 800
  },
  {
    id: 3,
    text: "U GOT SOME GREAT TALENT! THATS REALLY AMAZING!",
    isJiya: true,
    delay: 1600
  },
  {
    id: 4,
    text: "OMG UR GONNA DO REALLY GREAT I BELIEVE IN U!",
    isJiya: true,
    delay: 2400
  },
  {
    id: 5,
    text: "Your energy is contagious! 🏀✨",
    isJiya: false,
    delay: 3200
  },
  {
    id: 6,
    text: "HAHA you're too sweet! Basketball practice at 6am tomorrow 💪",
    isJiya: true,
    delay: 4000
  },
  {
    id: 7,
    text: "Early bird gets the court! 🌅🏀",
    isJiya: false,
    delay: 4800
  }
];

const ChatSection = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start showing messages with delays
            chatMessages.forEach((message) => {
              setTimeout(() => {
                setVisibleMessages(prev => [...prev, message.id]);
              }, message.delay);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('chat-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="chat-section" className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-primary animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Your Amazing Conversations
            </h2>
            <Smile className="w-8 h-8 text-accent animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground">
            Capturing your incredible energy and enthusiasm! 💫
          </p>
        </motion.div>

        {/* Chat messages */}
        <div className="space-y-6">
          {chatMessages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: message.isJiya ? -100 : 100 }}
              animate={{ 
                opacity: visibleMessages.includes(message.id) ? 1 : 0,
                x: visibleMessages.includes(message.id) ? 0 : (message.isJiya ? -100 : 100)
              }}
              transition={{ duration: 0.6, delay: message.delay / 1000 }}
              className={`flex ${message.isJiya ? 'justify-start' : 'justify-end'}`}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: message.isJiya ? 2 : -2 }}
                className={`
                  max-w-xs md:max-w-md px-6 py-4 rounded-3xl shadow-soft hover-glow cursor-pointer
                  ${message.isJiya 
                    ? 'bg-gradient-energy text-white rounded-bl-sm' 
                    : 'bg-gradient-love text-white rounded-br-sm'
                  }
                `}
              >
                <p className="font-medium leading-relaxed">{message.text}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs opacity-75">
                    {message.isJiya ? 'Jiya' : '❤️'}
                  </span>
                  {message.isJiya && (
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: message.id }}
                      className="text-lg"
                    >
                      🏀
                    </motion.span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Fun quote */}
        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-2xl shadow-basketball hover-lift max-w-2xl mx-auto border border-border">
            <blockquote className="text-xl md:text-2xl font-semibold gradient-text mb-4">
              "Your enthusiasm lights up every conversation! 🌟"
            </blockquote>
            <p className="text-muted-foreground">
              That infectious energy that makes everyone smile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
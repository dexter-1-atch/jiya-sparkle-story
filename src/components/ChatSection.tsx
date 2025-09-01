import { useEffect, useState } from "react";
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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Your Amazing Conversations
            </h2>
            <Smile className="w-8 h-8 text-accent" />
          </div>
          <p className="text-lg text-muted-foreground">
            Capturing your incredible energy and enthusiasm! 💫
          </p>
        </div>

        {/* Chat messages */}
        <div className="space-y-6">
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isJiya ? 'justify-start' : 'justify-end'} ${
                visibleMessages.includes(message.id) 
                  ? message.isJiya 
                    ? 'chat-slide-left' 
                    : 'chat-slide-right'
                  : 'opacity-0'
              }`}
            >
              <div
                className={`
                  max-w-xs md:max-w-md px-6 py-4 rounded-3xl shadow-soft hover-lift
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
                    <span className="text-lg basketball-bounce">🏀</span>
                  )}
                </div>
              </div>
            </div>
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
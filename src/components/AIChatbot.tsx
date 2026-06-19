import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Dumbbell, Phone, MapPin, Clock } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

const GYM_INFO = {
  name: 'IronPulse Elite Fitness',
  phone: '+92 310 310 9222',
  whatsapp: '+92 310 310 9222',
  address: 'DHA Phase 6, Lahore, Pakistan',
  hours: '5:00 AM – 11:00 PM (Mon–Sat), 8:00 AM – 8:00 PM (Sunday)',
  email: 'info@ironpulse.com',
};

const FAQ_RESPONSES: { keywords: string[]; response: string }[] = [
  {
    keywords: ['phone', 'number', 'contact', 'call'],
    response: `You can reach us at ${GYM_INFO.phone}. For quick chat, WhatsApp us at the same number. We're happy to answer any questions!`,
  },
  {
    keywords: ['address', 'location', 'where', 'located', 'map'],
    response: `We're located at ${GYM_INFO.address}. Easy access from main DHA roads with ample parking available.`,
  },
  {
    keywords: ['timing', 'hours', 'open', 'close', 'time'],
    response: `Our operating hours are ${GYM_INFO.hours}`,
  },
  {
    keywords: ['price', 'pricing', 'membership', 'cost', 'fee', 'package'],
    response: `We offer three memberships:\n\n• **Basic** — $29/month: Gym access, locker, cardio, 2 group classes/week\n• **Standard** — $59/month: Most popular! Unlimited classes, 2 personal sessions/month, nutrition consult\n• **Premium** — $99/month: Full experience! 8 personal sessions, recovery spa, custom meal plans, guest passes\n\nAll plans include app access & progress tracking. No hidden fees!`,
  },
  {
    keywords: ['trainer', 'coach', 'personal', 'training'],
    response: `Our elite coaches include:\n\n• **Jason Miller** — Head Strength Coach (14 years exp, NSCA-CSCS)\n• **David Carter** — Transformation & HIIT specialist (11 years)\n• **Michael Ross** — Executive Wellness Director (9 years)\n\nAll personal training sessions are customized to your goals.`,
  },
  {
    keywords: ['equipment', 'machine', 'gym have', 'facility'],
    response: `IronPulse is fully equipped with:\n\n• Olympic lifting platforms & bumper plates\n• Life Fitness & Hammer Strength machines\n• Full cardio floor (treadmills, rowers, bikes, stairmasters)\n• Functional training zone with TRX & kettlebells\n• Recovery spa with cryotherapy & massage`,
  },
  {
    keywords: ['program', 'class', 'group', 'workout'],
    response: `We offer diverse programs:\n\n• **Strength & Conditioning** — Build raw power\n• **HIIT & Fat Burn** — Torch calories fast\n• **Yoga & Mobility** — Recover & restore\n• **Boxing Fitness** — Train like a fighter\n• **Olympic Lifting** — Master the platform\n\nGroup classes run throughout the day. Check our schedule!`,
  },
  {
    keywords: ['join', 'sign up', 'register', 'start', 'beginner'],
    response: `Ready to start? Here's how:\n\n1. Call/WhatsApp us at ${GYM_INFO.phone}\n2. Visit us at ${GYM_INFO.address}\n3. Book a free trial session\n\nNo commitment needed for your first visit. Come see why IronPulse is different!`,
  },
  {
    keywords: ['parking', 'park'],
    response: `Yes! We have ample free parking. Our lot has 50+ spaces plus dedicated bike racks. Street parking is also available.`,
  },
  {
    keywords: ['shower', 'locker', 'changing', 'amenity'],
    response: `All members enjoy:\n\n• Full locker rooms with private showers\n• Towel service (Standard & Premium)\n• Sauna & steam room\n• Lounge area with protein bar\n• Premium members get dedicated lockers`,
  },
];

function getRandomGreeting() {
  const greetings = [
    "Hey! I'm Fit AI — your personal gym assistant. Ask me anything about IronPulse!",
    "Welcome! I'm Fit AI. I can tell you about our programs, pricing, trainers, and more. How can I help?",
    "Hi there! I'm Fit AI. Planning to join IronPulse? Ask me anything!",
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

function findResponse(input: string): string {
  const lowerInput = input.toLowerCase();

  for (const faq of FAQ_RESPONSES) {
    if (faq.keywords.some((k) => lowerInput.includes(k))) {
      return faq.response;
    }
  }

  const defaultResponses = [
    `Great question! For personalized assistance, call us at ${GYM_INFO.phone} or visit us at ${GYM_INFO.address}. I can help with pricing, trainers, programs, timings, and more!`,
    `I'd love to help! You can also reach our team at ${GYM_INFO.phone}. Or ask me about memberships, trainers, equipment, or class schedules.`,
    `Happy to assist! For detailed queries, call ${GYM_INFO.phone}. I can answer questions about our gym, programs, pricing, and facilities.`,
  ];
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ id: Date.now(), text: getRandomGreeting(), sender: 'bot' }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;

    const userMessage: Message = { id: Date.now(), text, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: findResponse(text),
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const quickQuestions = [
    'What are your prices?',
    'Where are you located?',
    'Gym timings?',
    'Trainers?',
  ];

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-[60] w-[calc(100%-2rem)] sm:w-80 max-w-sm flex flex-col rounded-lg overflow-hidden shadow-2xl bg-brand-dark-card border border-brand-dark-border animate-fadeInUp">
          {/* Header */}
          <div className="bg-brand-green px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-brand-black/20 flex items-center justify-center">
                <Dumbbell size={18} className="text-white" />
              </div>
              <div>
                <h4 className="font-montserrat font-700 text-sm text-brand-black">Fit AI</h4>
                <p className="text-[10px] text-brand-black/70">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-brand-black/20 flex items-center justify-center hover:bg-brand-black/30 transition-colors"
            >
              <X size={14} className="text-brand-black" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 h-64 sm:h-72 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-brand-green" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                    msg.sender === 'user'
                      ? 'bg-brand-green text-brand-black font-500'
                      : 'bg-brand-dark text-white/85'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <User size={14} className="text-brand-green" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <Bot size={14} className="text-brand-green" />
                </div>
                <div className="bg-brand-dark px-3 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick questions */}
          {messages.length <= 2 && (
            <div className="px-3 pb-2">
              <p className="text-[10px] text-white/40 mb-1.5">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInputValue(q);
                      setTimeout(handleSend, 50);
                    }}
                    className="text-[10px] px-2 py-1 rounded bg-brand-dark border border-brand-dark-border text-white/70 hover:border-brand-green/40 hover:text-brand-green transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-brand-dark-border">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-brand-dark border border-brand-dark-border rounded px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-green/50 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded bg-brand-green flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-green/90 transition-colors"
              >
                <Send size={16} className="text-brand-black" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 transition-all duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Badge "Hi, I'm Fit AI" */}
        <div className="absolute -top-8 right-0 bg-brand-green px-2.5 py-1 rounded text-[10px] font-montserrat font-600 text-brand-black whitespace-nowrap shadow-lg animate-bounce-slow">
          Hi, I'm Fit AI. How can I help you?
        </div>

        {/* Button */}
        <div className="relative">
          {/* Gym boy cartoon mascot */}
          <div className="absolute -left-6 -top-4 w-10 h-14 flex flex-col items-center">
            {/* Head */}
            <div className="w-5 h-5 rounded-full bg-brand-green relative">
              {/* Eyes */}
              <div className="absolute top-1 left-0.5 w-1 h-1 rounded-full bg-brand-black" />
              <div className="absolute top-1 right-0.5 w-1 h-1 rounded-full bg-brand-black" />
              {/* Smile */}
              <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-0.5 rounded-full bg-brand-black" />
            </div>
            {/* Body */}
            <div className="w-4 h-5 bg-brand-green rounded-sm mt-0.5 relative">
              {/* Arms */}
              <div className="absolute -left-1.5 top-0.5 w-1.5 h-3 bg-brand-green rounded-full" />
              <div className="absolute -right-1.5 top-0.5 w-1.5 h-3 bg-brand-green rounded-full" />
            </div>
          </div>

          {/* Main chat button */}
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            isOpen
              ? 'bg-red-500'
              : 'bg-gradient-to-br from-brand-green to-brand-green/80 hover:scale-110'
          }`}>
            <MessageCircle size={24} className="text-brand-black" />
          </div>
        </div>
      </button>

      {/* Contact info button when open */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[55] flex flex-col gap-2 animate-fadeIn">
          <a
            href={`tel:${GYM_INFO.phone.replace(/\s/g, '')}`}
            className="w-10 h-10 rounded-full bg-brand-dark-card border border-brand-dark-border flex items-center justify-center hover:border-brand-green/50 transition-colors"
          >
            <Phone size={16} className="text-brand-green" />
          </a>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-brand-dark-card border border-brand-dark-border flex items-center justify-center hover:border-brand-green/50 transition-colors"
          >
            <MapPin size={16} className="text-brand-green" />
          </a>
        </div>
      )}
    </>
  );
}

const TestimonialCard = ({ content, author }) => (
  <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg" data-aos="fade-up">
    <p className="mb-6 italic text-lg text-indigo-700 dark:text-indigo-200">"{content}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 flex items-center justify-center text-2xl bg-gray-200 dark:bg-gray-700 rounded-full mr-4">
        {author.logo}
      </div>
      <div>
        <h4 className="font-semibold">{author.name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{author.title}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section id="testimonials" data-aos="fade-up" className="py-20 bg-white dark:bg-gray-800">
    <div className="container px-4 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">What Our Gamers Say</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <TestimonialCard 
          content="Absolutely epic! The multiplayer battles are intense, and the graphics blew my mind. Best gaming experience ever!"
          author={{ name: "ShadowStrike", title: "Pro Gamer & Streamer", logo: "🎮" }} 
        />
        <TestimonialCard 
          content="The leaderboard system keeps me coming back for more. Every update brings new excitement—this platform is a game-changer!"
          author={{ name: "PixelQueen", title: "Esports Champion", logo: "👑" }} 
        />
        <TestimonialCard 
          content="Cloud gaming on my phone? Yes, please! I can play anywhere, anytime—my friends are jealous!"
          author={{ name: "N3oN_Blast", title: "Mobile Gamer", logo: "📱" }} 
        />
        <TestimonialCard 
          content="The community here is so welcoming. I found my squad and we’re crushing tournaments together. GG!"
          author={{ name: "FireFox", title: "Guild Leader", logo: "🦊" }} 
        />
      </div>
    </div>
  </section>
);

export default Testimonials;

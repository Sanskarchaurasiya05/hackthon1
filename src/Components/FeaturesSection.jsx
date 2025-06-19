const FeatureCard = ({ title, description }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition" data-aos="fade-up">
    <div className="w-12 h-12 mb-4 bg-blue-100 dark:bg-blue-900 rounded-full"></div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => (
  <section id="features" data-aos="fade-up" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="container px-4 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       <FeatureCard 
  title="Player Authentication" 
  description="Secure login with email or OTP—your in-game identity and stats are always protected with encrypted credentials." 
/>
<FeatureCard 
  title="AI Matchmaking" 
  description="Smart, AI-driven recommendations for new games, friends, or tournaments tailored to your playstyle and achievements." 
/>
<FeatureCard 
  title="Live Game Alerts" 
  description="Get real-time notifications for match invites, leaderboard updates, and exclusive in-game events—never miss a moment!" 
/>
<FeatureCard 
  title="Cross-Platform Play" 
  description="Seamless gaming experience optimized for PC, console, and mobile—play anywhere, anytime, with responsive design." 
/>
<FeatureCard 
  title="Game Master Console" 
  description="A powerful admin dashboard to manage players, tournaments, leaderboards, and in-game content with ease." 
/>
<FeatureCard 
  title="Player Analytics" 
  description="Track your progress, stats, and achievements with interactive charts—level up your gameplay with actionable insights." 
/>

      </div>
    </div>
  </section>
);

export default FeaturesSection;

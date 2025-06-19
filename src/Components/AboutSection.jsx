import { Parallax } from 'react-scroll-parallax';

const services = [
  {
    icon: "🎮",
    title: "Immersive Gameplay",
    desc: "Experience cutting-edge graphics and dynamic worlds that keep you engaged for hours.",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Multiplayer Modes",
    desc: "Team up or compete with friends and players worldwide in real-time battles and co-op missions.",
  },
  {
    icon: "🏆",
    title: "Leaderboards & Rewards",
    desc: "Climb the global rankings and earn exclusive in-game rewards for your achievements.",
  },
  {
    icon: "🌐",
    title: "Cross-Platform Play",
    desc: "Seamlessly connect and play with others across PC, console, and mobile devices for a unified experience.",
  },
  {
    icon: "🔒",
    title: "Secure & Fair Gaming",
    desc: "Advanced encryption, anti-cheat, and user verification keep gameplay secure and fair for everyone.",
  },
  {
    icon: "💬",
    title: "Community & Social Features",
    desc: "Build your profile, connect with friends, join guilds, and share your best moments with the gaming community.",
  },
  {
    icon: "🕹️",
    title: "Game Variety",
    desc: "Choose from a vast library of genres: action, strategy, adventure, puzzles, and more—something for every gamer.",
  },
  {
    icon: "📊",
    title: "Player Analytics",
    desc: "Track your stats, monitor progress, and get personalized insights to level up your gameplay.",
  },
  {
    icon: "♿",
    title: "Accessibility Options",
    desc: "Customizable controls, colorblind modes, and adaptive difficulty ensure everyone can enjoy the game.",
  },
 
];


const AboutSection = () => (
  <section
    id="about"
    className="relative py-20 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
  >
    {/* Parallax Background Pattern */}
    <Parallax speed={-20}>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-200 opacity-30 blur-3xl pointer-events-none" />
    </Parallax>
    {/* Section Content */}
    <div className="relative z-10 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Gamers Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <Parallax key={i} speed={5 + i * 2}>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </Parallax>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

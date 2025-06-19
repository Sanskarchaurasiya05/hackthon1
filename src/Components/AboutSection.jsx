import { Parallax } from 'react-scroll-parallax';

const services = [
  {
    icon: "💡",
    title: "Innovative Ideas",
    desc: "We bring creative solutions to your business challenges.",
  },
  {
    icon: "🚀",
    title: "Fast Delivery",
    desc: "Quick turnaround without compromising on quality.",
  },
  {
    icon: "🤝",
    title: "Trusted Support",
    desc: "Our team is here for you 24/7, every step of the way.",
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
      <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
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

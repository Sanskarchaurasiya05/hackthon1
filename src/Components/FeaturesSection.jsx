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
          title="Feature One" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
        />
        <FeatureCard 
          title="Feature Two" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
        />
        <FeatureCard 
          title="Feature Three" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
        />
      </div>
    </div>
  </section>
);

export default FeaturesSection;

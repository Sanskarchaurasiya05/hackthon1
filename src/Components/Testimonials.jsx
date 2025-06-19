const TestimonialCard = ({ content, author }) => (
  <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg" data-aos="fade-up">
    <p className="mb-6 italic">"{content}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
      <div>
        <h4 className="font-semibold">{author.name}</h4>
        <p>{author.title}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section id="testimonials" data-aos="fade-up" className="py-20 bg-white dark:bg-gray-800">
    <div className="container px-4 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">What Our Users Say</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <TestimonialCard 
          content="This product completely transformed my workflow!" 
          author={{ name: "Jane Doe", title: "Product Manager" }} 
        />
        <TestimonialCard 
          content="The best solution I've used in years. Highly recommended!" 
          author={{ name: "John Smith", title: "CTO" }} 
        />
      </div>
    </div>
  </section>
);

export default Testimonials;

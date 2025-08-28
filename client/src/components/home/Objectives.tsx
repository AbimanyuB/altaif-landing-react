import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Objectives = () => {
  const sectionRef = useScrollAnimation();

  const objectives = [
    {
      number: 1,
      title: "Leading Technology Provider",
      description: "To be a leading provider of technology driven educational solutions",
      progress: 95,
      color: "primary"
    },
    {
      number: 2,
      title: "High Quality Solutions",
      description: "To provide high quality education focused technological solutions",
      progress: 90,
      color: "secondary"
    },
    {
      number: 3,
      title: "Quality Service",
      description: "To provide high quality services to clients",
      progress: 92,
      color: "accent"
    },
    {
      number: 4,
      title: "Educational Innovation",
      description: "To enable students and educationists attain high quality learning through technological interventions",
      progress: 88,
      color: "green-500"
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Our Objectives</h2>
          <p className="text-xl text-gray-600">We understand your requirements and let you customize however you wish</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className={`flex-shrink-0 w-12 h-12 bg-${objective.color} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{objective.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
                  <p className="text-gray-600 mb-3">{objective.description}</p>
                  <div className="bg-gray-200 rounded-full h-2 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${objective.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`bg-${objective.color} h-2 rounded-full`}
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-500">Progress</span>
                    <span className="text-sm font-bold text-gray-700">{objective.progress}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Vision concept with technology and education"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;

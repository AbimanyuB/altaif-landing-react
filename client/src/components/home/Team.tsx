import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Team = () => {
  const sectionRef = useScrollAnimation();

  const teamMembers = [
    {
      name: "Ibrahim Benette",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400",
      color: "primary"
    },
    {
      name: "Hazna Ahmad",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400",
      color: "secondary"
    },
    {
      name: "Dr. Md Athar Imtiaz",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400",
      color: "accent"
    },
    {
      name: "Dr M.G. Abbas Malik",
      role: "Senior Consultant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400",
      color: "green-500"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-gray-600">Meet the experts behind our success</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-56 object-cover rounded-2xl mx-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-${member.color}/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

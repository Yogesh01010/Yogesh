import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const techStack = [
    { name: 'JavaScript', icon: '🟨', category: 'Frontend' },
    { name: 'C++', icon: '💙', category: 'Programming' },
    { name: 'Node.js', icon: '💚', category: 'Backend' },
    { name: 'Express', icon: '⚡', category: 'Backend' },
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Redux', icon: '🔄', category: 'State Management' },
    { name: 'Zustand', icon: '🐻', category: 'State Management' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'HTML', icon: '🧡', category: 'Frontend' },
    { name: 'CSS', icon: '💙', category: 'Frontend' },
    { name: 'Chakra UI', icon: '💎', category: 'UI Library' },
    { name: 'Tailwind', icon: '🎨', category: 'UI Framework' },
    { name: 'SQL', icon: '🗄️', category: 'Database' },
    { name: 'React Native', icon: '📱', category: 'Mobile' },
  ];

  const workingTools = [
    { name: 'VS Code', icon: '💻', category: 'IDE' },
    { name: 'GitHub', icon: '🐙', category: 'Version Control' },
    { name: 'Git', icon: '📊', category: 'Version Control' },
    { name: 'Postman', icon: '📮', category: 'API Testing' },
    { name: 'CodeSandbox', icon: '📦', category: 'Online Editor' },
    { name: 'CodePen', icon: '✏️', category: 'Online Editor' },
    { name: 'Replit', icon: '🔄', category: 'Online IDE' },
    { name: 'Vercel', icon: '▲', category: 'Deployment' },
    { name: 'Netlify', icon: '🌍', category: 'Deployment' },
    { name: 'Snack', icon: '🥨', category: 'React Native' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.2 } 
      }}
      whileTap={{ scale: 0.95 }}
      className="group cursor-pointer"
    >
      <Card className="p-6 text-center h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
          className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"
        >
          {skill.icon}
        </motion.div>
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {skill.name}
        </h3>
        <p className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
          {skill.category}
        </p>
        
        {/* Animated background on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-primary rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-foreground mb-8 text-center"
          >
            🚀 Tech Stack
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {techStack.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Working Tools Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-foreground mb-8 text-center"
          >
            🛠️ Working Tools
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {workingTools.map((tool, index) => (
              <SkillCard key={tool.name} skill={tool} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-10 text-4xl opacity-20"
          >
            💻
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-10 text-4xl opacity-20"
          >
            ⚡
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
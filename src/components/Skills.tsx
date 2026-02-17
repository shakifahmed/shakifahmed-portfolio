import React from 'react';
import { Brain, Code, Database, Zap, TrendingUp, Cpu } from 'lucide-react';

// Blue color mapping for skill categories
const categoryColors: Record<string, string> = {
  'Machine Learning': 'tech-tag-blue',
  'Deep Learning': 'tech-tag-indigo',
  'Natural Language Processing': 'tech-tag-teal',
  'Generative AI': 'tech-tag-violet',
  'Data Science': 'tech-tag-sky',
  'MLOps & Deployment': 'tech-tag-cyan',
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Machine Learning',
      icon: Brain,
      description: 'Expertise in supervised and unsupervised learning algorithms, feature engineering, model selection, and performance optimization.',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
      title: 'Deep Learning',
      icon: Cpu,
      description: 'Proficient in neural networks, CNNs, RNNs, LSTMs, and transformer architectures for complex pattern recognition.',
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'OpenCV'],
    },
    {
      title: 'Natural Language Processing',
      icon: Code,
      description: 'Advanced knowledge in text processing, language models, and conversational AI systems.',
      skills: ['NLTK', 'spaCy', 'Transformers'],
    },
    {
      title: 'Generative AI',
      icon: Zap,
      description: 'Experience with large language models, prompt engineering, fine-tuning, and building AI-powered applications.',
      skills: ['LangChain', 'Hugging Face', 'RAG'],
    },
    {
      title: 'Data Science',
      icon: TrendingUp,
      description: 'Strong foundation in statistical analysis, data visualization, and extracting insights from complex datasets.',
      skills: ['Python', 'SQL', 'Tableau'],
    },
    {
      title: 'Deployment',
      icon: Database,
      description: 'Knowledge in model deployment, monitoring, version control, and building scalable ML infrastructure.',
      skills: ['Docker', 'AWS', 'Git'],
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white anchor-offset">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="portfolio-card group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-xl bg-[#0066b3]/10 mr-4 transition-transform group-hover:scale-110">
                  <category.icon size={24} className="text-[#0066b3]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-5 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm font-medium rounded-full bg-[#0066b3]/10 text-[#0066b3]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
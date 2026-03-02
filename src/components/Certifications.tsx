import React from 'react';
import ImageCarousel from './ImageCarousel';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const tagColors = ['tech-tag-blue', 'tech-tag-sky', 'tech-tag-cyan', 'tech-tag-indigo', 'tech-tag-violet', 'tech-tag-teal'];
const getTagColor = (index: number) => tagColors[index % tagColors.length];

type Achievement = {
  title: string;
  event: string;
  year: string;
  description: string;
  image?: string;
  images?: string[];
  type: string;
  color: string;
};

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'Neural Networks and Deep Learning',
      issuer: 'Coursera (DeepLearning.AI)',
      date: '2023',
      image: 'https://cdn.brandfetch.io/idcuOol42D/w/333/h/333/theme/dark/icon.jpeg',
      description: 'An intermediate-level course covering the foundations of deep learning and neural networks. Gained hands-on experience in building and training efficient neural networks.',
      skills: ['Neural Networks', 'Deep Learning', 'Supervised Learning', 'Computer Vision'],
      verificationLink: 'https://www.coursera.org/account/accomplishments/certificate/4FVSRJ29GQJ7',
      type: 'Course Certificate',
      level: 'Intermediate',
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      name: 'Improving Deep Neural Networks',
      issuer: 'Coursera (DeepLearning.AI)',
      date: '2023',
      image: 'https://cdn.brandfetch.io/idcuOol42D/w/333/h/333/theme/dark/icon.jpeg',
      description: 'Focuses on hyperparameter tuning, regularization methods, and advanced optimization algorithms such as RMSprop and Adam.',
      skills: ['AI/ML', 'TensorFlow', 'Performance Tuning', 'ML Algorithms'],
      verificationLink: 'https://www.coursera.org/account/accomplishments/certificate/WFJLDJGUJTL8',
      type: 'Course Certificate',
      level: 'Intermediate',
      color: 'bg-sky-500/10 text-sky-500',
    },
    {
      name: '19 Generative AI Real Time Projects',
      issuer: 'Udemy',
      date: '2025',
      image: 'https://cdn.brandfetch.io/idTqV2BNgX/w/400/h/400/theme/dark/icon.png',
      description: 'Hands-on course mastering GPT, GANs, Transformers, and Variational Autoencoders through 20+ real-world projects.',
      skills: ['LLM Models', 'Fine-tuning', 'LangChain', 'Streamlit'],
      verificationLink: 'https://www.udemy.com/certificate/UC-bd5feb05-5ad5-4e07-908b-0f8ed35343a9/',
      type: 'Projects Certificate',
      level: 'Intermediate',
      color: 'bg-indigo-500/10 text-indigo-500',
    },
    {
      name: 'Data Analytics Essentials',
      issuer: 'Cisco Networking Academy',
      date: '2026',
      image: 'https://newsroom.cisco.com/c/dam/r/newsroom/en/us/images/Cisco-Logo-Blue_1200x675.jpg',
      description: 'End-to-end data analytics process, including data types, formats, data transformation, and basic statistical analysis, with hands-on practice using Excel, SQL and Tableau.',
      skills: ['Data Analysis', 'Data Visualization', 'Excel', 'SQL', 'Tableau'],
      verificationLink: 'https://www.credly.com/badges/5705c98b-a322-4354-b4d2-8ec2349a4019',
      type: 'Certificate',
      level: 'Foundational',
      color: 'bg-indigo-500/10 text-indigo-500',
    },
  ];

  const achievements: Achievement[] = [
    {
      title: 'Deep Learning Code Management',
      event: 'Center for Computational & Data Sciences, IUB',
      year: '2024',
      description: 'Participated in a 2-day workshop on deep learning implementation and project management with hands-on experience.',
      images: ['/images/ccds_grp.JPG', '/images/certificate_ccds.JPG', '/images/ccds_hall.JPG'],
      type: 'Workshop',
      color: 'bg-cyan-500/10 text-cyan-500',
    },
    {
      title: 'Monthly Excellence Recognition',
      event: 'RENATA PLC',
      year: 'Dec, 2024',
      description: 'Awarded Intern of the Month for simplifying work processes and innovative problem-solving.',
      images: ['/images/intern_award.jpeg', '/images/intern_award_1.jpeg', '/images/intern_award_2.jpeg'],
      type: 'Workplace Award',
      color: 'bg-sky-500/10 text-sky-600',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white anchor-offset">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Certifications & Achievements
        </h2>

        {/* Certifications */}
        <div className="space-y-6 mb-12">
          {certifications.map((cert) => (
            <div key={cert.name} className="portfolio-card">
              <div className="flex items-start gap-5">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-16 h-16 rounded-xl object-cover border border-gray-200 flex-shrink-0" 
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-sm mb-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-[#0066b3]/10 text-[#0066b3] font-medium">{cert.type}</span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <Calendar size={12} className="text-[#0066b3]" />
                      {cert.date}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#0066b3]/10 text-[#0066b3] font-medium">{cert.level}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{cert.name}</h3>
                  <p className="text-[#0066b3] font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill: string) => (
                      <span key={skill} className="px-3 py-1 text-sm font-medium rounded-full bg-[#0066b3]/10 text-[#0066b3]">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={cert.verificationLink} 
                    className="btn-outline text-sm inline-flex"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CheckCircle size={14} /> 
                    Verify Certificate 
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="space-y-6">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="portfolio-card">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm mb-2 flex-wrap">
                    <Award size={14} className="text-[#0066b3]" />
                    <span className="px-3 py-1 rounded-full bg-[#0066b3]/10 text-[#0066b3] font-medium">{achievement.type}</span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <Calendar size={12} className="text-[#0066b3]" />
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                  <p className="text-[#0066b3] font-medium mb-2">{achievement.event}</p>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
                
                {/* Image carousel */}
                <div className="flex-shrink-0 w-full md:w-2/5 flex items-center justify-center">
                  {Array.isArray(achievement.images) && achievement.images.length > 1 ? (
                    <ImageCarousel
                      images={achievement.images}
                      alt={achievement.title}
                      className="w-full"
                      imgClassName="w-full h-48 object-cover rounded-xl border border-gray-200"
                    />
                  ) : (
                    (achievement.image || (achievement.images && achievement.images[0])) && (
                      <img
                        src={achievement.image || (achievement.images && achievement.images[0]) || ''}
                        alt={achievement.title}
                        className="w-full h-48 object-cover rounded-xl border border-gray-200"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
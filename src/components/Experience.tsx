import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, TrendingUp } from 'lucide-react';

const tagColors = ['tech-tag-blue', 'tech-tag-sky', 'tech-tag-cyan', 'tech-tag-indigo', 'tech-tag-violet', 'tech-tag-teal'];
const getTagColor = (index: number) => tagColors[index % tagColors.length];

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Junior Research Associate',
      company: 'United Internationl University (UIU)',
      location: 'Dhaka, Bangladesh',
      period: 'Oct 2025 - Preset',
      type: 'Full-time',
      description: 'Currently working on the "SmartAMR: Advancing Digital Healthcare with AI-driven Intelligence to Strengthen Medical Adherence, Minimize Prescription Errors, and Reduce Antimicrobial Resisrance in Bangladesh". The project is conducted under the Academic Transformation Fund (ATF) of the Higher Education Acceleration and Transformation (HEAT) initiative at United International University (UIU).',
      achievements: [],
      technologies: [],
      website: 'https://example.com/',
    },
    {
      title: 'Research Assistant',
      company: 'Ahsanullah University of Science and Technology',
      location: 'Dhaka, Bangladesh',
      period: 'Apr 2025 - Sept 2025',
      type: 'Full-time',
      description: 'Completed my research work under the supervision of Dr. Umma Hany, PhD, Associate Professor. My research focused on “SwinR-FPN: A Hybrid CNN–Transformer Approach for Feature Extraction and Classification in Breast Cancer Mammography.”',
      achievements: [
        'Developed a transformer-based model that improved accuracy by 25%',
        'Led a team of 5 engineers in building scalable ML infrastructure',
        'Published 3 research papers in top-tier conferences',
        'Reduced model inference time by 40% through optimization techniques'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Kubernetes', 'AWS', 'MLflow'],
      website: 'https://aust.edu/',
    },
    {
      title: 'Intern',
      company: 'Renata PLC',
      location: 'Head Office, Dhaka, Bangladesh',
      period: 'Dec 2024 - Apr 2025',
      type: 'Full-time',
      description: 'Collaborated with cross-functional teams to digitalize approval processes and provided recommendations for CRM/ERP integration to optimize marketing investments.',
      achievements: [],
      technologies: [],
      website: 'https://example.com/',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white anchor-offset">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <div key={experience.title + experience.company} className="portfolio-card hover:border-[#0066b3]/30">
              <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-sm mb-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-[#0066b3]/10 text-[#0066b3] font-semibold">{experience.type}</span>
                    <a 
                      href={experience.website} 
                      className="flex items-center gap-1 text-gray-500 hover:text-[#0066b3] transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={12} /> Company Website
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                  <div className="flex items-center text-[#0066b3] mt-1">
                    <Briefcase size={16} className="mr-2" />
                    {experience.company}
                  </div>
                </div>
                <div className="text-sm text-gray-500 whitespace-nowrap text-right">
                  <div className="flex items-center gap-1.5 justify-end">
                    <Calendar size={14} className="text-[#0066b3]" />
                    {experience.period}
                  </div>
                  <div className="flex items-center gap-1.5 justify-end mt-1">
                    <MapPin size={14} className="text-[#0066b3]" />
                    {experience.location}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
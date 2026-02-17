import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      type: 'University',
      institution: 'Ahsanullah University of Science and Technology',
      degree: 'Bachelor of Science in Electrical and Electronics Engineering',
      session: '2019 - 2024',
      gpa: 'CGPA: 3.377/4.0',
      location: 'Dhaka, Bangladesh',
      description: 'Signals and Linear Systems, Very Large Scale Integration, Computer Architecture, Solid State Device, Electromagnetics, Control System, Advanced Communication Systems, Programming Language.',
    },
    {
      type: 'College',
      institution: 'Shaheed Police Smrity College',
      degree: 'Higher Secondary Certificate (Science)',
      session: '2016 - 2018',
      gpa: 'CGPA: 4.17/5.0',
      location: 'Dhaka, Bangladesh',
      description: 'Focused on mathematics, physics, chemistry and biology. Strong foundation in analytical thinking and problem-solving.',
    },
    {
      type: 'School',
      institution: "Sher-E Bangla Nagar Govt. Boys' High School",
      degree: 'Secondary School Certificate (Science)',
      session: '2014 - 2016',
      gpa: 'GPA: 4.78/5.0',
      location: 'Dhaka, Bangladesh',
      description: '',
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 anchor-offset">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Education
        </h2>

        <div className="space-y-6">
          {educationData.map((edu) => (
            <div key={edu.institution} className="portfolio-card hover:border-[#0066b3]/30">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-sm mb-2 flex-wrap">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066b3]/10 text-[#0066b3] font-medium">
                      <GraduationCap size={14} />
                      <span>{edu.type}</span>
                    </div>
                    <span className="flex items-center gap-1 text-gray-500">
                      <MapPin size={14} className="text-[#0066b3]" />
                      {edu.location}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#0066b3] mb-1">{edu.institution}</h3>
                  <p className="text-gray-700 font-medium">{edu.degree}</p>
                  
                  {edu.description && (
                    <p className="mt-3 text-gray-600 leading-relaxed">{edu.description}</p>
                  )}
                </div>
                
                <div className="text-right flex-shrink-0">
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-1">
                    <Calendar size={14} className="text-[#0066b3]" />
                    <span>{edu.session}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm px-3 py-1 rounded-full bg-[#0066b3]/10 text-[#0066b3] font-semibold">
                    <Award size={14} />
                    <span>{edu.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
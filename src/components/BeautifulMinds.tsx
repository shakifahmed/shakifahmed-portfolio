import React from 'react';

const BeautifulMinds: React.FC = () => {
  const mentors = [
    {
      name: 'Dr. Umma Hany',
      title: 'Associate Professor',
      department: 'Electrical & Electronic Engineering',
      institution: 'Ahsanullah University of Science and Technology',
      image: '/images/uhany.jpeg',
    },
    {
      name: 'Mr. Ferdous Irtiaz Khan',
      title: 'Assistant Professor',
      department: 'Electrical & Electronic Engineering',
      institution: 'Ahsanullah University of Science and Technology',
      image: '/images/fir.jpeg',
    },
    {
      name: 'Mr. Md. Reasad Zaman Chowdhury',
      title: 'Lecturer Grade-I',
      department: 'Computer Science and Engineering',
      institution: 'Ahsanullah University of Science and Technolog',
      image: '/images/reasad.jpeg',
    },
  ];

  return (
    <section id="beautiful-minds" className="py-20 bg-gray-50 anchor-offset">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Beautiful Minds
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Guiding My Journey
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {mentors.map((mentor) => (
            <div key={mentor.name} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#0066b3]/20 mb-4">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
              <p className="text-[#0066b3] font-medium">{mentor.title}</p>
              <p className="text-gray-600 text-sm">{mentor.department}</p>
              <p className="text-gray-500 text-sm">{mentor.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautifulMinds;

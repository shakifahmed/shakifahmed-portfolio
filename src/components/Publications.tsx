import React from 'react';
import { ExternalLink, FileText, Calendar, Users } from 'lucide-react';
import ongoingBreastCancer from '@/assets/ongoing-breast-cancer.jpg';
import ongoingElectronics from '@/assets/ongoing-electronics.jpg';
import ongoingHardwareTrojan from '@/assets/ongoing-hardware-trojan.jpg';

const Publications: React.FC = () => {
  const publications = [
    {
      title: 'Advancing Brain Tumor MRI Classification Using SwRD: A Parallel Swin Transformer-ResNet Approach',
      authors: ['Shakif Ahmed', 'Dhruba Jyoti Shil', 'Tanvir Ahmed Souro', 'Sakib Al Mahmood', 'Ferdous Irtiaz Khan'],
      journal: 'Virtual Reality & Intelligent Hardware',
      year: '2025',
      doi: '10.1016/j.vrih.2025.06.002',
      link: 'https://doi.org/10.1016/j.vrih.2025.06.002',
      image: '/images/bt.jpg',
      citations: 0,
      type: 'Journal Article',
      status: 'Published'
    },

    {
      title: 'Hybrid Deep Learning Architecture for Skin Disease Classification',
      authors: ['Shakif Ahmed', 'K.M. Sadman Sakib', 'Umma Hany'],
      journal: 'Franklin Open',
      year: '2026',
      doi: '10.1016/j.fraope.2026.100556',
      link: 'https://doi.org/10.1016/j.fraope.2026.100556',
      image: '/images/skin.jpg',
      citations: 0,
      type: 'Journal Article',
      status: 'Published'
    },
  ];

  const ongoingWorks = [
    {
      title: 'SwinR-FPN: A Hybrid CNN–Transformer Approach for Feature Extraction and Classification in Breast Cancer Mammography',
      authors: [],
      doi: 'N/A',
      year: '2026',
      image: '/images/bc.jpg',
      type: 'Research Paper',
      status: 'Under Review'
    },
    {
      title: 'JLTFET: Computational Analysis of Structural and Metarial Parameters for Enhanced Performance',
      authors: [],
      doi: 'N/A',
      year: '2026',
      image: '/images/elec.jpg',
      type: 'Research Paper',
      status: 'In Progress'
    },
    {
      title: 'Token-Efficient Hardware Trojan Detection Using Large Language Models',
      authors: [],
      doi: 'N/A',
      year: '2026',
      image: ongoingHardwareTrojan,
      type: 'Research Paper',
      status: 'In Progress'
    },
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50 anchor-offset">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Publications
        </h2>

        <div className="space-y-6">
          {publications.map((publication) => (
            <div key={publication.title} className="portfolio-card hover:border-[#0066b3]/30">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0 w-full lg:w-56">
                  <img
                    src={publication.image}
                    alt={`${publication.title} preview`}
                    className="w-full h-48 lg:h-full object-cover rounded-xl border border-gray-200"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-sm mb-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-[#0066b3]/10 text-[#0066b3] font-medium">
                      {publication.type}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <Calendar size={14} className="text-[#0066b3]" />
                      {publication.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#0066b3]/10 text-[#0066b3] font-semibold">
                      {publication.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{publication.title}</h3>
                  
                  <div className="flex items-start text-gray-600 mt-2 mb-3">
                    <Users size={16} className="mr-2 mt-0.5 flex-shrink-0 text-[#0066b3]" />
                    <span className="text-sm">{publication.authors.join(', ')}</span>
                  </div>
                  
                  <p className="text-[#0066b3] font-medium mb-4">{publication.journal}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    <a href={publication.link} className="btn-outline text-sm" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} />
                      <span>Read Paper</span>
                    </a>
                    <div className="btn-outline text-sm cursor-default">
                      <FileText size={14} />
                      <span>DOI: {publication.doi}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing Works Subsection */}
        <h3 className="text-2xl font-bold text-gray-900 mt-16 mb-8 text-center">
          Ongoing Works
        </h3>

        <div className="space-y-6">
          {ongoingWorks.map((work) => (
            <div key={work.title} className="portfolio-card hover:border-[#0066b3]/30">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0 w-full lg:w-40">
                  <img
                    src={work.image}
                    alt={`${work.title} preview`}
                    className="w-full h-32 lg:h-32 object-cover rounded-xl border border-gray-200"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-sm mb-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-[#0066b3]/10 text-[#0066b3] font-medium">
                      {work.type}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <Calendar size={14} className="text-[#0066b3]" />
                      {work.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold">
                      {work.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{work.title}</h3>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="btn-outline text-sm cursor-default">
                      <FileText size={14} />
                      <span>DOI: {work.doi}</span>
                    </div>
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

export default Publications;
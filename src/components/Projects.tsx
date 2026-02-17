import React from 'react';
import ImageCarousel from './ImageCarousel';
import {
  ExternalLink,
  Github,
  Play,
  Star,
  Calendar,
  UserCheck,
} from 'lucide-react';

// Blue color cycling for tech tags
const tagColors = [
  'tech-tag-blue',
  'tech-tag-sky',
  'tech-tag-cyan',
  'tech-tag-indigo',
  'tech-tag-violet',
  'tech-tag-teal',
  'tech-tag-navy',
  'tech-tag-slate',
];

const getTagColor = (index: number) => tagColors[index % tagColors.length];

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Medical Triage System',
      description:
        'An intelligent triage system that uses machine learning and LLM technology to classify and prioritize medical symptoms. The system analyzes patient inputs and provides recommendations for either OTC Drug treatment or Doctor Consultation based on symptom severity, patient history, and AI-powered safety review.',
      image: '/images/triage_ui.png',
      images: ['/images/triage_ui.png'],
      technologies: ['Machine Learning', 'Python', 'Pandas', 'LangChain', 'FastAPI', 'Docker', 'AWS', 'PostgreSQL'],
      category: 'Generative AI',
      status: 'Completed',
      date: '2025',
      github: 'https://github.com/shakifahmed/triage-system-v2',
      link: 'https://triage-system-v2.vercel.app/',
      demo: '#',
      hideDemo: true,
      featured: false,
      categoryColor: 'bg-violet-500/10 text-violet-500',
    },
    {
      title: 'YouTube Question & Answer Chatbot',
      description:
        'A powerful AI-powered chatbot using the LangChain framework that analyzes YouTube video transcripts and answers questions about the video content using advanced language models and vector search technology.',
      image: '/images/yt_1.png',
      images: ['/images/yt_1.png', '/images/yt_2.png'],
      technologies: ['LangChain', 'RAG', 'Pinecone', 'Streamlit', 'Python'],
      category: 'Generative AI',
      status: 'Completed',
      date: '2025',
      github: 'https://github.com/shakifahmed/youtube-qa-chatbot-gen-ai',
      link: 'https://youtube-qa-chatbot.streamlit.app/',
      demo: '#',
      hideDemo: true,
      featured: false,
      categoryColor: 'bg-violet-500/10 text-violet-500',
    },
    {
      title: 'MediBot – A RAG-Based Medical Assistant',
      description:
        'A chatbot using the LangChain framework to provide reliable answers to medical queries. It utilizes Retrieval Augmented Generation (RAG), integrates with Pinecone for vector storage of medical textbooks, and delivers contextually accurate responses using large language models.',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'LangChain', 'Gemini API', 'RAG'],
      category: 'Generative AI',
      status: 'Completed',
      date: '2025',
      github: 'https://github.com/shakifahmed/medibot-gen-ai',
      link: 'http://medibot-gen-ai.streamlit.app/',
      demo: 'http://medibot-gen-ai.streamlit.app/',
      featured: false,
      hideContribution: true,
      categoryColor: 'bg-violet-500/10 text-violet-500',
    },
    {
      title: 'MammoFlow: End-to-End Mammogram Segmentation & Classification',
      description:
        'This project finds and classifies breast tumor patterns from mammogram images. It begins by segmenting the tumor regions using the regionprops method from scikit-image, and then the mask is refined with a simple morphological opening operation.',
      image: '/images/mamo_1.png',
      images: [
        '/images/mamo_1.png',
        '/images/mamo_2.png',
        '/images/mamo_3.png',
        '/images/mamo_4.png',
        '/images/mamo_5.png',
        '/images/mamo_6.png',
      ],
      technologies: ['Python', 'OpenCV', 'Scikit-image', 'TensorFlow', 'Pandas'],
      category: 'Computer Vision',
      status: 'Completed',
      date: '2024',
      github: 'https://github.com/shakifahmed/mammoflow-end-to-end-mammogram-segmentation-classification',
      link: '',
      demo: '#',
      featured: true,
      hideDemo: true,
      categoryColor: 'bg-indigo-500/10 text-indigo-500',
    },
    {
      title: 'Curvefitting Regression Method',
      description:
        'This project is about curve fitting using regression methods. It helps understand how data can be fitted into a line or a curve with options for linear and polynomial regression.',
      image: '/images/curve_fitting_1.png',
      images: ['/images/curve_fitting_1.png', '/images/curve_fitting_2.png'],
      contribution: 'Write the MATLAB code for curve fitting regression and generate the fitted results',
      technologies: ['Matlab'],
      category: 'EEE',
      status: 'Completed',
      date: '2023',
      github: 'https://github.com/shakifahmed/curve-fitting-regression-method',
      link: 'https://drive.google.com/file/d/1QzzQu0RRMC17P_bzuSPS30UVgFL8Rfd7/view?usp=sharing',
      demo: '',
      featured: false,
      hideDemo: true,
      hideContribution: false,
      categoryColor: 'bg-sky-500/10 text-sky-500',
    },
    {
      title: 'Arduino-Based Three Phase Fault Detection System',
      description:
        'This project is a three-phase fault detection system built using Arduino. It monitors voltages and detects faults when any phase voltage goes outside the safe range.',
      image: '/images/ps2_1.jpg',
      images: [
        '/images/ps2_1.jpg',
        '/images/ps2_2.jpg',
        '/images/ps2_3.jpg',
      ],
      technologies: ['Power System', 'Arduino'],
      category: 'EEE',
      status: 'Completed',
      date: '2023',
      github: 'https://github.com/shakifahmed/arduino-based-three-phase-fault-detection-system',
      link: '',
      demo: '#',
      featured: false,
      hideDemo: true,
      hideContribution: true,
      categoryColor: 'bg-sky-500/10 text-sky-500',
    },
  ];

  const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
    const canShowDemo = !project.hideDemo && !!project.demo;
    const canShowContribution = !!project.contribution && !project.hideContribution;

    return (
      <div className="portfolio-card flex flex-col lg:flex-row items-stretch gap-6">
        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    {project.category && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0066b3]/10 text-[#0066b3]">
                        {project.category}
                      </span>
                    )}
                    {project.featured && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 inline-flex items-center">
                        <Star size={12} className="mr-1" />
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-600">
                      {project.status}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1 text-[#0066b3]" />
                      {project.date}
                    </div>
                  </div>
                </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

            {canShowContribution && (
              <div className="mb-5 p-4 bg-[#0066b3]/5 rounded-xl border border-[#0066b3]/20">
                <div className="flex items-center gap-2 text-gray-900 font-semibold mb-2">
                  <UserCheck size={18} className="text-[#0066b3]" />
                  <span>My Contribution</span>
                </div>
                {Array.isArray(project.contribution) ? (
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {project.contribution.map((c: string, i: number) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">{project.contribution}</p>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech: string) => (
                <span key={tech} className="px-3 py-1 text-sm font-medium rounded-full bg-[#0066b3]/10 text-[#0066b3]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                <ExternalLink size={16} />
                <span>Link</span>
              </a>
            )}
            {canShowDemo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                <Play size={16} />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Image Carousel */}
        <div className="flex-shrink-0 w-full lg:w-2/5 flex items-center justify-center">
          <ImageCarousel
            images={Array.isArray(project.images) && project.images.length > 0 ? project.images : [project.image]}
            alt={project.title}
            className="w-full"
            imgClassName="w-full h-48 md:h-56 object-cover rounded-xl border border-gray-200"
            autoPlay
            intervalMs={3000}
            pauseOnHover
          />
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 anchor-offset">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Projects
        </h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
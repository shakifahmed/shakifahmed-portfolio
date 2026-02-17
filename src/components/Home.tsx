import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Home: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shakifahmed", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shakif-ahmed", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shakifahmed21@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen bg-[#0066b3] flex items-center relative overflow-hidden">
      <div className="section-container relative z-10 py-16 md:py-24">
        {/* Top section: Image left, Headline right */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-24">
          {/* Profile image */}
          <div className="shrink-0">
            <div className="relative group">
              {/* Glow effect background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Main circular frame */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                {/* Inner subtle border */}
                <div className="absolute inset-0 border-2 border-white/10 rounded-full pointer-events-none z-10"></div>
                
                <img
                  src="/profile.png"
                  alt="Shakif Ahmed"
                  className="w-full h-full object-cover scale-[1.2] object-[center_1%] transition-transform duration-300 group-hover:scale-[1.3]"
                />
              </div>
            </div>
          </div>

          {/* Headline text */}
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium italic leading-relaxed bg-gradient-to-r from-white via-cyan-200 to-sky-100 bg-clip-text text-transparent">
              What began as fascination with neural networks has evolved into a research journey through Deep Learning and Generative AI. Now, I'm exploring the frontiers of machine intelligence—where computation meets creativity, and algorithms learn to imagine.
            </h1>
          </div>
        </div>

        {/* Intro section */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-16">
          {/* Intro label with line */}
          <div className="flex items-center gap-4 shrink-0 md:w-48">
            <div className="h-px w-12 bg-white/40"></div>
            <span className="text-white/80 text-sm tracking-wide">Intro</span>
          </div>

          {/* Intro text */}
          <div className="flex-1 space-y-4">
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl text-justify">
              Hi — I'm <strong>Shakif Ahmed</strong>, a <strong>Junior Research Associate</strong> working on the <strong>Higher Education Acceleration and Transformation (HEAT)</strong> project at the{" "}
              <a
                href="http://aimsl.uiu.ac.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-200 transition-colors inline-flex items-baseline gap-1"
              >
                <strong>AIMS Lab</strong>
                <ExternalLink size={14} className="inline-block align-baseline" />
              </a>
              , which operates under the <strong>Institute of Research, Innovation, Incubation & Commercialization (IRIIC)</strong>{" "}
              <a
                href="https://iriic.uiu.ac.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-200 transition-colors inline-flex items-baseline gap-1"
              >
                
                <ExternalLink size={14} className="inline-block align-baseline" />
              </a>{" "}
              at United International University (UIU). I work at the intersection of research and real-world impact,
              contributing to AI-driven healthcare systems designed to support informed decision-making and promote
              responsible antibiotic use.
            </p>
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl text-justify">
              I was born and raised in <strong>Dhaka, Bangladesh</strong>, and although the city is known for its fast
              pace and noise, I grew up in a comparatively natural and calm area, which shaped my perspective and
              curiosity about meaningful, people-centered solutions. I completed my{" "}
              <strong>B.Sc. in Electrical and Electronic Engineering (EEE)</strong> from{" "}
              <strong>Ahsanullah University of Science and Technology (AUST)</strong>.
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 mt-12">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

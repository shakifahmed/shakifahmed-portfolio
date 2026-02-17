import Header from '../components/Header';
import Home from '../components/Home';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import BeautifulMinds from '../components/BeautifulMinds';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Home />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Publications />
        <Certifications />
        <BeautifulMinds />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

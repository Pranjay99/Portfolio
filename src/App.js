
import './App.css';
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useState} from "react";
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectDetails from "./components/ProjectDetails";
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Starfield from 'react-starfield';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import AnimatedSection from './components/AnimatedSection';



const Wrapper = styled.div`

background: linear-gradient(38.73deg, rgba(0, 70, 209, 0.10) 10%,rgba(0, 70, 209, 0.07) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.25) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

const Wrapper2 = styled.div`

background: linear-gradient(38.73deg, rgba(0, 70, 209, 0.10) 10%,rgba(0, 70, 209, 0.07) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.25) 100%);
  width: 100%;
  clip-path: polygon(0 0, 40% 2%, 100% 0, 100% 100%, 0 100%);

`

const Body = styled.div`

  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <ScrollProgress />
        <Navbar />

        <Body>
          <>
        <Starfield
        starCount={3000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}

      />
          <Hero />
          </>
          <Wrapper>
            <AnimatedSection>
              <Skills />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Experience />
            </AnimatedSection>
          </Wrapper>
          <AnimatedSection>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </AnimatedSection>
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
          <AnimatedSection>
            <Achievements />
          </AnimatedSection>
          <AnimatedSection>
            <Education />
          </AnimatedSection>
          <Wrapper2>
            <AnimatedSection>
              <Contact />
            </AnimatedSection>
            <Footer />
          </Wrapper2>
          <BackToTop />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;

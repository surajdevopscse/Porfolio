import React from "react";
//components
import Navbar from "./components/navbar/navbar_component";
import Crousel from "./components/crousel/crousel_component";
import Title_message from "./components/title_message/title_message";
import Skills_component from "./pages/skills/skills_component";
import More_about from "./pages/more_about_me/more_about";
import Project_component from "./components/projects/project_component";
import Contact_section from "./pages/contact/contact_section";
import Footer_component from "./components/footer/footer_component";
import About from "./pages/about/about_component";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import "./App.css";
const App = () => {
  return (
    <div className='App' style={{ position: "relative" }}>
      <Navbar />
      <Particles
        className='particles particles-box'
        params={particlesOptions}
      />
      <Crousel />
      <Title_message />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=''
          strength={-200}
        >
          <div>
            <Container className='container-box rounded'>
              <Fade duration={500}>
                <hr className='hr'></hr>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <div>
          <Container className='container-box rounded'>
            <Fade duration={500}>
              <hr className='hr'></hr>
              <Skills_component />
            </Fade>
          </Container>
        </div>
      </div>
      <div>
        <div>
          <Container className='container-box rounded'>
            <Fade duration={500}>
              <hr className='hr'></hr>
              <More_about />
            </Fade>
          </Container>
        </div>
      </div>
      <div>
        <div>
          <Container className='container-box rounded'>
            <Fade duration={500}>
              <hr className='hr'></hr>
              <Project_component />
            </Fade>
          </Container>
        </div>
      </div>
      <div>
        <div>
          <Container className='container-box rounded'>
            <Fade duration={500}>
              <hr className='hr'></hr>
              <Contact_section />
            </Fade>
          </Container>
        </div>
      </div>
      <Footer_component />
    </div>
  );
};

export default App;

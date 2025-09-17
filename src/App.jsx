import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import DevelopmentPhilosophy from './components/DevelopmentPhilosophy';
import WhyChooseMe from './components/WhyChooseMe';
import FeaturedProjects from './components/FeaturedProjects';
import GetInTouch from './components/GetInTouch';
import ScrollToTopArrow from './components/ScrollToTopArrow';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 5%;
`;

function App() {
  return (
    <>
      <MainContainer>
        <Header />
        <Hero />
        <About />
        <TechnicalSkills />
        <DevelopmentPhilosophy />
        <WhyChooseMe />
        <FeaturedProjects />
        <GetInTouch />
      </MainContainer>
      <ScrollToTopArrow />
    </>
  );
}

export default App;
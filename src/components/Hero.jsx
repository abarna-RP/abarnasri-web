import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/abar1.png'; // <-- படத்தைப் பதிகிறோம்

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 5rem 0;
  gap: 2rem;
  background-color: var(--bg-secondary);
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
`;

const LeftContent = styled.div`
  width: 50%;
  text-align: center;
  position: relative;
`;

const HeroImage = styled.img`
  max-width: 90%;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
`;

const RightContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5rem;
`;

const NameTitle = styled.h1`
  font-size: 3.8rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Subtitle = styled.h2`
  font-size: 1.6rem;
  margin-top: 0.8rem;
  color: var(--text-secondary);
`;

const ResumeButton = styled.a`
  background-color: var(--highlight-gold);
  color: var(--bg-primary);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: bold;
  margin-top: 2.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: var(--button-hover-gold);
    transform: translateY(-2px);
  }
`;

function Hero() {
  return (
    <HeroSection>
      <LeftContent>
        <HeroImage src={heroImage} alt="Developer working on laptop" />
      </LeftContent>
      <RightContent>
        <NameTitle>Abarnasri</NameTitle>
        <Subtitle>Full Stack Developer crafting scalable web solutions with precision</Subtitle>
        <ResumeButton href="/path/to/your/resume.pdf" download>
          Download Resume
        </ResumeButton>
      </RightContent>
    </HeroSection>
  );
}

export default Hero;
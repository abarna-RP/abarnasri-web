import React from 'react';
import styled from 'styled-components';
import aboutImage from '../assets/about me.png'; // <-- படத்தைப் பதிகிறோம்

const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
  gap: 4rem;
`;

const AboutText = styled.div`
  width: 60%;
`;

const AboutImage = styled.img`
  width: 40%;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--highlight-gold);
`;

function About() {
  return (
    <AboutSection>
      <AboutText>
        <SectionTitle>About Me</SectionTitle>
        <p>I'm a passionate **Full Stack Developer** with expertise in modern web technologies including **React, Node.js, MongoDB**, and **MySQL**. I thrive on transforming complex problems into elegant, user-friendly solutions.</p>
        <p style={{ marginTop: '1rem' }}>My goal is to join a forward-thinking team where I can contribute to innovative projects while continuing to grow as a developer. I believe in writing clean, maintainable code and creating experiences that users love.</p>
      </AboutText>
      <AboutImage src={aboutImage} alt="Code on a screen" />
    </AboutSection>
  );
}

export default About;
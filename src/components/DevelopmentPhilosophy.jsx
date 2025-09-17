import React from 'react';
import styled from 'styled-components';

const PhilosophySection = styled.section`
  width: 100%;
  padding: 5rem;
  text-align: center;
  background-color: var(--bg-secondary);
  border: 2px solid var(--highlight-gold); /* <-- இங்கு பார்டர் சேர்க்கப்பட்டுள்ளது */
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--accent-pink);
`;

const PhilosophyText = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
`;

function DevelopmentPhilosophy() {
  return (
    <PhilosophySection>
      <SectionTitle>My Development Philosophy</SectionTitle>
      <PhilosophyText>
        I believe in writing clean, modular, and maintainable code. My approach is to build applications that are not just functional, but also scalable and easy for other developers to understand. I am a strong advocate for a user-centric design process, ensuring that the final product is both powerful and intuitive.
      </PhilosophyText>
    </PhilosophySection>
  );
}

export default DevelopmentPhilosophy;
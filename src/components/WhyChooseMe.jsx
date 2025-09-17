import React from 'react';
import styled from 'styled-components';
import teamBanner from '../assets/why me.png'; // <-- Import the banner image

const WhyChooseSection = styled.section`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const BannerImage = styled.img`
  width: 100%;
  max-height: 400px; /* You can adjust this height as needed */
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--text-primary); /* Changed to primary text color to match image */
  text-align: center;
`;

const QualitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  width: 100%;
`;

const QualityBox = styled.div`
  border: 2px solid;
  border-radius: 15px;
  padding: 2.5rem;
  text-align: left;
  background-color: var(--bg-secondary);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, border-color 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  border-color: ${props => {
    switch(props.trait) {
      case 'solver': return 'var(--highlight-gold)';
      case 'teamplayer': return 'var(--accent-pink)';
      case 'quality': return 'var(--highlight-gold)';
      default: return 'var(--text-secondary)';
    }
  }};
`;

const QualityTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
`;

const QualityDescription = styled.p`
  color: var(--text-secondary);
`;

function WhyChooseMe() {
  return (
    <WhyChooseSection>
      <BannerImage src={teamBanner} alt="Team of developers working together" />
      <SectionTitle>Why Choose Me?</SectionTitle>
      <QualitiesGrid>
        <QualityBox trait="solver">
          <QualityTitle>Problem Solver</QualityTitle>
          <QualityDescription>I approach challenges with analytical thinking and creative solutions that drive results.</QualityDescription>
        </QualityBox>
        <QualityBox trait="teamplayer">
          <QualityTitle>Team Player</QualityTitle>
          <QualityDescription>Strong communication skills and collaborative mindset for cross-functional team success.</QualityDescription>
        </QualityBox>
        <QualityBox trait="quality">
          <QualityTitle>Quality Focused</QualityTitle>
          <QualityDescription>Committed to delivering quality code with thorough testing and documentation.</QualityDescription>
        </QualityBox>
      </QualitiesGrid>
    </WhyChooseSection>
  );
}

export default WhyChooseMe;
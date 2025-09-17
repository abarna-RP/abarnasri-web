import React from 'react';
import styled from 'styled-components';

const PhilosophySection = styled.section`
  width: 100%;
  text-align: center;
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 3rem; /* Larger title */
  margin-bottom: 3.5rem;
  color: var(--highlight-gold); /* Shiny gold title */
`;

const PhilosophyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 2.5rem; /* Increased gap */
`;

const PhilosophyBox = styled.div`
  border: 2px solid;
  border-radius: 15px;
  padding: 2.5rem; /* Larger padding */
  text-align: left;
  background-color: var(--bg-secondary); /* Use lighter navy */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4); /* Subtle shadow */
  transition: transform 0.3s ease, border-color 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  border-color: ${props => props.color === 'yellow' ? 'var(--highlight-gold)' : 'var(--accent-pink)'}; /* Use new vars */
`;

const PhilosophyTitle = styled.h3`
  font-size: 1.8rem; /* Larger title */
  margin-bottom: 0.8rem;
  color: var(--text-primary);
`;

const PhilosophyDescription = styled.p`
  color: var(--text-secondary);
`;

function DevelopmentPhilosophy() {
  return (
    <PhilosophySection>
      <SectionTitle>Development Philosophy</SectionTitle>
      <PhilosophyGrid>
        <PhilosophyBox color="yellow">
          <PhilosophyTitle>Clean Code</PhilosophyTitle>
          <PhilosophyDescription>Writing maintainable, readable code that follows industry best practices and coding standards.</PhilosophyDescription>
        </PhilosophyBox>
        <PhilosophyBox color="pink">
          <PhilosophyTitle>User-Centric Design</PhilosophyTitle>
          <PhilosophyDescription>Prioritizing user experience with intuitive interfaces and seamless functionality.</PhilosophyDescription>
        </PhilosophyBox>
        <PhilosophyBox color="yellow">
          <PhilosophyTitle>Continuous Learning</PhilosophyTitle>
          <PhilosophyDescription>Staying current with emerging technologies and constantly improving my skill set.</PhilosophyDescription>
        </PhilosophyBox>
      </PhilosophyGrid>
    </PhilosophySection>
  );
}

export default DevelopmentPhilosophy;
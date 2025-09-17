import React from 'react';
import styled from 'styled-components';
import { FaReact, FaServer, FaDatabase } from 'react-icons/fa';
import { AiOutlineCloud } from 'react-icons/ai';

const SkillsSection = styled.section`
  width: 100%;
  text-align: center;
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 3rem; /* Larger title */
  margin-bottom: 3.5rem;
  color: var(--highlight-gold); /* Shiny gold title */
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 2.5rem; /* Increased gap */
`;

const SkillBox = styled.div`
  background-color: var(--bg-secondary); /* Use lighter navy */
  padding: 2.5rem; /* Larger padding */
  border-radius: 15px;
  text-align: left;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4); /* Subtle shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.6);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem; /* Larger icons */
  color: var(--highlight-gold); /* Shiny gold icons */
  margin-bottom: 1.2rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.8rem; /* Larger title */
  margin-bottom: 0.8rem;
  color: var(--text-primary);
`;

const SkillList = styled.p`
  color: var(--text-secondary);
`;

function TechnicalSkills() {
  return (
    <SkillsSection id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      <SkillsGrid>
        <SkillBox>
          <SkillIcon><FaReact /></SkillIcon>
          <SkillTitle>Frontend Development</SkillTitle>
          <SkillList>React, JavaScript ES6+, HTML5, CSS3, responsive design, and modern UI frameworks</SkillList>
        </SkillBox>
        <SkillBox>
          <SkillIcon><FaServer /></SkillIcon>
          <SkillTitle>Backend Development</SkillTitle>
          <SkillList>Node.js, Express.js, RESTful APIs, authentication, and server-side architecture</SkillList>
        </SkillBox>
        <SkillBox>
          <SkillIcon><FaDatabase /></SkillIcon>
          <SkillTitle>Database Management</SkillTitle>
          <SkillList>MongoDB, MySQL, database design, optimization, and data modeling</SkillList>
        </SkillBox>
        <SkillBox>
          <SkillIcon><AiOutlineCloud /></SkillIcon>
          <SkillTitle>DevOps & Tools</SkillTitle>
          <SkillList>Git, Docker, AWS, CI/CD pipelines, and DevOps best practices</SkillList>
        </SkillBox>
      </SkillsGrid>
    </SkillsSection>
  );
}

export default TechnicalSkills;
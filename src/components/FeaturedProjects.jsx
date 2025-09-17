import React from 'react';
import styled from 'styled-components';
import project1Image from '../assets/ecommerce.png'; // <-- முதல் படத்தைப் பதிகிறோம்
import project2Image from '../assets/taskapp.png'; // <-- இரண்டாவது படத்தைப் பதிகிறோம்

const ProjectsSection = styled.section`
  width: 100%;
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--highlight-gold);
`;

const SectionSubtitle = styled.p`
  color: var(--text-secondary);
  margin-bottom: 3.5rem;
  font-size: 1.1rem;
`;

const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  background-color: var(--bg-secondary);
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7);
  }
`;

const ProjectImage = styled.img`
  width: 50%;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
`;

const ProjectDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1.2rem;
  color: var(--text-primary);
`;

const Problem = styled.div`
  margin-bottom: 1.2rem;
  & > span {
    color: var(--highlight-gold);
    font-weight: bold;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 0.3rem;
  }
`;

const Solution = styled.div`
  margin-bottom: 1.2rem;
  & > span {
    color: var(--accent-pink);
    font-weight: bold;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 0.3rem;
  }
`;

const TechStack = styled.div`
  font-weight: bold;
  & > span {
    color: var(--text-primary);
  }
`;

function FeaturedProjects() {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
      <SectionSubtitle>Here are some of my recent projects that showcase my full-stack development capabilities:</SectionSubtitle>
      
      <ProjectCard>
        <ProjectImage src={project1Image} alt="E-commerce platform UI" />
        <ProjectDetails>
          <ProjectTitle>E-Commerce Platform</ProjectTitle>
          <Problem>
            <span>Problem</span>
            <p>Small businesses needed an affordable, feature-rich online store with inventory management.</p>
          </Problem>
          <Solution>
            <span>Solution</span>
            <p>Built a complete e-commerce platform with user authentication, payment processing, and an admin dashboard.</p>
          </Solution>
          <TechStack>
            <span>Tech Stack:</span> React, Node.js, MongoDB, Stripe API, JWT authentication
          </TechStack>
        </ProjectDetails>
      </ProjectCard>

      <ProjectCard>
        <ProjectImage src={project2Image} alt="Task Management App UI" />
        <ProjectDetails>
          <ProjectTitle>Task Management App</ProjectTitle>
          <Problem>
            <span>Problem</span>
            <p>Teams struggled with project coordination and deadline tracking across multiple departments.</p>
          </Problem>
          <Solution>
            <span>Solution</span>
            <p>Developed a collaborative task management system with real-time updates, file sharing, and progress tracking.</p>
          </Solution>
          <TechStack>
            <span>Tech Stack:</span> React, Express.js, Socket.io, MySQL, AWS S3
          </TechStack>
        </ProjectDetails>
      </ProjectCard>
    </ProjectsSection>
  );
}

export default FeaturedProjects;
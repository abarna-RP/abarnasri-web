import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import contactImage from '../assets/getin.png'; // <-- படத்தைப் பதிகிறோம்

const ContactSection = styled.section`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  background-color: var(--bg-secondary);
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
`;

const ContactContent = styled.div`
  width: 50%;
  padding: 3rem;
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--highlight-gold);
`;

const ContactDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  font-size: 1.1rem;
  & a {
    color: var(--text-secondary);
    transition: color 0.3s ease;
    &:hover {
      color: var(--highlight-gold);
    }
  }
`;

const LinkIcon = styled.div`
  color: var(--highlight-gold);
  font-size: 1.8rem;
`;

const ContactImage = styled.img`
  width: 50%;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
`;

function GetInTouch() {
  return (
    <ContactSection id="contact">
      <ContactContent>
        <ContactTitle>Get In Touch</ContactTitle>
        <ContactDescription>
          Ready to collaborate?
          I'm always excited to discuss new opportunities and how I can contribute to your team's success. Let's build something amazing together!
        </ContactDescription>
        <ContactLinks>
          <LinkItem>
            <LinkIcon><FaEnvelope /></LinkIcon>
            <a href="mailto:abarnasri@email.com">abarnasri@email.com</a>
          </LinkItem>
          <LinkItem>
            <LinkIcon><FaLinkedin /></LinkIcon>
            <a href="https://linkedin.com/in/abarnasri" target="_blank" rel="noopener noreferrer">linkedin.com/in/abarnasri</a>
          </LinkItem>
          <LinkItem>
            <LinkIcon><FaGithub /></LinkIcon>
            <a href="https://github.com/abarnasri" target="_blank" rel="noopener noreferrer">github.com/abarnasri</a>
          </LinkItem>
        </ContactLinks>
      </ContactContent>
      <ContactImage src={contactImage} alt="People shaking hands" />
    </ContactSection>
  );
}

export default GetInTouch;
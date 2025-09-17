import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const ArrowContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 99;
  cursor: pointer;
  background-color: var(--highlight-gold);
  color: var(--bg-primary);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  opacity: ${props => (props.isVisible ? '1' : '0')};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: var(--button-hover-gold);
  }
`;

function ScrollToTopArrow() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Show arrow after scrolling down 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ArrowContainer onClick={scrollToTop} isVisible={isVisible}>
      <FaArrowUp size={24} />
    </ArrowContainer>
  );
}

export default ScrollToTopArrow;
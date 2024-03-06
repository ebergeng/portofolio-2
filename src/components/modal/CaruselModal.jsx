/* eslint-disable react/prop-types */
// Styled Components for Modal and Carousel
import styled from 'styled-components';
import { useState } from 'react';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  background: white;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #d1d1d1ae;
  width: 50px;
  height: 100%;
  border: none;
  font-size: 34px;
  z-index: 10;
  margin: 0;
  cursor: pointer;

  &:hover {
    color: #333;
    background-color: #ffffff;
  }

  ${props => props.direction === 'prev' && `
    left: 0px;
  `}

  ${props => props.direction === 'next' && `
    right: 0px;
  `}
`;

// React Component for Modal Carousel
const CarouselModal = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <CarouselContainer onClick={e => e.stopPropagation()}>
        <NavigationButton direction="prev" onClick={goToPrevious}>
          &lt;
        </NavigationButton>
        <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <NavigationButton direction="next" onClick={goToNext}>
          &gt;
        </NavigationButton>
      </CarouselContainer>
    </Overlay>
  );
};

export default CarouselModal;
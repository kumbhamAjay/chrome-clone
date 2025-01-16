import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, url: 'image1.jpg', alt: 'Slide 1' },
    { id: 2, url: 'image2.jpg', alt: 'Slide 2' },
    { id: 3, url: 'image3.jpg', alt: 'Slide 3' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  

  return (
    <div style={styles.carouselContainer}>
      <button
        onClick={prevSlide}
        style={{ ...styles.carouselButton, ...styles.leftButton }}
      >
        &#10094;
      </button>
      <div style={styles.carouselSlide}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={
              index === currentIndex
                ? { ...styles.carouselItem, ...styles.activeItem }
                : styles.carouselItem
            }
          >
            <img src={slide.url} alt={slide.alt} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        style={{ ...styles.carouselButton, ...styles.rightButton }}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
const styles = {
    carouselContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: '80%',
      margin: 'auto',
      overflow: 'hidden',
    },
    carouselSlide: {
      display: 'flex',
      transition: 'transform 0.5s ease-in-out',
    },
    carouselItem: {
      minWidth: '100%',
      opacity: 0,
      transition: 'opacity 0.5s ease-in-out',
    },
    activeItem: {
      opacity: 1,
    },
    carouselButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      border: 'none',
      fontSize: '2rem',
      cursor: 'pointer',
      padding: '10px',
    },
    leftButton: {
      left: '10px',
    },
    rightButton: {
      right: '10px',
    },
  };
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: '/sportsday.png', alt: 'Annual Sports Day' },
    { src: '/ScienceExhibition.png', alt: 'Science Exhibition' },
    { src: '/culturalfest.png', alt: 'Cultural Fest' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
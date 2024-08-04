import React, { useState, useRef } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const newSliderPosition = (offsetX / containerRect.width) * 100;
    setSliderPosition(Math.min(Math.max(newSliderPosition, 0), 100));
  };

  const handleTouchMove = (e) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const offsetX = e.touches[0].clientX - containerRect.left;
    const newSliderPosition = (offsetX / containerRect.width) * 100;
    setSliderPosition(Math.min(Math.max(newSliderPosition, 0), 100));
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <img
        src={beforeImage}
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Before"
      />
      <img
        src={afterImage}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        alt="After"
      />
      <div
        className="absolute top-0 left-0 w-1 h-full bg-gray-800"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      />
    </div>
  );
};

export default BeforeAfterSlider;




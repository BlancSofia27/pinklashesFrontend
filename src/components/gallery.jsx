import React from 'react';

import con1 from '../assets/lashes1.jpg';
import con5 from '../assets/lashes2.jpg';
import con3 from '../assets/lashes3.jpg';
import beforeLips from '../assets/antes.jpeg';
import afterLips from '../assets/despues.jpeg';
import relleno from '../assets/lashes7.mp4';
import perfilado from '../assets/lashes8.mp4';
import BeforeAfterSlider from './before';

const Gallery = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id='gallery' className="text-gray-600 body-font bg-header">
      <div className="container px-2 py-12 mx-auto flex flex-col items-center">
      
        <div className="flex flex-wrap md:-m-1 -m-0.5 justify-center">
          <div className="flex flex-wrap w-full lg:w-1/2 justify-center">
            <div className="md:p-1 p-0.5 w-1/2">
              <img alt="gallery" className="w-full h-60 md:h-80 object-cover object-center block" src={con5} />
            </div>
            <div className="md:p-1 p-0.5 w-1/2">
              <video
                className="w-full h-60 md:h-80 object-cover object-center block"
                src={perfilado}
                autoPlay
                loop
                muted
              />
            </div>
            <div className="md:p-1 p-0.5 w-full">
              <div className="relative w-full h-60 md:h-96 lg:h-80 xs:h-[150px] ]">
                <BeforeAfterSlider
                  className="absolute top-0 left-0 w-full h-full"
                  beforeImage={beforeLips}
                  afterImage={afterLips}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full lg:w-1/2 justify-center">
            <div className="md:p-1 p-0.5 w-full">
              <img alt="gallery" className="w-full h-60 md:h-80 object-cover object-center block" src={con3} />
            </div>
            <div className="md:p-1 p-0.5 w-1/2">
              <video
                className="w-full h-60 md:h-80 object-cover"
                src={relleno}
                autoPlay
                loop
                muted
              />
            </div>
            <div className="md:p-1 p-0.5 w-1/2">
              <img alt="gallery" className="w-full h-60 md:h-80 object-cover object-center block" src={con1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Gallery.displayName = 'gallery';
export default Gallery;
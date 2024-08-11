import React from "react";
import logo from '../../public/logoPinkLashes.png';

const HeroB = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="heroB" className="relative w-full h-96 bg-hero-image bg-cover bg-center animate-fadeIn mb-2">
      <div className="relative z-10 flex items-center justify-between h-full bg-black bg-opacity-50 text-white px-5 md:px-10 ">
        <div className="hidden md:flex lg:flex flex-col justify-center items-center h-full font-lashes text-white">
          <h1 className="md:text-7xl lg:text-8xl mx-4">Pink Lashes</h1>
          <p className="my-2 md:text-[28px] lg:text-4xl  mx-4">extensiones de pestañas pelo x pelo</p>
        </div>
        <div className="flex mx-4 justify-end items-center h-full xs:mx-auto">
          <div className="w-40 h-40 md:w-[340px] md:h-[340px] xs:w-80 xs:h-80  rounded-full overflow-hidden  border-white">
            <img
              src={logo}
              alt="Circle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div> 
    </section>
  );
});

HeroB.displayName = "HeroB";
export default HeroB;



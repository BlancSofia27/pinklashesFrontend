import React from "react";
import header from "../../public/heroPinkLashes.jpg";
import logo from '../../public/logoPinkLashes.png';

const HeroB = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="heroB" className="relative w-full h-96 bg-hero-image bg-cover bg-center animate-fadeIn">
      <div className="relative z-10 flex items-center justify-between h-full bg-black bg-opacity-50 text-white px-5 md:px-10">
        <div className="flex flex-col justify-center h-full font-lashes text-white">
          <h1 className="text-4xl md:text-9xl ml-10">Pink Lashes</h1>
          <p className="mt-4 text-xl md:text-5xl ml-14">extensiones de pestañas pelo x pelo</p>
        </div>
        <div className="flex mr-16 justify-end items-center h-full">
          <div className="w-40 h-40 md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-4 border-white">
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



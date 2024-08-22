import React from "react";
import header from "../assets/header.jpeg";
import logo from '../assets/logoPinkLashes.png';

const HeroB = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="heroB" 
    className="relative w-full h-96  bg-cover bg-center animate-fadeIn"
    style={{ backgroundImage: `url(${header})` }}

    >
      <div className="xs:justify-center sm:justify-end relative z-10 flex items-center lg:justify-between xl:justify-between h-full bg-black bg-opacity-50 text-white px-5 md:px-10">
        <div className="xs:justify-center flex flex-col justify-center h-full font-lashes text-white">
          <h1 className="xs:text-[55px] sm:text-7xl md:w-[390px] lg:text-8xl text-4xl md:text-8xl mx-10  text-center">Pink Lashes</h1>
          <p className="sm:text-[40px] text-center lg:text-4xl  text-xl md:text-4xl my-2">extensiones de pestañas pelo x pelo</p>
        </div>
        <div className="xs:m-0 lg:flex xl:flex mx-2 p-4 justify-end items-center h-full sm:hidden xs:hidden">
          <div className="  w-40 h-40 md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-white">
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



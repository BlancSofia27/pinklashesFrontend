import React from "react";

const ServiceCard = ({ title, price, description, image }) => {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4 font-lashes2 ">
    <div className="flex relative group min-h-full">
      <img
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={image}
      />
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-85 transition-opacity duration-500 ease-in-out"></div>
      <div className=" relative z-10 px-8 py-16 w-full border-4 border-header opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <h2 className="tracking-widest text-2xl text-pink1 mb-1">
          {title}
        </h2>
        {/* <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
          {price}
        </h1> */}
        <p className="leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
  


  

  

  );
};

export default ServiceCard;

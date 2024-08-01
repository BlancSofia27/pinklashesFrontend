import React from "react";
import ejemplo from "../../public/extensiones1.jpg"; // Asegúrate de que esta ruta es correcta
import ServiceCard from "./ServiceCard"; // Asegúrate de importar el componente correctamente

const servicesData = [
  {
    title: "Clasicas",
    price: "$8000",
    description: "Realza tu mirada con nuestras extensiones clásicas, diseñadas para un look natural y elegante.",
    image: ejemplo,
  },
  {
    title: "Volumen Suave",
    price: "$25000",
    description: "Añade un toque sutil de volumen a tus pestañas con nuestras extensiones de volumen suave.",
    image: ejemplo,
  },
  {
    title: "Volumen Medio",
    price: "$30000",
    description: "Consigue unas pestañas más densas y voluminosas con nuestras extensiones de volumen medio.",
    image: ejemplo,
  },
  {
    title: "Volumen Ruso",
    price: "$35000",
    description: "Luce unas pestañas dramáticas y llenas de volumen con nuestras extensiones de volumen ruso.",
    image: ejemplo,
  },
  {
    title: "Extensiones Brasileñas",
    price: "$20000",
    description: "Disfruta de unas pestañas largas y con un volumen alto con nuestras extensiones brasileñas.",
    image: ejemplo,
  },
  {
    title: "Extensiones Hibridas",
    price: "$15000",
    description: "Combina lo mejor de ambos mundos con nuestras extensiones híbridas, para un look único y personalizado.",
    image: ejemplo,
  },
];


const Services = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="services" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col font-lashes2 text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900">
            Nuestras Extensiones
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            En Pink Lashes, entendemos que cada mirada es única y merece una atención especial. Por eso, ofrecemos una variedad de extensiones de pestañas para adaptarnos a tus gustos y necesidades. A continuación, te presentamos nuestros tipos de extensiones de pestañas, cada una diseñada para realzar tu belleza natural.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              price={service.price}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";
export default Services;

import React from "react"
import hibridas from "../assets/hibridas.jpeg" // Asegúrate de que esta ruta es correcta
import ServiceCard from "./ServiceCard" // Asegúrate de importar el componente correctamente
import clasicas from "../assets/clasicas.jpeg"
import suave from "../assets/suave.jpeg"
import medio from "../assets/medio.jpeg"
import ruso from "../assets/ruso.jpeg"
import brasilenas from "../assets/brasilenas.jpeg"
const servicesData = [
  {
    title: "Clasicas",
    price: "$8000",
    description:
      "Realza tu mirada con nuestras extensiones clásicas, diseñadas para un look natural y elegante.",
    image: clasicas,
  },
  {
    title: "Volumen Suave",
    price: "$25000",
    description:
      "Añade un toque sutil de volumen a tus pestañas con nuestras extensiones de volumen suave.",
    image: suave,
  },
  {
    title: "Extensiones Hibridas",
    price: "$15000",
    description:
      "Combina lo mejor de ambos mundos con nuestras extensiones híbridas, para un look único y personalizado.",
    image: hibridas,
  },

  {
    title: "Volumen Ruso",
    price: "$35000",
    description:
      "Luce unas pestañas dramáticas y llenas de volumen con nuestras extensiones de volumen ruso.",
    image: ruso,
  },
  {
    title: "Extensiones Brasileñas",
    price: "$20000",
    description:
      "Disfruta de unas pestañas largas y con un volumen alto con nuestras extensiones brasileñas.",
    image: brasilenas,
  },

  {
    title: "Volumen Medio",
    price: "$30000",
    description:
      "Consigue unas pestañas más densas y voluminosas con nuestras extensiones de volumen medio.",
    image: medio,
  },
]

const Services = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="services" className="text-gray-600 body-font">
      <div className="xs:w-[500px]container px-5 pb-14 pt-3 mx-auto ">
        <div className="md:flex lg:hidden xl:hidden sm:flex justify-center py-6">
          {/*button whatsapp*/}
          <a
            type="button"
            href="https://wa.me/+5493435443861?text=Hola%20me%20gustaría%20agendar%20una%20cita"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="justify-center my-2 flex items-center mx-2 w-1/10  rounded bg-[#128c7e] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white focus:outline-none transition duration-1000 ease-in-out transform hover: hover:bg-white hover:text-[#128c7e]"
          >
            <svg
              className="h-4 w-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <span className="py-2 px-4">whatsapp</span>
          </a>
          {/*button instagram */}
          <a
            href="https://www.instagram.com/pinklashesbl"
            target="_blank"
            rel="noopener noreferrer"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="justify-center my-2 flex items-center mx-2 w-1/10  rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal bg-pink1 text-white focus:outline-none transition duration-1000 ease-in-out transform hover:text-pink2 hover:bg-white "
          >
            <svg
              className="h-4 w-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
            <span className="py-2 px-4">Instagram</span>
          </a>
        </div>
        <div className="flex flex-col font-lashes2 text-center w-full xs:py-3 md:py-7 xl:py-10 lg:py-10 sm:py-6">
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-white bg-opacity-25 bg-gradient-to-b from-pink-500 via-pink2 to-white">
            Nuestras Extensiones
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
            En Pink Lashes, entendemos que cada mirada es única y merece una
            atención especial. Por eso, ofrecemos una variedad de extensiones de
            pestañas para adaptarnos a tus gustos y necesidades. A continuación,
            te presentamos nuestros tipos de extensiones de pestañas, cada una
            diseñada para realzar tu belleza natural.
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
  )
})

Services.displayName = "Services"
export default Services

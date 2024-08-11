import logo from "../../public/logoPinkLashes.png"
import { useRef } from "react"
import Services from "../components/Services.jsx"
import HeroB from "../components/heroB.jsx"
import Gallery from "../components/gallery.jsx";
import FooterLashes from "../components/footerLashes.jsx";
import ButtonsContacts from "../components/buttonsContacts.jsx";


const PinkLashes = () => {
  const servicesRef = useRef(null)
  const galleryRef = useRef(null)
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const whatsappNumber = '+543442461631'; 
  const whatsappMessage = 'Hola%20me%20gustaría%20agendar%20una%20cita%20con%20Belen'; // Mensaje para WhatsApp
  const instagramHandle = 'pinklashesbl';



  return (
    <section>
    <div className="">
      <header className="">
        <div className="hidden md:flex lg:flex xl:flex  bg-gradient-to-r from-pink1 to-header mx-0 flex-wrap p-5 flex-col md:flex-row items-center text-white">
          <a className="flex title-font  items-center text-gray-900 mb-4 md:mb-0">
            <div className=" w-16 rounded-full overflow-hidden bg-black">
              <img
                className="w-full h-full object-cover"
                src={logo}
                alt="logo del barberShop"
              />
            </div>
            
          </a>
          <nav className="flex md:mr-auto md:ml-4 md:py-1  md:border-l md:border-pink1 flex-wrap items-center text-base justify-center">
            <a
              onClick={scrollToServices}
              className="font-lashes text-2xl px-2 mx-2 hover:text-pink1 cursor-pointer"
            >
              Extensiones
            </a>
            <a
              onClick={scrollToGallery}
              className="font-lashes text-2xl px-2 mx-2 hover:text-pink1 cursor-pointer"
            >
              Mis Trabajos
            </a>
            <a
              
              className="font-lashes text-2xl px-2 mx-2 hover:text-pink1 cursor-pointer"
            >
              Agenda tu cita
            </a>
             
          </nav>
          <display className='hidden xl:flex lg:flex' >
      <ButtonsContacts
                number={whatsappNumber}
                msj={whatsappMessage}
                instagram={instagramHandle}
                
            />
            </display>
        </div>
      </header>
      <HeroB />
      <Services ref={servicesRef} id="services" />
      <Gallery ref={galleryRef} id="gallery"/>
      <FooterLashes/>
    </div>
    </section>
  );

};

export default PinkLashes;
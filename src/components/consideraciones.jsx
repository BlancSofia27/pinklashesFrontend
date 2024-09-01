import React from "react";
import svg1 from "../assets/15min.svg";
import sena from "../assets/sena.svg";
import cash from "../assets/cash.svg";
import prohibido from "../assets/prohibido.svg";
import makeup from "../assets/makeup.svg";
import esperaHoras from "../assets/24h.svg";
import compromiso from "../assets/compromiso.svg";
import Button1 from "./buttonAgendar";

const Consideraciones = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="Consideraciones" className="text-gray-600 body-font">
      <div className="container px-2 py-12 mx-auto">
        <div className="text-center mb-7">
          <h1 className="bg-opacity-25 bg-gradient-to-b from-pink-500 via-purple-500 to-white p-6 rounded-sm xs:text-xl sm:text-4xl text-2xl font-lashes text-center title-font text-white mb-4">
            Consideraciones a tener en cuenta antes de asistir
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-5 h-full items-center">
              <img
                className="w-12 mr-3"
                src={sena}
                alt="Seña"
              />
              <span className="title-font font-medium xs:text-sm">
                Los turnos son reservados una vez abonada la seña; la seña no es
                reembolsable.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-5 h-full items-center">
              <img
                className="w-[58px] mr-2"
                src={svg1}
                alt="15 Minutos"
              />
              <span className="title-font font-medium xs:text-sm">
                El tiempo de espera es de 15 minutos; pasados los mismos el
                turno queda cancelado.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-5 h-full items-center">
              <img
                className="w-12 mr-3"
                src={esperaHoras}
                alt="24 Horas"
              />
              <span className="title-font font-medium xs:text-sm">
                En caso de no asistir al turno, avisar con 24h de anticipación
                para no perder la seña.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-5 h-full items-center">
              <img
                className="w-12 mr-3"
                src={cash}
                alt="Cash"
              />
              <span className="title-font font-medium xs:text-sm">
                Si el turno es cancelado dentro de las 24h, deberá ser
                abonado en su totalidad.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-5 h-full items-center">
              <img
                className="w-12 mr-3"
                src={compromiso}
                alt="Compromiso"
              />
              <span className="title-font font-medium xs:text-sm">
                Pido compromiso y responsabilidad a la hora de solicitar un
                turno.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-5 h-full items-center relative">
              <div className="mr-4 relative">
                <img
                  className="xs:w-[130px] md:w-[90px] lg:w-[65px] z-10 relative"
                  src={makeup}
                  alt="Maquillaje"
                />
                <img
                  className="xs:w-[130px] md:w-[90px] lg:w-[65px] absolute top-0 left-0"
                  src={prohibido}
                  alt="Prohibido"
                />
              </div>
              <span className="title-font font-medium xs:text-sm">
                Es obligatorio asistir al turno sin lentes de contacto y sin ningún tipo de maquillaje.
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button1 />
        </div>
      </div>
    </section>
  );
});

Consideraciones.displayName = "Consideraciones";
export default Consideraciones;

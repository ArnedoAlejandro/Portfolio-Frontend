"useClient";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import fondo from "../public/fondo.png";
import descargasWhite from "../public/descargasWhite.png";
import Link from "next/link";
import social from "../public/social.png";
import gitWhite from "../public/gitWhite.png";
import insta from "../public/insta.png";
import instagram from "../public/instagram.png";
import gitBlack from "../public/gitBlack.png";
import linkedin from "../public/linkedin.png";
// import docu from "../download/curriculum.pdf";

const Presentacion = ({ obscure }) => {
  const [text, setText] = useState("");
  const originalText = "Desarrollador Frontend";
  let index = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(originalText.substring(0, index));
      index++;

      if (index > originalText.length) {
        setTimeout(() => {
          index = 0;
        }, 1500);
      }
    }, 200); // Ajusta la velocidad de escritura aquí (en milisegundos)
    return () => clearInterval(intervalId);
  }, []);

  const handleDescarga = () => {
    // Ruta relativa al archivo PDF en la carpeta pública
    const pdfPath = "../public/curriculum.pdf";

    // Crea un enlace temporal y simula un clic para iniciar la descarga
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "nombre-del-archivo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="presentacion"
      className="h-auto  flex  max-md:flex-col-reverse   max-md:h-auto"
    >
      <div
        id="presentacion"
        className=" m-auto h-auto w-1/2  flex flex-col justify-center items-center max-md:w-full  max-md:text-center max-md:h-auto max-md:my-5"
      >
        <span className="h-auto w-auto ">
          <h1
            className={`sombreadoText text-6xl font-bold max-lg:text-4xl ${
              !obscure ? "text-white" : "text-black/80"
            }`}
          >
            Arnedo Alejandro
          </h1>
          <h2
            className={`h-10 sombreadoText mt-10 text-4xl font-bold max-lg:text-2xl ${
              !obscure ? "text-white" : "text-black/70"
            }`}
          >
            {text}
          </h2>

          <div className="mt-9 flex gap-9">
            {" "}
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/alejandro-augusto-arnedo-27a189240/"
              }
            >
              <Image
                src={obscure ? linkedin : social}
                alt="linkedin"
                className="w-11 h-auto "
              />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/alejandro-augusto-arnedo-27a189240/"
              }
            >
              <Image
                src={obscure ? gitBlack : gitWhite}
                alt="linkedin"
                className="w-11 h-auto"
              />
            </Link>
            <span className="h-auto w-auto  ">
              <Link
                target="_blank"
                href={"https://www.instagram.com/arnedoalejandro/"}
                className="hover:shadow-xl shadow-white"
              >
                <Image
                  src={obscure ? instagram : insta}
                  alt="linkedin"
                  className="w-11 h-auto "
                />
              </Link>
            </span>
          </div>
        </span>
      </div>
      <div className="w-1/2  max-lg:w-11/12 m-auto  ">
        <Image
          src={fondo}
          alt="Imagen presentacion"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Presentacion;

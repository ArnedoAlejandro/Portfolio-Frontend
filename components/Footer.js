import Image from "next/image";
import Link from "next/link";
import React from "react";
import gitWhite from "../public/gitWhite.png";
import gmail from "../public/gmail.png";
import lin from "../public/lin.png";
import insta from "../public/insta.png";
import what from "../public/what.png";

const Footer = ({ obscure }) => {
  return (
    <>
      {" "}
      <div id="contact" className="footer mt-40  py-4 flex ">
        <div className="w-full flex justify-evenly items-start max-lg:px-8 max-md:grid  max-md:px-1">
          <div className=" w-1/4  max-lg:w-full grid gap-9 py-7 text-white ">
            <p className="text-xl text-white font-semibold underline underline-offset-8">
              Nav
            </p>

            <a
              href="#presentacion"
              className="text-lg transition all duration-300 hover:text-gray-300 max-md:text-md"
            >
              Presentation
            </a>
            <a
              href="#proyect"
              className="text-lg transition all duration-300 hover:text-gray-300 max-md:text-md"
            >
              Proyects
            </a>

            <a
              href="#education"
              className="text-lg transition all duration-300 hover:text-gray-300 max-md:text-md"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-lg transition all duration-300 hover:text-gray-300 max-md:text-md"
            >
              Contact
            </a>
          </div>
          <div className=" w-1/4 max-lg:w-full grid gap-4  py-7">
            <p className="text-xl text-white font-semibold underline underline-offset-8">
              Contact
            </p>

            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/alejandro-augusto-arnedo-27a189240/"
              }
              className={`py-2 flex items-center text-white gap-4 text-lg`}
            >
              <Image src={lin} alt="linkedin" className="w-6 h-auto" />
              Linkedin
            </Link>

            <Link
              target="_blank"
              href={"https://github.com/ArnedoAlejandro"}
              className={`py-2 flex items-center text-white gap-4 text-lg`}
            >
              <Image src={gitWhite} alt="linkedin" className="w-7 h-auto" />
              Git hub
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/arnedoalejandro/"}
              className={`py-2 flex items-center text-white gap-4 text-lg`}
            >
              <Image src={insta} alt="linkedin" />
              Instagram
            </Link>

            <span
              target="_blank"
              href={""}
              className={`py-2 flex items-center text-white gap-4 text-lg`}
            >
              <Image src={what} alt="linkedin" className="w-7 h-auto" />
              054 3548-15569580
            </span>
            <span
              target="_blank"
              href={""}
              className={`py-2 flex items-center text-white gap-4 text-lg`}
            >
              <Image src={gmail} alt="linkedin" />
              arnedoaalejandro@gmail.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

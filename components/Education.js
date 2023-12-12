import Image from "next/image";
import React from "react";
import almacen from "../public/almacen.png";
import uncnuevo from "../public/uncnuevo.png";
import udemy from "../public/udemy.png";
import colegio from "../public/colegio.png";
import utn from "../public/utn.png";
import tailwind from "../public/tailwind.png";
import css from "../public/css.png";
import html from "../public/html.png";
import js from "../public/js.png";
import git from "../public/git.png";
import mysql from "../public/mysql.png";
import mongo from "../public/mongo.png";
import reactBlanc from "../public/reactBlanc.png";
import nexttt from "../public/nexttt.png";
import zustandd from "../public/zustandd.png";
import redux from "../public/redux.png";
import figma from "../public/figma.png";
import boostrarp from "../public/bootstrap.png";

const Education = ({ obscure }) => {
  return (
    <div
      id="education"
      className="fondoAnimado h-auto mt-32 py-28 max-md:mt-16 "
    >
      {" "}
      <h3 className="text-center ">Academic and skill institutions</h3>
      <div className="w-10/12 m-auto  max-md:px-4 max-lg:w-full ">
        <span className="w-full mt-24 m-auto flex  items-center  max-lg:gap-10 h-auto max-lg:grid max-lg:place-content-center max-md:gap-9">
          <div className="m-auto w-6/12    flex flex-col justify-center items-center   max-lg:w-full   max-md:justify-center">
            <div className="w-10/12 h-[500px]  flex flex-col  gap-14 shadow-md shadow-black/70 bg-black/50  px-9 py-4 rounded-lg  text-white max-md:h-auto max-md:w-full max-md:gap-9 max-md:px-5">
              <p className="  text-center text-xl font-semibold ">Education</p>
              <span className="flex gap-5 items-center ">
                <span className="w-14 h-auto max-md:w-12">
                  <Image alt="" src={colegio} />
                </span>
                <p className="text-lg font-normal max-md:text-base">
                  Private Technical Institute
                </p>
              </span>
              <span className="flex gap-5 items-center ">
                <span className="w-14 h-auto">
                  <Image alt="" src={uncnuevo} />
                </span>
                <p className="text-lg font-normal max-md:text-base">
                  National University of Córdoba
                </p>
              </span>
              <span className="flex gap-5 items-center">
                <span className="w-14 h-auto max-md:w-12">
                  <Image
                    alt=""
                    src={utn}
                    className={`flex gap-5 items-center bg-none ${
                      !obscure && "bg-white rounded-lg "
                    }`}
                  />
                </span>
                <p className="text-lg font-normal max-md:text-base ">
                  National Technological University
                </p>
              </span>
              <span className="flex gap-5 items-center">
                <span className="w-12 h-auto max-md:w-12">
                  <Image alt="" src={udemy} className="bg-white rounded-xl" />
                </span>
                <p className="text-lg font-normal max-md:text-base">Udemy</p>
              </span>
            </div>
          </div>
          <div className=" w-6/12   flex flex-col   gap-12 max-lg:w-full    max-md:m-auto">
            {/*  */}
            <div className="w-10/12 h-[500px] flex flex-col    gap-10 shadow-lg shadow-black/70 bg-black/60 px-9 py-4 rounded-lg  text-white m-auto max-md:h-auto max-md:w-full">
              <p className=" text-center text-xl font-semibold ">
                Technical skills
              </p>
              <div className="grid grid-cols-3  place-items-center gap-8">
                <Image src={html} alt="" className="w-14 h-auto max-md:w-11" />
                <Image
                  src={nexttt}
                  alt=""
                  className="w-14 h-auto max-md:w-11"
                />
                <Image
                  src={tailwind}
                  alt=""
                  className="w-14 h-auto max-md:w-11"
                />
                <Image src={css} alt="" className="w-14 h-auto max-md:w-11" />
                <Image
                  src={zustandd}
                  alt=""
                  className="w-18 h-auto max-md:w-20"
                />
                <Image
                  src={boostrarp}
                  alt=""
                  className="w-14 h-auto bg-white rounded-xl max-md:w-11"
                />
                <Image src={js} alt="" className="w-14 h-auto max-md:w-11" />
                <Image src={mongo} alt="" className="w-14 h-auto max-md:w-11" />
                <Image src={figma} alt="" className="w-16 h-auto max-md:w-12" />
                <Image
                  src={reactBlanc}
                  alt=""
                  className="w-14 h-auto max-md:w-11"
                />
                <Image src={mysql} alt="" className="w-14 h-auto max-md:w-11" />
                <Image src={git} alt="" className="w-14 h-auto max-md:w-11" />
              </div>
            </div>
          </div>
        </span>
      </div>
      <div className="mt-32"></div>
    </div>
  );
};

export default Education;

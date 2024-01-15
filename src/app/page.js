"use client";
import { useState } from "react";
import Presentacion from "../../components/Presentacion";
import Layout from "../../components/Layout";
import Skill from "../../components/Skill";
import Education from "../../components/Education";
import Footer from "../../components/Footer";
import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";

export default function Home() {
  const [obscureMode, setObscureMode] = useState(true);

  const changeMode = () => {
    setObscureMode(!obscureMode);
  };

  return (
    <>
      {" "}
      <Layout changeMode={changeMode} obscure={obscureMode} />
      <div className="h-[4rem] "></div>
      <main
        className={` w-full  h-auto ${
          obscureMode ? "fondoClaro" : "fondoOscuro text-white/90"
        }`}
      >
        <div className="w-full m-auto  max-lg:w-full max-md:w-full">
          <div className=" w-full px-11 m-auto max-md:w-full max-md:px-3 ">
            <Presentacion obscure={obscureMode} />
          </div>
          <div className="">
            <AboutMe obscure={obscureMode} />
          </div>
          <div className="px-14 max-lg:px-4 max-lg:w-10/12 m-auto max-md:w-full">
            <Skill obscure={obscureMode} />
          </div>
          <div
            className={`mt-32 h-auto ${
              obscureMode ? "fondo-educacion border " : " "
            } `}
          >
            <Education obscure={obscureMode} />

            <Contact />

            <Footer obscure={obscureMode} />
          </div>
        </div>
      </main>
    </>
  );
}

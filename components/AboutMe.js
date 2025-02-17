import Image from "next/image";
import { useEffect, useState } from "react";

import frameNew from "../public/frameNew.png";
import frameW from "../public/frameW.png";
import descargasWhite from "../public/descargasWhite.png";
import curriculum from "../download/curriculum.pdf";

const AboutMe = ({ obscure }) => {
  const [text, setText] = useState("");
  const originalText = "Desarrollador Web";
  let index = 0;

  return (
    <div
      className={`w-11/12  m-auto h-auto mt-10 border-2 rounded-lg  max-lg:mt-28  max-md:mt-36${
        obscure
          ? " shadow-lg bg-white/60"
          : " shadow-lg border-none bg-slate-800  "
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        fill="#12FF32"
      >
        <path
          d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z"
          opacity=".4"
        ></path>
        <path
          d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z"
          opacity=".5"
        ></path>
        <path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"></path>
      </svg>

      <div className="p-2   w-full flex items-start h-auto max-lg:grid">
        <div className=" w-5/12 h-auto flex  justify-center max-lg:w-5/12 m-auto max-md:w-8/12">
          {obscure ? (
            <Image
              src={frameNew}
              alt="img splash"
              className="w-auto h-auto mt-[-50px]"
            />
          ) : (
            <Image
              src={frameW}
              alt="img splash"
              className="w-1/2 h-auto   mt-[-50px]"
            />
          )}
        </div>
        <div className="w-7/12  flex pb-7 flex-col justify-center gap-3  max-lg:w-fullmax-md:gap-9">
          <h3 className="text-start max-md:text-2xl">About Me</h3>
          <p className="  rounded-lg opacity-70">
            I started doing a diploma in web development Full stack at the
            National Technological University acquiring knowledge in the
            languages of HTML, CSS, PHP and MYSQL, then I continued specializing
            in the frontend area taking courses to internalize new knowledge in
            the language of JAVASCRIPT knowing the essential bases for multiple
            projects, then I continued my learning stage acquiring new knowledge
            with the React.Js library where I have explored various technologies
            in both the frontend and backend. My project experience includes the
            advanced use of tools such as Next.js to optimize the construction
            of web applications, MongoDB for efficient management of
            unstructured data, and Express as a robust application framework. In
            my experience I have used real-time technologies such as Socket.io,
            and I have also expanded my skills with graphic design tools such as
            Figma, allowing me to offer comprehensive and versatile solutions in
            the field of technology.
          </p>

          <a href={curriculum} download>
            <button className="mt-4 w-full flex justify-center items-start ">
              <span
                className={`h-10 w-auto flex gap-2 justify-center items-center  text-black font-semibold px-4 py-6  ${
                  !obscure
                    ? "bg-emerald-400  rounded-lg shadow-md shadow-white text-white transition-all ease-linear duration-200 hover:bg-emerald-500 hover:shadow-none hover:text-gray-100 "
                    : "bg-emerald-400  rounded-lg shadow-lg  shadow-black/30 text-white transition-all ease-linear duration-200 hover:bg-emerald-500 hover:shadow-none hover:text-gray-100"
                }`}
              >
                Dowload Cv
                <Image
                  src={descargasWhite}
                  alt="logo github"
                  className="w-6  h-auto"
                />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

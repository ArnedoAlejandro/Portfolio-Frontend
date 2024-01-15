import Image from "next/image";
import Link from "next/link";
import almacen from "../public/almacen.png";
import react from "../public/reactBlanc.png";
import css from "/public/css.png";
import java from "/public/js.png";
import tailwind from "/public/tailwind.png";
import html from "public/html.png";
import prismaWhite from "/public/prismaWhite.png";
import github from "/public/github.png";
import mongo from "/public/mongo.png";
import redux from "/public/redux.png";
import estilo from "/public/estilo.png";
import gestion from "/public/gestion.png";
import reduxNuevo from "/public/reduxNuevo.png";
import criptomonedas from "/public/criptomonedas.png";
import javascript from "/public/proyecto.png";
import gastos from "/public/gastos.png";

const Skill = ({ obscure }) => {
  return (
    <section id="proyect" className="w-full h-auto m-auto mt-24 max-md:w-full">
      <div className=" text-center flex flex-col justify-center   ">
        <h3 fade-up className="max-md:text-2xl">
          Personal Projects
        </h3>

        <div className="mt-24 grid grid-cols-3  gap-9  max-lg:grid-cols-1">
          <div
            className={` contenedor shadow-md shadow-gray-400 rounded-md ${
              obscure
                ? "bg-slate-50"
                : "bg-black/40  shadow-black/20 shadow-lg "
            }   `}
          >
            <div className="elemento-visible">
              <figure className="w-full shadow-md rounded-t-lg h-[250px] max-md:h-[170px]">
                <Image
                  src={almacen}
                  alt="card image"
                  className="w-full h-full object-fill "
                />
              </figure>
              <div className="p-6 max-md:p-3 max-md:mt-4  opacity-80">
                <header className="mb-4">
                  <h3 className="text-xl font-medium ">Food App</h3>
                </header>

                <p className="max-md:text-start">
                  This app places an emphasis on Prisma for advanced and
                  efficient database interactions. Axios optimises API calls for
                  better data retrieval and manipulation. Tailwind CSS is
                  integrated for a robust and responsive user interface, Next.js
                  provides optimised and high-performance development.
                </p>

                <p className="invisible mt-6 font-bold underline decoration-2 max-lg:visible">
                  Click for more information
                </p>
              </div>
            </div>
            <div class="rounded-lg  elemento-no-visible grid max-md:p-3 ">
              <p className="w-auto h-16   text-xl font-semibold flex items-end justify-center">
                Implemented technologies
              </p>
              <div className="m-auto w-11/12  h-auto p-4  mt-0 grid grid-cols-3 gap-4 place-items-center max-md:grid-cols-3">
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={html} alt="" className="w-auto h-10" />
                  <p>HTML</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={css} alt="" className="w-auto h-10" />
                  <p>CSS</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={java} alt="" className="w-auto h-10" />
                  <p>JavaScript</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={react} alt="" className="w-auto h-10" />
                  <p>ReactJs</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={prismaWhite} alt="" className="w-auto h-12" />
                  <p>Prisma</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={tailwind} alt="" className="w-auto h-10" />
                  <p>TailwinCSS</p>
                </span>
              </div>
              <span className="flex  justify-evenly max-md:gap-5">
                <Link
                  href="https://github.com/ArnedoAlejandro/kioscoApp"
                  target="_blank"
                  className=" "
                >
                  <button className="h-10 flex gap-3 justify-center items-center text-black font-semibold px-4 py-6 bg-white border-2 border-black rounded-lg shadow-md  shadow-white transition-all ease-linear duration-200 hover:shadow-none hover:text-gray-600">
                    <p>Ghit hub</p>
                    <Image
                      src={github}
                      alt="logo github"
                      className="w-8 h-auto"
                    />
                  </button>
                </Link>
                <Link
                  href="https://appcomida-production.up.railway.app/"
                  target="_blank"
                  className=" "
                >
                  <span className="h-10 flex gap-1 justify-center items-center text-black font-semibold px-4 py-6 bg-white border-2 border-black rounded-lg shadow-md  shadow-white transition-all ease-linear duration-200 hover:shadow-none hover:text-gray-600">
                    <p>See Proyect</p>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </Link>
              </span>
            </div>
          </div>
          <div
            className={` contenedor shadow-md shadow-gray-400 rounded-md ${
              obscure
                ? "bg-slate-50"
                : "bg-black/40  shadow-black/20 shadow-lg "
            }   `}
          >
            <div className="elemento-visible ">
              <figure className="w-full shadow-md rounded-t-lg  h-[250px] max-md:h-[170px]">
                <Image
                  src={gastos}
                  alt="card image"
                  className="w-full h-full object-fill "
                />
              </figure>
              <div className="p-6 max-md:p-3 max-md:mt-4 opacity-80">
                <header className="mb-4">
                  <h3 className="text-xl font-medium ">Budget management</h3>
                </header>

                <p className="max-md:text-start">
                  Budget management project with React and Vite. Uses
                  react-circular-progressbar to graphically represent spend
                  analysis. Integrated with react-swipeable-list to allow
                  intuitive editing and deleting of expenses. Prop-Types ensures
                  data integrity.
                </p>

                <p className="invisible mt-6 font-bold underline decoration-2 max-lg:visible">
                  Click for more information
                </p>
              </div>
            </div>
            <div class="rounded-lg  elemento-no-visible grid  max-md:px-3">
              <p className="w-auto h-16   text-xl font-semibold flex items-end justify-center">
                Implemented technologies
              </p>
              <div className="m-auto w-11/12  h-auto p-4  mt-0 grid grid-cols-3 gap-4 place-items-center max-md:grid-cols-3">
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={html} alt="" className="w-auto h-10" />
                  <p>HTML</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={css} alt="" className="w-auto h-10" />
                  <p>CSS</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={java} alt="" className="w-auto h-10" />
                  <p>JavaScript</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={react} alt="" className="w-auto h-10" />
                  <p>ReactJs</p>
                </span>
              </div>
              <span className="flex  justify-evenly max-md:gap-5">
                <Link
                  href="https://github.com/ArnedoAlejandro/budget-management.git"
                  target="_blank"
                  className=" "
                >
                  <button className="h-10 flex gap-3 justify-center items-center text-black font-semibold px-4 py-6 bg-white border-2 border-black rounded-lg shadow-md  shadow-white transition-all ease-linear duration-200 hover:shadow-none hover:text-gray-600 ">
                    <p className="max-md:text-sm">Ghit hub</p>
                    <Image
                      src={github}
                      alt="logo github"
                      className="w-8 h-auto"
                    />
                  </button>
                </Link>
                <Link
                  href="https://expense-planner-eight.vercel.app/"
                  target="_blank"
                  className=" "
                >
                  <span className="h-10 flex gap-1 justify-center items-center text-black font-semibold px-4 py-6 bg-white border-2 border-black rounded-lg shadow-md  shadow-white transition-all ease-linear duration-200 hover:shadow-none hover:text-gray-600">
                    <p className="max-md:text-sm">See Proyect</p>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </Link>
              </span>
            </div>
          </div>
          <div
            className={` contenedor shadow-md shadow-gray-400 rounded-md ${
              obscure
                ? "bg-slate-50"
                : "bg-black/40  shadow-black/20 shadow-lg "
            }   `}
          >
            <div className="elemento-visible ">
              <figure className="w-full shadow-md rounded-t-lg  h-[250px] max-md:h-[170px]">
                <Image
                  src={javascript}
                  alt="card image"
                  className="w-full h-full object-fill "
                />
              </figure>
              <div className="p-6 max-md:p-3 max-md:mt-4  opacity-80">
                <header className="mb-4">
                  <h3 className="text-xl font-medium ">Expense manager</h3>
                </header>

                <p className="max-md:text-start">
                  Built exclusively in JavaScript, this system dynamically
                  manages users finances. It supports real-time data entry for
                  both expenses and income, expenses are added with different
                  categories and evaluations are performed for optimal budget
                  control.
                </p>

                <p className="invisible mt-6 font-bold underline decoration-2 max-lg:visible">
                  Click for more information
                </p>
              </div>
            </div>
            <div class="rounded-lg  elemento-no-visible grid max-md:p-3 ">
              <p className="w-auto h-16   text-xl font-semibold flex items-end justify-center">
                Implemented technologies
              </p>
              <div className="m-auto w-11/12  h-auto p-4  mt-0 grid grid-cols-3 gap-4 place-items-center max-md:grid-cols-3">
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={html} alt="" className="w-auto h-10" />
                  <p>HTML</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={css} alt="" className="w-auto h-10" />
                  <p>CSS</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={java} alt="" className="w-auto h-10" />
                  <p>JavaScript</p>
                </span>
              </div>
              <span className="flex  justify-evenly max-md:gap-5">
                <Link
                  href="https://github.com/ArnedoAlejandro/Presupuesto"
                  target="_blank"
                  className=" "
                >
                  <button className="h-10 flex gap-3 justify-center items-center text-black font-semibold px-4 py-6 bg-white border-2 border-black rounded-lg shadow-md  shadow-white transition-all ease-linear duration-200 hover:shadow-none hover:text-gray-600">
                    <p>Ghit hub</p>
                    <Image
                      src={github}
                      alt="logo github"
                      className="w-8 h-auto"
                    />
                  </button>
                </Link>
                <Link
                  href="https://presupuesto-sandy.vercel.app/"
                  target="_blank"
                  className=" "
                >
                  <span className="h-10 flex gap-1 justify-center items-center text-black font-semibold px-4 py-6 bg-white border-2 border-black rounded-lg shadow-md  shadow-white transition-all ease-linear duration-200 hover:shadow-none hover:text-gray-600">
                    <p>See Proyect</p>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </Link>
              </span>
            </div>
          </div>
          <div
            className={` contenedor shadow-md shadow-gray-400 rounded-md ${
              obscure
                ? "bg-slate-50"
                : "bg-black/40  shadow-black/20 shadow-lg "
            }   `}
          >
            <div className="elemento-visible ">
              <figure className="w-full shadow-md rounded-t-lg  h-[250px] max-md:h-[170px]">
                <Image
                  src={gestion}
                  alt="card image"
                  className="w-full h-full object-fill "
                />
              </figure>
              <div className="p-6 max-md:p-3 max-md:mt-4  opacity-80">
                <header className="mb-4">
                  <h3 className="text-xl font-medium ">Proyect MERN Stack</h3>
                </header>

                <p className="max-md:text-start">
                  Backend development used MongoDB for data storage, Express for
                  server-side functionality, Mongoose for seamless interactions
                  with MongoDB and Nodemailer for email capabilities. The
                  frontend used Tailwind CSS for a streamlined styling process,
                  React Router for efficient navigation and Axios for optimised
                  API communication.
                </p>

                <p className="invisible mt-6 font-bold underline decoration-2 max-lg:visible">
                  Click for more information
                </p>
              </div>
            </div>
            <div class="rounded-lg  elemento-no-visible grid max-md:p-3 ">
              <p className="w-auto h-16   text-xl font-semibold flex items-end justify-center">
                Implemented technologies
              </p>
              <div className="m-auto w-11/12  h-auto p-4  mt-0 grid grid-cols-3 gap-4 place-items-center max-md:grid-cols-3">
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={html} alt="" className="w-auto h-10" />
                  <p>HTML</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={css} alt="" className="w-auto h-10" />
                  <p>CSS</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={java} alt="" className="w-auto h-10" />
                  <p>JavaScript</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={react} alt="" className="w-auto h-10" />
                  <p>ReactJs</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={mongo} alt="" className="w-auto h-12" />
                  <p>MongoDB</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={tailwind} alt="" className="w-auto h-10" />
                  <p>TailwinCSS</p>
                </span>
              </div>
              <span className="flex  justify-evenly max-md:gap-5">
                <Link
                  href="https://github.com/ArnedoAlejandro/upTasck_mern"
                  target="_blank"
                  className=" "
                >
                  <button className="h-10 flex gap-3 justify-center items-center text-black font-semibold px-4 py-6 bg-white border-2 border-black rounded-lg shadow-md  shadow-white transition-all ease-linear duration-200 hover:shadow-none hover:text-gray-600">
                    <p>Ghit hub</p>
                    <Image
                      src={github}
                      alt="logo github"
                      className="w-8 h-auto"
                    />
                  </button>
                </Link>
                <Link
                  href="https://github.com/ArnedoAlejandro/upTasck_mern"
                  target="_blank"
                  className=" "
                >
                  <span className="h-10 flex gap-1 justify-center items-center text-black font-semibold px-4 py-6 bg-white border-2 border-black rounded-lg shadow-md  shadow-white transition-all ease-linear duration-200 hover:shadow-none hover:text-gray-600">
                    <p>See Proyect</p>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </Link>
              </span>
            </div>
          </div>

          <div
            className={` contenedor shadow-md shadow-gray-400 rounded-md ${
              obscure
                ? "bg-slate-50"
                : "bg-black/40  shadow-black/20 shadow-lg "
            }   `}
          >
            <div className="elemento-visible ">
              <figure className="w-full shadow-md rounded-t-lg h-[250px] max-md:h-[170px]">
                <Image
                  src={reduxNuevo}
                  alt="card image"
                  className="w-full h-full object-fill "
                />
              </figure>
              <div className="p-6 max-md:p-3 max-md:mt-4  opacity-80">
                <header className="mb-4">
                  <h3 className="text-xl font-medium ">Proyect CRUD</h3>
                </header>

                <p className="max-md:text-start">
                  This IT project focuses on building a CRUD system using React
                  with Redux for state management. A RESTful API is developed,
                  Axios handles HTTP requests between the frontend and the API.
                  Styled Components are used for a modular and maintainable user
                  interface design.
                </p>

                <p className="invisible mt-6 font-bold underline decoration-2 max-lg:visible">
                  Click for more information
                </p>
              </div>
            </div>
            <div class="rounded-lg  elemento-no-visible grid max-md:p-3 ">
              <p className="w-auto h-16   text-xl font-semibold flex items-end justify-center">
                Implemented technologies
              </p>
              <div className="m-auto w-11/12  h-auto p-4  mt-0 grid grid-cols-3 gap-4 place-items-center max-md:grid-cols-3">
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={html} alt="" className="w-auto h-10" />
                  <p>HTML</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={css} alt="" className="w-auto h-10" />
                  <p>CSS</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={java} alt="" className="w-auto h-10" />
                  <p>JavaScript</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={react} alt="" className="w-auto h-10" />
                  <p>ReactJs</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={redux} alt="" className="w-auto h-12" />
                  <p>Redux</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={estilo} alt="" className="w-auto h-10" />
                  <p>Style Components</p>
                </span>
              </div>
              <span className="flex  justify-evenly max-md:gap-5">
                <Link
                  href="https://github.com/ArnedoAlejandro/CRUD-"
                  target="_blank"
                  className=" "
                >
                  <button className="h-10 flex gap-3 justify-center items-center text-black font-semibold px-4 py-6 bg-white border-2 border-black rounded-lg shadow-md  shadow-white transition-all ease-linear duration-200 hover:shadow-none hover:text-gray-600">
                    <p>Ghit hub</p>
                    <Image
                      src={github}
                      alt="logo github"
                      className="w-8 h-auto"
                    />
                  </button>
                </Link>
                <Link
                  href="https://crud-neon.vercel.app/"
                  target="_blank"
                  className=" "
                >
                  <span className="h-10 flex gap-1 justify-center items-center text-black font-semibold px-4 py-6 bg-white border-2 border-black rounded-lg shadow-md  shadow-white transition-all ease-linear duration-200 hover:shadow-none hover:text-gray-600">
                    <p>See Proyect</p>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </Link>
              </span>
            </div>
          </div>

          <div
            className={` contenedor shadow-md shadow-gray-400 rounded-md ${
              obscure
                ? "bg-slate-50"
                : "bg-black/40  shadow-black/20 shadow-lg "
            }   `}
          >
            <div className="elemento-visible ">
              <figure className="w-full shadow-md rounded-t-lg  h-[250px] max-md:h-[170px]">
                <Image
                  src={criptomonedas}
                  alt="card image"
                  className="w-full h-full object-fill "
                />
              </figure>
              <div className="p-6 max-md:p-3 max-md:mt-4  opacity-80">
                <header className="mb-4">
                  <h3 className="text-xl font-medium ">Patient manager</h3>
                </header>

                <p className="max-md:text-start">
                  This system, built in React and JavaScript, facilitates the
                  seamless management of patient data through robust CRUD
                  operations. CSS implementation ensures a responsive and
                  technically sound user interface. Leveraging component-based
                  architecture.
                </p>

                <p className="invisible mt-6 font-bold underline decoration-2 max-lg:visible">
                  Click for more information
                </p>
              </div>
            </div>
            <div class="rounded-lg  elemento-no-visible grid  max-md:px-3">
              <p className="w-auto h-16   text-xl font-semibold flex items-end justify-center">
                Implemented technologies
              </p>
              <div className="m-auto w-11/12  h-auto p-4  mt-0 grid grid-cols-3 gap-4 place-items-center max-md:grid-cols-3">
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={html} alt="" className="w-auto h-10" />
                  <p>HTML</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={css} alt="" className="w-auto h-10" />
                  <p>CSS</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={java} alt="" className="w-auto h-10" />
                  <p>JavaScript</p>
                </span>
                <span className="flex flex-col gap-2 justify-center items-center ">
                  <Image src={react} alt="" className="w-auto h-10" />
                  <p>ReactJs</p>
                </span>
              </div>
              <span className="flex  justify-evenly max-md:gap-5">
                <Link
                  href="https://github.com/ArnedoAlejandro/Cotizador-de-criptomonedas"
                  target="_blank"
                  className=" "
                >
                  <button className="h-10 flex gap-3 justify-center items-center text-black font-semibold px-4 py-6 bg-white border-2 border-black rounded-lg shadow-md  shadow-white transition-all ease-linear duration-200 hover:shadow-none hover:text-gray-600 ">
                    <p className="max-md:text-sm">Ghit hub</p>
                    <Image
                      src={github}
                      alt="logo github"
                      className="w-8 h-auto"
                    />
                  </button>
                </Link>
                <Link
                  href="https://cotizador-de-criptomonedas-ay9j.vercel.app/"
                  target="_blank"
                  className=" "
                >
                  <span className="h-10 flex gap-1 justify-center items-center text-black font-semibold px-4 py-6 bg-white border-2 border-black rounded-lg shadow-md  shadow-white transition-all ease-linear duration-200 hover:shadow-none hover:text-gray-600">
                    <p className="max-md:text-sm">See Proyect</p>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
        <span className="w-auto mt-24 text-xl font-medium flex justify-center max-md:text-lg">
          <Link href="https://github.com/ArnedoAlejandro">
            <p className="h-10 w-auto m-auto flex gap-4 justify-center items-center   font-semibold px-4 py-6 bg-emerald-400  rounded-lg shadow-lg  shadow-black/30 text-white transition-all ease-linear duration-200 hover:bg-emerald-500 hover:shadow-none hover:text-gray-100 ">
              See more projects ...
            </p>
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Skill;

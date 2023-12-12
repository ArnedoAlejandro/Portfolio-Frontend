import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import rectangleAle from "../public/rectangleAle.png";

export default function Modal() {
  const [isShowing, setIsShowing] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    let html = document.querySelector("html");

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const modal = document.querySelector("#modal"); // select the modal by it's id

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false);
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9;

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus(); // add focus for the last focusable element
              e.preventDefault();
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus(); // add focus for the first focusable element
              e.preventDefault();
            }
          }
        });

        firstFocusableElement.focus();
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing]);

  return (
    <>
      <button
        onClick={() => setIsShowing(true)}
        className="inline-flex h-auto items-center justify-center  whitespace-nowrap rounded-xl bg-emerald-500 px-3 text-md font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none max-lg:text-sm"
      >
        <span>About me</span>
      </button>

      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20  flex h-screen w-screen items-center justify-center bg-black/50 backdrop-blur-md "
              aria-labelledby="header-2a content-2a"
              aria-modal="true"
              tabindex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                className="flex max-h-[90vh] w-6/12  flex-col gap-6 overflow-hidden rounded-xl bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                ref={wrapperRef}
                id="modal"
                role="document"
              >
                {/*        <!-- Modal header --> */}
                <section id="header-2a" className="flex items-center gap-4">
                  <h3 className="flex-1 text-xl font-medium text-slate-700">
                    About me
                  </h3>
                  <button
                    onClick={() => setIsShowing(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-79 desc-79"
                      >
                        <title id="title-79">Icon title</title>
                        <desc id="desc-79">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </section>
                {/*        <!-- Modal body --> */}
                <div
                  id="content-2a"
                  className="w-auto h-auto flex-1 overflow-auto flex gap-5 "
                >
                  <div className="w-1/3 h-auto">
                    <Image
                      width={0} // Ajusta este valor según tus necesidades
                      height={0} // Ajusta este valor según tus necesidades
                      src={rectangleAle}
                      alt="Imagen presentacional"
                      className=""
                    />
                  </div>
                  <div className="w-1/2">
                    <p>
                      I am a web developer, I started doing a diploma in Full
                      stack web development at the National Technological
                      University knowing the language of HTML, CSS, PHP and
                      MYSQL, then I took courses taking knowledge of the
                      language of JAVASCRIPT and also the React.Js framework
                      making projects applying technologies and Next.js
                      framework, Express, MongoDB, Postman, Socket.io, Tailwind
                      CSS, Bootstrap and others. Currently I continue my
                      learning with new technologies for the optimization of new
                      projects and to have the corresponding skills for the IT
                      sector. My personal goal is to gain experience and
                      knowledge to grow as a profession
                    </p>
                    <div className="mt-14 flex justify-end gap-2">
                      {/*            <!-- base basic button --> */}
                      <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-black px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        {/* <a href={curriculum} download className="modal-ancor"> */}
                        <span>Download CV</span>
                        {/* </a> */}
                      </button>
                    </div>
                  </div>
                </div>
                {/*        <!-- Modal actions --> */}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}

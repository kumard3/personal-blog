/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

import { data } from "../data/data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Work() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="overflow-hidden lg:p-8 " id="work">
      <div className="container mx-auto space-y-3">
        <div className="flex flex-row items-center">
          <div
            className="section-line bg-primary-500  w-16 h-1 mr-6"
            style={{ width: "4rem" }}
          ></div>
          <p
            className="section-category text-greyText text-base font-medium"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            Some Things I've Built
          </p>
        </div>
        <div>
          {data.map((n) => {
            return (
              <>
                {" "}
                <div 
                data-aos={n.animation}
                data-aos-duration="2000"
                className={`${n.class} my-10`}>
                  <div className="flex items-center justify-center flex-1">
                    <img src={n.img} alt="work" className="rounded-lg sm:h-[20rem]" />
                  </div>
                  <div 
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="flex flex-col justify-center flex-1 px-6 py-12 dark:bg-coolGray-900">
                    <h1 className="text-5xl font-bold">{n.name}</h1>
                    <p className="my-6 text-xl ">{n.description}</p>
                    <button
                      type="button"
                      className="self-start bg-primary-500  p-2 px-[.8rem] text-lg rounded"
                    >
                      <a href={n.href}> Visit Site </a>
                    </button>
                  </div>
                </div>
              </>
            );
          })}

          {/* <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <div className="flex items-center justify-center flex-1 dark:bg-indigo-400">
              <img
                src="assets/svg/selectcolor.svg"
                alt=""
                className="p-8 h-60 dark:bg-coolGray-500"
              />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 py-12 dark:bg-coolGray-900">
              <span className="text-xs uppercase ">
                Join, it's free
              </span>
              <h2 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h2>
              <p className="my-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section id="home" className=" transition ease">
      <div className="flex flex-col justify-center p-6 mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center  lg:text-left">
          <div className="text-left">
            <span className="text-[16px] font-bold small-title my-[5rem] text-primary-500 ">
              Hi, my name is
            </span>
            <div className="mt-[1.7rem] ">
              <h1 className="text-4xl font-bold  sm:text-6xl big-heading">Kumar Deepanshu.</h1>
              <div className=" my-[10px]">
                <h1 className="text-4xl font-bold  sm:text-5xl ">
                  a <span className="text-primary-500 ">self-taught</span> Full Stack
                </h1>
                <h1 className="text-4xl font-bold sm:text-5xl ">developer.</h1>
              </div>
            </div>

            <div className="mb-[3rem]"></div>
          </div>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a href="#work" className="px-8 py-3 text-lg font-semibold rounded bg-primary-500 ">
              See my work
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/hero_illustration.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  )
}

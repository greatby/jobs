import React from "react";

const Hero = () => {
  return (
    // <section className="bg-white py-20 px-6 sm:px-10 lg:px-16">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    //     {/* Text Section */}
    //     <div className="space-y-6">
    //       <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
    //         Help build engaged,<br />high-performing teams — including ours
    //       </h1>
    //       <p className="text-lg sm:text-xl text-gray-600">
    //         Lattice is the #1 AI-enhanced people platform that turns managers into leaders, employees into high-performers, and companies into the best places to work.
    //       </p>
    //       <a
    //         href="#open-positions"
    //         className="inline-block bg-black text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-gray-900 transition"
    //       >
    //         See open positions
    //       </a>
    //     </div>

    //     {/* Image Section */}
    //     <div>
    //       <img
    //         src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6526c423c3d400ba76be3ce0_photo-careers-hero.webp"
    //         alt="A group of women standing at a counter"
    //         className="w-full rounded-xl object-cover shadow-lg"
    //       />
    //     </div>
    //   </div>
    // </section>
    <section className="relative z-0 overflow-hidden bg-[#003326] pb-28 pt-48 text-white">
      {/* Background SVG Wave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/2 bottom-0 -z-10 h-[859px] w-[1680px] bg-contain !bg-left-bottom bg-no-repeat sm:-left-1/3 md:left-0"
        style={{
          backgroundImage: "url(/images/careers_hero_wave_gradient.png)",
        }}
      />

      <div className="mx-auto flex flex-col items-center gap-16">
        {/* Heading */}
        <h1 className="text-center max-w-lg px-5 text-3xl font-semibold md:max-w-3xl md:text-5xl">
          Join the Revolution: Building Tomorrow's Workforce, Today
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-gray-100 max-w-3xl mx-auto px-4">
          Be part of a team that's pioneering the future of HR and AI agent
          management.
        </p>

        {/* CTA Button */}
        <a href="/careers#positions">
          <button className="cursor-pointer whitespace-nowrap font-medium leading-6 transition-colors inline-flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 disabled:pointer-events-none bg-[#00F5D4] text-black hover:bg-[#5BF5DE] focus-visible:ring-offset-[#0085FF] focus-visible:ring-[#00F5D4] disabled:opacity-30 w-full md:min-w-[15rem] md:w-fit px-6 py-4 text-base md:text-lg rounded-[2px]">
            View Open Positions
          </button>
        </a>

        {/* Stats Cards */}
        <div className="grid w-full max-w-7xl gap-4 px-5 pt-12 sm:grid-cols-3">
          {[
            {
              value: "5M+",
              label: "plugin downloads",
              image: "/static/images/careers/card1-wave.png",
            },
            {
              value: "$243M",
              label: "in funding",
              image: "/static/images/careers/card2-wave.png",
            },
            {
              value: "100M+",
              label: "daily lines of code written",
              image: "/static/images/careers/card3-wave.png",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex h-48 sm:h-52 flex-col overflow-hidden rounded-md bg-[#FAF7F5] text-black"
            >
              <div className="flex grow flex-col justify-start gap-0 px-8 pt-9 md:gap-2">
                <div className="hidden md:block text-2xl font-semibold">
                  {card.value}
                </div>
                <div className="md:hidden text-xl font-semibold">
                  {card.value}
                </div>
                <div className="text-sm md:text-base text-gray-700">
                  {card.label}
                </div>
              </div>
              <div className="relative h-16 shrink-0 bg-[#D9F3F1]">
                <img
                  src={card.image}
                  alt="wave graphic"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

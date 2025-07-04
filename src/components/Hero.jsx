import React from 'react'

const Hero = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Help build engaged,<br />high-performing teams — including ours
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Lattice is the #1 AI-enhanced people platform that turns managers into leaders, employees into high-performers, and companies into the best places to work.
          </p>
          <a
            href="#open-positions"
            className="inline-block bg-black text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            See open positions
          </a>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6526c423c3d400ba76be3ce0_photo-careers-hero.webp"
            alt="A group of women standing at a counter"
            className="w-full rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

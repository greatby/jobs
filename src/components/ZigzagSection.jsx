import React from 'react'

const ZigzagSection = () => {
  return (
  <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <figure className="flex-1">
            <img
              src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/65280854c2fb66f60daeacd0_image-careers-engagement.webp"
              srcSet="
                https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/65280854c2fb66f60daeacd0_image-careers-engagement-p-500.webp 500w,
                https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/65280854c2fb66f60daeacd0_image-careers-engagement-p-800.webp 800w,
                https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/65280854c2fb66f60daeacd0_image-careers-engagement-p-1080.webp 1080w,
                https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/65280854c2fb66f60daeacd0_image-careers-engagement.webp 1386w
              "
              sizes="100vw"
              alt="What makes us special"
              className="rounded-lg w-full h-auto object-cover"
              loading="lazy"
            />
          </figure>

          {/* Text Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-block px-3 py-1 text-sm font-medium text-white bg-black rounded-full mb-4">
              Lattice on lattice
            </div>
            <h3 className="text-3xl font-bold mb-4">What makes us special</h3>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Lattice builds software that enables teams to build stronger, more transparent relationships and do their best work. We believe everything we do at Lattice should have the same goal, which is why we prioritize our values, how we lead, how we work, and how we learn &amp; grow.
              </p>
              <p>
                These are practices that we live and breathe every day — for both ourselves and our customers. Lattice's culture embodies the company's and the product's evolution, along with all of the things we've learned from our people and our customers alike.
              </p>
              <p>
                <strong>Our people and culture are our secret weapons.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ZigzagSection

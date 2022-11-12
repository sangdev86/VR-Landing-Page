import React from "react"

import TestimonialSlider from "./TestimonialSlider"

export default function Testimonial() {
  return (
    <section className="mb-6">
      <div className="container mx-auto">
        <div className=" bg-purple-900/20 pt-14 pb-24 rounded-xl max-h-[400px]">
          <div className="text-center">
            <h2 className="text-3xl pb-4">
              What our clients say
            </h2>
            <p className=" max-w-[60%] mx-auto">
              See what our customer say about us. It really
              matter for us. How good or bad we will make ir
              for evaluation to make EhyalLive better.
            </p>
          </div>
          <div className="mt-6 p-6  left-0 -bottom-1/2">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  )
}

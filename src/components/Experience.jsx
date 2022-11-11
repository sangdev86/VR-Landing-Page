import React from "react"
import Img1 from "../assets/img/exp-img1.png"
import Img2 from "../assets/img/exp-img2.png"
import Button from "./Button"

export default function Experience() {
  return (
    <section className="mb-12">
      <div className="container mx-auto ">
        <div className="flex flex-col min-h-[480px] space-y-6 lg:space-x-20 lg:flex-row ">
          <div className="flex-1 flex space-x-6 items-center lg:space-x-12 ">
            <div className=" self-start">
              <img src={Img1} alt="exper landing page" />
            </div>
            <div className="self-end">
              <img src={Img2} alt="exper landing page" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center">
            <h2 className="mb-1 text-3xl">
              New Experince in Playing Games
            </h2>
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente, saepe rem
              voluptatibus ex fugit magnam dignissimos
              temporibus! Nesciunt.
            </p>
            <Button className="btn-primary">
              Get it now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

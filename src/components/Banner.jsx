import React from "react"
import Button from "./Button"
import BannerImage from "../assets/img/banner-img.png"
import Users from "./Users"
export default function Banner() {
  return (
    <div className="min-h-[600px] relative pt-24 pb-12 text-center lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div>
            <h1 className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug">
              Let's Explore <br /> Three-Dimensional
              Visually.
            </h1>
            <p className="max-w-[440px] font-secondary mb-12 mx-auto lg:mx-0">
              With virtual technology you can see the
              digital world feel more real and you can play
              the game with a new style.
            </p>
            <div className="flex items-center justify-around space-x-4 max-w-[400px] mx-auto mb-12 lg:space-x-8 lg:max-w-none lg:justify-start">
              <Button className="btn-primary">
                Get it Now
              </Button>
              <Button className="btn-secondary">
                Explore Device
              </Button>
            </div>
            <Users />
          </div>

          <div data-aos="fade-up" data-aos-delay="800">
            <img
              src={BannerImage}
              alt=""
              className="w-[100%] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

import React from "react"
import Img1 from "../assets/img/headset-1.png"
import Img2 from "../assets/img/headset-2.png"
import Img3 from "../assets/img/headset-3.png"
import Img4 from "../assets/img/headset-4.png"

export default function Heasets() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h3 className=" text-3xl py-6 pb-6">
          Mixed Reality Headsets
        </h3>
        <div className=" grid grid-cols-1 justify-items-center gap-y-6 lg:gap-9 lg:grid-cols-2 ">
          {[
            {
              img: Img1,
              h5: "Metaverse",
              p: "A Network of 3D virtual worlds focused on social connection. ",
              type: "fade-right",
              duration: "2000",
              deplay: "0",
            },
            {
              img: Img2,
              h5: "AIoT",
              p: "AI and IoT are both emerging innovative technologies with a lot of potentials. ",
              type: "fade-left",
              duration: "2000",
              deplay: "0",
            },
            {
              img: Img3,
              h5: "HoloLens",
              p: "HoloLens display information, blend with the real world , or even simulate a virtual world.",
              type: "fade-right",
              duration: "3000",
              deplay: "500",
            },
            {
              img: Img4,
              h5: "TPCASTT",
              p: "Method is great to start students reading and inferring with little assistance from the instructor",
              type: "fade-left",
              duration: "3000",
              deplay: "500",
            },
          ].map(
            (
              { img, h5, p, type, duration, deplay },
              index
            ) => (
              <div
                key={h5 + index}
                className="relative"
                data-aos={type}
                data-aos-duration={duration}
                data-aos-deplay={deplay}
              >
                <img
                  src={img}
                  alt={h5}
                  className=" rounded-xl"
                />
                <div className=" bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6 absolute bottom-0 left-0 rounded-xl">
                  <h5>{h5}</h5>
                  <p>{p}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

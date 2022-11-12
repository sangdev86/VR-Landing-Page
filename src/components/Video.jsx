import React from "react"
import "./modalVideo.scss"
import { BsPlayCircleFill } from "react-icons/bs"
import ModalVideo from "react-modal-video"

export default function Video() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <section className=" bg-purple-900 py-12 lg:py-6 mb-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-x-6">
          <h3 className="text-2xl lg:text-3xl font-semibold">
            Awesome experiences with virtual reality world
          </h3>
          <div className=" bg-videoBg w-[270px] h-[180px] bg-no-repeat bg-cover relative">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" cursor-pointer absolute top-1/2 left-1/2 text-5xl -translate-x-1/2 -translate-y-1/2"
            >
              <BsPlayCircleFill />
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="NOk_M1Ib5F0"
        onClose={() => setIsOpen(false)}
      />
    </section>
  )
}

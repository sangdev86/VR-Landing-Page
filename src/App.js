import { useEffect } from "react"
import Banner from "./components/Banner"
import Experience from "./components/Experience"
import Header from "./components/Header"
import Heasets from "./components/Heasets"
import Testimonial from "./components/Testimonial"
import Video from "./components/Video"
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 50 })
  })
  return (
    <div className="bg-body">
      <Header />
      <Banner />
      <Experience />
      <Video />
      <Heasets />
      <Testimonial />
    </div>
  )
}

export default App

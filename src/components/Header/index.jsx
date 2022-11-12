import React, { useState } from "react"
import Logo from "../../assets/img/logo.svg"
import Nav from "./Nav"
import NavMobile from "./NavMobile"
import { HiMenu } from "react-icons/hi"

export default function Header() {
  const [navMobile, setNavMobile] = useState(false)

  return (
    <header
      className="py-6"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="container mx-auto">
        <div className="flex justify-between">
          <img src={Logo} alt="Logo" className="h-8" />
          <div className="hidden lg:flex">
            <Nav />
          </div>
          <div
            className={`lg:hidden fixed z-20 top-0 w-48 transition-all duration-1100
          ${navMobile ? "right-0" : "-right-full"}`}
          >
            <NavMobile setNavMobile={setNavMobile} />
          </div>
          <HiMenu
            className="lg:hidden text-3xl text-white cursor-pointer"
            onClick={() => setNavMobile(true)}
          />
        </div>
      </div>
    </header>
  )
}

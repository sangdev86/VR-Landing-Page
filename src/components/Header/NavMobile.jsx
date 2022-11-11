import React, { memo } from "react"
import Button from "../Button"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

const NavMobile = ({ setNavMobile, ...props }) => {
  return (
    <nav
      className=" lg:hidden w-full h-[100vh] bg-purple-900 flex flex-col justify-center text-center relative"
      {...props}
    >
      <ul className="flexflex-col justify-center space-y-8 text-lg items-center">
        {[
          {
            href: "#",
            name: "Home",
          },
          {
            href: "#",
            name: "Company",
          },
          {
            href: "#",
            name: "Features",
          },
        ].map(({ href, name }, index) => (
          <li
            key={name + index}
            className="relative after:w-6
               after:h-1 after:absolute after:left-0 
               after:-bottom-2 after:rounded-full after:transition 
               first-letter:after:duration-300
               after:bg-transparent after:hover:bg-Cpink"
          >
            <a href={href}>{name}</a>
          </li>
        ))}
        <Button className="btn-primary">Sign up</Button>
        <Button className="btn-secondary">Login</Button>
        <BsFillArrowRightCircleFill
          className=" absolute bottom-5 left-1/2 text-3xl -translate-x-1/2 -translate-y-8"
          onClick={() => setNavMobile(false)}
        />
      </ul>
    </nav>
  )
}

export default memo(NavMobile)

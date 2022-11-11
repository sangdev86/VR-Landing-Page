import React, { memo } from "react"
import Button from "../Button"

const Nav = () => {
  return (
    <nav className=" hidden lg:flex">
      <ul className="flex space-x-4 text-lg items-center">
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
               after:-bottom-2 after:rounded-full after:transition first-letter:after:duration-300
               after:bg-transparent after:hover:bg-Cpink"
          >
            <a href={href}>{name}</a>
          </li>
        ))}
        <Button className="btn-primary">Sign up</Button>
        <Button className="btn-secondary">Login</Button>
      </ul>
    </nav>
  )
}

export default memo(Nav)

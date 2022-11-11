import React from "react"

export default function Button({ children, ...props }) {
  const className = {
    "btn-primary":
      "bg-gradient-to-r from-Cpink to-Cred hover:bg-gradient-to-l from-Cred to-Cpink transition duration-300",
    "btn-secondary":
      "bg-transparent border border-Cpink hover:text-Cpink",
  }

  return (
    <button
      {...props}
      className={`font-secondary font-medium transition duration-300 ease-in-out 
      outline-none text-white h-12 px-8  rounded-md text-md cursor-pointer ${
        className[props.className]
      }`}
    >
      {children}
    </button>
  )
}

import Avatar1 from "../assets/img/avt1.png"
import Avatar2 from "../assets/img/avt2.png"
import Avatar3 from "../assets/img/avt3.png"
import Avatar4 from "../assets/img/avt4.png"

import { BsFillCircleFill } from "react-icons/bs"

const avatars = [
  { img: Avatar1, alt: "Avatar VR landing Page" },
  { img: Avatar2, alt: "Avatar VR landing Page" },
  { img: Avatar3, alt: "Avatar VR landing Page" },
  { img: Avatar4, alt: "Avatar VR landing Page" },
]
export default function Users() {
  return (
    <div className="">
      <ul className="flex -space-x-2 justify-center lg:justify-start pb-5">
        {avatars.map(({ img, alt }, index) => (
          <li key={img + index}>
            <img
              src={img}
              alt={alt}
              className="w-14 h-14 rounded-full"
            />
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center space-x-2 lg:justify-start font-medium">
        <BsFillCircleFill className="text-green text-green-500 animate-pulse" />
        <p>400k People online</p>
      </div>
    </div>
  )
}

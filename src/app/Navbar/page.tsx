import { FaUser } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { IoMdHeart } from "react-icons/io";
import Link from "next/link";


export default function Navbar() {
    return(
        <div>
             <nav className="flex items-center justify-around bg-white fixed top-0 left-0 right-0 shadow-[0_0_8px_rgba(0,0,0,0.6)] z-[100]">
          <div className="m-[5px] -ml-10  my-0 text-[36px] text-[#c72092] cursor-pointer relative">
            <h1>
              Shoe
              <span className="text-[#6c14d0] underline">s</span>
            </h1>
          </div>

          <ul className="list-none flex space-x-8">
  <li className="inline-block m-[5px] mx-[15px]">
    <Link
      className="no-underline text-black transition-all duration-200 hover:text-[#c72092]"
      href="/"
    >
      Home
    </Link>
  </li>
  <li className="inline-block m-[5px] mx-[15px]">
    <Link
      className="no-underline text-black transition-all duration-200 hover:text-[#c72092]"
      href="/Products"
    >
      Products
    </Link>
  </li>
  <li className="inline-block m-[5px] mx-[15px]">
    <Link
      className="no-underline text-black transition-all duration-200 hover:text-[#c72092]"
      href="/About"
    >
      About
    </Link>
  </li>
  <li className="inline-block m-[5px] mx-[15px]">
    <Link
      className="no-underline text-black transition-all duration-200 hover:text-[#c72092]"
      href="/Review"
    >
      Review
    </Link>
  </li>
  <li className="inline-block m-[5px] mx-[15px]">
    <Link
      className="no-underline text-black transition-all duration-200 hover:text-[#c72092]"
      href="/Services"
    >
      Services
    </Link>
  </li>
</ul>


          <div className="icons flex mr-24">
            <IoMdHeart size={24} className="cursor-pointer text-[18px] mx-[4px] transition-all duration-300 hover:text-[#c72092]" />
            <HiMiniShoppingCart size={24} className="ml-3 cursor-pointer text-[18px] mx-[4px] transition-all duration-300 hover:text-[#c72092]" />
            <FaUser size={24} className="ml-3 cursor-pointer text-[18px] mx-[4px] transition-all duration-300 hover:text-[#c72092]" />
          </div>
        </nav>
        </div>
    )
}
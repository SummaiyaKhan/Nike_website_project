import { FaChevronRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import image1 from "../image/shoes.png";

export default function Main() {
    return(
        <div>
                <div className="main" id="Home">
          <div className="main_content flex items-center justify-around">
            <div className="main-text ">
              <h1 className="text-[90px] font-bold leading-[70px] bg-gradient-to-r from-[#c72092] to-[#6c14d0] text-transparent bg-clip-text relative top-[60px] left-[5%]">
                NIKE <br />
                <span className="text-[80px] font-semibold bg-gradient-to-r from-[#c72092] to-[#6c14d0] text-transparent bg-clip-text">
                  Collection
                </span>
              </h1>
              <p className="w-[600px] text-justify leading-[21px] relative top-[85px] left-[5%] text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="main_image">
              <Image
                src={image1}
                alt="Shoes Image"
                className="w-[650px] h-[600px] relative left-[20px] top-[75px]"
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="social_icon absolute top-1/2 left-[98%] translate-x-[-50%] translate-y-[-50%] text-[19px]">
            <FaFacebookF size={24} className="m-[10px]  cursor-pointer transition-all duration-300 hover:text-[#c72092]" />
            <FaTwitter size={24} className="m-[10px]  cursor-pointer transition-all duration-300 hover:text-[#c72092]" />
            <FaInstagram size={24} className="m-[10px]  cursor-pointer transition-all duration-300 hover:text-[#c72092]" />
            <FaLinkedinIn  size={24}className="m-[10px]  cursor-pointer transition-all duration-300 hover:text-[#c72092]" />
          </div>

          {/*Button*/}  
          <div className="button absolute mt-8 left-[6%] p-[10px_20px] rounded-[30px] bg-gradient-to-r from-[#c72092] to-[#6c14d0] flex items-center justify-center space-x-2">
  <Link href={"#"} className="text-white transition-all duration-300">Shop Now</Link>
  <FaChevronRight className="transform duration-300 hover:translate-x-[6px] text-white" />
  </div>
  </div>
        </div>
    )
}
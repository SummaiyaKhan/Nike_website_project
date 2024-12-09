import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaHouse, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa6";

export default function Footer() {
    return(
        <footer className="w-[100%] [100vh]">
        <div className="footer_main w-[100%] bg-[#f3f1f1] flex justify-around ">
         <div className="tag my-2.5">
            <h1 className="text-[25px] my-6 text-[#1c0080]">Contact</h1>
            <Link href={"#"} className="center text-center flex no-underline  " >
            <FaHouse className="hover:text-[#c72092] mr-3"/>
            <p>123/colombo/Sri Lanka</p>
            </Link>
            <Link href={"#"} className="center text-center flex no-underline " >
            <FaPhone className=" hover:text-[#c72092] mr-3"/>
            <p>+1 (555) 123-4567</p>
            </Link>
            <Link href={"#"} className="center text-center flex no-underline " >
            <FaEnvelope className="hover:text-[#c72092] mr-3"/>
            <p>fakeuser1234@gmail.com</p>
            </Link>
         </div>
      
         <div className="tag my-2.5">
            <h1 className="text-[25px] my-6 text-[#1c0080]">Get Help</h1>
            <Link href={"#"} className="center text-center flex flex-col ">FAQ</Link>
            <Link href={"#"} className="center text-center flex flex-col ">Shipping</Link>
            <Link href={"#"} className="center text-center flex flex-col ">Returns</Link>
            <Link href={"#"} className="center text-center flex flex-col ">Payment Options</Link>
         </div>
      
         <div className="tag my-2.5 ">
            <h1 className="text-[25px] my-6 text-[#1c0080]">Our Stories</h1>
            <Link href={"#"} className="center text-center flex flex-col ">Sari Lanka</Link>
            <Link href={"#"} className="center text-center flex flex-col ">USA</Link>
            <Link href={"#"} className="center text-center flex flex-col ">India</Link>
            <Link href={"#"} className="center text-center flex flex-col ">Japan</Link>
         </div>
      
         <div className="tag my-2.5">
        <h1 className="text-[25px] my-6 text-[#1c0080]">Follow Us</h1>
        <div className="social_link flex">
          <Link
            href={"#"}
            className="center -ml-1 w-[30px] h-[30px] rounded-full bg-white text-center no-underline text-black shadow-xl relative mx-1.25 z-10 overflow-hidden flex items-center justify-center transition duration-500 hover:bg-[#1c0080] hover:text-white"
          >
            <FaFacebookF size={20} className="text-[15px]" />
          </Link>
          <Link
            href={"#"}
            className="center ml-3 w-[30px] h-[30px] rounded-full bg-white text-center no-underline text-black shadow-xl relative mx-1.25 z-10 overflow-hidden flex items-center justify-center transition duration-500 hover:bg-[#1c0080] hover:text-white"
          >
            <FaTwitter size={20} className="text-[15px]" />
          </Link>
          <Link
            href={"#"}
            className="center ml-3 w-[30px] h-[30px] rounded-full bg-white text-center no-underline text-black shadow-xl relative mx-1.25 z-10 overflow-hidden flex items-center justify-center transition duration-500 hover:bg-[#1c0080] hover:text-white"
          >
            <FaInstagram size={20} className="text-[15px]" />
          </Link>
          <Link
            href={"#"}
            className="center ml-3 w-[30px] h-[30px] rounded-full bg-white text-center no-underline text-black shadow-xl relative mx-1.25 z-10 overflow-hidden flex items-center justify-center transition duration-500 hover:bg-[#1c0080] hover:text-white"
          >
            <FaLinkedinIn size={20} className="text-[15px]" />
          </Link>
        </div>
      </div>
      
      
      
      
         <div className="tag my-2.5 ">
            <h1 className="text-[25px] my-6 text-[#1c0080]">Newletter</h1>
            <div className="search-bar w-[230px] h-[35px] bg-[#cacaca] rounded-[25px]">
            <input 
        type="text" 
        placeholder="Your email ID here" 
        className="w-[200px] relative mt-[6px] ml-[6%] border-none bg-transparent outline-none text-[13px] py-[2px] text-black placeholder:text-gray-500" 
      />
        <button 
          type="submit" 
          className="border-none mt-[15px] cursor-pointer text-white p-[7px] px-[15px] bg-gradient-to-r from-[#c72092] to-[#6c14d0] rounded-[25px]"
        >
          Subscribe
        </button>
      </div>
      
         </div>
      
        </div>
      
      
      </footer>
    )
}
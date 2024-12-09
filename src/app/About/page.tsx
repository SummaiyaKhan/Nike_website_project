import image10 from "../image/red_shoes1.png"
import image11 from "../image/red_shoes2.png"
import image12 from "../image/red_shoes3.png"
import image13 from "../image/red_shoes4.png"
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return(
<div className="about w-[1290px] mt-28 mx-auto  h-[100vh] py-9" id="about">
  {/* Centered Heading */}
  <h1 className="text-[60px] mt-[20px] flex justify-center items-center bg-black text-transparent bg-clip-text">
    web
    <span className="text-transparent ml-[15px] bg-clip-text bg-gradient-to-r from-[#c72092] to-[#6c14d0]">About</span>
  </h1>

  {/* Main Flex Container */}
  <div className="about_main flex justify-center  items-center w-[100%] mx-auto mt-[80px]">
    {/* Small Images Container */}
    <div className="about_small_image flex flex-col gap-[1px] ml-2">
      <Image 
        src={image10} 
        alt={""} 
        className="h-[100px] w-[410px] transition duration-300 hover:opacity-100 opacity-80 cursor-pointer m-[5px] rounded-[6px] p-[5px] shadow-md shadow-black bg-gradient-to-r from-[#c72092] to-[#6c14d0]"
      />
      <Image 
        src={image11} 
        alt={""} 
        className="h-[100px] w-[410px] transition duration-300 hover:opacity-100 opacity-80 cursor-pointer m-[5px] rounded-[6px] p-[5px] shadow-md shadow-black bg-gradient-to-r from-[#c72092] to-[#6c14d0]"
      />
      <Image 
        src={image12} 
        alt={""} 
        className="h-[100px] w-[410px] transition duration-300 hover:opacity-100 opacity-80 cursor-pointer m-[5px] rounded-[6px] p-[5px] shadow-md shadow-black bg-gradient-to-r from-[#c72092] to-[#6c14d0]"
      />
      <Image 
        src={image13} 
        alt={""} 
        className="h-[100px] w-[410px] transition duration-300 hover:opacity-100 opacity-80 cursor-pointer m-[5px] rounded-[6px] p-[5px] shadow-md shadow-black bg-gradient-to-r from-[#c72092] to-[#6c14d0]"
      />
    </div>

    {/* Large Image Container */}
    <div className="image_container p-[10px] flex">
      <Image 
        src={image10} 
        alt={""} 
        className="border-4 border-[#6c14d0] shadow-[0_0_12px_rgba(73,15,139,0.8)] h-[470px] ml-2 w-[1500px] p-[30px] rounded-[20px]"
      />
    </div>

    {/* About Text */}
    <div className="about_text w-[1500px] h-[400px] rounded-[20px] shadow-[0_0_12px_rgba(199,32,146,0.8)] ml-4 p-[25px] border-4 border-[#c72092] bg-gradient-to-l from-[#c72092] to-[#6c14d0] text-transparent bg-clip-text text-justify leading-[22px]">
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
        Contrary to popular belief, Lorem Ipsum is not simply random text...
      </p>
    </div>
  </div>

  {/* Shop Now Button */}
  <div className="flex justify-center items-center h-[200px]">
    <Link href={"#"} className="about_btn p-[10px] px-7 hover:border-2 hover:border-transparent hover:bg-[#c72092] hover:text-white no-underline shadow-[0_0_8px_#c72092] border-2 border-[#c72092] text-black bg-none">
      Shop Now
    </Link>
  </div>
</div>

    )
}


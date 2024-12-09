import { FaLock, FaUser } from "react-icons/fa";
import image20 from "../image/logshoes.png"
import image21 from "../image/google.png"
import image22 from "../image/facebook.png"
import image23 from "../image/twitter.png"
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return(
        <div className="login_form w-[100%] h-[100vh] flex justify-around items-center bg-[url('/image/loging_bg.png')] bg-center bg-cover bg-no-repeat">
        <div className="left w-[650px] ">
        <Image 
        src={image20} 
        alt={""} 
        className=""
      />
        </div>
        <div className="right relative mt-[-50px] ml-[-60px] px-20 py-12">
          <h1 className="font-sans text-[45px] mb-[40px]">Welcome Back!</h1>
           <form action="#" method="post">
            <p className="mb-[5px]">User Name</p>
            <div className="user border-2 border-[#6c14d0] rounded-md w-[350px] h-[40px] flex">
            <FaUser className="relative mt-[9px] ml-[15px] text-[#c72092]"/>
            <input 
              type="text" 
              name="user" 
              placeholder="User Name" 
              className="relative ml-[9%] w-[295px] outline-none border-none flex text-[15px] bg-transparent"
            />
            </div>
            <p className="password_tag my-[15px] mb-[5px]">Passowrd</p>
            <div className="password border-2 border-[#6c14d0] rounded-[5px] w-[350px] h-[40px] flex">
            <FaLock className="relative mt-[9px] ml-[15px] text-[#c72092]"/>
            <input 
              type="text" 
              name="Password" 
              placeholder="Password" 
              className="relative mt-[9px] ml-[9%] text-[#c72092] bg-transparent border-none outline-none flex w-[295px] text-[15px] "
            />
            </div>
            <p className="forget relative ml-[60%] cursor-pointer mt-[6px] mb-[10px]">Forget Password ?</p>
            <button className="submit w-[350px] text-white border-none cursor-pointer px-[20px] py-[7px] rounded-[5px] text-[20px] bg-gradient-to-r from-[#c72092] to-[#6c14d0]">Login</button>
            <div className="loging_icon flex items-center justify-center mt-[25px] ">
              <Link href={"#"} className="w-[30px] h-[30px] mx-[2px] rounded-full bg-[#f3f3f3] shadow-[0_0_5px_rgba(0,0,0,0.6)]">
              <Image 
                src={image21} 
                alt={""} 
                className="w-[20px] m-[5px]"
              />
              </Link>
              <Link href={"#"} className="w-[30px] h-[30px] mx-[2px] rounded-full bg-[#f3f3f3] shadow-[0_0_5px_rgba(0,0,0,0.6)]">
              <Image 
                src={image22} 
                alt={""} 
                className="w-[20px] m-[5px]"
              />
              </Link>
              <Link href={"#"} className="w-[30px] h-[30px] mx-[2px] rounded-full bg-[#f3f3f3] shadow-[0_0_5px_rgba(0,0,0,0.6)]">
              <Image 
                src={image23} 
                alt={""} 
                className="w-[20px] m-[5px]"
              />
              </Link>
            </div>
    
    
          </form>
        </div>
      </div>
    )
}
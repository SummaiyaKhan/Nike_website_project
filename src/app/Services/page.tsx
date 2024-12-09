import { FaHeadset } from "react-icons/fa";
import { FaRotateLeft, FaTruckFast } from "react-icons/fa6";

export default function Services() {
    return(
  <div className="services  w-[70%] mt-0 mx-auto text-center py-[80px] pt-[80px] pb-[10px]" id="services">
  <h1 className="text-[60px] uppercase">our<span className="ml-[15px] bg-gradient-to-l from-[#c72092] to-[#6c14d0] bg-clip-text text-transparent">services</span></h1>

  <div className="services_cards  w-[80%] flex items-center justify-between relative mt-[50px] mx-auto">
    

    <div className="services_box ">
    <FaTruckFast size={50} className=" font-[60px] mx-auto my-5 text-yellow-500 cursor-pointer "/>
    <h3 className="mb-[12px] text-[19px] font-bold">Fast Delivery</h3>
    <p className="text-center text-[#919191] mb-[60px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <div className="services_box">
    <FaRotateLeft size={50} className=" font-[60px] mx-auto my-5 text-yellow-500 cursor-pointer "/>
      <h3 className="mb-[12px] text-[19px] font-bold">10 Days Replacement</h3>
    <p className="text-center text-[#919191] mb-[60px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <div className="services_box">
    <FaHeadset size={50} className=" font-[60px] mx-auto my-5 text-yellow-500 cursor-pointer "/>
      <h3 className="mb-[12px] text-[19px] font-bold">24 x 7 Support</h3>
    <p className="text-center text-[#919191] mb-[60px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>

  </div>


        

    )
}
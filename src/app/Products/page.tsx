import { FaShare, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import image2 from "../image/shoes2.png"
import image3 from "../image/shoes2.png"
import image4 from "../image/shoes3.png"
import image5 from "../image/shoes4.png"
import image6 from "../image/shoes5.png"
import image7 from "../image/shoes6.png"
import image8 from "../image/shoes7.png"
import image9 from "../image/shoes8.png"

import Image from "next/image";
import Link from "next/link";

export default function Products() {
    return(

<div className="products w-[1200px] ml-28  h-[80vh] py-6  mt-32" id="products" >
  <h1 className="my-[35px] text-[60px] font-semibold flex items-center justify-center uppercase  bg-gradient-to-r from-[#c72092] to-[#6c14d0] text-transparent bg-clip-text ">Products</h1>
  <div className="box w-[1300px] mx-auto grid grid-cols-4 gap-6 ">
    
    
<div className="card w-[290px] h-[440px] shadow-[0_0_8px_#6c14d0] rounded-md text-center px-16 py-2.5 bg-gray-100 ">
  <div className="small_card flex-col absolute my-2 transition duration-300 translate-x-0 -ml-16 cursor-pointer hover:translate-x-5">
    <IoMdHeart className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
    <FaShare className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
  </div>
  
  <div className="image flex items-center justify-center">
    <Image src={image2} alt={""} className="w-[150px] my-3 transition duration-300 hover:scale-110" />
  </div>

  <div className="product-text">
    <h2 className="text-[30px] my-2">NIKE</h2>
    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  </div>

  <h3 className="my-[7px]">$100.99</h3>

  <div className="products_star flex justify-center text-orange-300 mb-[19px] cursor-pointer">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStarHalfStroke />
  </div>

  <Link href={"#"} className="btn no-underline px-5 py-2 text-white bg-gradient-to-r from-[#c72092] to-[#6c14d0]">
    Add to cart
  </Link>
</div>

<div className="card w-[290px] h-[440px] shadow-[0_0_8px_#6c14d0] rounded-md text-center px-16 py-2.5 bg-gray-100"> 
  <div className="small_card flex-col absolute my-2 transition duration-300 translate-x-0 -ml-16 cursor-pointer hover:translate-x-5">
    <IoMdHeart className="hover:text-[#c72092] p-2 w-11 h-11 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
    <FaShare className="hover:text-[#c72092] p-2 w-11 h-11 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
  </div>

  <div className="image flex items-center justify-center">
    <Image src={image3} alt={""} className="w-[150px] my-3 transition duration-300 hover:scale-110" />
  </div>

  <div className="product-text">
    <h2 className="text-[30px] my-2">NIKE</h2>
    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  </div>

  <h3 className="my-[7px]">$250.99</h3>

  <div className="products_star flex justify-center text-orange-300 mb-[19px] cursor-pointer">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStarHalfStroke />
  </div>

  <Link href={"#"} className="btn no-underline px-5 py-2 text-white bg-gradient-to-r from-[#c72092] to-[#6c14d0]">
    Add to cart
  </Link>
</div>

<div className="card w-[290px] h-[440px] shadow-[0_0_8px_#6c14d0] rounded-md text-center px-16 py-2.5 bg-gray-100">
  <div className="small_card flex-col absolute my-2 transition duration-300 translate-x-0 -ml-16 cursor-pointer hover:translate-x-5">
    <IoMdHeart className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
    <FaShare className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
  </div>

  <div className="image flex items-center justify-center">
    <Image src={image4} alt={""} className="w-[150px] my-3 transition duration-300 hover:scale-110" />
  </div>

  <div className="product-text">
    <h2 className="text-[30px] my-2">NIKE</h2>
    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  </div>

  <h3 className="my-[7px]">$300.99</h3>

  <div className="products_star flex justify-center text-orange-300 mb-[19px] cursor-pointer">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
  </div>

  <Link href={"#"} className="btn no-underline px-5 py-2 text-white bg-gradient-to-r from-[#c72092] to-[#6c14d0]">
    Add to cart
  </Link>
</div>

<div className="card w-[290px] h-[440px] shadow-[0_0_8px_#6c14d0] rounded-md text-center px-16 py-2.5 bg-gray-100"> 
  <div className="small_card flex-col absolute my-2 transition duration-300 translate-x-0 -ml-16 cursor-pointer hover:translate-x-5">
    <IoMdHeart className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
    <FaShare className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
  </div>

  <div className="image flex items-center justify-center">
    <Image src={image5} alt={""} className="w-[150px] my-3 transition duration-300 hover:scale-110" />
  </div>

  <div className="product-text">
    <h2 className="text-[30px] my-2">NIKE</h2>
    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  </div>

  <h3 className="my-[7px]">$200.99</h3>

  <div className="products_star flex justify-center text-orange-300 mb-[19px] cursor-pointer">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStarHalfStroke />
  </div>

  <Link href={"#"} className="btn no-underline px-5 py-2 text-white bg-gradient-to-r from-[#c72092] to-[#6c14d0]">
    Add to cart
  </Link>
</div>


<div className="card w-[290px] h-[440px] shadow-[0_0_8px_#6c14d0] rounded-md text-center px-16 py-2.5 bg-gray-100"> 
  <div className="small_card flex-col absolute my-2 transition duration-300 translate-x-0 -ml-16 cursor-pointer hover:translate-x-5">
    <IoMdHeart className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
    <FaShare className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
  </div>

  <div className="image flex items-center justify-center">
    <Image src={image6} alt={""} className="w-[150px] my-3 transition duration-300 hover:scale-110" />
  </div>

  <div className="product-text">
    <h2 className="text-[30px] my-2">NIKE</h2>
    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  </div>

  <h3 className="my-[7px]">$400.99</h3>

  <div className="products_star flex justify-center text-orange-300 mb-[19px] cursor-pointer">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStarHalfStroke />
    <FaStarHalfStroke />
  </div>

  <Link href={"#"} className="btn no-underline px-5 py-2 text-white bg-gradient-to-r from-[#c72092] to-[#6c14d0]">
    Add to cart
  </Link>
</div>

<div className="card w-[290px] h-[440px] shadow-[0_0_8px_#6c14d0] rounded-md text-center px-16 py-2.5 bg-gray-100">
  <div className="small_card flex-col absolute my-2 transition duration-300 translate-x-0 -ml-16 cursor-pointer hover:translate-x-5">
    <IoMdHeart className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
    <FaShare className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
  </div>

  <div className="image flex items-center justify-center">
    <Image src={image7} alt={""} className="w-[150px] my-3 transition duration-300 hover:scale-110" />
  </div>

  <div className="product-text">
    <h2 className="text-[30px] my-2">NIKE</h2>
    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  </div>

  <h3 className="my-[7px]">$335.95</h3>

  <div className="products_star flex justify-center text-orange-300 mb-[19px] cursor-pointer">
    <FaStar />
    <FaStar />
    <FaStarHalfStroke />
    <FaStarHalfStroke />
    <FaStarHalfStroke />
  </div>

  <Link href={"#"} className="btn no-underline px-5 py-2 text-white bg-gradient-to-r from-[#c72092] to-[#6c14d0]">
    Add to cart
  </Link>
</div>

<div className="card w-[290px] h-[440px] shadow-[0_0_8px_#6c14d0] rounded-md text-center px-16 py-2.5 bg-gray-100">
  <div className="small_card flex-col absolute my-2 transition duration-300 translate-x-0 -ml-16 cursor-pointer hover:translate-x-5">
    <IoMdHeart className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
    <FaShare className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
  </div>

  <div className="image flex items-center justify-center">
    <Image src={image8} alt={""} className="w-[150px] my-3 transition duration-300 hover:scale-110" />
  </div>

  <div className="product-text">
    <h2 className="text-[30px] my-2">NIKE</h2>
    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  </div>

  <h3 className="my-[7px]">$110.01</h3>

  <div className="products_star flex justify-center text-orange-300 mb-[19px] cursor-pointer">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStarHalfStroke />
    <FaStarHalfStroke />
  </div>

  <Link href={"#"} className="btn no-underline px-5 py-2 text-white bg-gradient-to-r from-[#c72092] to-[#6c14d0]">
    Add to cart
  </Link>
</div>


<div className="card w-[290px] h-[440px] shadow-[0_0_8px_#6c14d0] rounded-md text-center px-16 py-2.5 bg-gray-100">
  <div className="small_card flex-col absolute my-2 transition duration-300 translate-x-0 -ml-16 cursor-pointer hover:translate-x-5">
    <IoMdHeart className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
    <FaShare className="hover:text-[#c72092] w-11 h-11 p-2 rounded-md text-lg my-0.5 leading-[40px] border-2 border-gray-400 transition duration-200" />
  </div>

  <div className="image flex items-center justify-center">
    <Image src={image9} alt={""} className="w-[150px] my-3 transition duration-300 hover:scale-110" />
  </div>

  <div className="product-text">
    <h2 className="text-[30px] my-2">NIKE</h2>
    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  </div>

  <h3 className="my-[7px]">$140.77</h3>

  <div className="products_star flex justify-center text-orange-300 mb-[19px] cursor-pointer">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
  </div>

  <Link href={"#"} className="btn no-underline px-5 py-2 text-white bg-gradient-to-r from-[#c72092] to-[#6c14d0]">
    Add to cart
  </Link>
</div>


  </div>
</div>
    )
}
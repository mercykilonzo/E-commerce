"use client";
import Footer from "./shared-components/Footer";
import HeroSection from "./shared-components/Hero";
import Navigation from "./shared-components/Navigation";
import Image from "next/image";
import { MdArrowUpward, MdOutlineStar } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { MdArrowForward, MdArrowBack } from "react-icons/md";



export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <HeroSection />
      <Navigation />
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 xl:ml-35 px-6 pt-10 lg:mx-20">
          <div className="relative group bg-white rounded p-4 shadow w-100">
            <div className=" flex gap-55"> 
              <button className="bg-red-400 h-5  text-red-50 text-xs px-2 py-1">-40%</button>
              <div className="mt-3">
                <BiHeart />
                <br />
                <FaEye />
              </div>
            </div>
            <Image
              src="/images/Frame 611.svg"
              alt="Product"
              className="w-full h-40 object-contain"
              width={200}
              height={200}
            />
            <button
              className="absolute left-0 right-0 bottom-[120px] h-12 bg-black text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100
            rounded-b-[10px]"
            >
              Add To Cart
            </button>

            <div className="mt-15">
              <h4 className="font-bold">HAVIT HV-G92 Gamepad</h4>
              <div>
                <span className="text-red-500">$120</span>
                <span className="text-gray-400 line-through ml-2">$160</span>
              </div>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, idx) => (
                <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
              ))}
              <span className="text-gray-500 ml-2">(88)</span>
            </div>
          </div>

          <div className="relative group bg-white rounded p-4 shadow w-100 ">
            <div className=" flex gap-55">
              <button className="bg-red-400 text-red-50 h-5  text-xs px-1">-35%</button>
              <div className="mt-3">
                <BiHeart />
                <br />
                <FaEye />
              </div>
            </div>
            <Image
              src="/images/ak-900-01-500x500 1.svg"
              alt="Product"
              className="w-full h-40 object-contain"
              width={200}
              height={200}
            />
            <button
              className="absolute left-0 right-0 bottom-[120px] h-12 bg-black text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100
            rounded-b-[10px]"
            >
              Add To Cart
            </button>
            <div className="mt-4">
              <h4 className="font-bold mt-15">AK-900 Wired Keyboard</h4>
              <div>
                <span className="text-red-500">$960</span>
                <span className="text-gray-400 line-through ml-2">$1160</span>
              </div>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(4)].map((_, idx) => (
                <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
              ))}
              <MdOutlineStar className="text-gray-400 text-xl" />
              <span className="text-gray-500 ml-2">(75)</span>
            </div>
          </div>

          <div className="relative group bg-white rounded p-4 shadow w-100">
            <div className=" flex gap-55">
              <button className="bg-red-400 text-red-50  h-5 text-xs px-2 py-1">-30%</button>
              <div className="mt-3">
                <BiHeart />
                <br />
                <FaEye />
              </div>
            </div>
            <Image
              src="/images/Frame 613.svg"
              alt="Product"
              className="w-full h-40 object-contain"
              width={200}
              height={200}
            />
            <button
              className="absolute left-0 right-0 bottom-[120px] h-12 bg-black text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100
            rounded-b-[10px]"
            >
              Add To Cart
            </button>
            <div className="mt-15">
              <h4 className="font-bold">IPS LCD Gaming Monitor</h4>
              <div>
                <span className="text-red-500">$370</span>
                <span className="text-gray-400 line-through ml-2">$400</span>
              </div>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, idx) => (
                <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
              ))}
              <span className="text-gray-500 ml-2">(88)</span>
            </div>
          </div>

          <div className="relative group bg-white rounded p-4 shadow w-100">
            <div className=" flex gap-55">
              <button className="bg-red-400 text-red-50 h-5 text-xs px-2 py-1">-25%</button>
              <div className="mt-3">
                <BiHeart />
                <br />
                <FaEye />
              </div>
            </div>
            <Image
              src="/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.svg"
              alt="Product"
              className="w-full h-40 object-contain"
              width={200}
              height={200}
            />
            <button
              className="absolute left-0 right-0 bottom-[120px] h-12 bg-black text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100
            rounded-b-[10px]"
            >
              Add To Cart
            </button>
            <div className="mt-4">
              <h4 className="font-bold mt-15">S-Series Comfort Chair </h4>
              <div>
                <span className="text-red-500">$375</span>
                <span className="text-gray-400 line-through ml-2">$400</span>
              </div>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(4)].map((_, idx) => (
                <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
              ))}
              <span className="text-gray-500 ml-2">(88)</span>
            </div>
          </div>
        </div>
        <button className="bg-red-400 py-3 px-7 justify-center mt-10 ml-160 text-white text-sm rounded-[5px] ">View All Products</button>
        <hr className="text-gray-400 mt-15 mx-35" />
      </section>

            <section>
        <div className="flex justify-between items-center px-35 mt-18 mb-10 lg:px-30 ">
          <div>
            <h4 className="text-sm text-red-500 font-semibold">Categories</h4>
            <h1 className="font-semibold text-3xl">Browse By Category</h1>
          </div>
          <div className="flex items-center gap-4">
            <MdArrowBack className="text-3xl" />   <MdArrowForward className="text-3xl" />
          </div>
        </div>

        <div className="px-35 flex gap-10 lg:gap-5 overflow-x-auto lg:px-30">
          <div className="bg-white text-black border-1 lg:w-35 w-40 border-gray-400 rounded-lg px-13 py-6 ">
            <Image src="/images/Category-CellPhone.svg" alt="Phone" width={50} height={50} className="mb-5" />
            <p className="text-sm">Phones</p>
          </div>
          <div className="bg-white text-black border-1 w-40 border-gray-400 rounded-lg px-13 py-6 ">
            <Image src="/images/Category-Computer.svg" alt="Computers" width={50} height={50} className="mb-5" />
            <p className="text-sm">Computers</p>
          </div>
          <div className="bg-white text-black border-1 w-40 border-gray-400 rounded-lg px-13 py-6 ">
            <Image src="/images/Category-SmartWatch.svg" alt="Phone" width={50} height={50} className="mb-5" />
            <p className="text-sm">SmartWatch</p>
          </div>
          <div className="text-white border-1 w-40 border-gray-400 rounded-lg px-13 py-6 bg-red-500">
            <Image src="/images/Category-Camera.svg" alt="Phone" width={50} height={50} className="mb-5" />
            <p className="text-sm">Camera</p>
          </div>
          <div className="bg-white text-black border-1 w-40 border-gray-400 rounded-lg px-13 py-6 ">
            <Image src="/images/Category-Headphone.svg" alt="Phone" width={50} height={50} className="mb-5" />
            <p className="text-sm">HeadPhones</p>
          </div>
          <div className="bg-white text-black border-1 w-40 border-gray-400 rounded-lg px-13 py-6 ">
            <Image src="/images/Category-Gamepad.svg" alt="Phone" width={50} height={50} className="mb-5" />
            <p className="text-sm">Gaming</p>
          </div>
        </div>
        <hr className="text-gray-400 mt-15 lg:mt-20 mx-35 lg:ml-30" />
      </section>

      <section>
        <div className="flex justify-between items-center px-35 mt-18 mb-10 lg:px-30">
          <div>
            <h4 className="text-sm text-red-500 font-semibold">This Month</h4>
            <h1 className="font-semibold text-3xl">Best Selling Products</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-red-500 py-3 px-9 text-sm text-white rounded-[5]">View All</button>
          </div>
        </div>

        <div className="flex ml-35  pt-10 space-x-6 lg:ml-25">
          <div className="relative group bg-white rounded p-4 shadow w-100">
            <div className="ml-40 mt-[10px]">
              <div>
                <BiHeart />
                <br />
                <FaEye />
              </div>
            </div>
            <Image
              src="/images/Frame 605.svg"
              alt="Product"
              className="mt-[-40px]"
              width={200} 
              height={200}
            />
            <div className="mt-5">
              <h4 className="font-bold">The north coat</h4>
              <div>
                <span className="text-red-500">$260</span>
                <span className="text-gray-400 line-through ml-2">$360</span>
              </div>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, idx) => (
                <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
              ))}
              <span className="text-gray-500 ml-2">(65)</span>
            </div>
          </div>

          <div className="relative group bg-white rounded p-4 shadow w-100">
            <div className="ml-40 mt-[10px]">
              <div>
                <BiHeart />
                <br />
                <FaEye />
              </div>
            </div>
            <Image
              src="/images/Frame 606.svg"
              alt="Product"
              className="mt-[-40px]"
              width={200} 
              height={200}
            />
            <div className="mt-5">
              <h4 className="font-bold">Gucci duffle bag</h4>
              <div>
                <span className="text-red-500">$960</span>
                <span className="text-gray-400 line-through ml-2">$1160</span>
              </div>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, idx) => (
                <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
              ))}
              <span className="text-gray-500 ml-2">(65)</span>
            </div>
          </div>

          <div className="relative group bg-white rounded p-4 shadow w-100">
            <div className="ml-40 mt-[10px]">
              <div>
                <BiHeart />
                <br />
                <FaEye />
              </div>
            </div>
            <Image
              src="/images/gammaxx-l240-argb-1-500x500 1.svg"
              alt="Product"
              className="mt-[46px]"
              width={200}
              height={200}

            />
            <div className="mt-5">
              <h4 className="font-bold">RGB Liquid CPU Cooler</h4>
              <div>
                <span className="text-red-500">$160</span>
                <span className="text-gray-400 line-through ml-2">$170</span>
              </div>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, idx) => (
                <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
              ))}
              <span className="text-gray-500 ml-2">(65)</span>
            </div>
          </div>

          <div className="relative group bg-white rounded p-4 shadow w-100">
            <div className="ml-40 mt-[10px]">
              <div>
                <BiHeart />
                <br />
                <FaEye />
              </div>
            </div>
            <Image
              src="/images/Frame 612.svg"
              alt="Product"
              className="mt-[-40px]"
              width={200}
              height={200}
            />
            <div className="mt-5">
              <h4 className="font-bold">Small Bookself</h4>
              <div>
                <span className="text-red-500">$360</span>
              </div>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, idx) => (
                <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
              ))}
              <span className="text-gray-500 ml-2">(65)</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-black text-white flex mt-10 ml-35 gap-40 px-10 pt-5 w-300 lg:ml-25 lg:w-270 lg:h-110 lg:px-20">
          <div>
            <h4 className="text-green-500 pt-10 pb-5 font-bold">Categories</h4>
            <h1 className="text-5xl text-white font-bold">Enhance Your <br /> Music Experience</h1>
            <div className="flex gap-3 text-sm/4 mt-5">
              <div className="text-center bg-white text-black text-xs rounded-[50] p-2">23 <br /> Hours</div>
              <div className="text-center bg-white text-black text-xs rounded-[50] p-2">05 <br /> Days</div>
              <div className="text-center bg-white text-black text-xs rounded-[50] p-2">59 <br /> Minutes</div>
              <div className="text-center bg-white text-black text-xs rounded-[100] p-2">35 <br /> Seconds</div>
            </div>
            <button className="bg-green-600 py-3 px-9 text-sm text-white rounded-[5] mt-10">Buy Now!</button>
          </div>

          <div className="mt-[90px]">
            <Image src="/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.svg" alt="JBU" width={600} height={590} />
          </div>
        </div>
      </section>

      <section >
        <div className="flex justify-between items-center px-35 mt-18 mb-10 lg:px-30">
          <div>
            <h4 className="text-sm text-red-500 font-semibold">Categories</h4>
            <h1 className="font-semibold text-3xl">Browse By Category</h1>
          </div>
          <div className="flex items-center gap-4">
            <MdArrowBack className="text-3xl" />   <MdArrowForward className="text-3xl" />
          </div>
        </div>
        <div className="flex ml-35  pt-10 space-x-6 lg:ml-25">
          <div className="relative group bg-white rounded p-4 shadow w-100">
            <div className="ml-40 mt-[10px]">
              <div>
                <BiHeart />
                <br />
                <FaEye />
              </div>
            </div>
            <Image src="/images/Frame 604.svg" alt="Product" className="mt-[-40px]" width={200} height={200} />
            <button
              className="absolute w-50 bottom-[85px] h-12 bg-black text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100
            rounded-b-[10px]">Add To Cart</button>

            <div className="mt-12">
              <h4 className="font-bold text-sm">Breed Dry Dog Food</h4>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-red-500">$100</span>
              {[...Array(5)].map((_, idx) => (
                <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
              ))}
              <span className="text-gray-500 ml-2">(35)</span>
            </div>
          </div>

          <div className="relative group bg-white rounded p-4 shadow w-100">
            <div className="ml-40 mt-[10px]">
              <div>
                <BiHeart />
                <br />
                <FaEye />
              </div>
            </div>
            <Image src="/images/Frame 604 (1).svg" alt="Product" className="mt-[-40px]" width={200} height={200} />
            <button
              className="absolute w-50 bottom-[85px] h-12 bg-black text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100
            rounded-b-[10px]">Add To Cart</button>

            <div className="mt-12">
              <h4 className="font-bold text-sm">CANON EOS DSLR Camera</h4>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-red-500">$360</span>
              {[...Array(5)].map((_, idx) => (
                <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
              ))}
              <span className="text-gray-500 ml-2">(95)</span>
            </div>
          </div>
          <div className="relative group bg-white rounded p-4 shadow w-100">
            <div className="ml-40 mt-[10px]">
              <div>
                <BiHeart />
                <br />
                <FaEye />
              </div>
            </div>
            <Image src="/images/Frame 604 (2).svg" alt="Product" className="mt-[-40px]" width={200} height={200} />
            <button
              className="absolute w-50 bottom-[85px] h-12 bg-black text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100
            rounded-b-[10px]">Add To Cart</button>

            <div className="mt-12">
              <h4 className="font-bold text-sm">ASUS FHD Gaming Laptop</h4>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-red-500">$700</span>
              {[...Array(5)].map((_, idx) => (
                <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
              ))}
              <span className="text-gray-500 ml-2">(325)</span>
            </div>
          </div>

          <div className="relative group bg-white rounded p-4 shadow w-100">
            <div className="ml-40 mt-[10px]">
              <div>
                <BiHeart />
                <br />
                <FaEye />
              </div>
            </div>
            <Image src="/images/image.png" alt="Product" className="mt-[-40px]" width={200} height={200} />
            <button
              className="absolute w-50 bottom-[85px] h-12 bg-black text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100
            rounded-b-[10px]">Add To Cart</button>

            <div className="mt-11">
              <h4 className="font-bold text-sm">CANON EOS DSLR Camera</h4>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-red-500">$500</span>
              {[...Array(5)].map((_, idx) => (
                <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
              ))}
              <span className="text-gray-500 ml-2">(145)</span>
            </div>
          </div>
        </div>
        
         <div className="flex ml-35  pt-10 space-x-36 lg:ml-25 lg:space-x-22">
        <div className="relative group bg-white rounded p-4 shadow w-50">
          <div className=" flex justify-between items-center">
            <button className="bg-green-400 text-red-50 text-xs px-2 py-1">NEW</button>
            <div className="mt-3">
              <BiHeart />
              <br />
              <FaEye />
            </div>
          </div>
          <Image
            src="/images/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.svg"
            alt="Product"
            className="w-full h-40 object-contain"
            width={200}
            height={200}
          />
          <button
            className="absolute left-0 right-0 bottom-[120px] h-12 bg-black text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100
            rounded-b-[10px]">Add To Cart </button>
          <div className="mt-4">
            <h4 className="font-bold mt-15">Kids Electric Car </h4>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-red-500">$960</span>
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(65)</span>
          </div>
        </div>
        <div className="relative group bg-white rounded p-4 shadow w-50">
          <div className=" flex justify-between items-center">
            <button className="bg-green-400 text-red-50 text-xs px-2 py-1">NEW</button>
            <div className="mt-3">
              <BiHeart />
              <br />
              <FaEye />
            </div>
          </div>
          <Image
            src="/images/Frame 608.svg"
            alt="Product"
            className="w-full h-40 object-contain"
            width={200}   
            height={200}
          />
          <button
            className="absolute left-0 right-0 bottom-[120px] h-12 bg-black text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100
            rounded-b-[10px]">Add To Cart </button>
          <div className="mt-4">
            <h4 className="font-bold mt-15">Jr.Zoom Soccer Cleats </h4>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-red-500">$1160</span>
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(35)</span>
          </div>

        </div>
        <div className="relative group bg-white rounded p-4 shadow w-50">
          <div className=" flex justify-between items-center">
            <button className="bg-green-400 text-red-50 text-xs px-2 py-1">NEW</button>
            <div className="mt-3">
              <BiHeart />
              <br />
              <FaEye />
            </div>
          </div>
          <Image
            src="/images/Frame 608 (1).svg"
            alt="Product"
            className="w-full h-40 object-contain"
            width={200}
            height={200}
          />
          <button
            className="absolute left-0 right-0 bottom-[120px] h-12 bg-black text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100
            rounded-b-[10px]">Add To Cart </button>
          <div className="mt-4">
            <h4 className="font-bold mt-15">Gp11 Shooter USB Gamepad </h4>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-red-500">$660</span>
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(65)</span>
          </div>

        </div>
         <div className="relative group bg-white rounded p-4 shadow w-50">
          <div className=" flex justify-between items-center">
            <button className="bg-green-400 text-red-50 text-xs px-2 py-1">NEW</button>
            <div className="mt-3">
              <BiHeart />
              <br />
              <FaEye />
            </div>
          </div>
          <Image
            src="/images/Frame 608 (2).svg"
            alt="Product"
            className="w-full h-40 object-contain"
            width={200}
            height={200}
          />
          <button
            className="absolute left-0 right-0 bottom-[120px] h-12 bg-black text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100
            rounded-b-[10px]">Add To Cart </button>
          <div className="mt-4">
            <h4 className="font-bold mt-15">Quited Satin Jacket </h4>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-red-500">$660</span>
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(55)</span>
          </div>
        </div>
        </div>
         <button className="bg-red-400 py-3 px-7 justify-center mt-10 ml-160 text-white text-sm rounded-[5px] lg:ml-140 ">View All Products</button>
        <hr className="text-gray-400 mt-15 mx-35 lg:mx-25" />

      </section>
      <section>
        <div>
          <h4 className="text-sm text-red-500 font-semibold px-35 lg:px-25 mt-18">Featured</h4>
          <h1 className="font-semibold text-3xl px-35 lg:px-25">New Arrival</h1>
        </div>
        <div>
          <div>
          <Image src="/images/Frame 739.svg" alt="New Arrival" width={1400} height={500} className="mt-10 ml-35 lg:ml-25 lg:w-260" />
          </div>
        </div>
      </section>


      <section className="flex gap-40 mx-45 my-20 lg:mx-25">
        <div className="justify-center items-center">
          <Image src="/images/Services.svg" alt="servives" width={100} height={50}/>
          <h2 className="font-bold">FREE AND FAST DELIVERY</h2>
          <p className="text-xs">Free delivery for all orders over $140</p>
        </div>
        <div>
          <Image src="/images/Services (1).svg" alt="servives" width={100} height={50}/>
          <h2 className="font-bold">24/7 CUSTOMER SERVICE</h2>
          <p className="text-xs">Friendly 24/7 customer support</p>
        </div>
        <div>
          <Image src="/images/Services (2).svg" alt="servives" width={100} height={50}/>
          <h2 className="font-bold">MONEY BACK GUARANTEE</h2>
          <p className="text-xs">We reurn money within 30 days</p>
        </div>
        <MdArrowUpward className=" ml-10 text-3xl mt-30"/>
      </section>
    <Footer/>

    </div>




  )
}


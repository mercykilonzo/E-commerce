import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

const Navigation = () => {
    return (
      <div className="flex px-6  gap-6 mb-20 w-full">
      <aside className="pl-30 border-r-1 border-gray-300 pr-6 pt-10 lg:pl-15 lg:pr-10 lg:w-1/4">
        <ul className="space-y-2 text-sm">
          <li className="flex gap-20">Woman’s Fashion <MdArrowForward/></li>
          <li className="flex gap-25">Men’s Fashion <MdArrowForward/></li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Babys & Toys </li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </aside>

      <div className="bg-black text-white flex mt-10 ml-10 gap-20 px-10 pt-5 w-210 ">
        <div>
          <div className="flex gap-6 pt-10">
            <Image src="/images/apple_gray_logo 1.svg" alt="Hero Image" width={40} height={50} />
            <p className="pt-3 text-sm"> iPhone 14 Series</p>
          </div>
          <h1 className="text-4xl/14 font-bold lg:text-3xl"> Up to 10% <br /> Off Voucher</h1>
          <p className="flex gap-3 text-sm/4" ><u>Shop Now</u><MdArrowForward/></p>
        </div>
        <div>
          <Image src="/images/hero_endframe__cvklg0xk3w6e_large 2.svg" alt="Hero Image" width={500} height={500} />
        </div>
      </div>
      
     
    </div>
    )
};
export default Navigation;
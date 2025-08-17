import { MdArrowDropDown } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiCart } from "react-icons/bi";

const HeroSection = () => {
    return (
        <div>
            <div className="flex justify-between items-center pl-120 pr-49 py-3  bg-black text-red-50 text-sm lg:pl-30 lg:pr-20 lg:w-full" >
                <div>
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <strong><u>ShopNow</u></strong></p>
                </div>
                <div className="flex items-center">
                    <p>English</p>
                    <MdArrowDropDown className="inline-block text-2xl" />

                </div>
            </div>

            <div className="flex justify-between items-center pb-5 pt-8 pl-37 pr-50 border-b-1 border-gray-300  bg-white text-black lg:pl-20">
                <div>
                    <h1 className="text-2xl font-semibold">Exclusive</h1>
                </div>
                <div>
                    <nav className="flex justify-between items-center space-x-15">
                        <a href="">Home</a>
                        <a href="">Contact</a>
                        <a href="">About</a>
                        <a href="">Sign Up</a>
                    </nav>
                </div>

                <div className="flex items-center gap-2">
                    <button className="bg-gray-100 p-2 text-xs text-gray-500">What are you looking for?<BiSearch className="inline-block text-2xl ml-2" /></button>
                    <BiHeart className="inline-block text-2xl ml-4" />
                    <BiCart className="inline-block text-2xl ml-4" />
                </div>
            </div>

        </div>
    )
};
export default HeroSection;
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white pt-12 pb-10 text-base/8 ">
        <div className="flex gap-20 pl-35 pb-10 lg:pl-23 lg:gap-20">
          <div>
            <h1 className="text-lg font-semibold mb-1">Exclusive</h1>
            <h2>Subscribe</h2>
            <p>Get 10% off your first order</p>
            <br />
            <input type="text" placeholder="Enter your email" className="border p-2" />
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-1">Support</h1>
            <p>
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-1">Account</h1>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-1">Quick Link</h1>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>

          <div className="text-white bg-black max-w-xs rounded-2xl">
            <h3 className="text-lg font-semibold mb-1">Download App</h3>
            <p className="text-sm text-gray-400 mb-4">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center gap-4">

              <Image src="/images/Qrcode 1.svg" alt="QR Code" width={80} height={80} />

              <div className="flex flex-col gap-3">
                <Link href="https://play.google.com" target="_blank">
                  <Image src="/images/download-playstore.svg" alt="Google Play" width={130} height={40} />
                </Link>
                <Link href="https://apps.apple.com" target="_blank">
                  <Image src="/images/download-appstore.svg" alt="App Store" width={130} height={40} />
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <FaFacebook className="text-2xl mt-4" />
              <FaTwitter className="text-2xl mt-4 ml-5" />
              <FaInstagram className="text-2xl mt-4 ml-5" />
              <FaLinkedin className="text-2xl mt-4 ml-5" />
            </div>
          </div>
        </div>

        <hr className="bg-gray-400" />
        <p className="pt-6 pl-150  text-gray-400"> &copy; Copyright Rimel 2022. All right reserved</p>
      </footer>

    </div>

  )};
export default Footer;
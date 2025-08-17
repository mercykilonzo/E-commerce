import Image from "next/image";
import Footer from "../shared-components/Footer";
import HeroSection from "../shared-components/Hero";
const Login = () => {
  return (
    <div>
      <HeroSection />

      <div className="flex gap-50 items-center h-screen bg-gray-100">
        <Image src="/images/dl.beatsnoop 1.svg" alt="Signup image" width={900} height={500} />
        <div>
          <form>
            <h1 className="text-3xl">Log in to Exclusive</h1>
            <br />
            <p>Enter your details below</p>
            <br />
            <input type="email" placeholder="Email or Phone Number" className="border-b-2 border-gray-300 p-2 pr-30 " />
            <br /><br />
            <input type="password" placeholder="Password" className="border-b-2 border-gray-300 p-2 pr-30" />
            <br /><br />
            <button type="submit" className="bg-red-700 text-white py-3 px-9">Log In</button> <span className="pl-32 text-red-500">Forget Password?</span>


          </form>

        </div>
      </div>
      <Footer />

    </div>
  )
}
export default Login;
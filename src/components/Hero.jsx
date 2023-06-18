
import Button from "./Button"
import { hero } from "../assets"

const Hero = () => {
  return (
    <section className="w-full h-[600px] py-24 px-36 bg-slate-100 flex justify-between">
      <div className="flex flex-col justify-center items-start">
        <h1 className="font-inter font-bold text-[64px]">Lessons and insights <br />
          <span className="text-green-600">from 8 years</span> </h1>
        <p className="font-inter text-[16px] font-normal">Where to grow your business as a photographer: site or social media?</p>
        <div className="mt-8">
          <Button title="Register" />
        </div>
      </div>
      <div className="my-auto mx-0">
        <img src={hero} alt="hero" className="object-contain" />
      </div>
    </section>




  )
}

export default Hero
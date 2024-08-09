import { BentoGridDemo } from "./BentoGridDemo"


const Features = () => {
  return (
   <section className="bg-black -mt-[30rem] relative z-10">
        <div className="flex flex-col items-center justify-center w-[45rem] mx-auto">
            <h2 className="text-6xl text-primary-100 text-center font-bold">Unlock the Power of Seamless <span className="text-gradient">Customer</span>  Management</h2>
            <p className=" text-primary-100 text-center my-2">Discover our CRM system's key features designed to enhance engagement</p>
        </div>
        <div className=" mt-5">
            <BentoGridDemo/>
        </div>
   </section>
  )
}

export default Features
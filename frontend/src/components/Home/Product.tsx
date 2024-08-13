import { TabsDemo } from "./TabsDemo"


const Product = () => {
  return (
    <>
      <section className=' max-container bg-black pt-[5rem]'>
        <div className=' flex flex-col items-center justify-center gap-3'>
          <img src="./assets/icons/window.png" alt="window" className=" w-[5rem] h-auto"  />
          <h1 className=' text-6xl font-bold text-primary-500'>Perfect set of <span className="text-gradient">tools</span></h1>
          <p className='font-sans font-normal text-neutral-600 text-lg '>Proactive comes with perfect tools for the perfect jobs out there.</p>
        </div>
        <div className="flex flex-col">
          <div className="flex  justify-between">
            <div className="flex flex-col gap-3 justify-center px-4 w-1/3">
              <img src="./assets/icons/cloud.png" alt="dashboard" className="w-[10rem] h-auto " />
              <h1 className=" text-3xl font-bold text-primary-500 ">Dynamic Business Hub</h1>
              <p className="font-sans font-normal text-pretty text-neutral-400 text-lg">
                Experience a fully customizable dashboard that empowers you to monitor every aspect of your business. 
                Stay ahead of the curve with a dashboard tailored to your unique business needs.
              </p>
              <button className="px-8 py-2 rounded-full w-[10rem] bg-purple-gradient  text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                Read More
              </button>
            </div>
            <div className="w-2/3"><TabsDemo/></div>
          </div>
          <div className="flex  justify-between mt-[15rem]">
            <div className="w-1/2 px-5">
              <img src="./assets/images/woman1.webp" className=" rounded-md bg-purple-gradient " />
            </div>
            <div className="flex flex-col gap-3 justify-center  px-4 w-1/2">
              <img src="./assets/images/custom1.png" alt="dashboard" className="w-[4rem] h-auto rounded-md mx-auto my-5 " />
              <h1 className=" text-3xl font-bold text-primary-500 ">Smart Support Hub</h1>
              <p className="font-sans font-normal text-pretty text-neutral-400 text-lg">
                Harness the power of AI to deliver exceptional customer support. Our intelligent system learns from every interaction, 
                ensuring your customers receive fast, accurate, and personalized assistance every time.
              </p>
              <button className="px-8 py-2 rounded-full w-[10rem] bg-purple-gradient  text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                Read More
              </button>
            </div>
          </div>
          <div className="flex  justify-between mt-[15rem]">
            <div className="flex flex-col gap-3 justify-center  px-4 w-1/2">
              <img src="./assets/icons/teamcon.png" alt="dashboard" className="w-[8rem] h-auto rounded-md mx-auto my-5 " />
              <h1 className=" text-3xl font-bold text-primary-500 ">Smart Support Hub</h1>
              <p className="font-sans font-normal text-pretty text-neutral-400 text-lg">
                Harness the power of AI to deliver exceptional customer support. Our intelligent system learns from every interaction, 
                ensuring your customers receive fast, accurate, and personalized assistance every time.
              </p>
              <button className="px-8 py-2 rounded-full w-[10rem] bg-purple-gradient  text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                Read More
              </button>
            </div>
            <div className="w-1/2 px-5">
              <img src="./assets/images/member.png" className=" rounded-md bg-purple-gradient " />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
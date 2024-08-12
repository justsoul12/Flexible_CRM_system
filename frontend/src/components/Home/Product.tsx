

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
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-3 justify-center px-3">
              <img src="./assets/icons/cloud.png" alt="dashboard" className="w-[10rem] h-auto " />
              <h1 className=" text-3xl font-bold text-primary-100 ">Dynamic Business Hub</h1>
              <p className="font-sans font-normal text-neutral-600 text-lg">
                Experience a fully customizable dashboard that empowers you to monitor every aspect of your business. 
                Stay ahead of the curve with a dashboard tailored to your unique business needs.
              </p>
            </div>
            <img src="./assets/images/product1.png" alt="product" className="w-[50rem] h-[50rem]" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
import { Button } from "../ui/button"


const Hero = () => {
  return (
    <>
        <section className=" text-primary-500 relative overflow-hidden h-screen primary-bg-gradient">
            <div className=" flex flex-col items-center justify-center my-[5rem] gap-5">
                <h1 className=" text-5xl font-bold w-[40rem] text-center">The Best Customer Relationship Managment System</h1>
                <p className=" text-secondary-100 text-center w-[40rem]">A Scalable for both creators and brands to boost conversations, buid relationship and bank through the power of influence</p>
                <div className=" flex gap-5 mt-3 items-center ">
                    <Button className=" bg-secondary-200 text-dark-400">Start free trial</Button>
                    <p>Or</p>
                    <Button className=" bg-background text-dark-100 px-5 rounded-sm">Dashboard</Button>
                </div>
            </div>
            <img
                src="./assets/images/chatbot.png"
                alt="Floating Image 1"
                className="absolute top-0 left-[1rem] w-25 h-25 transform -translate-x-1/2 -translate-y-1/2 animate-floating"
            />
            <img
                src="./assets/images/dashboard.png"
                alt="Floating Image 2"
                className="absolute -bottom-10 right-[5rem] w-50 h-50 transform translate-x-1/2 translate-y-1/2 animate-floating"
            />
            <img
                src="./assets/images/finger.png"
                alt="Floating Image 3"
                className="absolute bottom-[13rem] right-[2rem] w-50 h-50 animate-floating"
            />
            <img
                src="./assets/images/media.png"
                alt="Floating Image 3"
                className="absolute top-[20rem] left-[10rem] w-25 h-25 transform -translate-x-1/2 -translate-y-1/2 animate-floating"
            />
        </section>
    </>
  )
}

export default Hero
import { Button } from "../ui/button"
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";


const Hero = () => {
    const words = [
        {
          text: "Transform",
        },
        {
          text: "the Way You",
        },
        {
          text: "Connect",
          className: "text-purple-gradient dark:text-purple-gradient",
        },
        {
          text: "with",
          className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "Customers",
        },
      ];
  return (
    <>
        <section className=" text-primary-500 relative overflow-hidden h-screen bg-black">
            <div className=" flex flex-col items-center justify-center mt-[5rem] gap-5">
                <h1 className=" text-5xl font-bold w-[50rem] text-center "> 
                    <TypewriterEffectSmooth words={words} className=" text-primary-100" />
                </h1>
                <p className=" text-secondary-100 text-center w-[40rem]">Empower your business with our scalable Customer Management System. Streamline communication, build stronger relationships, and drive growth with powerful tools designed for creators and brands.</p>
                <div className=" flex gap-5 mt-3 items-center ">
                    <Button className=" bg-purple-gradient  text-white">Start free trial</Button>
                    <p>Or</p>
                    <Button className=" bg-background text-dark-100 px-5 rounded-sm">Dashboard</Button>
                </div>
            </div>
            <img
                src="./assets/images/chatbot.png"
                alt="Floating Image 1"
                className="absolute top-20 left-[-3rem] w-25 h-25 transform -translate-x-1/2 -translate-y-1/2 animate-floating"
            />
            {/* <img
                src="./assets/images/dashboard.png"
                alt="Floating Image 2"
                className="absolute -bottom-40 right-[5rem] w-50 h-50 transform translate-x-1/2 translate-y-1/2 animate-floating"
            /> */}
            <img
                src="./assets/images/finger.png"
                alt="Floating Image 3"
                className="absolute bottom-[5rem] right-[2rem] w-50 h-50 animate-floating"
            />
            {/* <img
                src="./assets/images/media.png"
                alt="Floating Image 3"
                className="absolute top-[20rem] left-[10rem] w-25 h-25 transform -translate-x-1/2 -translate-y-1/2 animate-floating"
            /> */}
        </section>
    </>
  )
}

export default Hero
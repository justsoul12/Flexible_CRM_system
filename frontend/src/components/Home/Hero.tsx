import { cn } from "@/lib/utils";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import { Button } from "../ui/button"
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Vortex } from "../ui/vortex";
import { ChevronRight } from "lucide-react";


const Hero = () => {
    const words = `Transform the Way You Connect with Customers`
    
  return (
    <>
        <header>
            <section className=" text-primary-500 relative overflow-hidden h-screen bg-black">
          <Vortex 
            backgroundColor="black"
            rangeY={800}
            particleCount={500}
            baseHue={120}
            className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
          >
                <div className=" flex flex-col items-center justify-center mt-[5rem] gap-5">
                <AnimatedGradientText className=" shadow-sm shadow-purple-500">
                  🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-white" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#642e9b] via-[#9c40ff] to-[#c096fc] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                    )}
                  >
                    Introducing Prime
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
                    <h1 className=" text-5xl font-bold w-[50rem] text-center ">
                        <TextGenerateEffect words={words} className=" text-6xl text-primary-100" />
                    </h1>
                    <p className=" text-secondary-100 text-center w-[40rem]">Empower your business with our scalable Customer Management System. Streamline communication, build stronger relationships, and drive growth with powerful tools designed for creators and brands.</p>
                    <div className=" flex gap-5 mt-3 items-center ">
                        <Button className=" bg-purple-gradient  text-white">Start free trial</Button>
                        <p>Or</p>
                        <Button className=" bg-background text-dark-100 px-5 rounded-sm">Dashboard</Button>
                    </div>
                </div>
                {/* <img
                    src="./assets/images/chatbot.png"
                    alt="Floating Image 1"
                    className="absolute top-20 left-[-3rem] w-25 h-25 transform -translate-x-1/2 -translate-y-1/2 animate-floating"
                /> */}
                {/* <img
                    src="./assets/images/dashboard.png"
                    alt="Floating Image 2"
                    className="absolute -bottom-40 right-[5rem] w-50 h-50 transform translate-x-1/2 translate-y-1/2 animate-floating"
                /> */}
                {/* <img
                    src="./assets/images/finger.png"
                    alt="Floating Image 3"
                    className="absolute bottom-[5rem] right-[2rem] w-50 h-50 animate-floating"
                /> */}
                {/* <img
                    src="./assets/images/media.png"
                    alt="Floating Image 3"
                    className="absolute top-[20rem] left-[10rem] w-25 h-25 transform -translate-x-1/2 -translate-y-1/2 animate-floating"
                /> */}
          </Vortex>
            </section>
        </header>
    </>
  )
}

export default Hero
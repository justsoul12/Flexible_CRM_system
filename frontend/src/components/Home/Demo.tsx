

import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { ContainerScroll } from "../ui/container-scroll-animation";


const Demo = () => {
  return (
    <section className="">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
       <div className="flex flex-col overflow-hidden mt-5">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white mb-10">
            Experience Our Platform  in Action  <br />
              <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none">
             
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`./assets/images/demo.jpeg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
      </motion.h1>
      </LampContainer>
    </section>
  )
}

export default Demo
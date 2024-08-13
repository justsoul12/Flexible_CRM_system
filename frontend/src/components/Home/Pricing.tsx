import { CardSpotlight } from "@/components/ui/card-spotlight";
import { pricing } from "@/constants";

const Pricing = () => {
  return (
   <>
    <section className="bg-black pt-[5rem]">
        <div className=" flex flex-col items-center justify-center gap-3 text-center my-[2rem]  ">
            <h1 className=" text-5xl font-bold text-primary-500">Simple <span className=" text-gradient">pricing</span></h1>
            <p className="font-sans font-normal text-neutral-600 text-lg"> Simple pricing for startups, small businesses, medium scale businesses and enterprises.</p>
        </div>
        <div className="flex flex-wrap gap-5">
            {pricing.map((item)=>(
                <CardSpotlight key={item.id} className="h-96 w-96 ">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    {item.title}
                </p>
                <div className="text-neutral-200 mt-4 relative z-20">
                    {item.description}
                    <ul className="list-none  mt-2">
                        {item.features.map((comp)=>(
                            <Step title={comp}/>
                        ))}
                    </ul>
                </div>
                <div className="mt-7">
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Get Started
                        </span>
                    </button>
                </div>
                </CardSpotlight>
            ))}
        </div>
    </section>
   </>
  )
}


const Step = ({ title }: { title: string }) => {
    return (
      <li className="flex gap-2 items-start">
        <CheckIcon />
        <p className="text-white">{title}</p>
      </li>
    );
  };
  
  const CheckIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
          fill="currentColor"
          strokeWidth="0"
        />
      </svg>
    );
  };
  
export default Pricing
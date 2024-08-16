import { fAQList } from "@/constants"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"


const FAQ = () => {
  return (
    <>
    <div className=" bg-black pt-[25rem] flex flex-col items-center justify-center">
        <div className=" mb-10">
            <p className=" text-5xl font-bold text-center text-primary-100">Frequently asked questions</p>
        </div>
        <div className=" w-2/3 text-primary-500 py-4">
            <Accordion type="single" collapsible className="w-full">
                {fAQList.map((faq)=>(
                     <AccordionItem key={faq.id} value="item-1" className=" px-4 py-2 rounded-xl bg-border-100 mb-6">
                     <AccordionTrigger className=" no-underline">{faq.title}</AccordionTrigger>
                     <AccordionContent>
                       {faq.detail}
                     </AccordionContent>
                   </AccordionItem>
                ))}
            </Accordion>
        </div>
    </div>
    </>
  )
}

export default FAQ
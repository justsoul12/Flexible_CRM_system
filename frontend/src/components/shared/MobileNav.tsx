import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { SidebarLinks } from "@/constants"
import { Link } from "react-router-dom"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "../ui/button"
import { SignedOut } from "@clerk/clerk-react"
  
  

const MobileNav = () => {
  return (
    <>
        <Sheet>
            <SheetTrigger className=" text-primary-500"><img src="./assets/icons/hamburger.svg"/></SheetTrigger>
            <SheetContent className="primary-bg-gradient">
                <SheetHeader>
                <SheetTitle className="flex items-center justify-center -mt-[3rem]" >
                    <img src="./assets/images/prime.png" alt="logo" width={150} height={150} className="pb-9" />
                    <p className="text-3xl -ml-[3.5rem] italic text-primary-500">rime</p>
                </SheetTitle>
                <SheetDescription className="flex flex-col">
                    <div className='flex flex-1 flex-col gap-3 -mt-[3rem]'>
                        {SidebarLinks.map((item) => {
                            return (
                                <Link key={item.route} to={item.route} className={`flex items-center justify-start gap-4  px-4`}>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className=" text-lg text-primary-500 hover:no-underline">{item.label}</AccordionTrigger>
                                            <AccordionContent className="text-primary-500">
                                            {item.label} {item.route}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    {/* <p className=' text-lg font-semibold text-primary-500 '>{item.label}</p> */}
                                </Link>
                            )
                        })}
                    </div>
                    <div className='pb-6 -mt-[1rem]'>
                        <SignedOut>
                        <div className='mt-10 flex flex-col gap-3 mb-6'>
                            <Link to='/sign-in'>
                            <Button className='border-[1px] min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none gap-2'>
                                <img 
                                    src='/assets/icons/account.svg'
                                    alt='login'
                                    width={20}
                                    height={20}
                                    className='invert-colors lg:hidden'
                                />
                                <span className=' text-primary-500'>Log In</span>
                            </Button>
                            </Link>
                            <Link to='/sign-up'>
                            <Button className=' border-[1px] text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none gap-2'>
                                <img 
                                    src='/assets/icons/sign-up.svg'
                                    alt='signup'
                                    width={20}
                                    height={20}
                                    className='invert-colors lg:hidden'
                                />
                                <span className=' text-primary-500'>Sign Up</span>
                            </Button>
                            </Link>
                        </div>
                        </SignedOut>
                    </div>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    </>
  )
}

export default MobileNav
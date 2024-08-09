/* eslint-disable @typescript-eslint/no-explicit-any */
import { components, SidebarLinks } from "@/constants"
import MobileNav from "../shared/MobileNav"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import { cn } from "@/lib/utils"
import React from "react"
import { Link } from "react-router-dom"


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const HomeNav = () => {

  return (
    <section className=" flex items-center gap-[15rem]  px-10 py-3">
        <div className="flex items-center ">
            <img src="./assets/images/prime.png" width={86} height={86} className="pb-5"/>
            <h4 className=" text-lg font-bold -ml-4 text-primary-500">Prime</h4>
        </div>
        <div className="flex items-center">
            <div className="max-sm:hidden max-md:hidden">
                <NavigationMenu>
                    <NavigationMenuList>
                        {SidebarLinks.map((sidebar) => {
                            if (sidebar.label === 'Pricing') {
                                return <Link to={sidebar.route} key={sidebar.label}><NavigationMenuItem><NavigationMenuLink  className={`${navigationMenuTriggerStyle()} text-primary-500 bg-transparent`}>{sidebar.label}</NavigationMenuLink></NavigationMenuItem></Link>
                            }

                            return (
                                <NavigationMenuItem key={sidebar.label}>
                                <NavigationMenuTrigger className="text-primary-500 bg-transparent">
                                    {sidebar.label}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="primary-bg-gradient text-primary-500">
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {components.map((component) => (
                                        <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                        >
                                        {component.description}
                                        </ListItem>
                                    ))}
                                    </ul>
                                </NavigationMenuContent>
                                </NavigationMenuItem>
                            );
                            })}

                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex items-center gap-8 ml-10">
                <Link to='/sign-in'>
                    <span className='max-lg:hidden text-secondary-100 font-spaceGrotesk text-base '>Sign In</span>
                </Link>
                <Link to='/sign-up'>
                    <span className='max-lg:hidden font-inter bg-purple-gradient text-primary-500 text-sm  px-4 py-2 rounded-sm '>Get Started</span>
                </Link>
            </div>
            <div className="hidden max-sm:block max-md:block">
                <MobileNav/>
            </div>
        </div>
    </section>
  )
}

export default HomeNav
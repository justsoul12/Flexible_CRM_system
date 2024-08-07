import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const MobileNav = () => {
  return (
    <>
        <Sheet>
            <SheetTrigger className=" text-primary-500">Menu</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    </>
  )
}

export default MobileNav
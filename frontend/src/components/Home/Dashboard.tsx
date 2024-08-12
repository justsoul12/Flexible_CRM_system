
import { SignedIn, SignOutButton, useAuth, UserButton } from "@clerk/clerk-react"


const Dashboard = () => {
    const {userId:clerkId} = useAuth()
  return (
    <>
    <SignedIn>
      <div>
        clerkId: <p className=" font-bold">{clerkId}</p>
        <SignedIn>
            <UserButton/>
          </SignedIn> 
        <SignOutButton/>
      </div>
    </SignedIn>
    </>
  )
}

export default Dashboard
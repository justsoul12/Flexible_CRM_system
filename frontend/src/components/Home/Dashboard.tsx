
import { SignedIn, SignOutButton, useAuth, UserButton } from "@clerk/clerk-react"


const Dashboard = () => {
    const {userId:clerkId} = useAuth()
  return (
    <div>
       clerkId: <p className=" font-bold">{clerkId}</p>
       <SignedIn>
          <UserButton/>
        </SignedIn> 
       <SignOutButton/>
    </div>
  )
}

export default Dashboard
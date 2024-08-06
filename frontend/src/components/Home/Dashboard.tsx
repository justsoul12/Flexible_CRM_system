
import { SignOutButton, useAuth } from "@clerk/clerk-react"


const Dashboard = () => {
    const {userId:clerkId} = useAuth()
  return (
    <div>
       clerkId: <p className=" font-bold">{clerkId}</p> 
       <SignOutButton/>
    </div>
  )
}

export default Dashboard
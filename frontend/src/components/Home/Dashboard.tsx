
import { SignedIn, SignOutButton, UserButton } from "@clerk/clerk-react"

interface Props {
  user:string
}

const Dashboard = ({user}:Props) => {
  return (
    <>
    <SignedIn>
      <div>
        clerkId: <p className=" font-bold">{JSON.parse(user)}</p>
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
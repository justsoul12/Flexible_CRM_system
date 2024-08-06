import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"



const Home = () => {
  return (
    <div>
        <h1>Hi</h1>
        <header>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    </div>
  )
}

export default Home
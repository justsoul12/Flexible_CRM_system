
import Demo from "./Demo"
import Features from "./Features"
import Hero from "./Hero"
import HomeNav from "./HomeNav"



const Home = () => {
  return (
    <>
    <section className="bg-black h-screen">
      <HomeNav/>
      <Hero/>
      <Demo/>
      <Features/>
    </section>
    </>
  )
}

export default Home
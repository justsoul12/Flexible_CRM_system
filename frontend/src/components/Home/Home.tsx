
import Demo from "./Demo"
import Hero from "./Hero"
import HomeNav from "./HomeNav"



const Home = () => {
  return (
    <>
    <section className="bg-black h-screen">
      <HomeNav/>
      <Hero/>
      <Demo/>
    </section>
    </>
  )
}

export default Home
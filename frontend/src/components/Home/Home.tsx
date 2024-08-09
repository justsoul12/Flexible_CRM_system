import Hero from "./Hero"
import HomeNav from "./HomeNav"



const Home = () => {
  return (
    <>
    <section className=" primary-bg-gradient h-screen">
      <HomeNav/>
      <Hero/>
    </section>
    </>
  )
}

export default Home
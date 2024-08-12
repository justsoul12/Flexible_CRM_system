
import Demo from "./Demo"
import Features from "./Features"
import Hero from "./Hero"
import HomeNav from "./HomeNav"
import Product from "./Product"



const Home = () => {
  return (
    <>
    <section className="bg-black h-screen">
      <HomeNav/>
      <Hero/>
      <Demo/>
      <Features/>
      <Product/>
    </section>
    </>
  )
}

export default Home
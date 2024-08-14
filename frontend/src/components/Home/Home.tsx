
import CallToAction from "./CallToAction"
import Demo from "./Demo"
import Features from "./Features"
import Hero from "./Hero"
import HomeNav from "./HomeNav"
import Pricing from "./Pricing"
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
      <Pricing/>
      <CallToAction/>
    </section>
    </>
  )
}

export default Home
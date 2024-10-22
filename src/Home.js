import React from 'react'
import HeroSection from './components/Herosection'



const Home = () => {
    const data = {
        name: "my store"
    }
  return <HeroSection myData={data}/>

}
export default Home;
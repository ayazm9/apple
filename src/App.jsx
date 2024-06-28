import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Fetures from "./components/Fetures"
import HowitWorks from "./components/HowitWorks"
import Footer from "./components/Footer"

import *as Sentry from '@sentry/react';

const App =()=>{
  
  return (
    <main className="bg-black">
    <  Navbar/>
    <  Hero/>
    <  Highlights/>
    < Model/>
    < Fetures/>
    <HowitWorks/>
    < Footer/>
    </main>

  )
}  
    
    
  
export default Sentry.withProfiler(App);

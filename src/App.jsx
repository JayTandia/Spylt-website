import React from 'react'
import NavBar from './components/NavBar'
import HeroSec from './section/HeroSec'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import MessageSec from './section/MessageSec';
import FlavourSec from './section/FlavourSec';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSec />
      <MessageSec />
      <FlavourSec />
      <div className='h-dvd'></div>
    </main>
  )
}

export default App
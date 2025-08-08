import NavBar from './components/NavBar'
import HeroSec from './section/HeroSec'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import MessageSec from './section/MessageSec';
import FlavourSec from './section/FlavourSec';
import { useGSAP } from '@gsap/react';
import NutritionSec from './section/NutritionSec';
import BenefitSec from './section/BenefitSec';
import TestimonialSec from './section/TestimonialSec';
import FooterSec from './section/FooterSec';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true
    })
  })

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id='smooth-content'>
          <HeroSec />
          <MessageSec />
          <FlavourSec />
          <NutritionSec />
          <BenefitSec />
          <TestimonialSec />
          <FooterSec />
        </div>
      </div>
    </main>
  )
}

export default App
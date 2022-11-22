import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const HeroSportarenaAnimated = () => {
  const HeroSportarenaRef = useRef()

  useEffect(() => {
    console.log(HeroSportarenaRef)
    gsap.fromTo('#box', { autoAlpha: 0 }, { autoAlpha: 1.0, duration: 5 })
  }, [])

  return (
    <h1
      id="#box"
      ref={HeroSportarenaRef}
      className="headingF py-12 text-center text-[3.0rem] uppercase text-amber-600 lg:text-[5.5rem]"
    >
      Sportarena
    </h1>
  )
}

export default HeroSportarenaAnimated

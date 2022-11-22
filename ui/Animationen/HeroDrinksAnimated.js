import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const HeroDrinksAnimated = () => {
  const HeroDrinksRef = useRef()

  useEffect(() => {
    console.log(HeroDrinksRef)
    gsap.fromTo('#box', { autoAlpha: 0 }, { autoAlpha: 1.0, duration: 5 })
  }, [])

  return (
    <h1
      id="box"
      ref={HeroDrinksRef}
      className="headingF py-12 text-center text-6xl uppercase lg:text-7xl lg:text-[5.5rem]"
    >
      Drinks & Snacks
    </h1>
  )
}

export default HeroDrinksAnimated

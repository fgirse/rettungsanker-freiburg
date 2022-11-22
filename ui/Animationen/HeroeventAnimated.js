import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const HeroEventAnimated = () => {
  const HeroEventRef = useRef()

  useEffect(() => {
    console.log(HeroEventRef)
    gsap.fromTo('#box', { autoAlpha: 0 }, { autoAlpha: 1.0, duration: 5 })
  }, [])

  return (
    <h1
      id="box"
      ref={HeroEventRef}
      className="headingF hidden py-12 text-center text-6xl uppercase text-yellow-500 lg:block lg:text-[5rem]"
    >
      Dein Event
    </h1>
  )
}

export default HeroEventAnimated

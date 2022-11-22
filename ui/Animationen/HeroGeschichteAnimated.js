import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const HeroGeschichteAnimated = () => {
  const HeroGeschichteRef = useRef()

  useEffect(() => {
    console.log(HeroGeschichteRef)
    gsap.fromTo('#box', { autoAlpha: 0 }, { autoAlpha: 1.0, duration: 5 })
  }, [])

  return (
    <h1
      id="#box"
      ref={HeroGeschichteRef}
      className="headingF py-12 text-center text-3xl uppercase text-amber-600 lg:text-8xl lg:text-[5.5rem]"
    >
      die geschichte
    </h1>
  )
}

export default HeroGeschichteAnimated

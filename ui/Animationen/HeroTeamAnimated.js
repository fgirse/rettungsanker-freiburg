import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const HeroTeamAnimated = () => {
  const HeroTeamRef = useRef()

  useEffect(() => {
    console.log(HeroTeamRef)

    gsap.fromTo('#box', { autoAlpha: 0 }, { autoAlpha: 1.0, duration: 5 })
  }, [])

  return (
    <h1
      id="box"
      ref={HeroTeamRef}
      className="headingF py-12 text-center text-5xl uppercase text-amber-600 lg:text-[4.5rem] xl:text-7xl"
    >
      das Team
    </h1>
  )
}

export default HeroTeamAnimated

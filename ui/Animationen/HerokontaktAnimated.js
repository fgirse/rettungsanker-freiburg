import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const HerokontaktAnimated = () => {
  const HerokontaktRef = useRef()

  useEffect(() => {
    console.log(HerokontaktRef)
    gsap.fromTo('#box', { autoAlpha: 0 }, { autoAlpha: 1.0, duration: 5 })
  }, [])

  return (
    <h1
      id="box"
      ref={HerokontaktRef}
      className="headingF py-12 text-center text-6xl uppercase text-amber-600 lg:text-[5.5rem]"
    >
      wohin?
    </h1>
  )
}

export default HerokontaktAnimated

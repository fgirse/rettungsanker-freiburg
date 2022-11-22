/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const LogoaltAnimated = () => {
  const LogoaltRef = useRef()

  useEffect(() => {
    console.log(LogoaltRef)
    gsap.from(LogoaltRef.current, {
      x: '400',
      y: '200',
      rotation: '+=360',
      scale: '1',
      duration: '2',
    })
  }, [])

  return (
    <div ref={LogoaltRef} className="Logoalt -mt-12 w-96">
      <Image src="/Logoalt.png" width="160" height="24" layout="responsive" alt="Logoalt" />
    </div>
  )
}

export default LogoaltAnimated

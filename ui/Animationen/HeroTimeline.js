/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const HeroTimeline = () => {
  const el = useRef()
  const q = gsap.utils.selector(el)
  const tl = useRef()

  useEffect(() => {
    tl.current = gsap
      .timeline()

      .from(q('#Overlay'), {
        autoAlpha: 0,
        duration: 2,
      })

      .from(q('#LogoAlt'), {
        autoAlpha: 0,
        duration: 2,
      })
      .from(q('#die'), {
        autoAlpha: 0,
        duration: 2,
      })
      .from(q('#kiez'), {
        autoAlpha: 0,
        duration: 2,
      })

      .to(q('#Overlay'), {
        autoAlpha: 0,
        duration: 1,
      })

      .to(q('#LogoAlt'), {
        autoAlpha: 0,
        duration: 1,
      })
      .to(q('#die'), {
        autoAlpha: 0,
        duration: 1,
      })
      .to(q('#kiez'), {
        autoAlpha: 0,
        duration: 1,
      })
  }, [])

  return (
    <div
      ref={el}
      id="Overlay"
      className="relative mt-24 hidden  lg:flex lg:w-full lg:flex-col lg:items-center lg:justify-center "
    >
      <div
        className="left-30 absolute w-9/12 rounded-2xl border bg-gray-900/75 lg:top-0 lg:h-[28vh] 2xl:top-4 2xl:h-[52vh]"
        id="Overlay"
      >
        <div className="lg:mx-auto lg:mt-[3vh] lg:w-[27vw] lg:p-4 ">
          <Image
            id="LogoAlt"
            src="/Logoalt.png"
            width="160"
            height="24"
            layout="responsive"
            alt="Logoalt"
          />
        </div>

        <p
          id="die"
          className="font-['Bowlby One SC'] headingF -mt-6 p-1 text-center uppercase text-white lg:text-[4rem] 2xl:text-[8rem]"
        >
          die
        </p>
        <p
          id="kiez"
          className="font-['Bowlby One SC'] headingF -mt-44 p-1 text-center uppercase text-red-800 lg:text-[4rem] 2xl:text-[8rem]"
        >
          kiezkneipe
        </p>
      </div>
    </div>
  )
}

export default HeroTimeline

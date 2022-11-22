"use client"

import { demos } from '#/lib/demos';
import Link from 'next/link';
import React, { useState, useEffect, useCallback } from 'react'
import Modale03 from '#/ui/Modale/Modal03'
import Animation from '#/ui/Animationen/HeroTimeline'
import NukaCarousel from '#/ui/NukaCar'
import Image from 'next/image'
import Flensburger from '#/ui/svg/Flensburger'
import Ganter from '#/ui/svg/Ganter'
import Astra from '#/ui/svg/Astra'
import sketchy from 'theme-ui-sketchy-preset'
import { ThemeProvider, Card, Text } from 'theme-ui'
import ScFreiburg from '#/ui/GetScf'

const theme = {
  ...sketchy,
}



export default function Page() {

  const [isVisible, setIsVisible] = useState(true)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  })

  const listenToScroll = useCallback(() => {
    let heightToHideFrom = 200
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    setHeight(winScroll)

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }, [isVisible])


  return (

       <>
      <section className="mx-auto mt-6 flex w-full flex-col">
        <div className="bg-top-right lg:bg-slate-300')] mx-auto h-[100vh] w-[95vw] bg-slate-900/70 bg-[url('/collage02.png')] bg-[length:96%_76.66%] bg-no-repeat sm:bg-[length:100%,50%] sm:py-4 lg:w-full lg:bg-[url('/5555.svg')] lg:bg-[length:100%_75%] lg:bg-no-repeat">
          <Animation />

          {isVisible && <ScFreiburg/>}
        </div>
      </section>

      {/*======================================================================= SECTION ÖFFNUNGSZEITEN BEGRÜSSUG ===========================================================*/}
      <section className=" mx-auto -mt-[26vh] w-full bg-slate-900 lg:mt-[15vh] 2xl:mt-5">
        {/*======================================================================= FLEXBOX ===========================================================*/}

        <div className=" h-min-  mx-auto flex w-11/12 flex-col items-center justify-center lg:-mt-[12vh] lg:flex-row lg:items-start lg:justify-start lg:gap-20 xl:-mt-60">
          <div className=" roundfulled-3xl bg-blue-700/10 lg:w-full">
            <div className="flex flex-col items-center justify-start rounded-2xl border-2">
              <p className=" text-yellow-500 py-6 px-12 text-center text-4xl font-extrabold uppercase tracking-tight md:text-5xl xl:text-5xl">
                öffnungzeiten
              </p>
              <p className="text-center text-xl text-gray-300 sm:text-xl md:text-base lg:text-xl">
                Montag-Donnerstag: 18 bis 24 Uhr
              </p>
              <p className="sm:text-1xl text-xl text-gray-300  md:text-base lg:text-xl xl:text-center">
                Freitag und Samstag: 15 bis 03 Uhr
              </p>
              <p className="sm:text-1xl xl:text- text-center text-xl   text-gray-300 md:text-base lg:text-xl">
                Sonntag: Ruhetag
              </p>
            </div>
          </div>

          <div className=" w -2/3 lg:bg--900/10">
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <div className="flex flex-col lg:flex">
                <p className="mb-3 py-6 text-center font-sans text-5xl font-bold tracking-tight text-yellow-500 xl:text-6xl">
                  Moin Moin
                </p>
                t
                <p className="z-5  dark:text-gray-400 mb-1 w-full text-justify text-[.95rem] font-normal text-gray-300 lg:text-[1.3rem] xl:text-[2.33rem] xl:leading-10">
                  <img
                    className="shape-lighthouse"
                    src="/lighthouse3.png"
                    width="150"
                    height="200"
                    layout="responsive"
                    alt="leuchtturm illustration"
                  />
                  In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im Herzen von
                  Freiburg ein Lokal eröffnet, welches es so südlich der Elbe wohl kein zweites Mal
                  gibt. Ausgebaut im Stile eines Schiffrumpfes, ist der im Herzen der Altstadt
                  gelegene Rettungsanker-Freiburg idealer Treffpunkt um nach Feiereabend etwas zu
                  entspannen und nette Leute kennenzulernen. Wir sind stolz auf unser buntes,
                  internationales Publikum. Unser Rettungsanker ist auch ideale Location zur
                  Durchführung Ihres privaten oder geschäftlichen Events{' '}
            

                  &nbsp;Sprechen Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns
                  eine email. Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen <br />
                  <br />
                  <div className="float-left h-20 w-20">
                    <Image
                      className="portraitMick rounded-full"
                      src="/portrait-mick1.png"
                      width="120"
                      height="200"
                      layout='responsive'
                      alt=""
                    />
                  </div>
                  Michael Schreck und das Team des Rettungsankers
                </p>
              </div>
            </div>
            <button
              type="button"
              className="hover:bg-orange-700- relative mx-auto mt-6 flex w-6/12 flex-col items-center justify-center rounded-lg border border-transparent bg-orange-700 px-4 py-2 font-sans text-2xl font-medium text-gray-200 hover:bg-yellow-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-3xl lg:mb-20 lg:flex lg:w-2/12 lg:flex-col lg:items-center lg:text-2xl xl:mt-2"
            >
              <svg
                className="w-16 lg:w-20 "
                fill="#ffffff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <a className="ui btn" href="mailto:rettungsanker-freiburg@gmx.de?">
                SOS e-mail
              </a>
            </button>
          </div>
        </div>
      </section>
      {/*======================================================================= ENDE FLEXBOX ===========================================================*/}
      {/*======================================================================= ENDE FLEXBOX ===========================================================*/}
      <section className=" bg-slate-900">
        <div className="hidden grid-rows-2 gap-3 overflow-hidden md:grid md:grid-cols-3 lg:grid">
          <div className="relative z-40 mx-auto w-10/12 md:w-11/12">
            <Image
              className="relative z-40"
              width="619"
              height="696"
              src="/bulleye.png"
              layout="responsive"
              alt="Bullauge"
            />
          </div>
          <div className="mx-auto w-10/12 md:w-11/12">
            <Image width="619" height="696" src="/bulleye.png" layout="responsive" alt="Bullauge" />
          </div>
          <div className="mx-auto w-10/12 md:w-11/12">
            <Image width="619" height="696" src="/bulleye.png" layout="responsive" alt="Bullauge" />
          </div>
        </div>
      </section>
      {/*======================================= SECTION KNEIPE =======================================================================*/}

      <section className="mx-auto w-full bg-slate-900 py-12">
        <h1 className="headingF text-center text-7xl text-yellow-600 lg:-mt-[58vh] lg:text-[12rem]">
          Die Kneipe
        </h1>
        <div className="w-full border-4 border-slate-400 shadow-2xl shadow-slate-300/50">
          <Image src="/Hero.png" width="2400" height="1200" layout="responsive" alt="illusration" />
        </div>
      </section>
      {/*========================================================== SECTION INFO ==============================================================*/}
      <section className="-mt-[6vh] bg-slate-900 lg:mt-0">
        <ThemeProvider theme={theme}>
          <div className="lg:max-w-8xlg:w-11/12 mx-auto -mt-1 grid grid-cols-1 items-center justify-center p-16 md:grid-cols-3 md:justify-around  md:p-6 lg:items-center lg:gap-x-5 xl:mt-[vh]">
            <Card
              className=" w-[90vw] justify-self-center lg:w-10/12"
              mb={3}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: '12px',
                color: '#ffffff',
                backgroundColor: 'rgba(104,11,11,.9)',
                border: '3px white solid',
                boxShadow: '10px 5px 10px rgba(254, 254, 254, 0.3)',
              }}
              onGotPointerCapture={2}
            >
              <div className=" border- mx-auto w-full border-gray-100 p-4 ">
                <Image
                  src="/LogoNeu.png"
                  object-fit="cover"
                  layout="responsive"
                  height="260"
                  width="250"
                  alt="Illustration"
                ></Image>
              </div>
              <Text>
                <p className="text mt-10 text-center text-2xl font-bold uppercase text-yellow-400 lg:text-[2.0rem]">
                  Kiezkneipe
                </p>
                <p className="text-center text-xl">
                  Gemütlich nordisches Ambiente im Herzen der Altstadt Freiburgs gelegen. Orginales
                  Kiez und Waterkant-Feeling mit Astra , Flensburger & Co. Frisches würziges Ganter
                  Pils vom Fass. Qualitativ hochwertige Weine aus der Region (Weingut Heinemann -
                  Scherzingen). Grosse Auswahl an Longdrinks und Cocktails. Besonders beliebt
                  Captains Blaubär und Störtebeckers Love. Eine genaue Auflistung unseres Angebotes
                  ist unter der Rubrik Drinks hinterlegt
                </p>
              </Text>
            </Card>

            <Card
              className=" w-[90vw] justify-self-center lg:w-10/12"
              mb={3}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: '12px',
                color: '#ffffff',
                backgroundColor: 'rgba(104,11,11,.9)',
                border: '3px white solid',
                boxShadow: '10px 5px 10px rgba(254, 254, 254, .3)',
              }}
              onGotPointerCapture={2}
            >
              <div className="border- mx-auto w-full border-gray-100 object-contain p-4">
                <Image
                  src="/Zeichnung-1.svg"
                  layout="responsive"
                  height="610"
                  width="610"
                  alt="fussball"
                ></Image>
              </div>
              <Text>
                <p className="text mt-10 text-center text-2xl font-bold uppercase text-yellow-400 lg:text-[2.0rem]">
                  sportarena
                </p>
                <p className="text-center text-xl">
                  Jeden Samstag-Spieltag der laufenden Bundesliga-Saison Live TV Event in unserer
                  Sportarena natürlich mit Schwerpunkt unseres SC Freiburgs. Wann immer möglich auch
                  Spiele der Champions League und natürlich der grossen Turniere von EM und WM. Bei
                  Top Spielen des SC Freiburg mit grosser Publikumsnachfrage sind Reservierungen
                  über unser Booking-Tool zu empfehlen - Unten folgender Button und Du bist direkt
                  dabei !!
                </p>
              </Text>
            </Card>
            <Card
              className=" w-[90vw] justify-self-center lg:w-10/12"
              mb={3}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: '12px',
                color: '#ffffff',
                backgroundColor: 'rgba(104,11,11,.9)',
                border: '3px white solid',
                boxShadow: '10px 5px 10px rgba(254, 254, 254, .3)',
              }}
              onGotPointerCapture={2}
            >
              <div className="border- mx-auto border-gray-100">
                <Image
                  src="/Albers-white.png"
                  object-fit="cover"
                  layout="responsive"
                  height="250"
                  width="250"
                  alt="hans_albers"
                ></Image>
              </div>
              <Text>
                <p className="text mt-10 text-center text-2xl font-bold uppercase text-yellow-400 lg:text-[2.0rem]">
                  der blonde hans
                </p>
                <p className="text-center text-xl">
                  Hans Phillip August Albers (* 22.September 1891 in Hamburg , 24. Juli 1960 in
                  Berg, Bayern) war ein deutscher Schauspieler und Sänger, der als "blonder Hans"
                  zum Volksidol wurde. Zu den bekanntesten Spielfilmen in denen er mitwirkte gehören
                  "der Mann, der Sherlock Holmes war" (1937), "Münchhausen" (1943), "die grosse
                  Freiheit Nr.7" (1943) sowie "Auf fer Reeperbahn Nachts um halb eins"
                </p>
              </Text>
            </Card>
          </div>
        </ThemeProvider>
      </section>
      {/*========================================================== SEKTION BIERE ENDE ==============================================================*/}

      <section>
        <div className=" flex flex-col items-center lg:flex-row lg:justify-center ">
          <div className=" w-9/12 rounded-3xl bg-white/5 p-3">
            <p className="py-4 text-center text-[.85rem] text-slate-100">
              Sitze in der ersten Reihe und reserviere Tisch in der Sportarena!!!
            </p>
            <Modale03 />
          </div>
        </div>
      </section>
      {/*======================================= =================== ENDE SECTION ===============================================================*/}
      {/*========================================================== SECTION BIERE ==============================================================*/}
      <section className="bg-slate-900">
        <ThemeProvider theme={theme}>
          <div className="lg:max-w-8xl lg:item11s-center mx-auto -mt-1 grid grid-cols-1 items-center justify-center p-16 md:grid-cols-3 md:justify-around  md:p-6 lg:w-11/12 lg:gap-x-5 xl:mt-[vh]">
            <Card
              className="justify-self-center"
              mb={3}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: '12px',
                color: '#ffffff',
                backgroundColor: 'orange',
                border: '3px white solid',
                boxShadow: '10px 5px 10px rgba(244, 216, 154, 0.9)',
              }}
              onGotPointerCapture={2}
            >
              <div className="border- mx-auto border-gray-100">
                <Astra object-fit="cover" height="25vh" width="100%"></Astra>
              </div>
              <Text>
                <p className="text mt-10 text-center text-2xl font-bold uppercase">Astra Bier</p>
                <p className="text-center text-xl">natürlich direkt vom Kiez in den Anker</p>
              </Text>
            </Card>

            <Card
              className="justify-self-center"
              mb={3}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: '12px',
                color: '#ffffff',
                backgroundColor: 'orange',
                border: '3px white solid',
                boxShadow: '10px 5px 10px rgba(244, 216, 154, 0.9)',
              }}
              onGotPointerCapture={2}
            >
              <div className="border- mx-auto border-gray-100">
                <Ganter aobject-fit="cover" height="25vh" width="100%"></Ganter>
              </div>
              <Text>
                <p className="text mt-10 text-center text-2xl font-bold uppercase">Ganter Bier</p>
                <p className="text-center text-xl">köstliches Ganter-Bräu vom Fass</p>
              </Text>
            </Card>
            <Card
              className="justify-self-center"
              mb={3}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: '12px',
                color: '#ffffff',
                backgroundColor: 'orange',
                border: '3px white solid',
                boxShadow: '10px 5px 10px rgba(244, 216, 154, 0.9)',
              }}
              onGotPointerCapture={2}
            >
              <div className="border- mx-auto border-gray-100">
                <Flensburger object-fit="cover" height="25vh" width="100%"></Flensburger>
              </div>
              <Text>
                <p className="text mt-10 text-center text-2xl font-bold uppercase">Flensburger</p>
                <p className="text-center text-xl">das blonde Herbe aus dem hohen Norden</p>
              </Text>
            </Card>
          </div>
        </ThemeProvider>
      </section>

      {/*========================================================== SEKTION BIERE ENDE ==============================================================*/}
      {/*========================================================== SEKTION CAROUSSEL ===============================================================*/}
      <section className=" mx-auto w-full bg-slate-900 py-2 md:mx-auto md:w-full lg:py-20">
        <div className="mb-2 w-5/12 lg:-mt-2 lg:w-3/12 lg:p-8 ">
          <Image
            src="/Albers-white.png"
            alt="Impressionen"
            height="208"
            width="195"
            layout="responsive"
          />
        </div>
        <h1 className="headingB lg:headingA mb-6 text-center text-5xl text-gray-50 lg:-mt-20 lg:text-[4.66rem] lg:text-yellow-500">
          Impressionen Rettungsanker
        </h1>

        <div className="mx-auto w-9/12 lg:mt-[5vh]  lg:h-auto lg:w-6/12 lg:border-4 lg:border-slate-100">
          <NukaCarousel />
        </div>
        <p className="mt-1 text-center text-xs text-white lg:text-lg">
          Impressionen aus dem Rettungsanker
        </p>
      </section>
      {/*========================================================== SECTION CAROUSSEL ENDE==============================================================*/}
      <hr className="mx-auto mt-[40vh] w-full md:w-11/12 lg:mt-0 " />
      {/*========================================================== SECTION IMPRESSUM          =================================================*/}

      {/*======================================= SECTION IMPRESSUM ENDE =======================================================================*/}
    </>
    
  );
}

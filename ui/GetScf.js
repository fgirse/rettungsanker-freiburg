"use client"

import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import SCFLogo from '../ui/svg/SCLogo'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const GetSCF = () => {
  const [tabelleBL, setTabelleBL] = useState([])
  const [dataSCF, setDataSCF] = useState([])

  const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4'
  const Url = 'https://api.football-data.org/v2/competitions/2002/standings?'
  const url2 = (Url, { headers: { 'X-Auth-Token': Token } })
  const url3 = 'https://api.randomuser.me/'
  const url4 =
    'https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4'

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios(Url, { headers: { 'X-Auth-Token': Token } })
    setTabelleBL(response.data.standings[0].table)
  }
  const Emblem = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === 'SC Freiburg')
    .map((data) => data.team.crestUrl)
  const Rang = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === 'SC Freiburg')
    .map((data) => data.position)
  const Spieltag = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === 'SC Freiburg')
    .map((data) => data.playedGames)
  const ToreErzielt = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === 'SC Freiburg')
    .map((data) => data.goalsFor)
  const ToreErhalten = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === 'SC Freiburg')
    .map((data) => data.goalsAgainst)
  const Siege = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === 'SC Freiburg')
    .map((data) => data.won)
  const Niederlagen = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === 'SC Freiburg')
    .map((data) => data.lost)
  const Remis = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === 'SC Freiburg')
    .map((data) => data.draw)
  const Punkte = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === 'SC Freiburg')
    .map((data) => data.points)
  return (
    <>
      <div className="hidden rounded-2xl border text-center font-mono font-black text-white lg:fixed lg:top-[28vh] lg:right-[33vw] lg:block lg:w-5/12 lg:bg-gray-700 lg:py-1 lg:px-3 lg:text-[1.33rem] 2xl:left-[56vw] 2xl:top-[28vh]">
        <Marquee speed={120} loop={3}>
          <SCFLogo className="ml-5 mr-5  h-12 w-12 bg-white" />
          <div className="flex flex-row items-center justify-center gap-x-5">
            <p className="ml-5">
              {' '}
              ++++++++++++++++++++++++++++++++++++++++++ SC FREIBURG LIVE TICKER
              ++++++++++++++++++++++++++++++++++++++{' '}
            </p>

            <Image src={Emblem} height="32" width="36" alt="Eblem" />
            <Image src={Emblem} height="32" width="36" alt="Eblem" />
            <Image src={Emblem} height="32" width="36" alt="Eblem" />
            <p className="ml-5"> BUNDESLIGA </p>
            <svg
              className="h-8 w-8"
              stroke="#ffCC00"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
            </svg>
            <p>
              Spieltag: <span className="ml-1 text-amber-200">{Spieltag}</span>
            </p>
            <svg
              className="h-8 w-8"
              stroke="#ffCC00"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
            </svg>
            <p>
              {' '}
              Rang: <span className="ml-1 text-amber-200">{Rang}</span>
            </p>
            <svg
              className="h-8 w-8"
              stroke="#ffCC00"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
            </svg>
            <p>
              Torverhältnis:{' '}
              <span className="ml-1 text-amber-200">
                {ToreErzielt} : {ToreErhalten}
              </span>
            </p>
            <svg
              className="h-8 w-8"
              stroke="#ffCC00"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
            </svg>
            <p className="">
              Siege:<span className="ml-1 text-amber-200">{Siege}</span>
            </p>
            <svg
              className="h-8 w-8"
              stroke="#ffCC00"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
            </svg>
            <p className="">
              Niederlagen:<span className="ml-1 text-amber-200">{Niederlagen}</span>
            </p>
            <svg
              className="h-8 w-8"
              stroke="#ffCC00"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
            </svg>
            <p className="">
              Unentschieden:<span className="ml-1 text-amber-200">{Remis}</span>
            </p>
            <svg
              className="h-8 w-8"
              stroke="#ffCC00"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
            </svg>
            <p className="">
              Punkte:<span className="ml-1 text-amber-200">{Punkte}</span>
            </p>
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default GetSCF

/* eslint-disable prettier/prettier */
import * as React from 'react'

const SvgWave = (props) => (
  <svg
    style={{
      transform: 'rotate(0deg)',
      transition: '.3s',
    }}
    viewBox="0 0 1440 150"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="wave_svg__a" x1={0} x2={0} y1={1} y2={0}>
        <stop stopColor="rgba(61.137, 71.286, 175.626, 1)" offset="0%" />
        <stop stopColor="rgba(26.067, 55.507, 116.429, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <path
      style={{
        transform: 'translate(0,0)',
        opacity: 1,
      }}
      fill="url(#wave_svg__a)"
      d="m0 0 26.7 2.5C53.3 5 107 10 160 27.5 213.3 45 267 75 320 72.5c53.3-2.5 107-37.5 160-55C533.3 0 587 0 640 5c53.3 5 107 15 160 27.5C853.3 45 907 60 960 55c53.3-5 107-30 160-22.5C1173.3 40 1227 80 1280 85c53.3 5 107-25 160-25 53.3 0 107 30 160 35 53.3 5 107-15 160-32.5 53.3-17.5 107-32.5 160-40 53.3-7.5 107-7.5 160 0C2133.3 30 2187 45 2240 55c53.3 10 107 15 160 10 53.3-5 107-20 160-20 53.3 0 107 15 160 15 53.3 0 107-15 160-15 53.3 0 107 15 160 32.5 53.3 17.5 107 37.5 160 40 53.3 2.5 107-12.5 160-12.5 53.3 0 107 15 160 22.5 53.3 7.5 107 7.5 160 5 53.3-2.5 107-7.5 133-10l27-2.5v30H0Z"
    />
  </svg>
)

export default SvgWave

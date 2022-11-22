/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import Iframe from 'react-iframe'
import Script from 'next/script'
import Head from 'next/head'

export default function Schedule() {
  const article_url =
    'https://book.timify.com?accountId=62a8653b6249513136086cf4&fullscreen=1&hideCloseButton=1&locale=de-de'
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://embed.acuityscheduling.com/embed/button/26498149.css"
          id="acuity-button-styles"
        />
      </Head>

      <Script src="https://embed.acuityscheduling.com/embed/button/26498149.js" async></Script>

      <Iframe className="h-64 w-96 bg-rose-500">
        <a
          href="https://app.squarespacescheduling.com/schedule.php?owner=26498149"
          target="_blank"
          className="acuity-embed-button bg-gray-600 text-slate-50"
          style="background: #f4bf00; color: #fff; padding: 8px 12px; border: 0px; -webkit-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;-moz-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;border-radius: 4px; text-decoration: none; display: inline-block;"
        >
          Termin vereinbaren
        </a>
      </Iframe>
    </>
  )
}

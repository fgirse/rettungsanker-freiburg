/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Iframe from 'react-iframe'

export default function Modal07() {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex h-64 w-9/16 items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-green-700 bg-opacity-80 px-4 py-2 text-lg font-medium text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Tisch Reservation
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className=" relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0  bg-gray-700/75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-96 min-h-full w-10/12 items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="border-gray-100-500 h-fulll max-w-4xl transform overflow-hidden rounded-2xl border p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-3xl font-medium leading-6 text-amber-500">
                    TISCH RESERVATION
                  </Dialog.Title>
                  <div className="mt-2">
                    <a
                      href="https://app.squarespacescheduling.com/schedule.php?owner=26518831"
                      target="_blank"
                      className="acuity-embed-button"
                      style="background: #5fb8b9; color: #fff; padding: 8px 12px; border: 0px; -webkit-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;-moz-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;border-radius: 4px; text-decoration: none; display: inline-block;"
                    >
                      Termin vereinbaren
                    </a>
                    <link
                      rel="stylesheet"
                      href="https://embed.acuityscheduling.com/embed/button/26518831.css"
                      id="acuity-button-styles"
                    />
                    <script
                      src="https://embed.acuityscheduling.com/embed/button/26518831.js"
                      async
                    ></script>{' '}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      zurück
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

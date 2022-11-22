/* eslint-disable prettier/prettier */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Map from '../simpleMap'

export default function Modal02() {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="focus-visible:ring-2focus-visible:ring-white rounded-md border bg-green-700 bg-opacity-80 px-4 py-2 text-[2.0rem] font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-opacity-75"
        >
          OPENSTREET MAP
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="bg-slate-700/96 fixed  inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="border-gray-100-500 w-[66vw] max-w-md transform overflow-hidden rounded-2xl border bg-slate-900 p-6 text-left align-middle shadow-xl transition-all lg:h-[66vh]">
                  <Dialog.Title as="h3" className="text-3xl font-medium leading-6 text-amber-500">
                    OPENSTREET MAP
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className=" max-w-lg- mx-auto mt-12 mb-12 w-80 items-center border border-gray-50 bg-slate-900 px-5 py-4 text-center shadow-2xl shadow-gray-400 lg:w-96 lg:max-w-xl">
                      <Map />
                      <h1 className="mt-2 mb-2 text-center text-xs text-gray-100">
                        Illustration Altstadt Freiburg{' '}
                      </h1>
                    </div>
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

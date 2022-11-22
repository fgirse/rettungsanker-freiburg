import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Iframe from 'react-iframe'
import Logo from '../icons/svg/LogoNeu'

function Modal12() {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-start justify-start text-slate-200">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md px-4 py-2 text-lg font-medium text-white hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Datenschutz
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
            <Dialog.Overlay className="fixed inset-0  bg-slate-800/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-24 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:max-w-8xl w-full transform overflow-hidden rounded-2xl border border-gray-500 bg-slate-300 text-left align-middle shadow-xl transition-all lg:p-24">
                  <Dialog.Title
                    as="h3"
                    className="headingF py-2 text-center text-xl font-medium leading-6 text-slate-700 lg:text-9xl"
                  >
                    Datenschutz
                  </Dialog.Title>

                  <section className="items-between flex flex-col justify-end p-4 text-left text-sm text-gray-900 lg:mt-1 lg:text-justify lg:text-lg xl:py-2"></section>

                  <div className="p-5">
                    <button
                      type="button"
                      className="lg-py-1 inline-flex justify-center rounded-md border border-white bg-green-100 px-4 py-2 text-sm font-medium text-cyan-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:text-[1.66rem]"
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
export default Modal12

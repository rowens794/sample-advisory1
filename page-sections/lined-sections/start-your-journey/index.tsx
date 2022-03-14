import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function index({}: Props) {
  return (
    <section className="relative bg-gray-800">
      <div className="relative z-20 max-w-6xl px-4 py-16 m-auto md:py-24">
        <div className="m-6 md:m-12 md:my-auto">
          <div className="my-4 text-base font-light text-white md:text-lg lg:col-span-2">
            <h1 className="pl-6 font-serif text-3xl font-extrabold text-center transform -translate-x-8 border-l-8 border-primary-500 md:-translate-x-14 md:pl-12 md:text-4xl lg:text-5xl">
              Let's Get Your Journey Started
            </h1>

            <div className="w-full my-16 text-center">
              <button
                type="submit"
                className="w-64 px-4 py-2 my-4 text-lg text-center bg-transparent border-2 shadow-sm border-primary-300 text-primary-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 md:my-0"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-0 z-10 h-full border-l border-gray-400 border-dashed left-4" />
        <div className="absolute top-24 left-4 z-20 h-[calc(100%-96px)] border-l border-solid border-gray-800 bg-gray-800 md:top-28 md:h-[calc(100%-112px)]" />
      </div>
    </section>
  )
}

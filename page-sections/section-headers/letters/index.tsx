import React from 'react'
import Image from 'next/image'

type Props = {}

export default function index({}: Props) {
  return (
    <header className="relative py-12 pt-8 mt-20 overflow-hidden md:pt-20">
      <div className="relative z-10 max-w-6xl px-4 py-4 mx-auto text-center md:my-auto md:py-12">
        <h1 className="pl-6 font-serif text-3xl font-extrabold text-center md text-gray-50 md:text-4xl lg:text-5xl">
          Our Thoughs on the Markets
        </h1>
        <p className="max-w-4xl px-12 py-6 mx-auto font-serif text-center text-gray-100 md:text-lg">
          Dive into our minds and read our thoughts about what is driving
          markets and how investors should position themselves to take advantage
          of opportunities and avoid market turbulence.
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800">
        <Image
          src="/images/letter.jpg"
          layout="fill"
          objectFit="cover"
          className="opacity-10 blur-sm grayscale"
        />
      </div>
    </header>
  )
}

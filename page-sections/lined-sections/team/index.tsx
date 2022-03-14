import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { bios } from '../../../data/bios'

type Props = {}

export default function index({}: Props) {
  return (
    <section className="bg-white">
      <div className="relative max-w-6xl px-4 py-16 m-auto md:py-24">
        <div className="m-6 md:m-12 md:my-auto">
          <div className="my-4 text-base font-light text-gray-800 md:text-lg lg:col-span-2 ">
            <h1 className="pl-6 font-serif text-3xl font-extrabold text-gray-800 transform -translate-x-8 border-l-8 border-primary-500 md:-translate-x-14 md:pl-12 md:text-4xl lg:text-5xl">
              Our Advisory Team
            </h1>

            {/* <div className="flex flex-wrap justify-around py-16"> */}
            <div className="grid w-full grid-cols-1 my-8 sm:grid-cols-2 md:grid-cols-3 lg:my-16 lg:grid-cols-4">
              {Object.entries(bios).map((member: any) => {
                return (
                  <Member
                    name={member[1].name}
                    title={member[1].position}
                    photo={member[1].headshot}
                    link={`/team/${member[0]}`}
                    key={member[1].name}
                  />
                )
              })}
            </div>

            <div className="w-64 mx-auto my-8 md:mx-0">
              <Link href="/team">
                <a>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 my-4 text-lg bg-transparent border-2 shadow-sm border-primary-700 text-primary-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 md:my-0"
                  >
                    Meet Our Team
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-0 h-full border-l border-gray-400 border-dashed left-4" />
      </div>
    </section>
  )
}

const Member = ({
  name,
  title,
  photo,
  link,
}: {
  name: string
  title: string
  photo: string
  link: string
}) => {
  return (
    <Link href={link} key={name}>
      <a className="w-56 py-4 mx-auto text-center grayscale hover:grayscale-0">
        <Image
          className="rounded-full"
          src={photo}
          width={150}
          height={150}
          alt={name}
        />
        <p className="font-bold">{name}</p>
        <p className="text-sm font-light">{title}</p>
      </a>
    </Link>
  )
}

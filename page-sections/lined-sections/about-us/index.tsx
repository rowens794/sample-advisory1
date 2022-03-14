import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function index({}: Props) {
  return (
    <section className="bg-gray-300">
      <div className="relative max-w-6xl px-4 py-16 m-auto md:py-24">
        <div className="m-6 md:m-12 md:my-auto">
          <div className="gap-6 lg:grid lg:grid-cols-3">
            <div className="my-4 text-base font-light text-gray-800 md:text-lg lg:col-span-2 ">
              <h1 className="pl-6 font-serif text-3xl font-extrabold text-gray-800 transform -translate-x-8 border-l-8 border-primary-500 md:-translate-x-14 md:pl-12 md:text-4xl lg:text-5xl">
                About Wellington
              </h1>
              <p className="my-4">
                Wealth management isn't just about portfolio returns. It's about
                defining the financial goals that are important to our clients
                and doing everything in our power to ensure they reach them.
              </p>
              <p className="my-4">
                Every relationship we have is built on a foundation of
                communication. First and foremost we want to know what's
                important to you so that we can build and execute on a plan that
                will get your there.
              </p>
              <p className="my-4">
                Our investment team is among the strongest in the industry, as
                are our planners, and tax professionals. But our super power is
                knowing how to have important conversations that get to the
                heart of what you want out of life.
              </p>
              <p className="my-4">
                We are a fee-only fiduciary investment manager. These words are
                important and carry legal weight. We don't accept payment from
                anyone but our clients and that ensures that our clients
                interests always come first. Moreover, as a fiduciary we are
                legally bound to put our clients interests first.
              </p>

              <div className="w-64 my-8 ">
                <Link href="/about">
                  <a>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 my-4 text-lg bg-transparent border-2 shadow-sm border-primary-700 text-primary-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 md:my-0"
                    >
                      Our Story
                    </button>
                  </a>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <Image
                width={325}
                height={550}
                src="/images/planning_graphic.webp"
                layout="fixed"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-0 h-full border-l border-gray-400 border-dashed left-4" />
      </div>
    </section>
  )
}

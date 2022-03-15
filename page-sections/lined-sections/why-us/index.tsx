import React from 'react'

type Props = {}

export default function index({}: Props) {
  return (
    <section className="bg-gray-800">
      <div className="relative max-w-6xl px-4 py-16 m-auto md:py-24">
        <div className="m-6 md:m-12 md:my-auto">
          <h1 className="pl-6 font-serif text-3xl font-extrabold text-white transform -translate-x-8 border-l-8 border-primary-300 md:-translate-x-14 md:pl-12 md:text-4xl lg:text-5xl">
            Why Wellington Advisors?
          </h1>
          <p className="max-w-lg my-4 text-base font-light text-white md:text-lg">
            A wealth advisor is more than just someone who manages your money.
            Every client we work with is a relationship. We're here to help you
            figure out what your next steps are and how to acheieve your goals.
          </p>
        </div>

        <div className="py-8 my-16 md:gap-18 md:grid md:grid-cols-3 md:py-0">
          <div className="m-auto text-center" style={{ width: '240px' }}>
            <span className="font-extrabold text-7xl text-primary-300">
              35
              <span className="text-lg text-primary-300">yrs</span>
            </span>
            <p className="my-4 font-light text-white">
              Our advisors average over 35 years of experience
            </p>
          </div>

          <div className="m-auto text-center" style={{ width: '240px' }}>
            <span className="font-extrabold text-7xl text-primary-300">$4</span>
            <p className="my-4 font-light text-white">
              We manage over 4 billion dollars in client assets
            </p>
          </div>

          <div className="m-auto text-center" style={{ width: '240px' }}>
            <span className="font-extrabold text-7xl text-primary-300">14</span>
            <p className="my-4 font-light text-white">
              Our client to advisor ratio is 14, among the lowest in the
              industry
            </p>
          </div>
        </div>

        <div className="w-64 m-auto ">
          <button
            type="submit"
            className="w-full px-4 py-2 my-4 text-lg bg-transparent border-2 shadow-sm border-primary-300 text-primary-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 md:my-0"
          >
            Let's Talk
          </button>
        </div>

        <div className="absolute top-0 h-full border-l border-gray-300 border-dashed left-4" />
      </div>
    </section>
  )
}

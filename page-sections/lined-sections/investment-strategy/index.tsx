import React from 'react'
import Link from 'next/link'

type Props = {}

export default function index({}: Props) {
  return (
    <section className="bg-gray-200">
      <div className="relative max-w-6xl px-4 py-16 m-auto md:py-24">
        <div className="m-6 md:m-12 md:my-auto">
          <div className="">
            <div className="my-4 text-base font-light text-gray-800 md:text-lg">
              <h2 className="pl-6 font-serif text-3xl font-extrabold text-gray-800 transform -translate-x-8 border-l-8 border-primary-800 md:-translate-x-14 md:pl-12 md:text-4xl lg:text-5xl">
                Our Approach to Investing
              </h2>

              <div className="max-w-3xl ">
                <p className="my-4">
                  We are the first to admit that we can't predict the future.
                  Attempting to guess which company will be the next Apple in
                  the coming decade is a recipe for financial loss.
                </p>
                <p className="my-4">
                  We build portfolios for our clients that are diverisifed
                  across asset classes, markets, and securities to ensure that
                  our clients benefit from advancing markets and retain their
                  wealth during declines.
                </p>
                <p className="my-4">
                  We believe fees are a key driver of overall portfolio returns.
                  Because of that we carefully blend active and passive
                  strategies to ensure portfolio expenses are kept as low as
                  possible.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-3 lg:gap-4">
                <InvestingBlock
                  number="1"
                  heading="Diversification"
                  body="We build portfolio that are resiliant to changes in market conditions by spread risk across asset classes, strategies, and managers."
                />
                <InvestingBlock
                  number="2"
                  heading="Transparent Fees"
                  body="We ensure that our fees are understandable and we employ managers who do the same."
                />
                <InvestingBlock
                  number="3"
                  heading="Consistent Reporting"
                  body="We regularly report on performance, fees, and progress towards your goals to make sure you stay on track."
                />
              </div>

              <div className="w-64 my-8 ">
                <Link href="/philosophy">
                  <a>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 my-4 text-lg bg-transparent border-2 shadow-sm border-primary-800 text-primary-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 md:my-0"
                    >
                      Our Philosophy
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 h-full border-l border-gray-400 border-dashed left-4" />
      </div>
    </section>
  )
}

const InvestingBlock = ({
  number,
  heading,
  body,
}: {
  number: string
  heading: string
  body: string
}) => {
  return (
    <div className="flex flex-row w-full gap-3 p-6 bg-gray-300 border-t-4 rounded-sm border-primary-800 lg:h-56 lg:w-80">
      <div className="text-6xl font-light text-center text-gray-600 ">
        {number}
      </div>
      <div>
        <span className="text-lg font-bold text-gray-600 ">{heading}</span>
        <p className="pt-2 text-base font-light">{body}</p>
      </div>
    </div>
  )
}

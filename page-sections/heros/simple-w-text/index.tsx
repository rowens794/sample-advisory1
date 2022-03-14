import React from 'react'

type Props = {}

export default function index({}: Props) {
  return (
    <section className="relative m-auto mt-20 min-h-[calc(100vh-theme(space.20))] max-w-6xl  py-12 px-4 pt-8 md:grid md:grid-cols-2 md:pt-20">
      <div className="relative z-10 m-6 md:col-span-1 md:m-12 md:my-auto">
        <h1 className="pl-6 font-serif text-3xl font-extrabold transform -translate-x-8 border-l-8 border-primary-300 md:-translate-x-14 md:pl-12 md:text-4xl lg:text-5xl">
          Your Future Personalized
        </h1>
        <p className="max-w-lg my-4 text-base md:text-lg">
          We build customized investment portfolios that help our clients meet
          their financial goals. All of the work we do is guided by 3 core
          tennents:
        </p>
        <ol className="mt-8 ml-8 text-base leading-6 list-decimal md:text-lg md:leading-7 lg:leading-8">
          <li>Every Client is Unique</li>
          <li>Portfolio Construction Begins with Defining Goals</li>
          <li>Investment Decisions are Driven by Value</li>
        </ol>
      </div>

      <form className="relative z-10 w-11/12 mx-auto mt-12 bg-white shadow-lg md:col-span-1 md:my-auto md:w-80">
        <p className="w-full p-2 text-lg font-bold text-white bg-gray-800 md:p-4">
          Let's start a conversation
        </p>

        <div className="mx-4 my-4 md:my-8">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-gray-300 rounded-sm shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
            placeholder="John Smith"
            autoComplete="off"
          />
        </div>

        <div className="mx-4 my-4 md:my-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full border-gray-300 rounded-sm shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
            placeholder="email@example.com"
            autoComplete="off"
          />
        </div>

        <div className="mx-4 my-4 md:my-8">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="block w-full border-gray-300 rounded-sm shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
            placeholder="(304) 231-7428"
            autoComplete="off"
          />
        </div>

        <div className="m-4 ">
          <button
            type="submit"
            className="w-full px-4 py-2 my-4 font-medium border-2 shadow-sm text-md border-primary-400 bg-primary-50 text-primary-700 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 md:my-0"
          >
            Let's Talk
          </button>
        </div>
      </form>

      <div className="absolute top-0 h-full border-l border-gray-300 border-dashed left-4" />
      <span
        className="absolute z-0 font-serif font-extrabold text-right select-none left-24 top-12 text-gray-50"
        style={{ fontSize: '180px', lineHeight: '180px' }}
      >
        Wellington
        <span className="block font-sans font-light">Advisors</span>
      </span>
    </section>
  )
}

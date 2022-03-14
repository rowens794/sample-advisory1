import type { NextPage } from 'next'
import Head from 'next/head'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

import clientInfo from '../../data/clientInfo'
import Heading from '../../page-sections/section-headers/contact'
import Footer from '../../page-sections/lined-sections/footer'
// import Contact from '../../page-sections/contact/split-two-tone'

const Index: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>{clientInfo.name}</title>
        <meta
          name="description"
          content="We build custom websites for small business owners without upfront expenses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Heading />
        <div className="relative bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-200" />
          </div>
          <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
            <div className="px-4 py-16 bg-gray-200 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="max-w-lg mx-auto">
                <h2 className="font-serif text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Get in touch
                </h2>
                <p className="mt-3 text-lg font-light leading-6 text-gray-500">
                  Call us directly or send us a message though our contact form
                  - it goes directly into our inbox. We'll reach out and setup a
                  convienient time to talk.
                </p>
                <dl className="mt-8 text-base text-gray-500">
                  <h3 className="font-bold text-gray-600 underline">
                    Our Offices
                  </h3>
                  <div className="my-4">
                    <p className="font-bold">Columbus, OH</p>
                    <p className="font-light">342 Menoff Street</p>
                    <p className="font-light">(614) 581-9870</p>
                  </div>
                  <div className="my-4">
                    <p className="font-bold">Cincinatti, OH</p>
                    <p className="font-light">19911 Midtown Blvd</p>
                    <p className="font-light">(813) 398-6869</p>
                  </div>
                  <div className="my-4">
                    <p className="font-bold">Pittsburgh, PA</p>
                    <p className="font-light">1011 Forbes Ave</p>
                    <p className="font-light">(919) 864-1120</p>
                  </div>
                </dl>
              </div>
            </div>
            <div className="px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <form
                  name="ContactPage"
                  method="POST"
                  data-netlify="true"
                  action="/contact/success"
                  className="grid grid-cols-1 gap-2"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="ContactPage"
                    className="grid grid-cols-1 gap-y-6"
                  />
                  <div>
                    <label htmlFor="full-name" className="sr-only">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="name"
                      className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-sm shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Message"
                      defaultValue={''}
                    />
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 my-4 font-medium border-2 shadow-sm text-md border-primary-400 bg-primary-50 text-primary-700 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 md:my-0"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default Index

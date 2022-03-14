import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import clientInfo from '../data/clientInfo'
import Logo from '../components/logos/TextLogo'
import Footer from '../page-sections/lined-sections/footer'
import Curl from '../components/svg-backgrounds/curl'

const About: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>{clientInfo.name}</title>
        <meta
          name="description"
          content="We build custom websites for small business owners without upfront expenses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative bg-gray-600 ">
        <main className="relative z-10 min-h-screen px-4 pt-10 mx-auto mt-20 prose text-gray-300 prose-indigo max-w-7xl md:px-8">
          <div className="overflow-hidden">
            <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h2 className="mt-2 font-serif text-3xl font-extrabold leading-8 tracking-tight prose text-gray-400 sm:text-4xl lg:max-w-full">
                <span className="block font-serif text-2xl font-light text-gray-300">
                  The Story of
                </span>
                Wellington Advisors
              </h2>

              <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="relative lg:col-start-2 lg:row-start-1">
                  <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                    <figure className="relative">
                      <div
                        className="z-0 aspect-w-12 aspect-h-7 lg:aspect-none"
                        style={{ height: '350px' }}
                      >
                        <Image
                          src="/images/ben-burns-full.jpg"
                          alt="John Lee Founder"
                          layout="fill"
                          objectFit="cover"
                          className="object-center rounded-sm shadow-lg"
                        />
                      </div>
                      <p className="absolute m-1 text-sm italic font-light leading-6 text-gray-400 b-0 right-4">
                        Ben Burns, Founder of Wellington
                      </p>
                    </figure>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="mx-auto mt-5 font-light prose lg:col-start-1 lg:row-start-1 lg:max-w-none">
                    <p className="text-gray-300">
                      Sollicitudin tristique eros erat odio sed vitae, consequat
                      turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                      Eros eu viverra donec ut volutpat donec laoreet quam urna.
                    </p>
                    <p className="text-gray-300">
                      Bibendum eu nulla feugiat justo, elit adipiscing. Ut
                      tristique sit nisi lorem pulvinar. Urna, laoreet fusce
                      nibh leo. Dictum et et et sit. Faucibus sed non gravida
                      lectus dignissim imperdiet a.
                    </p>
                    <p className="text-gray-300">
                      Dictum magnis risus phasellus vitae quam morbi. Quis lorem
                      lorem arcu, metus, egestas netus cursus. In.
                    </p>
                    <ul role="list" className="text-gray-300">
                      <li className="text-gray-300">
                        Quis elit egestas venenatis mattis dignissim.
                      </li>
                      <li className="text-gray-300">
                        Cras cras lobortis vitae vivamus ultricies facilisis
                        tempus.
                      </li>
                      <li className="text-gray-300">
                        Orci in sit morbi dignissim metus diam arcu pretium.
                      </li>
                    </ul>
                    <p className="text-gray-300">
                      Rhoncus nisl, libero egestas diam fermentum dui. At quis
                      tincidunt vel ultricies. Vulputate aliquet velit faucibus
                      semper. Pellentesque in venenatis vestibulum consectetur
                      nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.
                      Morbi enim fermentum lacus in. Viverra.
                    </p>
                    <h3 className="text-xl font-light text-gray-400">
                      How we helped
                    </h3>
                    <p className="text-gray-300">
                      Tincidunt integer commodo, cursus etiam aliquam neque, et.
                      Consectetur pretium in volutpat, diam. Montes, magna
                      cursus nulla feugiat dignissim id lobortis amet. Laoreet
                      sem est phasellus eu proin massa, lectus. Diam rutrum
                      posuere donec ultricies non morbi. Mi a platea auctor mi.
                    </p>
                    <p className="text-gray-300">
                      Sagittis scelerisque nulla cursus in enim consectetur
                      quam. Dictum urna sed consectetur neque tristique
                      pellentesque. Blandit amet, sed aenean erat arcu morbi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="transform translate-y-1 bg-gray-600">
          <Curl color="fill-white" />
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default About

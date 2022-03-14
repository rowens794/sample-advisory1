import type { NextPage } from 'next'
import Head from 'next/head'

import clientInfo from '../data/clientInfo'
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

      <main className="relative bg-gray-300 ">
        <main className="relative z-10 min-h-screen px-4 pt-10 mx-auto mt-20 prose text-gray-700 prose-indigo max-w-7xl md:px-8">
          <div className="overflow-hidden">
            <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h2 className="mt-2 font-serif text-3xl font-extrabold leading-8 tracking-tight prose text-gray-800 sm:text-4xl lg:max-w-full">
                <span className="block font-serif text-2xl font-light text-gray-700">
                  How We Invest
                </span>
                For Our Clients
              </h2>

              <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mt-8 lg:mt-0">
                  <div className="mx-auto mt-5 font-light prose text-gray-400 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                    <p className="text-gray-700">
                      Sollicitudin tristique eros erat odio sed vitae, consequat
                      turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                      Eros eu viverra donec ut volutpat donec laoreet quam urna.
                    </p>

                    <h3 className="text-xl font-light text-gray-700">
                      Defining a Personalized Policy
                    </h3>
                    <p className="text-gray-700">
                      Bibendum eu nulla feugiat justo, elit adipiscing. Ut
                      tristique sit nisi lorem pulvinar. Urna, laoreet fusce
                      nibh leo. Dictum et et et sit. Faucibus sed non gravida
                      lectus dignissim imperdiet a.
                    </p>
                    <p className="text-gray-700">
                      Dictum magnis risus phasellus vitae quam morbi. Quis lorem
                      lorem arcu, metus, egestas netus cursus. In.
                    </p>
                    <h3 className="text-xl font-light text-gray-700">
                      Selecting Asset Classes
                    </h3>
                    <p className="text-gray-700">
                      Bibendum eu nulla feugiat justo, elit adipiscing. Ut
                      tristique sit nisi lorem pulvinar. Urna, laoreet fusce
                      nibh leo. Dictum et et et sit. Faucibus sed non gravida
                      lectus dignissim imperdiet a.
                    </p>
                    <p className="text-gray-700">
                      Dictum magnis risus phasellus vitae quam morbi. Quis lorem
                      lorem arcu, metus, egestas netus cursus. In.
                    </p>
                  </div>
                </div>

                <div className="relative max-w-md m-auto my-12">
                  <div className="flex flex-row w-full px-4 py-2 my-4 bg-gray-400 rounded-sm drop-shadow-md lg:py-2 lg:px-6">
                    <span className="font-serif text-3xl text-gray-500 w-7 md:text-3xl ">
                      1.
                    </span>
                    <p className="flex-grow w-full m-4 font-serif text-xl text-left text-gray-700 ">
                      Define an Investment Policy
                    </p>
                  </div>

                  <div className="flex flex-row w-full px-4 py-2 my-4 bg-gray-400 rounded-sm drop-shadow-md lg:py-2 lg:px-6">
                    <span className="font-serif text-3xl text-gray-500 w-7 md:text-3xl ">
                      2.
                    </span>
                    <p className="flex-grow w-full m-4 font-serif text-xl text-left text-gray-700 ">
                      Construct Asset Class Exposure
                    </p>
                  </div>

                  <div className="flex flex-row w-full px-4 py-2 my-4 bg-gray-400 rounded-sm drop-shadow-md lg:py-2 lg:px-6">
                    <span className="font-serif text-3xl text-gray-500 w-7 md:text-3xl ">
                      3.
                    </span>
                    <p className="flex-grow w-full m-4 font-serif text-xl text-left text-gray-700 ">
                      Deploy Capital to Active & Passive Managers
                    </p>
                  </div>

                  <div className="flex flex-row w-full px-4 py-2 my-4 bg-gray-400 rounded-sm drop-shadow-md lg:py-2 lg:px-6">
                    <span className="font-serif text-3xl text-gray-500 w-7 md:text-3xl ">
                      4.
                    </span>
                    <p className="flex-grow w-full m-4 font-serif text-xl text-left text-gray-700 ">
                      Continuously Monitor & Adjust to Meet Market Conditions
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mt-8 lg:mt-0">
                  <div className="mx-auto mt-5 font-light prose text-gray-400 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                    <h3 className="text-xl font-light text-gray-700">
                      Active / Passive Mix
                    </h3>
                    <p className="text-gray-700">
                      Rhoncus nisl, libero egestas diam fermentum dui. At quis
                      tincidunt vel ultricies. Vulputate aliquet velit faucibus
                      semper. Pellentesque in venenatis vestibulum consectetur
                      nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.
                      Morbi enim fermentum lacus in. Viverra.
                    </p>

                    <p className="text-gray-700">
                      Tincidunt integer commodo, cursus etiam aliquam neque, et.
                      Consectetur pretium in volutpat, diam. Montes, magna
                      cursus nulla feugiat dignissim id lobortis amet. Laoreet
                      sem est phasellus eu proin massa, lectus. Diam rutrum
                      posuere donec ultricies non morbi. Mi a platea auctor mi.
                    </p>
                    <ul
                      role="list"
                      className="text-gray-700 marker:text-gray-700"
                    >
                      <li className="text-gray-700">
                        Quis elit egestas venenatis mattis dignissim.
                      </li>
                      <li className="text-gray-700">
                        Cras cras lobortis vitae vivamus ultricies facilisis
                        tempus.
                      </li>
                      <li className="text-gray-700">
                        Orci in sit morbi dignissim metus diam arcu pretium.
                      </li>
                    </ul>
                    <p className="text-gray-700">
                      Sagittis scelerisque nulla cursus in enim consectetur
                      quam. Dictum urna sed consectetur neque tristique
                      pellentesque. Blandit amet, sed aenean erat arcu morbi.
                    </p>
                  </div>
                </div>

                <div className="relative m-auto"></div>
              </div>
            </div>
          </div>
        </main>
        <div className="transform translate-y-1 bg-gray-300">
          <Curl color="fill-white" />
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default About

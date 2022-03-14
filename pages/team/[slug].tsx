import { GetStaticPaths } from 'next'
import Image from 'next/image'

import { bios } from '../../data/bios'

import Head from 'next/head'
import clientInfo from '../../data/clientInfo'
import Footer from '../../page-sections/lined-sections/footer'

const Index = ({ name, phone, email, text, position, image }: any) => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gray-100">
      <Head>
        <title>
          {clientInfo.name} - {name}
        </title>
        <meta
          name="description"
          content="We build custom websites for small business owners without upfront expenses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative mt-20 overflow-hidden">
        <div className="overflow-hidden bg-white">
          <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="absolute top-0 bottom-0 hidden w-screen bg-gray-200 left-3/4 lg:block" />
            <div className="mx-auto text-base max-w-prose lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
              <div>
                <span className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
                  Meet
                </span>
                <h2 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  {name}
                </h2>
                <span className="mt-2 text-lg leading-8 tracking-tight text-gray-600 sm:text-xl">
                  {position}
                </span>
                <span className="block mt-2 text-sm tracking-tight text-gray-600">
                  {phone}
                </span>
                <span className="block text-sm tracking-tight text-gray-600">
                  {email}
                </span>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:col-start-2 lg:row-start-1">
                <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                  <figure>
                    <div
                      className="aspect-w-12 aspect-h-7 lg:aspect-none"
                      style={{ height: '350px' }}
                    >
                      <Image
                        src={image}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="object-right-top transform rounded-sm shadow-lg "
                      />
                    </div>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="mx-auto mt-5 prose text-gray-500 prose-indigo lg:col-start-1 lg:row-start-1 lg:max-w-none">
                  {text.map((line: string, i: number) => {
                    if (line.slice(0, 3) === '***') {
                      return <h3 key={i}>{line.slice(3, 999)}</h3>
                    } else {
                      return <p key={i}>{line}</p>
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}

export async function getStaticProps({ params }: any) {
  let lookupValue = params.slug
  let text = bios[lookupValue]

  return { props: { ...text } }
}

export default Index

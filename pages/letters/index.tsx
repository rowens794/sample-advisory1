import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import clientInfo from '../../data/clientInfo'

import Footer from '../../page-sections/lined-sections/footer'
import Header from '../../page-sections/section-headers/letters'

import { letters, letterInt } from '../../data/investment-letters'

const Home: NextPage = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gray-100">
      <Head>
        <title>{clientInfo.name}</title>
        <meta
          name="description"
          content="We build custom websites for small business owners without upfront expenses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative overflow-hidden">
        <Header />
        <div className="grid w-full max-w-5xl grid-cols-1 m-auto my-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {letters.map((letter: letterInt) => {
            return (
              <Letter
                title={letter.title}
                published={letter.published}
                date={letter.date}
                author={letter.author}
                slug={letter.slug}
                document={letter.document}
              />
            )
          })}
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Home

const Letter = ({
  published,
  title,
  date,
  author,
  slug,
  document,
}: letterInt) => {
  return (
    <a
      href={`${document}`}
      download={title}
      className="w-56 py-4 mx-auto text-left grayscale hover:grayscale-0"
    >
      <p className="text-xs font-light">{date}</p>
      <p className="font-bold">{title}</p>
      <p className="text-sm font-light">by: {author}</p>
      <p className="text-sm font-light">published: {published}</p>
    </a>
  )
}

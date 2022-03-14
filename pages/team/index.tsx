import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import clientInfo from '../../data/clientInfo'

import Footer from '../../page-sections/lined-sections/footer'
import Header from '../../page-sections/section-headers/team'

import { bios } from '../../data/bios'

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
          {Object.entries(bios).map((member: any) => {
            return (
              <Member
                name={member[1].name}
                title={member[1].position}
                photo={member[1].headshot}
                link={`/team/${member[0]}`}
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
        <Image className="rounded-full" src={photo} width={150} height={150} />
        <p className="font-bold">{name}</p>
        <p className="text-sm font-light">{title}</p>
      </a>
    </Link>
  )
}

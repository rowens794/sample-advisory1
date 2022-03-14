import type { NextPage } from 'next'
import Head from 'next/head'

import clientInfo from '../data/clientInfo'

import Hero from '../page-sections/heros/simple-w-text'
import WhyUs from '../page-sections/lined-sections/why-us'
import AboutUs from '../page-sections/lined-sections/about-us'
import InvestmentStrategy from '../page-sections/lined-sections/investment-strategy'
import Team from '../page-sections/lined-sections/team'
import StartYourJourney from '../page-sections/lined-sections/start-your-journey'
import Footer from '../page-sections/lined-sections/footer'

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
        <Hero />
        <WhyUs />
        <AboutUs />
        <InvestmentStrategy />
        <Team />
        <StartYourJourney />
        <Footer />
      </main>
    </div>
  )
}

export default Home

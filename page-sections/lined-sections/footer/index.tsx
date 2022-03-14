import React from 'react'
import Link from 'next/link'

import Logo from '../../../components/logos/TextLogo'
import navSections from '../../../data/navigation-sections'

type Props = {}

export default function index({}: Props) {
  return (
    <footer className="bg-white">
      <div className="relative grid max-w-6xl grid-cols-1 px-8 py-16 m-auto lg:px4 md:py-24 lg:grid-cols-2 ">
        <div>
          <div className="pb-16">
            <Logo href="/" color="dark" />
          </div>

          <div className="grid w-full grid-cols-1 xs:grid-cols-3">
            <div className="pb-4">
              <p className="text-sm font-bold text-center text-gray-500">
                Columbus, OH
              </p>
              <p className="text-sm font-light text-center text-gray-500">
                (614) 581-9870
              </p>
            </div>
            <div className="pb-4">
              <p className="text-sm font-bold text-center text-gray-500">
                Cincinatti, OH
              </p>
              <p className="text-sm font-light text-center text-gray-500">
                (813) 398-6869
              </p>
            </div>
            <div className="pb-4">
              <p className="text-sm font-bold text-center text-gray-500">
                Pittsburgh, PA
              </p>
              <p className="text-sm font-light text-center text-gray-500">
                (919) 864-1120
              </p>
            </div>
          </div>

          <p className="py-8 text-sm font-light text-gray-500">
            Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies
            tristique nulla aliquet enim tortor at auctor urna nunc id cursus
            metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
            ultrices sagittis orci a scelerisque purus semper eget duis at
            tellus at urna condimentum mattis pellentesque id nibh tortor id
            aliquet lectus proin nibh nisl condimentum id venenatis a.{' '}
          </p>
        </div>

        <div className="py-6 sm:grid sm:grid-cols-2 ">
          <ul>
            <p className="w-full text-center underline lg:text-right">
              Who We Serve
            </p>
            <BulletItem name="HNW Families" />
            <BulletItem name="Corporations" />
            <BulletItem name="Retirement Plans" />
            <BulletItem name="Nonprofits" />
          </ul>
          <ul>
            <p className="w-full pt-8 text-center underline sm:pt-0 lg:text-right">
              Site Links
            </p>
            {navSections
              .filter((item) => {
                return item.type !== 'CTA'
              })
              .map((link) => {
                return <LinkItem name={link.title} href={link.href} />
              })}
          </ul>
        </div>
      </div>

      <div className="relative max-w-6xl px-8 py-8 m-auto text-right lg:px4 ">
        <LinkItemTwo name="Terms & Conditions" href="/terms" />
        <LinkItemTwo name="Privacy and Security Center" href="/privacy" />
        <FileDownloadLink
          name="Firm Brochure Adv Part 2A"
          href="/documents/ADV-Part2.pdf"
        />
        <FileDownloadLink name="Form CRS" href="/documents/CRS.pdf" />
      </div>
    </footer>
  )
}

const LinkItem = ({ name, href }: { name: string; href: string }) => {
  return (
    <li className="py-2 font-light text-center text-gray-700 lg:text-right">
      <Link href={href}>
        <a className="hover:text-primary-600 hover:underline">{name}</a>
      </Link>
    </li>
  )
}

const BulletItem = ({ name }: { name: string }) => {
  return (
    <li className="py-2 font-light text-center text-gray-700 lg:text-right">
      {name}
    </li>
  )
}

let LinkItemTwo = ({ name, href }: { name: string; href: string }) => {
  return (
    <Link href={href}>
      <a className="inline-block px-4 text-xs text-gray-400">{name}</a>
    </Link>
  )
}

let FileDownloadLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <a
      className="inline-block px-4 text-xs text-gray-400"
      href={href}
      download={name}
    >
      {name}
    </a>
  )
}

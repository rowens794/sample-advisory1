import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'

import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Logo from '../../../components/logos/TextLogo'
import navSections from '../../../data/navigation-sections'

export default function Index() {
  let [atTopOfPage, setAtTopOfPage] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        setAtTopOfPage(false)
      } else {
        setAtTopOfPage(true)
      }
    })
  })

  return (
    <Popover
      className={` fixed top-0 z-50 w-full bg-gray-900 ${
        !atTopOfPage ? ' shadow-md' : null
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          {/* Logo Section */}
          <div className="md:w-full">
            <Logo href="/" color="light" />
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-sm hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* Primary Nav Buttons Desktop */}

          {navSections
            .filter((item) => {
              return item.type === 'link'
            })
            .map((link) => {
              return (
                <Link href={link.href} key={link.title}>
                  <a className="hidden text-sm font-light text-gray-200 uppercase hover:text-gray-100 md:block">
                    {link.title}
                  </a>
                </Link>
              )
            })}
        </div>
      </div>

      {/* Primary Nav Buttons Mobile / Tablet */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 right-0 w-full h-screen transition origin-top-right md:hidden "
        >
          <div className="h-full bg-gray-100">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Popover.Button className="inline-flex ">
                  <Logo href="/" color="dark" />
                </Popover.Button>

                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-200 rounded-sm hover:bg-gray-300 hover:text-gray-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-2">
                  {navSections
                    .filter((item) => {
                      return item.type === 'link'
                    })
                    .map((link) => {
                      return (
                        <Popover.Button key={link.title}>
                          <Link href={link.href}>
                            <a className="flex p-2 uppercase">
                              <span className="ml-3 text-base text-gray-900">
                                {link.title}
                              </span>
                            </a>
                          </Link>
                        </Popover.Button>
                      )
                    })}
                </nav>
              </div>
            </div>
            <div className="absolute bottom-0 w-full px-5 py-6 space-y-6">
              <div>
                {navSections
                  .filter((item) => {
                    return item.type === 'CTA'
                  })
                  .map((item, i) => {
                    return (
                      <Popover.Button key={i} className="w-full">
                        <Link href={item.href}>
                          <a className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-light uppercase bg-white border whitespace-nowrap border-primary-300 text-primary-700 hover:bg-primary-100 ">
                            {item.title}
                          </a>
                        </Link>
                      </Popover.Button>
                    )
                  })}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  href: string
  color: string
}

export default function index({ href, color }: Props) {
  return (
    <div className="flex justify-center w-full text-center md:justify-start lg:w-0 lg:flex-1 lg:text-left">
      <Link href={href}>
        <a
          className={
            color === 'light'
              ? `border-r border-gray-50 pr-1 `
              : 'border-r border-gray-800 pr-1 '
          }
        >
          <span
            className={
              color === 'light'
                ? `block text-right font-serif font-extrabold leading-4 text-gray-50`
                : 'block text-right font-serif font-extrabold leading-4 text-gray-800'
            }
          >
            Wellington
          </span>
          <span
            className={
              color === 'light'
                ? `block text-right font-extralight leading-4 text-gray-50`
                : 'block text-right font-extralight leading-4 text-gray-800'
            }
          >
            Advisors
          </span>
        </a>
      </Link>
    </div>
  )
}

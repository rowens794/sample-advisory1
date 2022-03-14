import React from 'react'

type Props = { color: string }

export default function index({ color }: Props) {
  return (
    <>
      <svg
        id="curl"
        data-name="bg-curl"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="1 -1 1270 120"
      >
        <title>bg-curl</title>
        <path
          d="M1279.94,120.83V67.63C1022.88,88.87,719.3,62,425.26,35.91,280.15,23,137.13,10.37.5,3.1V120.83Z"
          className={color}
        ></path>
      </svg>
    </>
  )
}

export interface letterInt {
  published: string
  date: string
  title: string
  author: string
  slug: string
  document: string
}

//to create a heading insert *** in the line

export const letters: letterInt[] = [
  {
    published: '1/23/2022',
    date: '12/31/2021',
    title: 'As Corona Virus Wanes, Valuations Wax',
    author: 'Ben Burns',
    slug: 'dec-2021',
    document: '/documents/12.31.2021.pdf',
  },
  {
    published: '10/21/2021',
    date: '9/30/2021',
    title: 'School is back in Session',
    author: 'Ben Burns',
    slug: 'sept-2021',
    document: '/documents/9.30.2021.pdf',
  },
  {
    published: '7/22/2021',
    date: '6/30/2021',
    title: 'Inflation on the rise',
    author: 'Ben Burns',
    slug: 'june-2021',
    document: '/documents/6.30.2021.pdf',
  },
  {
    published: '4/20/2021',
    date: '3/31/2021',
    title: 'The One Year Anniversary of a Pandemic',
    author: 'Ben Burns',
    slug: 'march-2021',
    document: '/documents/3.31.2021.pdf',
  },
  {
    published: '1/23/2021',
    date: '12/31/2020',
    title: `Let's Look forward to a better year than last`,
    author: 'Ben Burns',
    slug: 'dec-2020',
    document: '/documents/12.31.2020.pdf',
  },
]

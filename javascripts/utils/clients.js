import { createFactory } from 'react'

import Recipelist from 'clients/Recipelist'
import Jomo from 'clients/Jomo'
import Taplet from 'clients/Taplet'
import Blip from 'clients/Blip'
import Likeli from 'clients/Likeli'

export default [
  {
    description: 'Recipelist was initially built on Rails, but soon after, the entire front end was written in React. Later on, the method for querying data was transitioned to GraphQL to improve performance.',
    duration: '2016-2017',
    name: 'Recipelist',
    loadComponent: createFactory(Recipelist),
    order: '1',
    properties: { class: 'fullwidth' },
    slug: 'recipelist',
    // appstore: '',
    // playstore: '',
    role: 'Creator',
    scope: 'Web, Mobile, Brand',
    stack: 'Rails, React, GraphQL',
    website: 'https://recipelist.co',
  },
  {
    description: 'JOMO, which stands for Joy of Missing Out, is committed (somewhat ironically) to delivering software and campaigns that challenge people to miss out on all the noise in the online world, and re-engage with people in the real-world.',
    duration: '2015-2017',
    name: 'JOMO',
    loadComponent: createFactory(Jomo),
    order: '2',
    properties: null,
    slug: 'jomo',
    // appstore: '',
    // playstore: '',
    role: 'Lead Designer',
    scope: 'Web, Mobile, Brand',
    stack: 'Sketch, Github, Zeplin',
    website: 'https://jomoapp.com',
  },
  {
    description: 'Recipelist was initially built on Rails, but soon after, the entire front end was written in React. Later on, the method for querying data was transitioned to GraphQL to improve performance.',
    duration: '2014-2015',
    name: 'Taplet',
    loadComponent: createFactory(Taplet),
    order: '3',
    properties: null,
    slug: 'taplet',
    appstore: 'https://itunes.apple.com/us/app/taplet-hd-photos-from-iphone-gopro-or-snapchat/id670785096?mt=8',
    // playstore: '',
    role: 'Product Designer',
    scope: 'iOS UI / UX',
    stack: 'Sketch, Illustrator',
    website: 'http://gotaplet.com',
  },
  {
    description: 'BlipMe lets you connect with your campus in real-time on a map. See what people are doing on your campus right now. Discover fun stuff to do and great ways to meet new people on campus.',
    duration: '2015',
    name: 'Blip',
    loadComponent: createFactory(Blip),
    order: '4',
    properties: null,
    slug: 'blip',
    appstore: 'https://itunes.apple.com/us/app/blipme/id981886073?mt=8',
    // playstore: '',
    role: 'Product Designer',
    scope: 'iOS, Brand',
    stack: 'Sketch, Illustrator',
    website: 'http://blipme.co',
  },
  {
    description: 'Likeli changes the way you go out, where you end up and who you meet. It is the social compass that never lets you down.',
    duration: '2016-2017',
    name: 'Likeli',
    loadComponent: createFactory(Likeli),
    order: '6',
    properties: null,
    slug: 'likeli',
    // appstore: '',
    // playstore: '',
    role: 'Product Designer',
    scope: 'iOS, Brand',
    stack: 'Sketch, Illustrator',
    website: '',
  },
  // client: {
  //   description: '',
  //   duration: '',
  //   name: '',
  //   order: '',
  //   properties: null,
  //   slug: '',
  //   appstore: '',
  //   playstore: '',
  //   role: '',
  //   scope: '',
  //   stack: '',
  //   website: '',
  // },
]

export const moreWork = [
  {
    img: 'gener8tor',
    href: 'http://gener8tor.com',
  },
  {
    img: 'optyn',
    href: 'https://optyn.com/',
  },
  {
    img: 'wemontage',
    href: 'http://wemontage.com',
  },
  {
    img: 'beekeeper',
    href: 'http://beekeeperdata.com',
  },
  {
    img: 'joyspace',
    href: 'https://angel.co/taplet-1',
  },
  {
    img: 'poparazzi',
    href: 'http://gener8tor.com',
  },
  {
    img: 'sunsportmarine',
    href: 'http://gener8tor.com',
  },
  {
    img: 'kioh',
    href: 'http://gener8tor.com',
  },
]
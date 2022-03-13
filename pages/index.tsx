import Head from 'next/head'
import Image from 'next/image'
import parse from "html-react-parser"
import Project from '../components/project'

const projects = [
  {
    title: 'CRICKVERSE',
    image: '/crick.png',
    description: "<a href='https://cricverse.vercel.app' target='_blank' className='project'>CrickVerse</a> is cricket nft collection on etherium block chain, i worked with team  built frontend with NextJS and Tailwind css  </b>",
    links: {
      website: 'https://cricverse.vercel.app/',
      github: 'https://github.com/44Chann/cricket-loot'
    },
    tags: ['web3', 'Nextjs', 'TailwindCss', 'typeScript'],
    width: 300,
    height: 200
  },
  {
    title: 'Side Kicks',
    image: '/SideKicks.png',
    description: "<a href='https://sidekicks-frontend.vercel.app/' target='_blank' className='project'>Side Kicks</a> let's you share your project with community and  you get Incentivize, i worked on the product page and product list page with team  ",
    links: {

      website: 'https://sidekicks-frontend.vercel.app/',
      demoVideo: '',
      github: 'https://github.com/44Chann/sidekicks'
    },
    tags: ['working', 'Nextjs', 'tailwindCss', 'working'],
    width: 300,
    height: 200
  },
  {
    title: 'INFO',
    image: '/Info.jpg',
    description: "<a href='https://github.com/44Chann/INFO' target='_blank' className='project'>INFO</a> helps find top news from all sorts of sources and you can read short summary on the website or can read full news on Source website ",
    links: {
      twitter: '',
      website: '',
      demoVideo: '',
      github: 'https://github.com/44Chann/INFO'
    },
    tags: ['React', 'NewsAPI', 'React Router', 'vite', 'working'],
    width: 300,
    height: 200
  },
  {
    title: 'Sudvice',
    image: '/su.png',
    description: "<a href='https://sudvice.vercel.app/' target='_blank' className='project'>Sudvice</a> is a web app where you can search for advice and wisdom also you can share with other on twitter ",
    links: {
      twitter: '',
      website: 'https://sudvice.vercel.app/',
      demoVideo: '',
      github: 'https://github.com/44Chann/20Giphy'
    },
    tags: ['React', 'TS', 'TailwindCss', 'Vite'],
    width: 300,
    height: 200
  },
  {
    title: '20 Giphy',
    image: '/Giphy.png',
    description: "<a href='https://20-giphy.vercel.app/' target='_blank' className='project'>20 Giphy</a> uses Giphy APi to get Top 20 GIphs on any search keyword also allow you to share on twitter ",
    links: {
      twitter: '',
      website: 'https://20-giphy.vercel.app/',
      demoVideo: '',
      github: 'git@github.com:44Chann/20Giphy.git'
    },
    tags: ['React', 'vite', 'API'],
    width: 300,
    height: 200
  },
  {
    title: 'Movie Chan',
    image: '/moviechan.png',
    description: "<a href='https://movie-chan.vercel.app/' target='_blank' className='project'>Movie Chan</a> is my first project with react with this i learned react basics and how to fetch data from another apis ",
    links: {
      twitter: '',
      website: 'https://movie-chan.vercel.app/',
      demoVideo: '',
      github: 'https://github.com/44Chann/MovieChan'
    },
    tags: ['React', 'APIS', 'css'],
    width: 300,
    height: 200
  }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center  h-full py-2 font-inter">
      <Head>
        <title>Vikash</title>
        <link rel="icon" href="/memoji.avif" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
      </Head>

      <main className='w-full h-full md:h-96 mt-16 flex flex-col md:flex-row justify-center items-center space-x-10'>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full relative">
          <Image className='rounded-full' src={'/memoji.avif'} layout='fill'></Image>
        </div>
        <div className="flex flex-col justify-center items-start p-10">
          <h1 className='text-2xl font-bold'>Hi, I'm  Vikash</h1>
          <p className='text-md font-normal w-96'>i'm Biology Graduate , front End Web developer, getting into web3 </p>
          <p className='text-md font-normal'>wagmi🖖</p>
          <div className="flex justify-start space-x-4 text-xl mt-5">
            <a href="https://twitter.com/44_chann_" target='_blank'>
              <i className="fab fa-twitter" style={{ color: '#1DA1F2' }}></i>
            </a>
            <a href="https://github.com/44Chann" target='_blank'>
              <i className="fab fa-github"></i>
            </a>

          </div>

        </div>
      </main>

      <div className="w-full h-full flex flex-col justify-center items-center space-y-5 p-10">
        <h2 className='text-3xl font-bold project'>Projects</h2>
        {projects.map((value) => (
          <Project title={value.title} image={value.image} width={value.width} height={value.height}>
            <p className='text-md mt-5'>{parse(value.description)}</p>
            <div className='flex justify-start items-center mt-5 space-x-5'>
              {value.links.github && <a href={value.links.github} className='project' target="_blank"><i className="fab fa-github mr-2"></i>github</a>}
              {value.links.website && <a href={value.links.website} className='project' target="_blank"><i className="fas fa-link mr-2" style={{ color: 'gray' }}></i>website</a>}
            </div>
            <div className='flex justify-start flex-wrap  items-center mt-5 space-x-5'>
              {value.tags.map(v => (
                <p className='text-sm font-semibold my-2  px-3 py-1 rounded-full bg-green-400'>{v}</p>
              ))}
            </div>
          </Project>
        ))}
      </div>

      <div className='w-full h-full flex flex-col justify-center items-center space-y-5 p-10'>
        <h2 className="text-3xl font-bold project">Favourites✨</h2>
        <h2 className='w-3/4'>i don't like to share my playlist with anyone, i like to be secretive in that place because we can find more things about a person from his/her choices, but still I will share it, so please judge me and send me what you think about me after listening to my playlist</h2>
        <ul>
          <li>my favourite artists, right now, are - <span className='project'>prateek kuhad</span>, <span className='project'>taylor swift</span>, <span className='project'>ed sheeran</span>, <span className='project'>otnicka</span>, (if you are not in this list, don't be sad, send me your playlist to my <a href="mailto:punekar.satyam@gmail.com" className='project'>mail</a>😛)</li>
          <li>my favourite songs, right now, are - <span className='project'>all too well</span>, <span className='project'>pause</span>, <span className='project'>cold/mess</span>, <span className='project'>shivers</span>, <span className='project'>gesi baglan</span></li>
          <li>my favourite books, right now, are - <span className='project'>zero to one</span>, <span className='project'>rework</span>, <span className='project'>sherlock holmes</span>, <span className='project'>homo sapiens</span>, <span className='project'>do epic shit</span></li>
        </ul>
      </div>
    </div>
  )
}

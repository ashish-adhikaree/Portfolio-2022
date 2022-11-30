import Head from 'next/head'
import Layout from '../components/Layout'
import Summary from '../components/Summary/Summary'
import ParticlesBackground from '../components/Particles/ParticlesBackground'
import Projects from '../components/Projects/projects'
import Skills from '../components/Skills/Skills'

export default function Home() {
  return (
    <div className='scroll-smooth'>
      <Head>
        <title>ASHISH ADHIKARI</title>
        <meta name="description" content="Developed by Ashish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ParticlesBackground/>
        <Summary/>
        {/* <Projects/> */}
        <Skills/>
      </Layout>
    </div>
  )
}

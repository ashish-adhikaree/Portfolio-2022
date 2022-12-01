import Head from 'next/head'
import Layout from '../components/Layout'
import Summary from '../components/Summary/Summary'
import ParticlesBackground from '../components/Particles/ParticlesBackground'
import Projects from '../components/Projects/projects'
import Skills from '../components/Skills/Skills'
import About from '../components/About/About'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>ASHISH ADHIKARI</title>
        <meta name="description" content="Developed by Ashish" />
        <link rel="icon" href="/assets/profile.png" />
      </Head>
      <Layout>
        <ParticlesBackground/>
        <Summary/>
        <About/>
        <Skills/>
        <Projects/>
      </Layout>
    </div>
  )
}

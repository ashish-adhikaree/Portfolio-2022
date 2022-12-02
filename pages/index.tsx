import Head from 'next/head'
import Layout from '../components/layout'
import Summary from '../components/Summary/summary'
import ParticlesBackground from '../components/Particles/particlesBackground'
import Projects from '../components/Projects/projects'
import Skills from '../components/Skills/skills'
import About from '../components/About/about'
import Education from '../components/Education/education'
import ToTopButton from '../components/toTopBtn'

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
        <ToTopButton/>
        <Summary/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
      </Layout>
    </div>
  )
}

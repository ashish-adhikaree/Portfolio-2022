import Head from 'next/head'
import Layout from '../components/Layout'
import Summary from '../components/Summary/Summary'
import ParticlesBackground from '../components/Particles/ParticlesBackground'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ASHISH ADHIKARI</title>
        <meta name="description" content="Developed by Ashish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ParticlesBackground/>
        <Summary/>
        <div className='h-[700px] w-full'>
        </div>
      </Layout>
    </div>
  )
}

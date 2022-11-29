import Head from 'next/head'
import Layout from '../components/Layout'
import Summary from '../components/Summary'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ASHISH ADHIKARI</title>
        <meta name="description" content="Developed by Ashish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Summary/>
      </Layout>
    </div>
  )
}

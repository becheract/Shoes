import type { NextPage } from 'next'
import Head from 'next/head'
//for metatags,custom titles, keywords, descriptions
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bechera's shoes wishlist</title>'
        <meta name="shoes" content='shoes,fashion,programming'/>
      </Head>

        <h1>Welcome to the home page</h1>
    </div>
  )
}

export default Home

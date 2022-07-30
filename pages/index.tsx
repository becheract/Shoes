import type { NextPage } from 'next'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'

//for metatags,custom titles, keywords, descriptions
type article = {
  body: string,
  id: number,
  title: string,
  userId: number
}

type articles = {
  articles: article[]
}
const Home = ({articles} : any) => {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Bechera's shoes wishlist</title>'
        <meta name="shoes" content='shoes,fashion,programming'/>
      </Head>
    <ArticleList articles={articles}/>
    </div>
  )
}



export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

export default Home

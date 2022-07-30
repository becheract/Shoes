import type { NextPage } from 'next'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import {server} from '../config'
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

    <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {

  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}


// export const getStaticProps = async () => {

//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

export default Home

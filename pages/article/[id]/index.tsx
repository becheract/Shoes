import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import articleStyles from '../../../styles/Article.module.css'
interface article {
  id: number,
  title: string,
  body: string
}

const article = ({ article } : any) => {

  return (
    <div className={articleStyles.article}>
      <Meta title={article.title}/>
      <h1>{article.title}</h1>
   
      <p className={articleStyles.p}>{article.body}</p>
      <br />
      <button className={articleStyles.button}>
        <Link href='/' >Go Back</Link>
      </button>
    </div>
  )
}

export const getStaticProps = async (context : any) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  const ids = articles.map((article :article) => article.id)
  const paths = ids.map((id : string) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default article
import {useRouter} from 'next/router'
import Link from 'next/link'
import {server} from '../../../config'
import Meta from '../../../components/Meta'
export default function article({article} : any) {
    // const router = useRouter()
    // const {id} = router.query

   
  return (
    <>
    <Meta title={article.title} />
    <h1>{article.title}</h1>
    <p>{article.body}</p>
       <br/>
    <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context : any) => {

    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const articles = await res.json()
  
    return {
      props: {
        articles,
      },
    }
  }

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles/`)
    const articles = await res.json()

    const ids = articles.map((article : any) => article.id)

    const paths = ids.map((id : any) => ({params: {id: id.toString()}}))
    
    return {
        paths,
        fallback: false,
    }

}

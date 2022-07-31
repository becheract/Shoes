import articleStyles from '../styles/Article.module.css';
import Link from 'next/link'


export default function ArticleItem({article} : any) {


  return (
    <Link href="/article/[id]" as ={`/article/${article.id}`}>
        <a className={articleStyles.card}>
            <h3>{article.title}</h3>
        </a>
    </Link>
  )
}

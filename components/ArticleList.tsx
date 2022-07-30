import  React from 'react'
import articleStyles from '../styles/Article.module.css'
const ArticleList = ({articles} : any) => {
  return (
    <div className={articleStyles.grid}>
        <h1>{articles.title}</h1>
    </div>
  )
}

export default ArticleList
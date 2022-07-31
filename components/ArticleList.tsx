import  React from 'react'
import articleStyles from '../styles/Article.module.css'

import ArticleItem from './ArticleItem'
const ArticleList = ({articles} : any) => {
  return (
    <div className={articleStyles.grid}>
              {articles.map((article : any) => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList
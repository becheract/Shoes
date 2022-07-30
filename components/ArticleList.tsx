import  React from 'react'
import articleStyles from '../styles/Article.module.css'

import ArticleItem from './ArticleItem'
const ArticleList = ({articles} : any) => {
  return (
    <div className={articleStyles.grid}>
        <ArticleItem article={articles}></ArticleItem>
    </div>
  )
}

export default ArticleList
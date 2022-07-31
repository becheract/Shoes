
import {articles} from '../../../data'
import {  Response } from 'express';
const handler = ({query: {id}} : any, res :Response) => {
    const filtered = articles.filter((article) => article.id === id)

        if(filtered.length > 0) {
            res.status(200).json(filtered[0])
        }else {
            res.status(404)
            .json({message: `Article with the id of ${id} is not found`})
        }
    }


export default handler
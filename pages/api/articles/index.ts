
import {articles} from '../../../data'
import { Request, Response } from 'express';
const handler = (req : Request,  res : Response ) => {
    res.status(200).json(articles)
}

export default handler

import {articles} from '../../../data'

const handler = (req:any, res :any) => {
    res.status(200).json(articles)
}

export default handler
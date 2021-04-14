// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type {NextApiRequest, NextApiResponse} from 'next'


export default (req: NextApiRequest, res: NextApiResponse) => {
    const {name = '?'} = req.query
    res.status(200).json({name})
}

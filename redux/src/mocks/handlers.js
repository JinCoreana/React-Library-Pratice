import {rest} from 'msw'

export const handlers = [
    rest.put('http://localhost:3002/counter/increment', async(req, res, ctx)=> {
    const {value} = req.body;
    return res (
        ctx.json({
            value: value + 100
         })
    )
})]


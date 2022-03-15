import {rest} from 'msw'

// const todos = [
//     {
//         id: `1`,
//         title: `Jin`,
//     },
//     {
//         id: `2`,
//         title: `Jim`,
//     },
//     {
//         id: `3`,
//         title: `kimn`,
//     },
//     {
//         id: `4`,
//         title: `Jire`,
//     },
//     {
//         id: `5`,
//         title: `Jinw`,
//     }
// ]

export const handlers = [
    // rest.get('http://localhost:3000/api/todos', async(req, res, ctx)=> {
    //     return res(ctx.json(todos))

    // }),
    // rest.post('http://localhost:3000/api/todo', async(req, res, ctx)=> {
    // const {todo} = req.body;   
    // console.log(JSON.stringify(todo))
    // todos.push(todo)
    // return res(ctx.json(true))

    // }),

    rest.get('http://localhost:3001/api/projects', async(req, res, ctx)=> {
    const pageIndex = req.url.searchParams.get("page");   
    return res
    (ctx.json({
        projects: [
            {
                id: `1 ${pageIndex}`,
                name: `Jin ${pageIndex}`,
            },
            {
                id: `2 ${pageIndex}`,
                name: `Jim ${pageIndex}`,
            },
            {
                id: `3 ${pageIndex}`,
                name: `kimn ${pageIndex}`,
            },
            {
                id: `4 ${pageIndex}`,
                name: `Jire ${pageIndex}`,
            },
            {
                id: `5 ${pageIndex}`,
                name: `Jinw ${pageIndex}`,
            }
        ],
        hasMore: pageIndex < 4,
        nextCursor: parseInt(pageIndex +1)

    } ))

    }),]
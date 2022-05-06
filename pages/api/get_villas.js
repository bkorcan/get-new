const faunadb = require('faunadb')
const q = faunadb.query

export default async (req, res) => {
    const { id } = req.query

    try {

        const client = new faunadb.Client(
            { secret: process.env.SECRET }
        )
        const data = await client.query(
            q.Select('data',
                q.Get(
                    q.Ref(
                        q.Collection(
                            'villas'
                        ), id
                    )
                )
            )
        )

        res.status(200).json(data)

    } catch (e) {
         res.status(500).json({error:e.message})
    }
}
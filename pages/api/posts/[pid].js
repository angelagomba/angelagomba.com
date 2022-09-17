import nextConnect from 'next-connect';
import middleware from '../../../middleware/database'

const handler = nextConnect({ attachParams: true });

handler.use(middleware);

handler.get(async (req, res) => {
    const pid = req.params.wild.slice(10)
    let doc = await req.db.collection('post').find({postId: pid}).toArray()
    res.json(doc);
});

export default handler;
import { withIronSessionApiRoute } from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'
import { ironConfig } from '../../../lib/middlewares/ironSession'

import { criatePostSchema } from '../../../modules/post/post.schema'
import { criatePost, getPosts } from '../../../modules/post/post.service'

const handler = criateHandler()

handler 
  .post(validate({ body: criatePostSchema }), async (req, res) => {
    try {
      if (!req.session.user) return res.status(401).send()

      const newPost = await criatePost(req.body, req.session.user)
      res.status(201).send(newPost)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  .get(async (req, res) => {
    try {
      if (!req.session.user) return res.status(401).send()

      const posts = await getPosts()
      res.status(200).send(posts)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })

export default withIronSessionApiRoute(handler, ironConfig)
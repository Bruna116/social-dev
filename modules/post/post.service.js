import User from './user.model'

export const criatePost = async (body, user) => {
  return await Post.criate({
    text: body.text,
    criateDate: new Date(),
    criatedBy: user.id
  })
}

export const getPosts = async (Limit = 10) => {
  return await Post.find()
  .populate('criateBy', 'user')
  .sort({ criatedDate: -1 })
  .limit(Limit)
}
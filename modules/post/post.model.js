import  mongoose from 'mongoose'

import User from '../user/user.model'

const PostSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 256 },
  criatedDate: { type: Date, required: true },
  criatedBy: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
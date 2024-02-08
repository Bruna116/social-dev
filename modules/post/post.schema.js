import Joi from 'joi'

export const criatePostSchema = Joi.object({
  text: Joi.string().required().max(256)
})
import Joi from 'joi'

export const signupSchema = Joi.object({
  firstName: Joi.string().required().max(50).message('O campo "nome" pode ter no máximo {{#limit}} caracteries.'),
  lastName: Joi.string().required().max(50).message('O campo "sobrenome" pode ter no máximo {{#limit}} caracteries.'),
  user: Joi.string().required().max(30).message('O campo "usuário" pode ter no máximo {{#limit}} caracteries.'),
  email: Joi.string().email({ tlds: { allow: false } }).required().max(100).message('O campo "email" pode ter no máximo {{#limit}} caracteries.'),
  password: Joi.string().required()
    .max(50).message('O campo "senha" pode ter no máximo {{#limit}} caracteries.')
    .min(6).message('O campo "senha" precisa ter no minimo {{#limit}} caracteries.'),
})


export const loginSchema = Joi.object({
  userOrEmail: Joi.string().required(),
  password: Joi.string().required()
    .max(50).message('O campo "senha" pode ter no máximo {{#limit}} caracteries.')
    .min(6).message('O campo "senha" precisa ter no minimo {{#limit}} caracteries.')
})


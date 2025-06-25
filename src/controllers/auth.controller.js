import prisma from "../config/prisma.config.js"
import checkIdentity from "../utils/check-identity-util.js";
import createError from "../utils/create-error.util.js"

export async function register(req, res, next) {
  try{
  const {identity, firstName, lastName, password, confirmPassword} = req.body;
  //validation
  if(identity.trim() && firstName.trim() && lastName.trim() && password.trim() && confirmPassword()){
    createError(400, 'Please fill all data')
  }
  if(password !== confirmPassword){
    createError(400, 'Please check confirm password')
  }
  // identity เป็น email หรือ mobile phone number : checkIdentity(identity) => String : 'email' | 'mobile'
  const identityKey = checkIdentity(identity)

// หา user
const foundUser = await prisma.user.findUnique({
  where : { [identityKey] : identity }
})

if(foundUser) {
  createError(409, `Already have this user: ${identity}`)
}

const newUser = {
  [identity] : identity,
  password : await bcrypt.hash(password, 10),
  firstName : firstName,
  lastName : lastName
}

const result = await prisma.user.create({data: newUser})
res.json({
  msg: 'Register controller',
  body: req.body
})

  res.json({
    msg: 'Register controller',
    body: req.body
  })
}catch(err){
    next(err)
  }
}

export const login = (req, res, next) => {
  res.json({
    msg: 'Login controller',
    body: req.body
  })
}

export const getMe = async (req, res, next) => {

  let numUser = await prisma.user.count()
  console.log(numUser)
  createError(403, "Block !!")
  res.json({ msg: 'Getme controller', numUser })
}


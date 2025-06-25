import prisma from "../config/prisma.config.js";

export const getUserBy = async (coloum, value) =>{
  return await prisma.user.findUnique({
    where : { [coloum] : value }
  })
}

export const createUser = async (userData) =>{
  return await prisma.user.create({data : userData})
}
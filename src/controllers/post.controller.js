import  fs  from "fs/promises";
import cloudinary from "../config/cloudinary.config.js"
import path from 'path';
import prisma from "../config/prisma.config.js";

export async function getAllPosts(req, res, next) {
    const resp = await prisma.post.findMany({
        orderBy : { createdAt : 'desc' },
        include : {
            user : { select : {
                firstName: true, lastName: true, profileImage:true
            }}
        }
    })

    res.json({ posts: resp})
}

export const createPost = async(req, res, next) =>{
    const { message } = req.body
    console.log(req.file)
    let haveFile = !!req.file
    let uploadResult = null
    if(haveFile) {
        uploadResult = await cloudinary.uploader.upload(req.file.path,{
            overwrite : true,
            public_id : path.parse(req.file.path).name
        })
        fs.unlink(req.file.path)
    }

    const data = {
        message : message,
        image : uploadResult?.secure_url || '',
        userId : req.user.id
    }

    // console.log(path.parse(req.file.path))
    // console.log(uploadResult)

    const rs = await prisma.post.create({data})

    res.status(201).json({
        message: "Create post done",
        result : rs
    })
}

export async function updatePost(req, res, next) {

    res.json({ message: "Update Post" })
}

export async function deletePost(req, res, next) {

    res.json({ message: "Delete Post" })
}

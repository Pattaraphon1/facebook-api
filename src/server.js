import dotenv from 'dotenv';
import app from './app.js';
import prisma from './config/prisma.config.js';
import shutdown from './utils/shutdown.util.js';

dotenv.config()

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=> console.log(`Server on :${PORT}`))

process.on("SIGINT", ()=> {shutdown('SIGINT')})
// process.on("SIGINT", ()=>{
// process.$disconnect().then(()=>{
//   console.log('\nprisma shutdown')
//   process.exit(0)
// })
// })

process.on("SIGTERM", ()=>{ shutdown('SIGTERM')})

process.on("uncaughtException", ()=>{ shutdown('uncaughtException')})
process.on("unhandledRejection", ()=>{ shutdown('unhandledRejection')})




// prisma.user.count().then(console.log)
// prisma.user.count().then(rs=>console.log(rs))

// prisma.$queryRaw`Select * from user`.then(console.log)
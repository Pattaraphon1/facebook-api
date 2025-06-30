import express from 'express';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import notFoundMiddleware from './middlewares/not-found.middleware.js'
import errorMiddleware from './middlewares/error.middleware.js';

const app = express()

app.use(cors({
  origin : 'http://localhost:5173'
}))

app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/post', (req,res)=> {
  console.log(x)
  res.json({body: req.body})
})
app.use('/api/comment', (req,res)=> res.send('comment service'))
app.use('/api/like', (req,res)=> res.send('like service'))
app.use('/api/admin', (req,res)=> res.send('admin service'))

app.use(notFoundMiddleware)

app.use(errorMiddleware)

export default app
// export default function (err, req, res, next){
//   console.log(err.name)
//   err.statusCode = 500
//   res.status(err.statusCode).json({
//     errorName: err.name,
//     errorMsg: err.message
//   })
// }

export default function (err, req, res, next) {
 console.log(err)
 const statusCode = err.statusCode || 500
 res.status(statusCode).json({error : err.message})
}

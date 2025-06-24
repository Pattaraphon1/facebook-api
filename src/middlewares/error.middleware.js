export default function (err, req, res, next){
  console.log(err.name)
  err.statusCode = 500
  res.status(err.statusCode).json({
    errorName: err.name,
    errorMsg: err.message
  })
}
export default function(statusCode, msg) {
 const error = new Error(msg)
 error.statusCode = statusCode
 throw error
}

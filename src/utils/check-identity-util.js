import createError from "./create-error.util.js";

export default function (identity) {
  const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10,15}$/

let identityKey = ''
 if (emailRegex.test(identity)) {
   identityKey = 'email'
 }
 if(mobileRegex.test(identity)) {
  identityKey = 'mobile'
 }
 if(!identityKey){
  createError(400, 'identity only accept Email or Mobile phone')
 }
 return identityKey
  // return emailRegex.test(identity) ? 'email' : mobileRegex.test(identity) ? 'mobile' : null

}
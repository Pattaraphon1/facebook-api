import { object, string, number, date } from 'yup';

let userSchema = object({
 name: string('fill name please').required(),
 age: number().required().positive('อายุเป็นเลขบวกดิ').integer(),
 email: string().email(),
 website: string().url().nullable(),
 createdOn: date().default(() => new Date()),
});

let data = {
 name : '',
 age: 0.9,
  email : 'n@true'
}
userSchema.validate(data, {abortEarly: false}).then(rs=>{
 console.log('Result :', rs)
}).catch(err => {
 console.log('*** ERROR ***')
 console.log(err.errors.join('\n'))
 for(let e of err.inner) {
   console.log(`Error item => ${e.path} : ${e.errors[0]}`)
 }
})

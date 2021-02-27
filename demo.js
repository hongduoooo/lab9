const jwt = require('jsonwebtoken')

const username = 'Alex'
const roles = ['admin']
const jwt_key = 'my-sercret';
const jwt_exp = '5000'

//Create JSON Web Token

const token = jwt.sign({username,roles},jwt_key,{expiresIn:jwt_exp})
console.log(token)

jwt.verify(token,jwt_key,(err,data) =>{
    if(err){
        console.log('token verification failed:',err.message);
    }else{
        console.log('User',data)
    }
})
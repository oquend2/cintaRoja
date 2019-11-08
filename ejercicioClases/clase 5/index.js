const request = require("request")
let baseUrl = "http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"

// function getAllUsers(){
//     return new Promise(function(resolve,reject){
//        request.get(baseUrl, function(error, response, body){
//          if(error){
//             reject(error);
//         }else{
//             resolve(JSON.parse(body))
//     }
// })

// getAllUsers
// request.post(baseUrl, {form: })

// function getUser(idUser){
//     return new Promise(function(resolve,reject){
//         request.get(`${baseUrl}/${idUser}`, function(error, response, body){

//         // request.get(urlBase + "/" + idUser, function(error, response, body)
//          if(error){
//             reject(error)
//         }else{
//             resolve(JSON.parse(body))
//     }
// })
// })
// }
// getUser(2105)
//     .then(function(user){
//         console.log(user)
//     }).catch(function(error){
//         console.log(error)
//     })

function createUser(datos){
    return new Promise(function(resolve,reject){
        request.post(baseUrl, {form: datos}, function(error,request,body){
            if(error){
                reject(error)
            }else{
                resolve(JSON.parse(body))
            }
        })

    })
}
let newUser = {
    name: "yeison",
    last_name:"oquendo",
    nacionalidad:"MX",
    biography:"lo quese",
    gender:"M",
    age:26
}
createUser(newUser)
    .then(function(user){
        console.log(user)
    }).catch(function(error){
        console.log(error)
    })

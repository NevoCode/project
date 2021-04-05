import { getUsers } from "./serviceApi"

//MUST BE OPTIMIZED
export const loginWithEmailAndPassword=async(emailInput, passwordInput)=> {
    var users = await getUsers()
    for (var user in users){
        const {userEmail, userPass} = users[user]
        if (userEmail === emailInput &&
             userPass === passwordInput){
                return Promise.resolve(true)
             }
    }
    return Promise.reject("check email and password")
}
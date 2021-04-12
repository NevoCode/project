import { getUsers } from "./serviceApi"

export const loginWithEmailAndPassword=async(emailInput, passwordInput)=> {
    var users = await getUsers()
    console.log("input: " + emailInput + "  " + passwordInput)
    for (var user in users){
        const {userEmail, userPass} = users[user]
        console.log("user: " + userEmail + "  " + userPass)
        if (userEmail === emailInput &&
             userPass === passwordInput){
                return Promise.resolve(true)
             }
    }
    return Promise.reject("check email and password")
}
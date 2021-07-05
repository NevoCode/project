import { getUsers } from "./serviceApi"

export const loginWithEmailAndPassword=async(emailInput, passwordInput)=> {
    var users = await getUsers()
    console.log("input: " + emailInput + "  " + passwordInput)

    for (const index in users){
        const {userEmail, userPass} = users[index]
        if (userEmail === emailInput &&
             userPass === passwordInput){
                return Promise.resolve(users[index])
             }
    }
    return Promise.reject("check email and password")
}
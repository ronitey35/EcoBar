import axios from "axios"
import { BackendUrl } from "../consts"
import { useMutation } from "@tanstack/react-query"




export const useLogin = ()=> {
return useMutation({
    mutationKey:["use-login"],
    mutationFn: loginUser

})

}


const loginUser= async({email,password})=> {
  const response = await axios.post(`${BackendUrl}/auth/login`,

    email,
    password
  )
  return response.data
}
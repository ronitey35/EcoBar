import axios from "axios"
import { BackendUrl } from "../consts"
import { useQuery } from "@tanstack/react-query"


export const useProducts =()=> {
    return useQuery({
        queryKey:["products"],
        queryFn:fetchProducts
    })
}


const fetchProducts = async()=> {
const response = await axios.get(`${BackendUrl}/products`)

return response.data.products;
}
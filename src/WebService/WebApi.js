import axios from "axios";
class WebApi {
    getproductSata(url){
        return axios.get(url)
    }
}
export const url ={
    richaApi : "https://dummyjson.com/products?limit=80",
}
export default new WebApi;
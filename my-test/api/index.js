import axios from "axios";


// const API = axios.create({ baseURL: 'http://10.100.102.54:5000' })
const API = axios.create({ baseURL: 'http://10.100.102.54:5000' })




export const fetchItems = (page, category) => API.get(`/?page=${page}${category ? `&category=${category}` : ''}`)

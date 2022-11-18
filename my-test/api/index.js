import axios from "axios";


const API = axios.create({ baseURL: 'http://ip:5000' })




export const fetchItems = (page, category) => API.get(`/?page=${page}${category ? `&category=${category}` : ''}`)

import axios from 'axios'
const API = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || 'http://localhost:3000/books'
})

export const fetchBooks = () => API.get('/')
export const createBook = data => API.post('/', data)
export const updateBook = (id, data) => API.put(`/${id}`, data)
export const deleteBook = id => API.delete(`/${id}`)
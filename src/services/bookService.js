import axios from 'axios'
const API = axios.create()

export const fetchBooks = () => API.get('/')
export const createBook = data => API.post('/', data)
export const updateBook = (id, data) => API.put(`/${id}`, data)
export const deleteBook = id => API.delete(`/${id}`)
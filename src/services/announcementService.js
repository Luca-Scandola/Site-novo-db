import axios from 'axios'
const API = axios.create()

export const fetchAllAnnouncements = () => API.get('/')
export const fetchMyAnnouncements  = userId => API.get(`/mine/${userId}`)
export const createAnnouncement    = (id_livro, id_usuario) =>
  API.post('/', { id_livro, id_usuario })
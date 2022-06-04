import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchPosts = () => API.get('/elanlar')
export const createPost = (newPost) => API.post('/admin-elanlar', newPost)
export const fetchAdminPosts = () => API.get('/admin-elanlar')
export const sendPost = (newPost) => API.post('/elanlar', newPost)
export const deletePost = (id) => API.delete(`/admin-elanlar/${id}`)


export const signin = (data) => API.post('/istifadeciler/signin', data)
export const signup = (data) => API.post('/istifadeciler/signup', data)
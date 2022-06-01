import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchPosts = () => API.get('/elanlar')
export const createPost = (newPost) => API.post('/elanlar', newPost)


export const signin = (data) => API.post('/istifadeciler/signin', data)
export const signup = (data) => API.post('/istifadeciler/signup', data)
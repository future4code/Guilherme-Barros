import axios from 'axios'
export const url='https://api.github.com/users'
export const api=axios.create({ baseURL: url });
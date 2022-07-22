import axios from 'axios'
export const url='https://pizzaria-backend-case.herokuapp.com'
export const api=axios.create({ baseURL: url });
import axios from 'axios'
export const url='https://grafico-backend.herokuapp.com'
export const api=axios.create({ baseURL: url });
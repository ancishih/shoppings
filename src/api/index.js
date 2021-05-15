import axios from 'axios'

export const getData = axios.create({
    baseURL:'http://localhost:3001'
})
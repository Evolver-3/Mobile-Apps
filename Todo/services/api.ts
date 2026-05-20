import axios from 'axios'

export const api=axios.create({
  baseURL:" http://192.168.1.4:5000/api/v1/todo",
  headers:{
    "Content-Type":"application/json"
  }
})
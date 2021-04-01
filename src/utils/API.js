import axios from 'axios'

export default axios.create({
  baseURL: `https://olga-todos.herokuapp.com/todos`
})


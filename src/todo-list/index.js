import React, { useEffect, useState } from 'react'
import API from '../utils/API'
import TodoItem from '../todo-item'
import useStyles from './styles'

const TodoList = () => {

  const classes = useStyles()
  const [todos, setTodos] = useState([])

  useEffect(() => {
    (async function () {
      try {
        const res = await API.get(``)
        setTodos(res.data)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  const handleDelete = async id => {
    try {
      await API.delete(`/${id}`)
      setTodos(todos.filter(item => item.id !== id))
    } catch (e) {
      console.log(`Axios request failed: ${e}`)
    }
  }

  return (
    <div className={classes.todoList}>
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            onDelete={handleDelete}
          />
        )
      })}
    </div>
  )
}

export default TodoList
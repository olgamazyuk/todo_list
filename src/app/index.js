import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../header'
import Navbar from '../navbar'
import TodoList from '../todo-list'
import TodoDetails from '../todo-details'
import AddTodo from '../add-todo'
import useStyles from './styles'

const App = () => {

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Navbar />
      <Header />
      <Switch>
        <Route path="/" exact component={TodoList} />
        <Route path="/add" component={AddTodo} />
        <Route path="/details/:id" component={TodoDetails} />
      </Switch>
    </div>
  )
}

export default App

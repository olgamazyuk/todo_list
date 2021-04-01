import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { useTranslation } from 'react-i18next'

const TodoItem = ({ item, onDelete }) => {

  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <li className={classes.todoListItem}>
        <h2 className={classes.todoListItemTitle}>{item.title}</h2>
        <h4 className={classes.todoListItemDetails}>{t('todo.details')} {item.details}</h4>
      </li>
      <button className={classes.button} onClick={() => onDelete(item.id)}>
        {t('todo.delete')}
      </button>
      <Link to={{ pathname: `/details/${item.id}` }}>
        <button className={classes.button}>
          {t('todo.edit')}
        </button>
      </Link>
    </div>
  )
}

export default TodoItem
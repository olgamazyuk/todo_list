import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'
import { useParams, useHistory } from 'react-router-dom'
import API from '../utils/API'
import useStyles from './styles'
import NoMatch from '../no-match'

const TodoDetails = () => {

  const { t } = useTranslation(['validation', 'common'])
  const { id } = useParams()
  const classes = useStyles()
  const [todo, setTodo] = useState({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()

  const schema = yup.object().shape({
    title: yup.string()
      .min(1, t('validation:yup.min'))
      .max(300, t('validation:yup.max')),
    details: yup.string()
      .min(0, t('validation:yup.min'))
      .max(300, t('validation:yup.max')),
  })

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: todo.title,
      details: todo.details
    }
  })

  useEffect(() => {
    (async () => {
      try {
        const res = await API.get(`/${id}`)
        setTodo(res.data)
        setIsLoading(false)
        setError(false)
        reset(res.data)
      } catch (e) {
        console.log(`Axios request failed: ${e}`)
        setIsLoading(false)
        setError(true)
      }
    })()
  }, [reset, id])

  const handleEdit = async data => {
    try {
      await API.patch(`/${id}`, { title: data.title, details: data.details })
      setTodo(todo => {
        todo.details = data.details
        todo.title = data.title
        return todo
      })
      history.push("/")
    } catch (e) {
      console.log(`Axios request failed: ${e}`)
    }
  }

  const Details = () => {
    return (
      <div className={classes.container}>
        <form className={classes.form} onSubmit={handleSubmit(handleEdit)}>
          <label className={classes.label} htmlFor="title">{t('common:todo.title')}</label>
          <input
            className={classes.input}
            name="title"
            type="text"
            id="title"
            ref={register}
          />
          <span>{errors.title?.message}</span>
          <label className={classes.label} htmlFor="details">{t('common:todo.details')}</label>
          <input
            className={classes.input}
            name="details"
            type="text"
            id="details"
            ref={register}
          />
          <span>{errors.details?.message}</span>
          <button className={classes.button} type="submit">{t('common:submit')}</button>
        </form>
      </div>
    )
  }

  return (
    isLoading ? '' : error ? <NoMatch /> : <Details />
  )
}

export default TodoDetails
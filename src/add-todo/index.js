import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import API from '../utils/API'
import useStyles from './styles'

const AddTodo = () => {

  const { t } = useTranslation()
  const classes = useStyles()
  const history = useHistory()

  const schema = yup.object().shape({
    title: yup.string()
      .min(1, t('validation:yup.min'))
      .max(300, t('validation:yup.max')),
    details: yup.string()
      .min(0, t('validation:yup.min'))
      .max(300, t('validation:yup.max')),
  })

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const handleAdd = async todo => {
    const newItem = {
      title: todo.title,
      details: todo.details,
      completed: false
    }
    try {
      await API.post(``, newItem)
      history.push("/")
    } catch (e) {
      console.log(`Axios request failed: ${e}`)
    }
  }

  return (
    <div>
      <h2>
        {t('header.addTodo')}
      </h2>
      <form className={classes.form} onSubmit={handleSubmit(handleAdd)}>
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
        <button className={classes.button} type="submit">{t('submit')}</button>
      </form>
    </div>
  )
}

export default AddTodo
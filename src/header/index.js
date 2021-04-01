import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Header = () => {

  const { t } = useTranslation()
  const classes = useStyles()
  
  return (
    <div className={classes.header}>
      <Link className={classes.styledLink} to="/">
        <h1 className={classes.title}>
          {t('header.title')}
        </h1>
      </Link>
      <Link className={classes.styledLink}  to="/add">
        <button className={classes.button}>
          {t('header.addTodo')}
        </button>
      </Link>
    </div>
  )
}

export default Header
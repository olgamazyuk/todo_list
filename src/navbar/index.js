import React from 'react'
import { useTranslation } from 'react-i18next'
import useStyles from './styles'

const Navbar = () => {

  const { i18n } = useTranslation()
  const classes = useStyles()

  const handleClick = lang => {
    i18n.changeLanguage(lang)
  }

  return (
    <nav className={classes.navbar}>
      <button className={classes.button} onClick={() => handleClick('en')}>
        English
      </button>
      <button className={classes.button} onClick={() => handleClick('ru')}>
        Русский
      </button>
    </nav>
  )
}

export default Navbar
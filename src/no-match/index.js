import React from 'react'
import { useTranslation } from 'react-i18next'


const NoMatch = () => {

  const { t } = useTranslation()

  return (
    <h1>{t('common:todo.noMatch')}</h1>
  )
}

export default NoMatch
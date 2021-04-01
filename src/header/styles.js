import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '1rem auto',
  },
  styledLink: {
    textDecoration: 'none',
  },
  title: {
    color: 'grey',
  },
  button: {
    display: 'inline-block',
    fontWeight: '400',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    userSelect: 'none',
    border: '1px solid transparent',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    borderRadius: '.25rem',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: 'grey',
    borderColor: 'grey',
  }
})

export default useStyles
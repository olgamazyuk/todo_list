import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  navbar: {
    width: '100%',
    padding: '1rem 0',
  },
  button: {
    display: 'inline-block',
    height: '80%',
    fontWeight: '400',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    userSelect: 'none',
    border: '1px solid transparent',
    padding: '.375rem .75rem',
    marginRight: '1rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    borderRadius: '.25rem',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: '#A833FF',
    borderColor: '#A833FF',
  }
})

export default useStyles
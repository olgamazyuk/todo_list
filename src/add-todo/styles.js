import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  form: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'inline-block',
    marginBottom: '.5rem',
    marginTop: '1rem',
  },
  input: {
    display: 'block',
    width: '100%',
    height: 'calc(1.5em + .75rem + 2px)',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  },
  button: {
    display: 'inline-block',
    fontWeight: '400',
    width: '15%',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    border: '1px solid transparent',
    padding: '.375rem .75rem',
    marginTop: '1rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    borderRadius: '.25rem',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  }
})

export default useStyles
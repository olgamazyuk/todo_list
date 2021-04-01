import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  todoListItem: {
    width: '80%',
    position: 'relative',
    display: 'block',
    padding: '.75rem 1.25rem',
    marginRight: '1rem',
    backgroundColor: '#fff',
    border: '1px solid rgba(0,0,0,.125)',
    borderRadius: '.25rem',
    cursor: 'pointer',
  },
  todoListItemTitle: {
    margin: '.5rem 0',
    fontWeight: '600',
  },
  todoListItemDetails: {
    margin: '0',
    fontWeight: '400',
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
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
  }
})

export default useStyles
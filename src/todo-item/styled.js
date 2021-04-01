import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

export const TodoListItem = styled.li`
  width: 80%;
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  margin-right: 1rem;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  cursor: pointer;
`

export const TodoListItemTitle = styled.h2`
  margin: .5rem 0;
  font-weight: 600;
`

export const TodoListItemDetails = styled.h4`
  margin: 0;
  font-weight: 400;
`

export const Button = styled.button`
  display: inline-block;
  height: 80%;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  margin-right: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  cursor: pointer;
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
`
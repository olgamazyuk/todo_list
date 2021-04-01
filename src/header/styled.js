import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Title = styled.h1`
  color: grey;
`

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  cursor: pointer;
  color: #fff;
  background-color: grey;
  border-color: grey;
  transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
`




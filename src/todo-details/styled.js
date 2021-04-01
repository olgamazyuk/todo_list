import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem auto;
`

export const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  display: inline-block;
  margin-bottom: .5rem;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  width: 15%;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  cursor: pointer;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
`
import React from 'react'

export const Input = ({search, nameInput, events}) => {
  return (
    <Input onChange = {events} value = {search}>{nameInput}</Input>
  )
}

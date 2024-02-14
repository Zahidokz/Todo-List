"use client"
import Items from '@/Components/Items'
import TodoForm from '@/Components/TodoForm'
import React, { useState } from 'react'

const page = () => {
  const [Expenses, setExpenses] = useState([])
  const datofinputs = (inputDates) => {
    const newdata = [inputDates,...Expenses]
    setExpenses(newdata)
  }

  return (
    <>
      <TodoForm dataofInputs = {datofinputs}/>
      <Items Items = {Expenses}/>
    </>
  )
}

export default page
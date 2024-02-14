'use client'
import React, { useState } from 'react'

const TodoForm = (props) => {
    const [title, settitle] = useState('')
    const changHandler1 = (event) => {
        settitle(event.target.value)
    }

    const [NewsDate, setNewsDate] = useState('')
    const changeHander3 = (event) => {
        setNewsDate(event.target.value)
    }

    const [Amount, setAmount] = useState('')
    const changeHander2 = (event) => {
        setAmount(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const formvalues = {
            Title: title,
            Amount: Amount,
            NewsDate: NewsDate,
            id: Math.random().toString()

        }

        props.dataofInputs(formvalues)

        settitle('')
        setNewsDate('')
        setAmount('')
    }
  return (
    <>
      <h1 className='text-white text-center text-4xl font-bold bg-black py-[20px]'>TODO LISTS</h1>
    <form className='max-w-[50%] rounded-lg mx-auto bg-slate-900 my-[2rem]' onSubmit={submitHandler}>
      <div className='grid grid-row-2 p-8 text-white'>
        <div className='flex justify-between'>
          <div>
            <label className='text-xl'>Title:</label>
            <input type="text" className='h-[2.1rem] pl-2 ml-2 rounded-sm bg-[rgba(0,0,0,0.5)] border-[1px] border-[white] focus:outline-none focus:ring-2 focus:ring-red-500' placeholder='Item Name' required value={title} onChange={changHandler1}/>
          </div>

          <div>
            <label className='text-xl'>Amoutn:</label>
            <input type="number" className='h-[2.1rem] pl-2 ml-2 rounded-sm bg-[rgba(0,0,0,0.5)] border-[1px] border-[white] focus:outline-none focus:ring-2 focus:ring-red-500' placeholder='Amount' required value={Amount} onChange={changeHander2}/>
          </div>
        </div>
        <div className='flex mt-10 justify-between'>
          <div>
            <label className='text-xl'>Date:</label>
            <input type="date" className='h-[2.1rem] pl-2 ml-2 rounded-sm bg-[rgba(0,0,0,0.5)] border-[1px] border-[white] focus:outline-none focus:ring-2 focus:ring-red-500 w-[11.7rem]' placeholder='Select Date' required value={NewsDate} onChange={changeHander3}/>
          </div>
          <button className='bg-[red] hover:bg-red-600 p-[6px_20px] duration-300 rounded-sm'>Submit Items</button>
        </div>
      </div>
    </form> 
    </>
  )
}

export default TodoForm
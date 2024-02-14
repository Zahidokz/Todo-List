'use client'
import React from 'react'
import TodoItems from './TodoItems'

const Items = (props) => {
  return (
    <>   
        <div className='max-w-[50%] mx-auto bg-black p-[8px_16px] rounded-lg'>
          {
            props.Items.map(
                    expen => (
                <TodoItems
                  title = {expen.Title}
                  Amount = {expen.Amount}
                  date = {expen.NewsDate}
                />
              )
            )
          }
        </div>
    </>
  )
}

export default Items
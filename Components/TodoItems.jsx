import React from 'react'

const TodoItems = (props) => {

  // let days = props.date.toLocaleString('en-US', {day:'2-digit'})
  // let months = props.date.toLocaleString('en-US', {month: 'long'})
  // let years = props.date.getFullYear()

  return (
    <> 
    <div>
      <div className='my-4 grid grid-cols-4 items-center text-white rounded-lg px-8 py-2 bg-slate-900 '>
           <div className='bg-black text-center py-[6px] rounded-sm border-[1px] borde-white'>
             <h3>{props.date}</h3>
           </div>
           <div className='pl-6'>
             <h3>{props.title}</h3>
           </div>
           <div>
              <h4>Rs: {props.Amount}</h4>
           </div>
          <button className='bg-[red] hover:bg-red-600 py-[6px] w-[8rem] duration-300 rounded-sm'>Delete</button>
      </div>
    </div>
    </>
  )
}

export default TodoItems
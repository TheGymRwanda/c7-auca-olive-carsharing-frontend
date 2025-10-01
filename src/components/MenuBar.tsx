
import React from 'react'


function MenuBar() {
  return (
    <div className='flex flex-row w-full h-16 bg-black'>
        <div className='flex-1 h-4 w-4 bg-yellow-500'></div>
        <div className='flex-1 h-4 w-4 bg-red-950'></div>
        <div className='flex-1 h-4 w-4 bg-green-800'></div>

    </div>
  )
}

export default MenuBar
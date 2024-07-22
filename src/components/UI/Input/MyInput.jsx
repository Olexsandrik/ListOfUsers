import React from 'react'
import cl from './MyInput.module.css'

export const MyInput = (props) => {
  return (
    <div>
        <input {...props} className={cl.myInput} />

    </div>
  )
}

import React from 'react'

export const MySelect = ({option,defaulvalue,value,onChange}) => {
  return (
    <select 
    onChange={event=>onChange(event.target.value)}
    value={value}
    >
        <option disabled>{defaulvalue}</option>
        
        {option.map(option=>
            <option key={option.value} value={option.value}>{option.name}</option>
        )}
    </select>
  )
}

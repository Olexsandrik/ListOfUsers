import React from 'react'
import { MyInput } from '../Input/MyInput'
import { MySelect } from '../select/MySelect'

export const PostFilter = ({filter,setFilter}) => {
  return (
    <div>
        
    <MyInput
      value={filter.query}
      onChange={event=> setFilter({...filter, query: event.target.value})} 
       placeholder="Пошук"
      />
     




    <MySelect
    option={[
      {value: 'title', name: 'По імені'},
      {value: 'body', name: 'По опису'}
    ]}
    defaulvalue={'Сортування'}
    onChange={e=>setFilter({...filter, sort: e})}
    value={filter.sort}

    />


    </div>
  )
}

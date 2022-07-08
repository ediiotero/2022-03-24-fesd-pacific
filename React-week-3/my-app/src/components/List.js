import React from 'react'

const List = (props) => {
  return (
    <div className='list-item'>
        <p>{props.name}</p>
        <p>{props.email}</p>
    </div>
  )
}

export default List
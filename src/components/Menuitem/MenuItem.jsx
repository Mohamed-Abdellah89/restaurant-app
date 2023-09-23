import React from 'react'
import './MenuItem.css'
const MenuItem = ({title, price, tags}) => {
  return (
    <div className='app__menuItem'>
      <div className='app__menuItem-head'>

        <div className='app__menuItem-head_name'>
          <p className='p__cormorant'>{title}</p>

        </div>

        <div className='app__menuItem-dash'/>

        <div className='app__menuItem-head_price'>
          <p className='p__cormorant'>{price}</p>

        </div>

      </div>

      <div className='app__menuItem-head_sub'>
      <p className='p__opensans'>{tags}</p>
      </div>
      
    </div>
  )
}

export default MenuItem

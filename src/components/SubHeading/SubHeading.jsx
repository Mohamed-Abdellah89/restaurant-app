import React from 'react'
import './SubHeading.css'
import {images} from '../../constants'


const SubHeading = ({title}) => {
  return (
    <div className='app__subheading'>

      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} alt="spoon_images" className='spoon__img' />
      
    </div>
  )
}

export default SubHeading
import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'

const BackButton = ({ destination = '..' }) => {
  return (
    <div>
        <Link to={destination}>
            <BsArrowLeft size={'50px'}/>
        </Link>
    </div>
  )
}


export default BackButton
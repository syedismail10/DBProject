import React from 'react'
import {Link} from "react-router-dom"

const pagination= () => {
  return (
    <nav>
      <ul className='pagination justify-content-center'>
        <li className={'page-item active'}>
          <Link className='page-link' to = {'#'}>
            1
          </Link>
        </li>
        <li className={'page-item active'}>
          <Link className='page-link' to = {'#'}>
            2
          </Link>
        </li>
        <li className={'page-item active'}>
          <Link className='page-link' to = {'#'}>
            3
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default pagination
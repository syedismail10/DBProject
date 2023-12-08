import React from 'react'
import {ToastContainer} from 'react-toastify'

const Toast = () => {
  return (
    <div>
        <ToastContainer>
            position= 'top-right'
            hideProgressBar = {false}
            newestonTop = {false}
            closeOnClick = {false}
            rtl = {false}

        </ToastContainer>
    </div>
  )
}

export default Toast
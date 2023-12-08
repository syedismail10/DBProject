import React from 'react'

const ContactInfo= () => {
  return (
    <div className='contactInfo container'>
        <div className='row'>
          <div className='col-12 col-md-4 contact-Box'>
            <div className='box-info'>
              <div className='info-image'>
                <i className='fas fa-phone-alt'></i>
              </div>
              <h5>Call us 24/7</h5>
              <p>+92 311 8362984</p>
            </div>
          </div>
          <div className='col-12 col-md-4 contact-Box'>
            <div className='box-info'>
              <div className='info-image'>
                <i className='fas fa-map-marker-alt'></i>
              </div>
              <h5>Headquarters</h5>
              <p>Karachi,Pakistan</p>
            </div>
          </div>
          <div className='col-12 col-md-4 contact-Box'>
            <div className='box-info'>
              <div className='info-image'>
                <i className='fas fa-fax'></i>
              </div>
              <h5>Email</h5>
              <p>onlineFootwear@gmail.com</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactInfo
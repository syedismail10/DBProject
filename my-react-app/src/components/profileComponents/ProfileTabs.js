import React from 'react'

const ProfileTabs = () => {
  return (
    <form className="row form-container">
      <div className="row form-container">
       <div className="col-md-6">
         <div className="form">
           <label htmlFor="account-fn">username</label>
           <input type="text" className="form-control" required/>
         </div>
        </div>
       <div className="col-md-6">
          <div className="form">
           <label htmlFor="account-email">E-mail</label>
            <input type="email" className="form-control" />
          </div>
       </div>
        <div className="col-md-6">
          <div className="form">
           <label htmlFor="account-pass">New Password</label>
           <input type="password" className="form-control" />
         </div>
        </div>
       <div className="col-md-6">
         <div className="form">
           <label htmlFor="account-confirm-pass">Confirm Password</label>
           <input type="email" className="form-control" />
          </div>
       </div>
      </div>
      <button type="submit">Update Profile</button>
    </form>
  )
}

export default ProfileTabs
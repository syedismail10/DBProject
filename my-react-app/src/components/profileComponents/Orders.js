import React from 'react'

const Orders = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {//   <div className="col-12 alert alert-info text-center mt-3">
      //     No Orders
      //     <Link
      //     className='btn btn-sucess mx-2 px-3 py-2'
      //     to = '/'
      //       style = {{
      //         fontSize: '12px'
      //     }}>
      //       START SHOPPING
      //     </Link>
      // 
      // 
    // </div>
    }
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Date</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={"alert-success"}>
              <td>
                <a href={"/"} className="link">1</a>
              </td>
              <td>Paid</td>
              <td>date</td>
              <td>$234</td>
            </tr>
            {/* {cancelled} */}
            <tr className={"alert-danger"}></tr>
            <td>
              <a href={"/"} className="link"></a>
            </td>
            <td>Not paid</td>
            <td>date</td>
            <td>34</td>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
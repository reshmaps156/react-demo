import React, { useState } from 'react'

function User() {
    const [color,Setcolor] = useState({
        color1:'red',
        color2:'green',
        color3:'yellow'
    })
    const changeColor = (data)=>{
        Setcolor({...color,color3:data})
    }

    const [userDetails , setUserDetails] = useState([
      {username : 'neel',age:27,designation : 'frontend developer'},
      {username : 'max',age:20,designation : 'backend developer'},
      {username : 'nithin',age:29,designation : 'full stack developer'},
      {username : 'nivya',age:28,designation : 'HR'}
    ])
    
  return (
    <>
    <div>User Component</div>
    <ul>
       <li>{color.color1}</li>
       <li>{color.color2}</li> 
       <li>{color.color3}</li> 
    </ul>
    <button className='btn btn-secondary' onClick={()=>changeColor('blue')}>Change color</button>

    {/* {table} */}
    <table className='p-4 table-border border border-primary table-secondary shadow table mt-5 w-50 text'>
      <thead>
        <tr>
          <th>SL NO</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>DESIGNATION</th>
        </tr>
      </thead>
      <tbody>
        {userDetails.map((item,index)=>(<tr>
          <td>{index+1}</td>
          <td>{item.username}</td>
          <td>{item.age}</td>
          <td>{item.designation}</td>
          
        </tr>))
        }
      </tbody>
    </table>
    </>
  )
}

export default User
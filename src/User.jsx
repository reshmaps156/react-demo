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
    
  return (
    <>
    <div>User Component</div>
    <ul>
       <li>{color.color1}</li>
       <li>{color.color2}</li> 
       <li>{color.color3}</li> 
    </ul>
    <button className='btn btn-secondary' onClick={()=>changeColor('blue')}>Change color</button>
    </>
  )
}

export default User
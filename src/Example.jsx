import React from 'react'

function Example({sub,age}) {  //key should be in curly bracket while object destructuring
  console.log(sub);
  //function without argument
  const buttonclick =  ()=>{
    alert('button clicked')
  }

  //function with arg
  const addUser = (uname)=>{
    alert(`${uname} added successfully`)
  }

  const getName = (evnt)=>{
    console.log(evnt.target.value);
  }
  return (
    <>
    <div>Example</div>
   
    {sub ==='react' ?  <p className='text-primary fs-3 fw-bold'>data shared is {sub}</p> :   <p className='text-danger fs-3 fw-bold'>data shared is not react</p>}

    
   {age===28 && <p className='text-success fs-4'>Age is {age}</p>}
  
    <button className='btn btn-warning p-2' onClick={buttonclick}>Click here</button>
    <button className='btn btn-primary m-5' onClick={()=>addUser('reshma')}>Add User</button>

    <div>
      <input type="text" placeholder='course' className='form-control w-25' onChange={(e)=>getName(e)}/>
    </div>
    </>

  )
}

export default Example
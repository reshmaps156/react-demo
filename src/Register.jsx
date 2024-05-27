import React, { useState } from 'react'

function Register() {
    const [Details,setDetails] = useState({
        username : "",
        email :"",
        password : ""
    })
    console.log(Details);
    const handleRegister = ()=>{
        const {username,email,password} = Details
        alert(`User registered successfullly with username :${username} and email as ${email} & password is ${password}`)
    }
  return (
    <>
    <div className='row'>
        <div className="col-md-3"></div>
        <div className='col-md-6'>
            <div className='d-flex flex-column  p-4 border border-warning shadow rounded-5 m-5 '>
                <h3 className='text-center text-secondary'>Register</h3>
                <fieldset className='d-flex align-items-center justify-content-center flex-column'>
                    <input className='m-2 w-75 form-control' type="text" placeholder='User name' onChange={(e)=>setDetails(
                        {...Details,username:e.target.value})}/>
                    <input className='m-2 w-75 form-control' type="email" name="" id="" placeholder='email' onChange={(e)=>setDetails(
                        {...Details, email:e.target.value})}/>
                    <input className='m-2 w-75 form-control' type="password" name="" id="" placeholder='password' onChange={(e)=>setDetails(
                        {...Details,password:e.target.value})}/>
                    
                </fieldset>
                <fieldset className='d-flex align-items-center justify-content-center flex-column'>
                    <button onClick={handleRegister} className='btn btn-primary w-25 m-2'>Register</button>
                    </fieldset>
            </div>
        </div>
        <div className="col-md-3"></div>
    </div>
    </>
  )
}

export default Register
import React, { useState } from 'react'

export default function Login({login,setLogin}) {
    const [data,setData]=useState({
    
        email:'',
        password:'',

    })
    const handleLogin=(e)=>{
        e.preventDefault()
        if(data.email==="sgthubli@gmail.com" && data.password==="sgthubli@gmail.com"){
           setLogin(false)
            alert('Welcome Back again!')
        }
        else{
            
            alert("Invalid Credentials")
        }
    }
  return (
    <>
   {login && <div className='w-[100vw]  pt-[5rem] h-[100vh]'>
      <div  className='flex flex-col gap-3 justify-center items-center px-3'>
        <div className='flex text-[25px] text-orange-400 uppercase leading-[35px] tracking-wider font-bold text-orange-400text-center'> 
            <h1>Shri Gannesh travel</h1>
        </div>
        <div className='border-0 rounded-md md:w-[50%] w-[100%] p-4 justify-center items-center flex flex-col bg-slate-200'>
            <h2 className='text-[20px] font-bold uppercase tracking-wider mb-[2rem]'>Login</h2>
            <form onSubmit={handleLogin} className='flex flex-col   gap-5 lg:w-[70%]'>
                <input onChange={(e)=>setData({...data,email:e.target.value})} type="email" placeholder="Username" className='h-[2.5rem] px-2 outline-none'  required/>
                <input onChange={(e)=>setData({...data,password:e.target.value})} type="password" placeholder="Password" className='h-[2.5rem] px-2 outline-none'  required />
                <button className='bg-red-400 w-[5rem] flex items-center justify-center rounded-sm ml-[42%] py-2 text-white font-bold'>Login</button>
            </form>
        </div>
      </div>
    </div>}
    </>
  )
}

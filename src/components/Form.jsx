import React, { useEffect, useState } from 'react'

const Form = () => {

   const [userInput , setUserInput] = useState({
    fname : "",
    lname : ""
   });

   const handleChange = (e) => {
       setUserInput({
        ...userInput,
        [e.target.id] : e.target.value, 
       })
   }

   const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000', {
            method : "POST",
            data : userInput
        })
   }

  return (
    <>
        <form>

            <label htmlFor="fName">First Name : </label>
            <input 
            className='border border-gray-900 rounded text-white bg-gray-900 m-2'
            type="text" 
            value={userInput.fname}
            name="fname" 
            onChange={handleChange}
            id="fname" />

            <label htmlFor="lname">Last Name : </label>
            <input 
            className='border border-gray-900 rounded text-white bg-gray-900 m-2'
            type="text" 
            value={userInput.lname}
            name="lname" 
            onChange={handleChange}
            id="lname" />

            <button onClick={handleSubmit}>Submit</button>

        </form>

        <h1>First name is :{userInput.fname} </h1>
        <h1>Last Name is : {userInput.lname}</h1>

    </>
  )
}

export default Form
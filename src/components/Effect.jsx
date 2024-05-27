
// import {useState, useEffect} from 'react'

// const Effect = () => {

//     const [count , setCount] = useState(0);

//     const incCount = () => {
//         setCount(count + 1)
//         console.log('Count ' , count)
//     }

//     const decCount = () => {
//         setCount(count - 1)
//     }

//     const getData = () => {
//         console.log('fetching api......:)')
//     }

    
//     useEffect(() => {
        
//         getData()

//     },[])

//     console.log('component reRendered')


//     return(
//         <>
//             <button className='bg-black text-white p-2 rounded-md shadow m-2' onClick={incCount}>Increment</button>
//                 <h2 className='text-2xl m-2'>{count}</h2>
//             <button className='bg-black text-white p-2 rounded-md shadow m-2' onClick={decCount}>Decrement</button>
//         </>
//     );
// }

// export default Effect;






import React from 'react'
import {useEffect, useState} from 'react'

const Effect = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)


    const getData = () => {
        console.log('loading data ......')
    }


    useEffect(() => {
        getData();
    },[count1])


    useEffect(() => {
        console.log('SideEffect 2')
    }, [count2])

    
  return (
    <>

        <h1>Count 1 : {count1}</h1>
        <h1>Count 2 : {count2}</h1>


        <button className='bg-black text-white p-2 rounded-md shadow m-2' onClick={() => {setCount1(count1 + 1)}}>Change C1</button>
        <button className='bg-black text-white p-2 rounded-md shadow m-2' onClick={() => {setCount2(count2 + 1)}}>Change C2</button>

    </>
  )
}

export default Effect
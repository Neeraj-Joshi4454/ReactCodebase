
// import {useState} from 'react'

// const CounterComp = () => {


//     const [count, setCount] = useState(0);

//     console.log('component rendered')

//     const incCount = () => {
//         setCount(count + 1);
//     }

//     const decCount = () => {
//         setCount(count - 1)
//     }


//     return(
//         <>
//             <div className="main w-[100vw] border h-[90vh] flex flex-col justify-center items-center">

//                 <h1 className="text-4xl font-sans my-3 font-semibold text-blue-800 capitalize">Counter App</h1>

//                 <div>
//                     <button 
//                     className="border border-black p-2 rounded-md shadow-md hover:bg-green-600 hover:text-white text-xl my-5"
//                     onClick={incCount}
//                     >Increment</button>

//                     <h1 className="text-4xl text-center">{count}</h1>

//                     <button 
//                     className="border border-black p-2 rounded-md shadow-md hover:bg-red-600 hover:text-white text-xl my-5"
//                     onClick={decCount}
//                     >Decrement</button>
//                 </div>
//             </div>
//         </>
//     );

// }

// export default CounterComp;


// import {useState} from 'react'

// const State = () => {

//     const [name, setName] = useState("Felix");


//     const changeName = () => {
//         const userInput = window.prompt('Enter your name : ')
//         setName(userInput)
//     }

//     console.log('Component Rerendered')

//     return(
//         <>
//            {/* with String  */}

//             <h1>Institute : {name}</h1>
//             <button onClick={changeName} className='bg-black text-white shadow-md rounded-md m-5 p-2'>Click Me</button>



//         </>
//     );
// }

// export default State;




//  {/* with Array */}

// import { useState } from 'react'

// const State = () => {

//     const [course, setCourse] = useState(["FS-React", "IOS", "UI/UX", "Flutter"]);

//     const addCourse = () => {
//         const userInput = window.prompt('Enter the course Name : ')
//         setCourse([...course, userInput])
//     }
    
//     console.log(course)
//     return (
//         <>
//             <ul>
//                 {
//                     course.map((val, index) => {

//                         return (
//                             <>
//                                 <li key={index}>
//                                     {val}
//                                 </li>

//                             </>
//                         );

//                     })
//                 }

//                 <button onClick={addCourse} className='bg-black text-white shadow-md rounded-md m-5 p-2'>Add Course</button>
//             </ul>
//         </>
//     );
// }

// export default State;



//  {/* with Object */}


import { useState } from 'react'

const State = () => {

    const [student, setStudent] = useState([{name : "student1", city : "pune"}, { name: "student1", city : "mumbai"}]);
    

    const addStudent = () => {

        const sName = window.prompt('Enter Name of Student : ');
        const sCity = window.prompt('Enter City of Student : ');

        setStudent([...student, { name : sName , city : sCity}])


    }
    return (
        <>

            <table>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((val, index) => {
                            return(
                                <>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{val.name}</td>
                                        <td>{val.city}</td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </table>


            <ul>

                
                <button onClick={addStudent} className='bg-black text-white shadow-md rounded-md m-5 p-2'>Add Student</button>
            </ul>
        </>
    );
}

export default State;

import {useState} from 'react'

const CounterComp = () => {


    const [count, setCount] = useState(0);

    console.log('component rendered')

    const incCount = () => {
        setCount(count + 1);
    }
    
    const decCount = () => {
        setCount(count - 1)
    }


    return(
        <>
            <div className="main w-[100vw] border h-[90vh] flex flex-col justify-center items-center">

                <h1 className="text-4xl font-sans my-3 font-semibold text-blue-800 capitalize">Counter App</h1>

                <div>
                    <button 
                    className="border border-black p-2 rounded-md shadow-md hover:bg-green-600 hover:text-white text-xl my-5"
                    onClick={incCount}
                    >Increment</button>

                    <h1 className="text-4xl text-center">{count}</h1>

                    <button 
                    className="border border-black p-2 rounded-md shadow-md hover:bg-red-600 hover:text-white text-xl my-5"
                    onClick={decCount}
                    >Decrement</button>
                </div>
            </div>
        </>
    );

}

export default CounterComp;
import { useEffect, useState } from "react";



const API = () => {

    const [apiData, setapiData] = useState([])

    async function loadData() {

        const res = await fetch("https://fakestoreapi.com/products")

        const maindata = await res.json();
        setapiData(maindata)

    }
    
    useEffect(() => {
        loadData();
    }, []);




    return !apiData.length > 0 ? (<div>

        <div className="bg-gray-300 h-[20vh] w-[40vw]">

        </div>

    </div>) : (
        <>

            {/* <button onClick={loadData} className="bg-black text-white h-15 w-30 m-4">Click Now</button> */}

            <table className='border-solid'>
                <tr>
                    <th className="border-solid">Sr.No.</th>
                    <th className="border-solid">Name</th>
                    <th>Price</th>
                    <th>category</th>
                    {/* <th>Address</th> */}
                </tr>
                {
                    apiData.map((val, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{val.title}</td>
                                <td>{val.price}</td>
                                <td>{val.category}</td>
                                {/* <td>{val.address.street},{val.address.city},{val.address.zipcode}</td> */}
                            </tr>
                        )

                    })
                }
            </table>

        </>
    )
}

export default API; 
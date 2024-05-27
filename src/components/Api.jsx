import React, {useState, useEffect} from 'react';
const Api = () => {

  const [apiData , setApiData ] = useState([]);

  async function loadData(){

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const mainData = await res.json();
    setApiData(mainData)

  }

  useEffect(() => {
    loadData();
  },[])


  return !apiData.length > 0 ? (<div>
    
    <div className='h-[50vh] w-[50vw] bg-gray-200 rounded-lg shadow-lg'>

    </div>

  </div>) : (
    <>
      <table>
        <tr>
          <th>Sr No.</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
        {
          apiData.map((val , index) => {
            return(
              <tr>
                <td>{index + 1}</td>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.address.street}, {val.address.city},{val.address.zipcode}</td>
              </tr>
            );
          })
        }
      </table>
    
    </>
  )
}

export default Api
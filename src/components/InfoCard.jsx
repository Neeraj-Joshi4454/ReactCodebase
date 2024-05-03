
const InfoCard = ({name = "Felix", designation="Trainer", colour="red"}) => {

    return(
        <>
        <div className="m-5 shadow-lg border-black w-[25%] flex-col justify-center items-center rounded-lg p-2">
            <h1 className="text-blue-900 font-serif text-3xl font-semibold">{name}</h1>
            <h3 className="text-gray-600 font-light text-md">{designation}</h3>
            <p className=" w-72 text-gray-800 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt accusantium aspernatur odio voluptate impedit voluptas, consectetur eligendi repudiandae odit numquam sunt iusto harum quas ad reprehenderit amet. Dolorem, doloribus.</p>
            {/* <button className="btn btn-dark shadow" style={{backgroundColor:colour}}>Know More</button> */}
            <button className="w-[12vw] border shadow-lg m-2 p-2 bg-black text-white rounded">Know More</button>
        </div>
        </>
    );

}

export default InfoCard;
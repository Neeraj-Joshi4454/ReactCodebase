import MoviesData from "../MoviesData"

const MoviesApp = () => {

    console.log(MoviesData)


    return (
        <>
            <div className="flex">

                <h1>Top Movies</h1>
                {
                    MoviesData.map((val, index) => {

                        return (
                            <div >
                                <div>
                                    <img src={val.cover} className="w-[100%] h-[350px] rounded-t-lg m-6 p-4 gap-4" alt="val.title" />
                                    <div className="text-center mt-0">
                                        <h1>{val.title}</h1>
                                        <p>Rating - {val.rating} /5</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </>

    )

}
export default MoviesApp;

import MoviesData from "../MoviesData";
import Card from "./Card";


const Movies = () => {

    //console.log(MoviesData)
    return(
        <>  
            <h1 className="text-center text-4xl text-red-600 my-5">Top 3 Movies for Watch</h1>
            <div className="borderw-[100vw] flex justify-center items-center">
                {
                    MoviesData.map((val, index) => {
                        let i = parseInt(val.rating)
                        var star = ""
                        while(i>0){
                            star+="⭐"
                            i--;
                        }
                        console.log(star)
                        return(
                            <Card val={val} star={star}/>
                        );
                    })
                }
            </div>


        </>
    );
}

export default Movies;
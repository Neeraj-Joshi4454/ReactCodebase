import InfoCard from './InfoCard';
import "./Home.css"
import image1 from '../assets/image1.png'
function Home(){

    const greet = () => {
        console.log("Hello from js")
    }

    greet()

    return(
        <>
            <hr />
            <h1 className="One">Home component</h1>
            <InfoCard name="Jhon" designation="Software Developer" colour="red"/>
            <InfoCard name="Krishna" designation="Tester" colour="green"/>
            <InfoCard name="Pritam" designation="UI/UX Designer" colour="blue"/>
            <InfoCard name='Neeraj'/> <br />
            <img src={image1} alt="" height={200} width={200} />
        </>
    );

}

export default Home;
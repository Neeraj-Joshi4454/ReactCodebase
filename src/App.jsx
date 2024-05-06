
// 1)Component

  // 1) Classbase component

  // 2) functional  component

  // import Home from './components/Home';
import CounterComp from './components/Counter';
import NavbarComp from './components/NavbarComp';
function App(){

  // const userName = window.prompt('Enter you userName : ');
  // const password = parseInt( window.prompt('Enter your Password : '));
  
  // const userName = "felix";
  // const password = 123;

  // return userName === 'felix' && password === 123 ? <Home/> :<Login/> ;

  // if(userName === "felix" && password === 123){
  //   return(
  //     <>
  //       <Home/>
  //     </>
  //   )
  // }
  // else{
  //   return(
  //     <>
  //       <Login/>
  //     </>
  //   );
  // }


  // return(
  //   <>
  //     {/* <h1>Hello from our first component</h1> */}
  //     {/* <Home/>
  //     <About/> */}
  //     {/* <InfoCard name="Jhon" designation="Software Developer" colour="red"/>
  //     <InfoCard name="Krishna" designation="Tester" colour="green"/>
  //     <InfoCard name="Pritam" designation="UI/UX Designer" colour="blue"/>
  //     <InfoCard name='Neeraj'/> */}

  //   </>
  // );


  return(
    <>
      <NavbarComp/>
      {/* <Home/> */}
      <CounterComp/>
    </>
  );

}


export default App;

// 2)JSX
// 3)Bebal

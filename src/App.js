import './App.css';
import Banner from './component/Banner/Banner';
import Intro from './component/Description/Intro';
import Service from './component/Service/Service';
import Connect from './component/Connect/Connect';
import Shop from './component/Shop/Shop';
import Footer from './component/Footer/Footer';

function App() {
  
  return (
    <div className="App">

      <Banner />
      {/* <Intro /> */}
      <Service />
      <Connect />
      <Shop/>
      <Footer/> 
    </div>
  );
}

export default App;

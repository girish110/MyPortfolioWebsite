import "./App.css";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import FloatingObjects from "./components/FloatingObjects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <div className="unifiedBackground">
      <Navbar />
      <FloatingObjects/>
      <Card1 />
      <Card2/>
      <Card3/>
      <Card4/>
      <Footer/>
      </div>
    </>
  );
}

export default App;

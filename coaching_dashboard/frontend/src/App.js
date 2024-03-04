
import './App.css';
import HomeTest from "./components/HomeTest";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomeTest/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;

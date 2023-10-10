import './App.css';
import SignUp from "./pages/SignUp.jsx"; 
import Login from "./pages/Login.jsx"; 
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/login'  element= {<Login/>}></Route>
      <Route path='/signup'  element= {<SignUp/>}></Route>
     </Routes>
    </div>
  );
}

export default App;

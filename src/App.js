import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Home';
import NavBar from './NavBar';
import Cars from './Cars';
import Payment from './Payment'
import Order from './Order';
import User from './User';
import Register from './Register';
import SignIn from './SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order />} />
          <Route path="/user" element={<User />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


/*function App() {
  return (
   
      <div className="App">
      <NavBar/>
      
      <Home/>
          
      </div>
    
  );
}*/


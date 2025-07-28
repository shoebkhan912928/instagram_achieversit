
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import PostOverveiw from './pages/PostOverveiw';
import Profile from './pages/Profile';


function App() {
  return (
    <div className='app-bg'>
      
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/posts" element={<PostOverveiw />}></Route>
          <Route exact path='/myprofile' element={<Profile/>}></Route>


        </Routes>


      </Router>
    </div>



  );
}

export default App;

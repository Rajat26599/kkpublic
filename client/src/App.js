import './App.css';
import ComingSoon from './layouts/comingSoon/ComingSoon';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './login/Login';

function App() {
  return (
    <BrowserRouter>    
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
          {/* <Route path='/login' element={<Login />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

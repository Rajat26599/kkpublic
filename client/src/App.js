import './App.css';
import ComingSoon from './layouts/comingSoon/ComingSoon';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Navbar from './layouts/navbar/Navbar';
// import Login from './login/Login';

function App() {
  return (
    <BrowserRouter>    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
          <Route path='/login' element={<ComingSoon />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

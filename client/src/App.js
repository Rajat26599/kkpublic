import './App.css';
import ComingSoon from './layouts/comingSoon/ComingSoon';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Navbar from './layouts/navbar/Navbar';
import Login from './pages/login/Login';
import Footer from "./layouts/footer/Footer"
import { Admission } from './pages/admission/Admission';
// import Login from './login/Login';

function App() {
  return (
    <BrowserRouter>    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admission' element={<Admission />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

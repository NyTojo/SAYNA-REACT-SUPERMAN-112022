import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import '../styles/index.css';
import Home from '../pages/Home';
import Eshop from '../pages/Eshop';
import Layout from '../pages/Layout';
import MonCompte from '../pages/MonCompte';
import NotFoundPage from '../pages/NotFoundPage';
import Signup from '../pages/Signup';
import Login from '../pages/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='Home' element={<Home/>}/>
            <Route path='Eshop' element={<Eshop/>}/>
            <Route path='MonCompte' element={<MonCompte/>}/>
            <Route path='Signup' element={<Signup/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

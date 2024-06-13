import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import View from './components/View';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/s' element={<SignUp/>}/>
<Route path='/Add' element={<Add/>}/>
<Route path='/Search' element={<Search/>}/>
<Route path='/View' element={<View/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;

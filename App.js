import logo from './logo.svg';
import './App.css';
import LoginSignUp from './Components/LoginSu/LoginSignUp';
import {browserRouter, Switch, Routes, Route} from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div>
      <browserRouter>
        <Routes>
          <LoginSignUp/>
        </Routes>
      </browserRouter>
    </div>
  );
}

export default App;

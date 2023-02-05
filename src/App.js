import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import DashBoard from './Components/DashBoard';
import Menu from './Components/Menu';
import { useUserExist } from './Hook/user/userHooks';

const App = () => {
  const user = useUserExist();
  return (
    <div className="App">
      {
      user !== false ? <Menu /> : ''
    }

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
};

export default App;

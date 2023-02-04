import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import useUserExist from './Hook/user/useUserExist';

function App() {
  const userExist = useUserExist();

  return (
    <div className="App">
      <Routes>
        { userExist && <Route exact path="/" element={<Login />} />}
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import { useUserLogin } from './Hook/user/userHooks';

const App = () => {
  // const userExist = useUserExist();
  const username = 'allysaidi64@gmail.com';
  const password = 'xxxxxx89';
  const user = useUserLogin(username, password);
  console.log(user);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLogin } from '../redux/login/loginSlice';
import useLocalStorage from '../Hook/localStorage/localStorage';

export default function Login() {
  const username = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const [saveUser, setSaveUser] = useLocalStorage('user');
  const navigator = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(getLogin({ username: username.current.value, password: password.current.value }));
  };
  useEffect(() => {
    if (user.id) {
      setSaveUser(user);
      if (saveUser.id) navigator('/dashboard');
    }
  }, [user, saveUser]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handlesubmit(e)}>
        <div>
          <input type="email" ref={username} defaultValue="allysaidi64@gmail.com" />
        </div>
        <div>
          <input type="password" ref={password} defaultValue="xxxxxx89" />
        </div>
        <input type="submit" value="Envoyer" />
      </form>
      <div>
        <h1>{saveUser.id}</h1>
      </div>
    </div>
  );
}

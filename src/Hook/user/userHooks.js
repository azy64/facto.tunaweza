import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../redux/login/loginSlice';

export const useUserExist = () => {
  let user = useSelector((state) => state.login.user);
  useEffect(() => () => {
    user = {};
  });
  return !!user;
};

export const useUserLogin = (username, password) => {
  const dispatch = useDispatch();
  dispatch(getLogin({ username, password }));
  const user = useSelector((state) => state.login.user);
  return user;
};

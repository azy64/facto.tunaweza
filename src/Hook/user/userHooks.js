import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../redux/login/loginSlice';

/**
 * check if the user exist or not
 * @returns boolean
 */
export const useUserExist = () => {
  let user = useSelector((state) => state.login.user);
  useEffect(() => () => {
    user = {};
  });
  if (user.id) return true;
  return false;
};

/**
 * log a user by his username and password
 * @param {string} username
 * @param {string} password
 * @returns the user connected
 */
export const useUserLogin = (username, password) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  useEffect(() => {
    dispatch(getLogin({ username, password }));
  }, [username, password]);
  return user;
};

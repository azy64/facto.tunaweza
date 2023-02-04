import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useUserExist = () => {
  let user = useSelector((state) => state.login.user);
  useEffect(() => () => {
    user = {};
  });
  return !!user;
};

export default useUserExist;

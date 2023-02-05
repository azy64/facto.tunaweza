import { useEffect, useState } from 'react';

/**
 * useLocalStorage hook allows you to use localstorage
 * @param {string} valueKey
 * @param {any} defaultValue
 * @returns value and  his setter
 */

const useLocalStorage = (valueKey, defaultValue = []) => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(valueKey)) ?? defaultValue);
  useEffect(() => {
    localStorage.setItem(valueKey, JSON.stringify(value));
  }, [value, valueKey]);
  return [value, setValue];
};

/**
 * to remove a localstorage by his key
 * @param {string} valueKey
 * @returns a boolean
 */
export const useRemoveStorage = (valueKey) => localStorage.removeItem(valueKey);

export default useLocalStorage;

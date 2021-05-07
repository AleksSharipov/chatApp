/**
 * Хук «useLocalStorage()» позволяет хранить (записывать и извлекать) значения в локальном хранилище браузера (local storage). 
 */

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {

  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    const item = JSON.stringify(value);
    window.localStorage.setItem(key, item);
  }, [value])

  return [value, setValue]
}
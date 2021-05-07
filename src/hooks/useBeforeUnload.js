/**
 * Хук «useBeforeUnload()» используется для вывода сообщения или выполнения функции в момент перезагрузки или закрытия страницы (вкладки браузера).
 */

import { useEffect } from 'react';

export default function useBeforeUnload(value) {
  const handleBeforeUnload = (e) => {
    let returnValue;
    if (typeof value === 'function') {
      return returnValue = value(e)
    } else {
      returnValue = value;
    }

    if (returnValue) {
      e.preventDefault();
      e.returnValue = returnValue;
    }
    return returnValue;
  }

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, [])




}
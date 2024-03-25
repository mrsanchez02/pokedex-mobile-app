import {useEffect, useState} from 'react';

export const useDebouncedValue = (input: string = '', timer: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, timer);

    return () => {
      clearTimeout(timeout);
    };
  }, [input, timer]);

  return debouncedValue;
};

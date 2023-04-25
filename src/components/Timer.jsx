import { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';

export function Timer(props) {
  const [hours, setHours] = useState('--');
  const [minutes, setMinutes] = useState('--');
  const [seconds, setSeconds] = useState('--');

  const getTime = () => {
    const time = Date.parse(props.deadline) - Date.now();

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(props.deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <h1 className="col display-1" >{`${hours}:${minutes}:${seconds}`}</h1>
  );
}


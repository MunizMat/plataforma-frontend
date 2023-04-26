import { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';
import { useSelector } from 'react-redux';

import Placeholder from 'react-bootstrap/Placeholder';

import axios from '../services/axios';
import { useNavigate } from 'react-router-dom';

export function Timer(props) {
  const exam = useSelector(state => state.exam);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleSubmit = async () => {
    try {
        const data = { simuladoId: exam.simulado.id ,isInProgress: false, finishedAt: new Date(Date.now()), respostas: exam.respostas };
        const response = await axios.put(`/simulados/${data.simuladoId}`, data);
        navigate('/avaliacao/finalizada');
    
    } catch (error) {
        console.log(error);
    }
};

  const getTime = () => {
    const time = (Date.parse(props.deadline)) - Date.now();

    if(time <= 0) return handleSubmit();

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));

    if(isLoading) setIsLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(props.deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {isLoading ? (<Placeholder as='h1' animation='wave' bg='light' xs={7} size='lg'/>) : (<h1 className="col display-1" >{`${hours}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`}</h1>)};
    </>
  );
}


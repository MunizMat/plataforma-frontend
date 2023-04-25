import Stack from 'react-bootstrap/Stack';

export function ExamTitle(props) {
  return (
   <Stack as={props.as}  className=' mt-3 ms-5 ps-5 pt-5'  gap={2}>
    <h1 className='display-1'>{props.titulo}</h1>
    {props.dia ? (<><h2 className='display-3'>{props.dia}</h2><h3 className='display-6'>{props.prova}</h3></>) : (<h2  className='text-justify display-3'>{props.prova}</h2>)}
   </Stack>
  );
}


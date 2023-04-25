import Form from 'react-bootstrap/Form';

export function Questao({ opcoesResposta, numeroQuestao }) {
  return (
   <div key='inline-radio' className='my-2'>
    <span className='me-3'>{`${numeroQuestao})`}</span>
    {opcoesResposta.map(opcao => <Form.Check inline label={opcao} name={`Q${numeroQuestao}`} type='radio' id={`inline-radio-${numeroQuestao}`} />)}
   </div>
  );
}


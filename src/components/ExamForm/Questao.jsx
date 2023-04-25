// Bootstrap 
import Form from 'react-bootstrap/Form';

import { useEffect } from 'react';

// React Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateAnswers} from '../../redux/modules/exam/actions';

export function Questao({ respostaMarcada, handler, opcoesResposta, numeroQuestao }) {
  return (
   <div key='inline-radio' className='my-2'>
        <span className='me-3'>{`${numeroQuestao})`}</span>
        {opcoesResposta.map(opcao => 
        <Form.Check 
        inline 
        checked={respostaMarcada === opcao}
        onChange={handler}
        value={opcao}
        label={opcao} 
        name={`Q${numeroQuestao}`} 
        type='radio' 
        id={`inline-radio-${numeroQuestao}`} />
        )}
   </div>
  );
}


import Form from 'react-bootstrap/Form';

export function Senha(props) {
  return (
    <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign: "left"}} >
        <Form.Label>{props.label}</Form.Label>
        <Form.Control name="senha" isInvalid={props.passwordInvalidity} required ref={props.passwordRef} type="password" placeholder="Senha" />
        <Form.Control.Feedback type="invalid">{props.passwordErrorMessage}</Form.Control.Feedback>
    </Form.Group>
  );
}

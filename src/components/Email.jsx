import Form from 'react-bootstrap/Form';

export function Email(props) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail" style={{textAlign: "left"}} >
        <Form.Label>Seu Email</Form.Label>
        <Form.Control name="email" isInvalid={props.emailInvalidity} required ref={props.emailRef} type="email" placeholder="Email" />
        <Form.Control.Feedback type="invalid">{props.emailErrorMessage}</Form.Control.Feedback>
    </Form.Group>
  );
}


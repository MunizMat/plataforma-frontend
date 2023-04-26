import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export function Introduction(props) {
  return (
    <Stack className="p-5 ms-5" gap={3} style={{textAlign: "left"}}>
                <h1 className="display-1">Studiez</h1>
                <h3 className="display-5">Sua plataforma de estudos para vestibulares</h3>
                <div className="col-md-3">
                    <Button className="me-2" variant="primary" as="a" href="/login">Faça login</Button>
                    <span>ou <a style={{ textDecoration: 'underline'}} href="/register" >crie sua conta</a></span>
                </div>
            </Stack>
  );
}


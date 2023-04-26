import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export function Section(props) {
  return (
    <section className="row">
        <Col className="ms-5" style={{ textAlign: 'left'}}>
            {props.children}
        </Col>
        <Col>
            <Image className="" rounded width={240} src={props.image} />
        </Col>
    </section>
  );
}


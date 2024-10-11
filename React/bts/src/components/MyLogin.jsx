import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

import style from "./MyLogin.module.css"

const MyLogin = () => {
  return (
    <div className={style.caixaLogin}>
    <Container>
    <Form>
    <span 
    class="material-symbols-outlined ${style.formIcon}">tv_signin
    </span>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control size="lg" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Nunca compartilharemos seu e-mail com mais ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control size="lg" type="senha" placeholder="Senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </Container>
           
   </div>
  )
}

export default MyLogin
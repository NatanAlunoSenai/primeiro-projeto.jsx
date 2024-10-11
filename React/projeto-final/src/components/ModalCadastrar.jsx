import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const url = "http://localhost:5000/usuarios";

const ModalCadastrar = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("Administrador");

  const handleCadastrar = async () => {
    if (nome != "" && !email != "" && senha != "") {
      const user = { nome, email, senha };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      setNome("");
      setEmail("");
      setSenha("");
      alert("Cadastrado com sucesso");
      props.onHide();
    } else {
      alert("Cadastrado com sucesso");
    }
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cadastrar funcionário Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Alguma coisa</h4>
          {/*Caixinha do nome */}
          <FloatingLabel
            controlId="floatingInputName"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            ></Form.Control>
          </FloatingLabel>

          {/*Caixinha do email */}
          <FloatingLabel
            controlId="floatingInputEmail"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>

          {/*Caixinha tipo */}
          <Form.Group controlId="formGridTipo">
            <Form.Label>=Tipo</Form.Label>
            <Form.Select
              Value={tipo}
              onChange={(e) => {
                setTipo(e.target.value);
              }}
            >
              <option>Administrador</option>
              <option>Gerente</option>
              <option>Funcionário</option>
            </Form.Select>
          </Form.Group>

          {/*Caixinha da senha */}
          <FloatingLabel
            controlId="floatingPassword"
            label="Senha"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCadastrar}>Cadastrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCadastrar;

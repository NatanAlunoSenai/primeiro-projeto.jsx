import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

import {useNavigate}from "react-router-dom"

//import ModalCadastrar from '../components/ModalCadastrar';


const url= "http://localhost:5000/produtos"
const Cadastro_de_Produtos = () => {
  //variáveis pro usuario
  const [nome, setNome] = useState("")
  const [email, setId] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmaSenha, setConfirmaSenha] = useState("");

  //variaveis pro alerta
  const [alertClass, setAlertaClass] = useState("mb-3 d-none")
  const [alertaMensagem, setAlertaMensagem] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log("Cliquei");
    if (!nome == "") {
      if (!email == "") {
        if (!senha == "" && !confirmaSenha == "" && senha === confirmaSenha) {
          console.log("entrei");
          const user = { nome, email, senha };
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });

          alert("Usuário cadastrado com sucesso");
          setNome("");
          setEmail("");
          setSenha("");
          setConfirmaSenha("");
          navigate("/login");
        } else {
          setAlertaClass("mb-3");
          setAlertaMensagem("As senhas não são iguais");
        }
      } else {
        setAlertaClass("mb-3");
        setAlertaMensagem("O campo email não pode ser vazio");
      }
    } else {
      setAlertaClass("mb-3");
      setAlertaMensagem("O campo nome não pode ser vazio");
    }
};


  return (
    <div>
        <Container>
        <span class="material-symbols-out-lined"
               style={{ fontSize:"100px"}}>
                person_add
               </span>
        <form>
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
        />
        </FloatingLabel>
         
        {/*Caixinha do email */}
        <FloatingLabel
        controlId="floatingInputEmail"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Digite seu email" 
        value={email}
        onChange={(e) => {
            setEmail(e.target.value);
        }}
        />
      </FloatingLabel>

      {/*Caixinha da senha */}
      <FloatingLabel 
      controlId="floatingPassword"
       label="Senha"
       className='mb-3'
       >
        <Form.Control type="password" 
        placeholder="Password" 
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        />
      </FloatingLabel>

      {/*Caixinha da confirmação da senha */}
      <FloatingLabel 
       controlId="floatingPassword" 
       label="Confirme a senha"
       className="mb-3"
       >
        <Form.Control 
        type="password" 
        placeholder="Password" 
        value={confirmaSenha}
        onChange={(e) => {
          setConfirmaSenha(e.target.value);
        }}
        />
      </FloatingLabel>

      <Alert key="danger"  variant="danger" className={alertClass}>
      {alertaMensagem}
      </Alert>

     <Button variant="primary" type="submit">
          Cadastrar
         </Button>
         </form>

         <p>Não tem cadastro?
            <Nav.Link href='/login'>Login </Nav.Link>
         </p>
      </Container>
    </div>
  );
};


export default Cadastro_de_Produtos
import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';
import { useState, useEffect} from 'react';

const url = "http://localhost:5000/usuarios"

const Login = () => {
  //variaveis
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
 

  //variaveis pro alerta
  const [alertaClass, setAlertaClass] = useState("mb-3 d-none")
  const [alertaMensagem, setAlertaMensagem] = useState("");
  const [alertaVariant, setAlertaVariant] = useState("danger");

  //Lista de usuarios
  const [usuarios, setUsuarios]= useState([])

  //Resgate de dados da API
  useEffect(() => 
    async function fetchData() {
      
    
    try{
      const res = await fetch(url)
      const users = await res.json()
      setUsuarios(users)
    }
    catch(error){
      console.log(error.message)
    }
   }
   fetchData();
   console.log(usuarios);
}, []);

   const gravarLocalStorage = (usuario) =>{
    localStorage.setItem("userName",usuario.nome)
    localStorage.setItem("userEmail",usuario.email)
   }

   const handleLogin = async (e) =>
    e.preventDefault()

   const user = {email,senha}

   const userToFind = usuarios.find(
    (userFind) =>userFind.email == user.email
  )

   if(email !=""){
   
    if(senha !=""){
      if(userToFind != undefined && userToFind.senha == senha){
       console.log(userToFind)
       console.log("Entrou")
       setAlertaClass("mb-3")
       gravarLocalStorage(userToFind)
       alert("Login efetuado com sucesso")
       setAlertaMensagem("Login efetuado com sucesso")
       setAlertaVariant("sucess")
       alert("Login efetuado com Sucesso")


      }else{
        setAlertaClass("mb-3")
        setAlertaMensagem("Usuário ou senha inválidos")
      }

    }
    else{
      setAlertaClass("mb-3")
      setAlertaMensagem("O campo senha não pode ser vazio")
     } 

    }
    else{
      setAlertaClass("mb-3")
    }

    
  return (
    <div>
        <Container>
        <span class="material-symbols-out-lined"
               style={{ fontSize:"100px"}}>
                login
               </span>
        <form onSubmit={handleLogin}>
        {/*Caixinha do nome */}
        <FloatingLabel
        controlId="floatingInputName"
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Digite seu nome" 
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
        <Form.Control type="email" placeholder="Digite seu email" 
        value={email}
        onChange={(e) => {
            setEmail(e.target.value);
        }}/>
      </FloatingLabel>

      {/*Caixinha da senha */}
      <FloatingLabel controlId="floatingPassword"
       label="Senha"
       className='mb-3'>
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      {/*Caixinha da confirmação da senha */}
      
      <FloatingLabel controlId="floatingPassword" label="Confirme a senha">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <Alert key="danger"  variant="{alertVariant}" className={alertaClass}>
      {alertaMensagem}
      </Alert>

         <Button 
         variant="primary">
            Login
         </Button>{' '}
         </form>

         <p>Não tem cadastro?
            <Nav.Link href='/login'>
                Login
            </Nav.Link>
         </p>
      </Container>
      
    </div>
  )
}

export default Cadastro
import React from 'react'
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Table from "react-bootstrap/Table";

import { useState, useEffect} from 'react';

//import ModalCadastrar from '../components/ModalCadastrar';

const url = "http://localhost:5000/produtos"

const Home = () => {
  const [usuarios, setProdutos]= useState([]);

  const[modalCadastrar, setModalCadastrar]= useState(false);

  //Resgate de dados da API
  useEffect(() => {
    async function fetchData() {
     try{
      const res = await fetch(url);
      const users = await res.json();
      setUsuarios(users);
    }catch(error){
      console.log(error.message);
    }
   }
   fetchData();
    console.log(usuarios);
  }, []);
   
  return (
    <div>
       <Container>
        <h1>Lista de algo</h1>
        <div className= "d-grid col-2 gap-2">
          <Button
          variant="primary"
            size="lg"
             className="mb-3 d-inline-flex justify-content-center"
             onClick={() => {
              setModalCadastrar(true);
             }}
            > 
            <span 
             className="material-symbols-outlined flex"
             style={{fontSize: "30px"}}
            >
            add_circle
            </span>
            Cadastrar
         </Button>
    </div>

<Table striped bordered hover>
<thead>
  <tr>
    <th>#</th>
    <th>Nome </th>
    <th>Id</th>
    <th>Tipo</th>
    <th></th>
  </tr>
</thead>
<tbody>
  {usuarios.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.nome}</td>
      <td>{user.email}</td>
      <td>{user.tipo}</td>
      <td>
        <ButtonGroup size="sm">
          <Button variant="info">Editar</Button>
          <Button variant="danger" onClick={async () =>{
            const res = await fetch(`http://localhost:5000/Produtos/${user.id}`,{
            method: "DELETE",
            headers: { "Content-Type": "application/json"},
            });
            const funcionarioRemovido = await res.json()
            alert(`Produtos ${ProdutosRemovidos.nome} foi excluido`)
          }}
          >
        Excluir
        </Button>
        </ButtonGroup>
      </td>
    </tr>
  ))}
</tbody>
</Table>

<ModalCadastrar
show={modalCadastrar}
onHide={() => {
   setModalCadastrar(false);
  }}
/>
</Container>
</div>
  
  );
};

export default Produtos
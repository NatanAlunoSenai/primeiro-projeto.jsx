import { useState } from "react";
import "./Forms.module.css";
const Forms = (props) => {
  //Variáveis pra guardar o que a pessoa informou no formulário
  const [name, setName] = useState(props ? props.name: "");
  const [email, setEmail] = useState(props ? props.email: "");
  const [desc, setDesc] = useState()
  const [tipo,setTipo] = useState()

  //Previne a página de ser recarregada quando enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(desc)
    console.log(tipo)
    setName("")
    setEmail("")
    setDesc("")
    setTipo("")

  };
  //Função pra guardar o nome que a pessoa informou no campo "Nome"
  const handleName = (e) => {
    setName(e.target.value);
    
  };
  console.log(name);
  console.log(email);
  console.log(desc);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/**Input com htmlFor */}
        <label htmlFor="nome"> Nome: </label>
        <input
          type="text"
          id="nome"
          placeholder="Digite seu nome:"
          onChange={handleName}
          value={name}
        />

        {/**Label envolvendo o input */}
        <label>
          <span>Email: </span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email:"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          ></input>
        </label>

        {/* campo textarea*/}
        <label>
            <span>Descrição:</span>
            <textarea name="descrição" placeholder="Se descreva a si próprio mesmo"
            onChange={(e) =>{
                setDesc(e.target.value)
            }} 
          value={desc}
        ></textarea>
        </label>
        
        <label>
            <span>Tipo de usuário:</span>
            <select
            name="tipoU"
            onChange={(e) => {
                setTipo(e.target.value)
            }}
            >
                 <option value = "user">Usuário</option>
                 <option value = "adm">Administrador</option>
                 <option value = "client"> Cliente </option>
            </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Forms;

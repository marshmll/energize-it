import styled from "styled-components";
import Router from 'next/router'

const SignUpWrapper = styled.section`

  color: #222222;
  background-color: #111111;
  height: 100vh;

  h1 {
    font-size: 2rem;
  }

  form {
    border: 1px solid #f0f0f0;
    padding: 1rem;
    border-radius: 10px;
    width: 400px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f0f0f0;
    @media screen and (max-width: 768px) {
      width: 300px;
    }
  }

  input {
    padding: .3rem .1rem;
    margin: .5rem 0;
    border-radius: 10px;
    border: 2px solid #3366cc;
    width: 100%;
    @media screen and (max-width: 768px) {
      height: 3rem;
    }
  }

  input:focus {
    transition: padding 200ms ease-in-out;
    padding: .4rem .1rem;
    outline: none;
    border-color: #00ccff;
  }

  .submit {
    display: block;
    padding: .5rem 1rem;
    background-color: transparent;
    border: 2px solid #00ccff;
    border-radius: 50px;
  }

  .submit:hover {
    background-color: #00ccff;
    cursor: pointer;
    transition: background-color 500ms ease-in-out;
  }
`;

export default function SignUp() {
  return (
    <SignUpWrapper>
      <form onSubmit={(e) => {
        e.preventDefault();
        Router.push('/cadastro-sucesso');
      }}>
        <h1>Cadastro</h1>
        <input required type="text" id="name" placeholder="Nome" />
        <input required type="text" id="surname" placeholder="Sobrenome" />
        <input required type="text" id="adress" placeholder="Endereço" />
        <input onChange={(e) => {
          if (e.target.value.length == 1) e.target.value = `(${e.target.value}`;
          if (e.target.value.length == 3) e.target.value = `${e.target.value}) `; 
          if (e.target.value.length == 10) e.target.value = `${e.target.value}-`;

        }} required type="tel" id="number" placeholder="(xx) xxxxx-xxxx" />
        <input required type="email" id="email" placeholder="exemplo@exemplo.com" />
        <button type="submit" className="submit">Enviar</button>
      </form>
    </SignUpWrapper>
  )
}
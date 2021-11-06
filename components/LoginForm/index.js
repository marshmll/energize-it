import Router from 'next/router';
import styled from 'styled-components'

const LoginFormWrapper = styled.section`
  height: 100vh;
  background-color: #111111;
  position: relative;
  color: #222222;

  form {
    border-radius: 10px;
    background-color: #f0f0f0;
    width: 400px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;

    h1 {
      font-size: 2rem;
    }

    @media screen and (max-width: 468px) {
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

export default function LoginForm() {
  return (
    <LoginFormWrapper>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!localStorage.getItem('USER'))
          localStorage.setItem('USER', e.target.querySelector('#user').value)
        Router.push('/conta')
      }}>
        <h1>Login</h1>
        <input id="user" required placeholder='Usuário' name='user' type='text' />
        <input required placeholder='Senha' name='password' type='password' />
        <button type="submit" className="submit">Entrar</button>
      </form>
    </LoginFormWrapper>
  )
}
import styled from 'styled-components'
import Link from 'next/link';

const SucessWrapper = styled.section`
  background-color: #111111;
  height: 100vh;
  color: white;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  a {
    text-decoration: underline;
  }
`;

export default function Sucess() {
  return (
    <SucessWrapper>
      <div>
        <h1>Cadastrado com sucesso!</h1>
        <Link href="/">
          <a>Voltar à página principal</a>
        </Link>
      </div>
    </SucessWrapper>
  )
}
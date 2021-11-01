import styled from 'styled-components';
import Link from 'next/link';

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #ffffff25;
  padding: 1rem .8rem;
  position: fixed;
  box-shadow: 5px 5px 5px #00000025;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99999;

  .logo-wrapper {
    display: flex;
    align-items: center;
  }

  .logo-wrapper span {
    font-size: 3rem;
    font-family: 'Anton', sans-serif;
    color: #f0f0f0;
    text-shadow: 1px 1px 5px black;
    -webkit-text-stroke-width: .02rem;
    -webkit-text-stroke-color: #000;
  }

  .logo-wrapper span:hover {
    text-shadow: 5px 5px 6px #ffffff90;
    transition: text-shadow 200ms;
  }

  .logo {
    background-image: url('/favicon.svg');
    width: 4rem;
    height: 4rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 500ms;
    margin-right: 1rem;  
  }

  .logo:hover {
    transform: rotate(360deg);
  }

  .nav-links {
    display: flex;
    align-items: center;
  }

  .nav-links a {
    margin-left: 1rem;
    font-size: 1.1rem;
    color: #f0f0f0;
  }

  .nav-links a:hover {
    color: white;
    text-shadow: 1px 1px 1px #00000025;
    transition: all 200ms;
    transform: scale(1.05);
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    position: absolute;
  }

  @media screen and (max-width: 768px) {
    .nav-links {
      flex-direction: column;
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Link href='/'>
        <a>
          <div className='logo-wrapper'>
            <div className='logo' />
            <span>Energize-It</span>
          </div>
        </a>
      </Link>
      <div className="nav-links">
        <Link href="/login">
          <a>
            Entrar
          </a>
        </Link>
        <Link href="/cadastro">
          <a>
            Cadastrar-se
          </a>
        </Link>
        <Link href="">
          <a>
            Minha Conta
          </a>
        </Link>
        <Link href="">
          <a>
            Sobre Nós
          </a>
        </Link>
      </div>
    </HeaderWrapper>
  )
}
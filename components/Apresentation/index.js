import styled from 'styled-components';

const ApresentationWrapper = styled.section`
  width: 100%;
  padding: 1rem 0;
  height: 100vh;
  background-color: #101010;
  position: relative;

  h2 {
    font-size: 3rem;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 1px black;
    @media screen and (max-width: 468px) {
      font-size: 2.5rem;
    }
  }

  p {
    text-align: center;
    font-size: 2rem;
    font-weight: 200;
    color: #f0f0f0;
    @media screen and (max-width: 468px) {
      font-size: 1.5rem;
    }
  }

  .illustrations {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      top: 60%;
    }
  }

  ul li {
    display: flex;
    align-items: center;
    flex-direction: column;
    display: inline-block;;
    width: 5rem;
    @media screen and (max-width: 768px) {
      margin: 1rem 0;
    }
  }

  ul li:hover {
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;
  }

  li span {
    font-size: 1.3rem;
    text-align: center;
    color: white;
  }

  .illustration {
    width: 5rem;
    height: 5rem;
    display: block;
    margin: 0 auto;
  }

  .efficiency {
    background-image: url('/efficiency.svg')
  }

  .ecology {
    background-image: url('/ecology.svg');
  }

  .intelligency {
    background-image: url('/intelligency.svg');
  }
`;

export default function Apresentation() {
  return (
    <ApresentationWrapper>
      <h2>Cadastre-se e Use!</h2>
      <p>Realize seu cadastro e utilize nossos serviços.</p>
      <ul className='illustrations'>
        <li>
          <div className='illustration efficiency' />
          <span>Eficiência</span>
        </li>
        <li>
          <div className='illustration ecology' />
          <span>Ecologia</span>
        </li>
        <li>
          <div className='illustration intelligency' />
          <span>Inteligência</span>
        </li>
      </ul>
    </ApresentationWrapper>
  )
}
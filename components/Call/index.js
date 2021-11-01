import styled from 'styled-components';

const CallWrapper = styled.section`
  background-image: url('/charging.jpg');
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  user-select: none;

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    color: white;
    text-shadow: 2px 2px 5px white;
    -webkit-text-stroke-width: .2rem;
    -webkit-text-stroke-color: #000;
    animation: fadeIn 800ms ease-in-out;

    @media screen and (max-width: 1024px) {
      font-size: 4.1rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 468px) {
      font-size: 2.2rem;
      -webkit-text-stroke-width: .1rem;
    }
  }

  .subtitle {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: 1px 2px 5px black;
    font-size: 2rem;
    -webkit-text-stroke-width: .04rem;
    -webkit-text-stroke-color: #000;
    animation: fadeIn 1s ease-in-out;

    @media screen and (max-width: 1024px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 468px) {
      font-size: 1.3rem;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 100%;
    }
  }
`;

export default function Call() {
  return (
    <CallWrapper>
      <h1 className='title'>Energize-It</h1>
      <span className='subtitle'>Energia Inteligente</span>
    </CallWrapper>
  )
}
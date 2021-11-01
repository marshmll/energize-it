import styled from 'styled-components';

const CallWrapper = styled.section`
  background-image: url('/charging.jpg');
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .main {
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
      <h1 className='main'>Energize-It</h1>
    </CallWrapper>
  )
}
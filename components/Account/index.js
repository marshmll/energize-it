import styled from 'styled-components'
import Router from 'next/router'

const AccountWrapper = styled.section`
  background-color: #222222;
  width: 100vw;
  min-height: 100vh;

  header {
    position: absolute;
    height: 100vh;
    width: 4.5rem;
    background-color: #f0f0f0;
    box-shadow: 5px 5px 5px #00000075;
  }

  .user {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .user-image {
    width: 3rem;
    height: 3rem;
    background-image: url('/user_default.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    display: block;
    margin: .5rem auto;
    box-shadow: 2px 2px 2px #00000075;
  }

  .user-image:hover {
    cursor: pointer;
  }

  .user-name {
    color: #999999;
    font-size: 1.1rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  .user-name:hover {
    cursor: pointer;
    color: #b462de;
  }

  li {
    text-align: center;
  }

  .nav-span {
    font-size: .8rem;
    display: none;
    @media screen and (max-width: 1024px) {
      display: block;
    }
  }

  button {
    border: none;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
    display: block;
    margin: 2rem auto;
  }

  button:active {
    color: #b462de;
  }
`

export default function Account({ user }) {
  return (
    <AccountWrapper>
      <header>
        <div className='user'>
          <div className='user-image' />
          <span className='user-name'>{user}</span>
        </div>
        <nav>
          <ul>
            <li title='Recargas'>
              <button>
                <i class="bi bi-phone" />
                <span className="nav-span">Recargas</span>
              </button>
            </li>
            <li title='Tempo restante'>
              <button>
                <i class="bi bi-watch" />
                <span className="nav-span">Tempo restante</span>
              </button>
            </li>
            <li title='Comprar recargas'>
              <button>
                <i class="bi bi-cash-coin" />
                <span className="nav-span">Comprar recargas</span>
              </button>
            </li>
            <li title='Sair'>
              <button onClick={() => {
                localStorage.removeItem('USER');
                Router.push('/');
              }}>
                <i class="bi bi-box-arrow-left" />
                <span className="nav-span">Sair</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </AccountWrapper>
    )
}
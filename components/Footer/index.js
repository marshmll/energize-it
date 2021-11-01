import styled from 'styled-components'

const FooterWrapper = styled.footer`
  color: white;
  background-color: #000000;
  padding: 1rem .8rem;

  h2 {
    text-align: center;
  }

  ul {
    list-style: none;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <h2>Energize-It © 2021</h2>
      <div>
        <h3>Contato</h3>
        <ul>
          <li>enegizeit@energize.com</li>
          <li>1234-5678</li>
          <li>+55 (41) 91234-5678</li>
        </ul>
      </div>
    </FooterWrapper>
  )
}
import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1800px;
  height: 100vh;
  width: 95%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  h1 {
    font-size: 48px;
    letter-spacing: 2.5px;
    color: #f0a500;

  }

  h1:first-letter {
    text-transform: capitalize;
    font-size: 68px;
  }
`;

export const Card = styled.div`
  width: 80%;
  height: 800px;

  border: 3px solid #fddb3a;
  border-radius: 5px;
  background: #41444b;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    padding-left: 44px;
    width: 50%;
  }
`
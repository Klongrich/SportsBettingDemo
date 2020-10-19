import styled from 'styled-components';

export const Container = styled.div`
  padding: 3% 1% 1% 1%;
  background: radial-gradient(circle, rgba(42,42,42,1) 0%, rgba(100,100,100,1) 100%);

  @media (max-width: 1000px) {
    padding: 3% 1% 1% 1%;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 95%;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 5%;
  font-size: 15px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 25px;
  color: #fff;
  margin-bottom: 15%;
  font-weight: bold;
`;
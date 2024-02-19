import React from 'react';
import styled from 'styled-components';

const HomePage: React.FC = () => {
  return (
    <Container>Home</Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgTotal};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

export default HomePage;

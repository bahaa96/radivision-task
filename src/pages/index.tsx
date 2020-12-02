import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import MovieList from './components/MovieList/Container';

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <MovieList />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => {
    return theme.colors.backgroundColor;
  }};
  height: 100%;
`;

export default Home;

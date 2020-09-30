import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from '../../components/Carousel/Item';
import Header from '../../components/Header';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Carousel itemsToShow={1}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Carousel>
      </Container>
    </>
  );
};

export default Home;

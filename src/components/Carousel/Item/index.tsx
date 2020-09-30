import React from 'react';

import { Container } from './styles';

interface ItemProps {
  source: string;
}

const Item: React.FC<ItemProps> = ({ source }) => {
  return (
    <Container>
      <a href="/">
        <img src={source} alt="source-name" />
      </a>
    </Container>
  );
};

export default Item;

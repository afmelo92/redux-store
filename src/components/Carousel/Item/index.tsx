import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface ItemProps {
  source: string;
}

const Item: React.FC<ItemProps> = ({ source }) => {
  return (
    <Container>
      <Link to="/">
        <img src={source} alt="source-name" />
      </Link>
    </Container>
  );
};

export default Item;

import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface ShopItemProps {
  source: string;
}

const ShopItem: React.FC<ShopItemProps> = ({ source }) => {
  return (
    <Container>
      <Link to="/">
        <img src={source} alt={`${source}`} />
      </Link>
    </Container>
  );
};

export default ShopItem;

import React from 'react';

import { Container } from './styles';

interface ShopItemProps {
  source: string;
}

const ShopItem: React.FC<ShopItemProps> = ({ source }) => {
  return (
    <Container>
      <a href="/">
        <img src={source} alt="source-name" />
      </a>
    </Container>
  );
};

export default ShopItem;

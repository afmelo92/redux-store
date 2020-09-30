import React from 'react';

import { Container } from './styles';

interface MainShopItemProps {
  source: string;
}

const MainShopItem: React.FC<MainShopItemProps> = ({ source }) => {
  return (
    <Container>
      <a href="/">
        <img src={source} alt="source-name" />
      </a>
    </Container>
  );
};

export default MainShopItem;

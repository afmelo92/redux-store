import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface MainShopItemProps {
  source: string;
}

const MainShopItem: React.FC<MainShopItemProps> = ({ source }) => {
  return (
    <Container>
      <Link to="/">
        <img src={source} alt="source-name" />
      </Link>
    </Container>
  );
};

export default MainShopItem;

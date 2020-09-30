import React from 'react';

import { Container } from './styles';

const Item: React.FC = () => {
  return (
    <Container>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
        alt="everest"
      />
    </Container>
  );
};

export default Item;

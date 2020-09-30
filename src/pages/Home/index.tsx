/* eslint-disable no-unused-expressions */
import React from 'react';
import Carousel from 'react-elastic-carousel';
import {
  FaRegCreditCard,
  FaLock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import cards from '../../assets/cards.png';
import Item from '../../components/Carousel/Item';
import ShopItem from '../../components/Carousel/ShopItem';
import Header from '../../components/Header';

import {
  Container,
  Content,
  Secure,
  SpotLight,
  SpotLightCarousel,
  Footer,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={5000}>
          <Item source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-3840895049.jpg" />
          <Item source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-3890828086.jpg" />
          <Item source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-1990314993.jpg" />
          <Item source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-2135565350.jpg" />
        </Carousel>
      </Container>
      <Secure className="secure-row">
        <div className="banner">
          <FaRegCreditCard size={30} />
          <div>
            <h3>PARCELAMENTO</h3>
            <p>EM ATÉ 12X SEM JUROS</p>
          </div>
        </div>
        <div className="banner">
          <FaLock size={30} />
          <div>
            <h3>COMPRA SEGURA</h3>
            <p>CERTIFICADO SSL</p>
          </div>
        </div>
      </Secure>
      <Content>
        <div className="shop-row-1">
          <div className="red-square">
            <img
              src="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-1497214986.jpg"
              alt="vestuario"
            />
            <img
              src="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-2204818397.jpg"
              alt="acessorios"
            />
            <img
              src="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-4159844946.jpg"
              alt="multimarcas"
            />
          </div>
          <div className="green-square" />
          <div className="yellow-square" />
        </div>
      </Content>
      <SpotLight className="secure-row">
        <h1>DESTAQUES</h1>
      </SpotLight>
      <SpotLightCarousel>
        <Carousel
          itemsToShow={4}
          itemsToScroll={2}
          enableAutoPlay
          autoPlaySpeed={5000}
        >
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2881090077.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-1549712095.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2419643259.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2213214189.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2386037471.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-3384074481.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-783552422.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-1041716793.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-418580030.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2653395609.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2377442026.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-1041716793.jpg" />
        </Carousel>
      </SpotLightCarousel>
      <SpotLightCarousel>
        <Carousel
          itemsToShow={4}
          itemsToScroll={2}
          enableAutoPlay
          autoPlaySpeed={5000}
        >
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-3363736594.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2773199699.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2419643259.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2213214189.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2386037471.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-3384074481.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-783552422.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-1041716793.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-418580030.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2653395609.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2377442026.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-1041716793.jpg" />
        </Carousel>
      </SpotLightCarousel>
      <SpotLightCarousel>
        <Carousel
          itemsToShow={4}
          itemsToScroll={2}
          enableAutoPlay
          autoPlaySpeed={5000}
        >
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2881090077.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-1549712095.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2419643259.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2213214189.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2386037471.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-3384074481.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-783552422.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-1041716793.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-418580030.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2653395609.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2377442026.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-1041716793.jpg" />
        </Carousel>
      </SpotLightCarousel>
      <SpotLightCarousel>
        <Carousel
          itemsToShow={4}
          itemsToScroll={2}
          enableAutoPlay
          autoPlaySpeed={5000}
        >
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2881090077.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-1549712095.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2419643259.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2213214189.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2386037471.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-3384074481.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-783552422.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-1041716793.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-418580030.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2653395609.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-2377442026.jpg" />
          <ShopItem source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/300x450-1041716793.jpg" />
        </Carousel>
      </SpotLightCarousel>
      <Footer>
        <div className="company">
          <h3>INSTITUCIONAL</h3>
          <Link to="/">Home</Link>
          <Link to="/">Sobre</Link>
          <Link to="/">Dúvidas</Link>
          <Link to="/">Contato</Link>
        </div>
        <div className="account">
          <h3>MINHA CONTA</h3>
          <Link to="/">Meus dados</Link>
          <Link to="/">Meus pedidos</Link>
          <Link to="/">Lista de desejos</Link>
        </div>
        <div className="support">
          <h3>ATENDIMENTO</h3>
          <p>(11) 94778-5076</p>
          <p>contato@oficialnaotemcomo.com.br</p>

          <p>Rua General Osório, 62 - cj 71</p>
          <p>Vila Bocaina - Mauá | SP</p>
          <p>CEP: 09310-050 </p>
        </div>
        <div className="payment">
          <h3>FORMAS DE PAGAMENTO</h3>
          <img src={cards} alt="cards" />
          <h3>SIGA-NOS</h3>
          <div className="social-row">
            <FaFacebook size={15} />
            <FaInstagram size={15} />
            <FaTwitter size={15} />
          </div>
        </div>
        <div className="news">
          <h3>NEWSLETTER</h3>
          <p>Faça seu cadastro para receber nossas dicas</p>
          <p>novidades e promoções.</p>
          <form action="user-form">
            <input type="text" name="name" id="name" placeholder="Seu nome" />
            <input type="text" name="email" id="email" placeholder="E-mail" />
            <button type="button">Cadastrar</button>
          </form>
        </div>
      </Footer>
    </>
  );
};

export default Home;

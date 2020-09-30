import React, { useCallback } from 'react';
import Switch from 'react-switch';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultTheme } from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IState } from '../../store';
import { Container, Switcher, Navbar, NavItems, Cart } from './styles';
import { changeTheme } from '../../store/modules/theme/actions';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const themeReducer = useSelector<IState, DefaultTheme>(
    state => state.themeReducer,
  );
  const dispatch = useDispatch();

  const handleChangeTheme = useCallback(() => {
    const newTheme = themeReducer.title === 'light' ? dark : light;

    dispatch(changeTheme(newTheme));
  }, [dispatch, themeReducer.title]);

  return (
    <>
      <Container>
        <Navbar>
          <img src={logo} alt="logo" />
          <NavItems>
            <Link to="/">
              <h3>Vestuário</h3>
            </Link>
            <Link to="/">
              <h3>Acessórios</h3>
            </Link>
            <Link to="/">
              <h3>Contato</h3>
            </Link>
          </NavItems>

          <Cart to="/cart">
            <div>
              <strong>Meu carrinho</strong>
              <span>10 itens</span>
            </div>
            <FaShoppingCart size={30} />
          </Cart>
          <Switcher
            onChange={handleChangeTheme}
            checked={themeReducer.title === 'dark'}
            uncheckedIcon={false}
            checkedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onColor="#f4cf00"
            className="switcher"
          />
        </Navbar>
      </Container>
    </>
  );
};

export default Header;

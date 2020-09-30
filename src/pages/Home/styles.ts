import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 50px;

  .rec.rec-slider-container {
    margin: 0;
    padding: 0;
  }

  .rec.rec-arrow {
    background: none;
    color: ${props => props.theme.color.secondary};
    opacity: 0.5;
  }

  .rec.rec-arrow-right {
    position: absolute;
    top: 50%;
    right: 1%;
  }

  .rec.rec-arrow-left {
    position: absolute;
    top: 50%;
    left: 1%;
    z-index: 1;
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
    background: none;
    color: ${props => props.theme.color.primary};
    border-radius: 50%;
    opacity: 1;
  }
  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px ${props => props.theme.color.secondary};
  }

  .rec.rec-pagination {
    position: absolute;
    top: 85%;
    left: 45%;
  }

  button.brcpxa {
    background-color: ${props => props.theme.color.secondary};
    box-shadow: 0 0 1px 3px ${props => props.theme.color.secondary};
  }

  button.brcpxa:hover,
  button.brcpxa:active,
  button.brcpxa:focus {
    box-shadow: 0 0 1px 3px ${props => props.theme.color.secondary};
  }

  button.ikyGAt {
    /* box-shadow: 0 0 1px 2px ${props => props.theme.color.secondary};*/
  }

  button.ikyGAt:hover {
    box-shadow: 0 0 1px 3px ${props => props.theme.color.secondary};
  }
`;

export const Secure = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-top: -4px;
  background: ${props => props.theme.color.background};
  align-items: center;
  justify-content: space-evenly;
  color: ${props => props.theme.color.text};
  padding: 40px 0;

  .banner {
    display: flex;
    align-items: center;

    div {
      margin-left: 20px;
    }
  }
`;

export const SpotLight = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.color.background};
  align-items: center;
  justify-content: space-evenly;
  color: ${props => props.theme.color.text};
  margin: -10px 0 20px;

  h1 {
    font-weight: 400;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  height: 400px;

  .shop-row-1 {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;

    img {
      width: 30%;
      margin: 0 15px;
    }
  }
`;

export const SpotLightCarousel = styled.div`
  padding-right: 5px;

  .rec {
    margin: 0 auto;
    max-width: 1280px;
  }

  .rec.rec-slider-container {
    width: 100%;
  }

  .rec.rec-arrow {
    background: none;
    color: ${props => props.theme.color.secondary};
    opacity: 0.5;
  }

  .rec.rec-arrow-right {
    border: none;
    box-shadow: none;
    margin-left: 15px;
  }

  .rec.rec-arrow-left {
    border: none;
    box-shadow: none;
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
    background: none;
    color: ${props => props.theme.color.primary};
    border-radius: 50%;
    opacity: 1;
  }
  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px ${props => props.theme.color.secondary};
  }

  .rec.rec-pagination {
    display: none;
  }

  button.brcpxa {
    background-color: ${props => props.theme.color.secondary};
    box-shadow: 0 0 1px 3px ${props => props.theme.color.secondary};
  }

  button.brcpxa:hover,
  button.brcpxa:active,
  button.brcpxa:focus {
    box-shadow: 0 0 1px 3px ${props => props.theme.color.secondary};
  }

  button.ikyGAt {
    /* box-shadow: 0 0 1px 2px ${props => props.theme.color.secondary};*/
  }

  button.ikyGAt:hover {
    box-shadow: 0 0 1px 3px ${props => props.theme.color.secondary};
  }
`;

export const Footer = styled.footer`
  display: flex;
  height: 200px;
  width: 100%;
  padding-top: 20px;
  background: ${props => props.theme.color.primary};
  align-items: flex-start;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    a {
      text-decoration: none;
      color: ${props => props.theme.color.text};
      font-size: 15px;
      margin-bottom: 5px;
    }

    p {
      font-size: 15px;
      margin-bottom: 5px;
    }

    h3 {
      color: ${props => props.theme.color.secondary};
      margin-bottom: 10px;
      font-weight: 500;
    }

    img {
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
      input {
        max-width: 200px;
        background: none;
        border: none;
        color: ${props => props.theme.color.text};
        margin-bottom: 10px;
        border-bottom: 1px solid #fff;
      }

      button {
        max-width: 200px;
        background: ${props => props.theme.color.secondary};
        padding: 5px;
        color: ${props => props.theme.color.primary};
        border: 0;
        border-radius: 5px;

        &:hover {
          background: ${props => shade(0.2, props.theme.color.secondary)};
        }
      }
    }

    div.social-row {
      flex-direction: row;

      h3 {
        margin-top: 20px;
      }
      svg {
        margin-right: 5px;
      }
    }
  }
`;

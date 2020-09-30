import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    z-index: 10;
    position: absolute;
    top: 50%;
  }

  .rec.rec-slider-container {
    margin: 0;
    padding: 0;
  }

  .rec.rec-arrow {
    background: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.primary};
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
    top: 90%;
    left: 46%;
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
    box-shadow: 0 0 1px 2px ${props => props.theme.color.secondary};
  }

  button.ikyGAt:hover {
    box-shadow: 0 0 1px 3px ${props => props.theme.color.secondary};
  }
`;

export const Content = styled.div``;

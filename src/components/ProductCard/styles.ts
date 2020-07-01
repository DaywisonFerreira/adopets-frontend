import styled from 'styled-components';

export const BoxAction = styled.div`
  display: flex;
  position: relative;

  img {
    width: 170px;
    height: 120px;
  }
`;

export const ProductInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  h3 {
    color: #30a7d7;
  }

  span, p {
    color: black;
    margin-bottom: 14px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -10px;

  button {
    border: 1px solid #ccc;
    background: #fff;
    padding: 2px;
    border-radius: 4px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    font-size: 18px;
  }

  button + button {
    margin-top: 10px;
  }

  button:nth-child(1) svg {
    color: #FF7F50;
  }

  button:nth-child(2) svg {
    color: #0000ff;
  }

  button:nth-child(3) svg {
    color: #dc143c;
  }

`;

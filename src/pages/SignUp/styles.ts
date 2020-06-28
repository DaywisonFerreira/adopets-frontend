import styled from 'styled-components';

import backgrounImg from '../../assets/background-signup.svg';

export const Container = styled.div`
  height: 100vh;
  background: #f0f0f5;

`;
export const Content = styled.div`
  width: 80%;
  padding: 10px;
  height: 100%;
  margin: 0 auto;
  display:grid;
  grid-template-columns: 1fr 0.5fr;
  grid-gap: 10px;
  align-items: center;
`;

export const ImageContent = styled.div`
  width: 100%;
  height: 100%;
  background: url(${backgrounImg}) ;
`;

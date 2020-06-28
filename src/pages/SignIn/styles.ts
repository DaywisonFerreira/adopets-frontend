import styled from 'styled-components';

import backgrounImg from '../../assets/background-signIn.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f0f0f5;

`;
export const Content = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display:grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 10px;
  align-items: center;
`;

export const ImageContent = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backgrounImg});
`;

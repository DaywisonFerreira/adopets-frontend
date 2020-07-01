import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #fff;
  color: black;
`;

export const Content = styled.div`
  width: 80%;
  margin: 10px auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    font-size: 26px;
    color: black;
    text-align: center;
    margin: 10px 0;
  }

  form {
    width: 500px;

    button {
      margin-right: 10px;
    }
  }
`;

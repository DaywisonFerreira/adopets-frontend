import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #201466;

`;
export const Content = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin-top: 20px;
  }

    form {
      width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, .2);
      border-radius: 5px;
      padding-top: 30px;

      h3 {
        font-size: 30px;
        color: #FFF;
        margin-top: 10px;
      }

      div.ant-row {
        width: 300px;

        input {
          height: 30px;
        }
      }

      div.ant-col-16 {
        max-width: 100%;
      }

      div.ant-col-offset-8 {
        margin-left: 0px;
      }

      button {
        width: 100%;
        height: 40px;
      }
    }
`;

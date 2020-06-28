import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    color: #f4ede8;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-size: 16px;
    color: black;
  }
  button {
    cursor: pointer;
  }
`;

import styled from 'styled-components';

interface PaginationItemProps {
  isSelect?: boolean;
}

export const Container = styled.div`
  height: 100%;
  background: #fff;
  color: black;
`;

export const Content = styled.div`
  width: 80%;
  margin: 20px auto;
  padding-bottom: 20px;
`;

export const ActionsContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  a {
    width: 200px;
    text-align: center;
    border: 1px solid #30a7d7;
    border-radius: 2px;
    padding: 2px 10px;
    background: #30a7d7;
    color: white;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;


export const LimitContent = styled.div`
  span {
    color: #919191;
    margin-right: 5px;
  }

  select {
    border: 1px solid #30a7d7;
    color: #30a7d7;
    background: #fff;

  }
`;

export const Pagination = styled.div`
  margin-top: 30px;
`;

export const PaginationButton = styled.div`
  display: flex;
`;

export const PaginationItem = styled.div<PaginationItemProps>`
  cursor: pointer;
  padding: 2px 8px;
  margin: 0 5px;
  border: 1px solid #ccc;
  color: #ccc;
  display: flex;
  align-items: center;

  ${(props) =>
    props.isSelect && {
      borderColor: '#30a7d7',
      color: '#30a7d7'
    }}

    svg {
      color: #737373;
    }
`;

export const ProductDetail = styled.div`

  span {
    color: #30a7d7;
  }

`;

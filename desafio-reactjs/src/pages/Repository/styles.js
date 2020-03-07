import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 100px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    & + li {
      margin-top: 10px;
    }
    a {
      padding: 15px 10px;
      border: 1px solid #eee;
      border-radius: 4px;
      text-decoration: none;
      color: #333;
      line-height: 24px;
      display: flex;
      transition: all 200ms ease-in-out;
      &:hover {
        color: #7159c1;
        transform: scale(1.09);
        box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.4);
      }
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;
      }

      span {
        background: #f4d1ff;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  button {
    border: 0;
    padding: 10px;
    text-transform: uppercase;
    background: none;
    border-bottom: 2px solid transparent;

    & + button {
      margin-left: 10px;
    }
    &:hover {
      color: #7159c1;
    }
    &:nth-child(${props => props.active + 1}) {
      font-weight: bold;
      color: #7159c1;
      border-bottom: 2px solid #7159c1;
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    border: 0;
    padding: 10px 15px;
    margin: 10px;
    border-radius: 4px;

    &:hover {
      background: #7159c1;
      color: #fff;
    }
    &:disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  max-width: 768px;
  color: #e5e5e5;
  margin: 50px auto;
  border-top: solid 5px rgba(0, 255, 0, 1);
  border-right: solid 1px rgba(230, 230, 230, 1);
  border-left: solid 1px rgba(230, 230, 255, 1);
  border-bottom: solid 1px rgba(230, 230, 230, 1);

  p,
  h2 {
    padding: 11px 0 10px 10px;
  }

  div button {
    margin: 0 15px 0 0;
    border: 0;
    background: none;
    color: #999;
    padding: 15px;
    font-size: 18px;
    position: relative;
    outline: none;
    cursor: pointer;
  }

  div button span {
    background: #fff;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 8px;
    color: #000;
    font-weight: bold;
    border-radius: 50%;
    position: absolute;
    right: -5px;
    top: 10px;
  }
`;

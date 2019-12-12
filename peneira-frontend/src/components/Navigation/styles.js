import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 1);

  a {
    height: 80px;
    width: 100%;
    border-bottom: solid 3px rgba(0, 255, 0, 1);
    padding: 10px;
    color: #eee;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    :hover {
      border-bottom: none;
      background: rgba(0, 0, 0, 0.9);
    }

    span {
      text-align: center;
      font-size: 10px;
    }
  }
`;

export const ButtonExit = styled.button`
  /* position: absolute; */
  bottom: 0px;
  border: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
  color: #222;
  height: 80px;
  width: 400px;
  /* border-radius: 50%; */
  padding: 10px;
  font-size: 2em;

  :hover {
    background: rgba(255, 0, 0, 0.9);
    color: #eee;
  }
  span {
    text-align: center;
    font-size: 10px;
  }
`;

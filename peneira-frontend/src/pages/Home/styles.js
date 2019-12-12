import styled from "styled-components";
import bgHome from "../../assets/bgHome.png";

export const Container = styled.div`
  padding-top: 100px;
  color: #000;
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: row;
  background: url(${bgHome}) no-repeat;
  background-size: cover;
  justify-content: center;
`;

export const ContainerTexto = styled.div`
  height: 500px;
  width: 80%;
  background-color: rgba(240, 240, 240, 0.7);
  flex-direction: row;

  h1 {
    padding: 10px 50px;
  }

  h2 {
    padding: 20px 50px 10px;
  }

  p {
    padding: 5px 50px;
  }
`;

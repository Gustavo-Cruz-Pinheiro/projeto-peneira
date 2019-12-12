import styled from "styled-components";
import bgError from "../../assets/background-error.png";

export const Container = styled.div`
  color: #d2d2d2;
  width: 100%;
  height: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  background: url(${bgError}) no-repeat;
  background-size: cover;
  justify-content: center;
`;

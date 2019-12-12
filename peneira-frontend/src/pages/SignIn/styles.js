import styled from "styled-components";
import bgLogin from "../../assets/background-login.png";

export const Container = styled.div`
  color: #d2d2d2;
  width: 100%;
  height: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: url(${bgLogin}) no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;

  @media only screen and (max-device-width: 798px) {
    height: 600px;
    min-width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  height: 520px;
  width: 430px;
  background: rgba(0, 0, 0, 0.8);
  background-size: contain;
  border-radius: 10px;

  h1 {
    margin-bottom: 20px;
  }

  @media only screen and (max-device-width: 798px) {
    height: 1000px;
    min-width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  width: 80%;

  label {
    margin-top: 15px;
  }
  input {
    background: rgba(240, 240, 240, 0.3);
    padding: 10px 15px;
    border: none;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: "submit",
  disabled: props.loading
}))`
  font-size: 16px;
  padding: 10px 15px;
  max-width: 300px;
  width: 100%;
  margin-top: 35px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  color: #222;
  font-weight: bold;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

export const ContainerLinks = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  max-width: 300px;

  a {
    color: #eee;
    text-decoration: none;
  }
`;

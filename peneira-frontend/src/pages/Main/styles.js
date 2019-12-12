import styled from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0 30px;
    flex-direction: row;
  }

  a {
    color: #eee;
    text-decoration: none;
    font-size: 48px;
  }
`;

export const ContainerCorpo = styled.div`
  padding-left: 50px;

  img {
    padding-left: 400px;
    height: 400px;
  }

  h2 {
    padding-bottom: 40px;
  }

  @media only screen and (max-device-width: 798px) {
    img {
      padding-left: 0;
      height: 250px;
    }
  }
`;

import React from "react";

import { Container, ContainerTexto } from "./styles";

export default function Admin(props) {
  return (
    <Container>
      <ContainerTexto>
        <h1>Home</h1>
        <h2>Cadastro de Peneiras</h2>
        <p>Nesta sessão você poderá cadastrar as suas peneira.</p>
        <h2>Procurar Peneiras</h2>
        <p>
          Nesta aba você poderá procurar por peneiras de outros usuários, bem
          como fazer o seu cadastro.
        </p>
        <h2>Ver Minhas Peneiras</h2>
        <p>
          Nessa guia você poderá ver as peneiras nas quais você teve interesse.
        </p>
      </ContainerTexto>
    </Container>
  );
}

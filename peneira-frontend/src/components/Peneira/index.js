import React from "react";

import { Container } from "./styles";

export default function Peneira(props) {
  return (
    <Container>
      <header>
        <h2>{props.clube}</h2>
        <p>
          Usuario:{" "}
          <span>
            {props.user.nome} - E-mail: {props.user.email}
          </span>
        </p>
      </header>
      <div>
        <p>Categoria(s): {props.categorias}</p>
        <p>Local(s): {props.local}</p>
        <p>Data(s): {props.data}</p>
      </div>
    </Container>
  );
}

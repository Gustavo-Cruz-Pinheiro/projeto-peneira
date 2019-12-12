import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import bgfirmino from "../../assets/firmino.jpg";
import { Container, ContainerCorpo } from "./styles";

export default function Main() {
  return (
    <Container>
      <header>
        <h1>Seja bem-vindo a página peneiras!</h1>
        <Link to="/signin">
          <MdAccountCircle />
        </Link>
      </header>
      <ContainerCorpo>
        <h2>
          Aqui você encontrará diversas peneiras bem como suas informações em
          todas áreas do Brasil. Clique no ícone do usuário, no canto superio
          direito para começar.
        </h2>
        <img src={bgfirmino} alt="firmino" />
      </ContainerCorpo>
    </Container>
  );
}

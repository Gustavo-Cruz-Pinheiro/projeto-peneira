import React, { useState, useEffect } from "react";
import { MdPersonAdd } from "react-icons/md";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Container,
  Form,
  SubmitButton,
  InputContainer,
  ContainerLinks
} from "./styles";

export default function SignUp({ history }) {
  const [loading, setLoading] = useState("disabled");

  const [user, setUser] = useState({
    nome: "",
    email: "",
    password: "",
    isAdmin: false
  });

  useEffect(() => {
    const isEnabled = () => {
      return user && user.email.length > 5 && user.password.length >= 6
        ? setLoading("")
        : setLoading("disabled");
    };
    isEnabled();
  }, [user]);

  function handleInputChange(e) {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/usuarios", user);

      history.push("/signin");
    } catch (err) {
      console.log("response", err);
      toast.error("E-mail já existente");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>
          <MdPersonAdd color="#eee" size={128} />
        </h1>
        <InputContainer>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={user.nome}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={handleInputChange}
            required
          />
        </InputContainer>

        <ContainerLinks>
          <Link to="/signin">Já tem uma conta? Clique aqui</Link>
        </ContainerLinks>

        <SubmitButton loading={loading}>Enviar</SubmitButton>
      </Form>
    </Container>
  );
}

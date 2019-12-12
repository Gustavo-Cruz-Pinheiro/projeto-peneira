import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";

import {
  Container,
  Form,
  SubmitButton,
  InputContainer,
  ContainerLinks
} from "./styles";

export default function SignIn({ history }) {
  const [loading, setLoading] = useState("disabled");
  const [user, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    const isEnabled = () => {
      return user.email.length > 5 && user.password.length >= 6
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
      const response = await api.post(`/sessoes`, user);

      const { token, usuario: userData } = response.data;

      if (token) {
        console.log("userData", response);
        login(token, userData);
      }

      history.push("/home");
    } catch (err) {
      toast.error("Email ou senha inválido!");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>
          <MdPerson color="#eee" size={128} />
        </h1>
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

        <SubmitButton loading={loading}>Entrar</SubmitButton>
        <ContainerLinks>
          <Link to="/signup">Não tem uma conta? Cadastre-se aqui</Link>
        </ContainerLinks>
        <ContainerLinks>
          <Link to="/">Cancelar</Link>
        </ContainerLinks>
      </Form>
    </Container>
  );
}

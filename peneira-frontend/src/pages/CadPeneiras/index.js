import React, { useState } from "react";
import { toast } from "react-toastify";
import { GiSoccerField } from "react-icons/gi";
import { userLocal } from "../../services/auth";

import { Container, Form, SubmitButton, InputContainer } from "./styles";

import api from "../../services/api";

export default function CadPeneira({ history }) {
  const [clube, setClube] = useState("");
  const [categorias, setCategorias] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [user, setUser] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { _id } = userLocal();
      setUser(_id);

      await api.post(`/peneiras`, { clube, categorias, data, local, user });

      setClube("");
      setCategorias("");
      setData("");
      setLocal("");
      setUser("");
    } catch (err) {
      toast.error("Dados inválidos!");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <GiSoccerField color="#eee" size={140} />
        <InputContainer>
          <label htmlFor="name">Clube</label>
          <input
            name="clube"
            type="text"
            value={clube}
            onChange={event => setClube(event.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="categorias">Categoria</label>
          <input
            name="categorias"
            type="text"
            value={categorias}
            onChange={event => setCategorias(event.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="data">Data</label>
          <input
            name="data"
            type="text"
            value={data}
            onChange={event => setData(event.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="local">Local</label>
          <input
            name="local"
            type="text"
            value={local}
            onChange={event => setLocal(event.target.value)}
            required
          />
        </InputContainer>

        <SubmitButton>enviar</SubmitButton>
      </Form>
    </Container>
  );
}

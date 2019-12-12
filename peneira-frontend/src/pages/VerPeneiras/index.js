import React, { useState, useEffect } from "react";

import { Container, Peneiras } from "./styles";

import Peneira from "../../components/Peneira";

import api from "../../services/api";

export default function VerPeneira({ history }) {
  const [peneira, setPeneira] = useState([]);

  useEffect(() => {
    const populatePeneira = async () => {
      const allPeneiras = await api.get(`/peneiras`);
      setPeneira(allPeneiras.data);
    };
    populatePeneira();
  }, []);

  return (
    <Container>
      {console.log(peneira)}
      <Peneiras>
        {peneira &&
          peneira.map(peneira => (
            <Peneira
              clube={peneira.clube}
              categorias={peneira.categorias}
              data={peneira.data}
              local={peneira.local}
              user={peneira.user}
            />
          ))}
      </Peneiras>
    </Container>
  );
}

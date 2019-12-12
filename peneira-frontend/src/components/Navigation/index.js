import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import {
  MdNoteAdd,
  MdSearch,
  MdDashboard,
  MdExitToApp
  // MdList
} from "react-icons/md";

import { Container, ButtonExit } from "./styles";
import { logout } from "../../services/auth";

export default function Menu(props) {
  const [loged, setLoged] = useState(true);
  function handleLogout() {
    logout();
    setLoged(!loged);
  }
  return (
    <Container>
      {!loged && <Redirect to="/" />}
      <NavLink to="/admin">
        <MdDashboard />
        <span>Home</span>
      </NavLink>
      <NavLink to="/cadpeneiras">
        <MdNoteAdd />
        <span>Cadastro de Peneiras</span>
      </NavLink>
      <NavLink to="/verpeneiras">
        <MdSearch />
        <span>Procurar Peneiras</span>
      </NavLink>
      <ButtonExit type="button" onClick={handleLogout}>
        <MdExitToApp />
        <span>Sair</span>
      </ButtonExit>
    </Container>
  );
}

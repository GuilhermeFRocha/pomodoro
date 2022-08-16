import { HeaderContainer } from "./styles";
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="logo" />
      <nav>
        <NavLink to="/" title="timer">
          <Timer  size={24} />
        </NavLink>
        <NavLink to="/history" title="historico">
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

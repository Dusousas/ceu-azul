import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="font-Jost font-medium text-white flex gap-4 uppercase tracking-wider">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Sobre nós</a>
          </li>
          <li>
            <a href="">Nossa missão</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

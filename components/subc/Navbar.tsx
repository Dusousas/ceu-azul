import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="font-Jost font-medium text-white flex gap-4 uppercase tracking-wider">
          <li>
            <a href="#main">Inicio</a>
          </li>
          <li>
            <a href="#sobre-nos">Sobre Nós</a>
          </li>
          <li>
            <a href="#numeros">Nossos Números</a>
          </li>
          <li>
            <a href="#depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

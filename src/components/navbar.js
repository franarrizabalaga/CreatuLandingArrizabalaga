
import React from 'react';
const NavBar = () => {
  return (
    <nav>
      <div className="logo">Mi Tienda</div>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <cartwidget/>
    </nav>
  );
}

export default NavBar;

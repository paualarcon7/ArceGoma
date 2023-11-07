import React from "react";
import logo from "../../assets/logo.jpg"

const Header = () => {
    return (
        <header className="text-gray-600 body-font shadow-lg">
  <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
    <img src={logo} alt="Logo" width={150}></img>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-lg">
    <div className="relative group">
            <button className="mr-10 hover:text-gray-900">Productos</button>
            <ul className="absolute hidden text-gray-600 bg-white border border-gray-300 py-2 mt-1 rounded-lg group-hover:block right-6 z-20">
              <li className="px-4 py-2 hover:bg-gray-100">Producto 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Producto 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Producto 3</li>
              {/* Add more product items as needed */}
            </ul>
          </div>
      <a className="mr-10 hover:text-gray-900">Nosotros</a>
      <a className="mr-10 hover:text-gray-900">Contacto</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-4">Iniciar Sesión
      
    </button>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Registrarse
      
    </button>
  </div>
</header>
    )
}

export default Header
import React from "react";
import principalPic from "../../assets/productos-general.jpg"
import { Link } from "react-router-dom"; 

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img  alt="hero" src={principalPic} width={800} height={700}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ARCE GOMAS</h1>
      <p className="mb-8 leading-relaxed">VENTA DE ARTICULOS DE GOMA PARA EL AUTOMOTOR, INDUSTRIA Y HOGAR, ALFOMBRAS, CORREAS, SOPORTES, MANGUERAS, BURLETES, CAÑOS DE RADIADOR.</p>
      <div className="flex justify-center">
      <Link to="/products"> <button className="inline-flex text-black bg-gray-300
hover:bg-gray-200 border-0 py-2 px-6 focus:outline-none rounded text-lg">Ingresar a la Tienda
 </button> </Link>  
        
      </div>
    </div>
  </div>
</section>
    )
}

export default Hero;
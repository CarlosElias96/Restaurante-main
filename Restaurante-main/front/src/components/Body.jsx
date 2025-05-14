import React from 'react'
import imagenes from '../assets/img/imagenes'
import styled from 'styled-components'
<link rel="stylesheet" href="/css/styles.css" />



const Titulo = styled.h1`
  color: blue;
`;


const Body = () => {
  return (
    <div>
        <div className="container">
            <br />
            <br />
  <div className="row">
    <div className="col-md-6">
      <img src={imagenes.img13} className="img-fluid" alt="Imagen 1"/>
    </div>
    <div className="col-md-6 text-center">
      <Titulo>Acerca de Nosotros</Titulo>
      <h2><p>Somos una relojería con más de 40 años de experiencia preparando los mejores platos.</p></h2>
      <img src={imagenes.img19} className="img-fluid" alt="Imagen 2"/>
    </div>
  </div>
  <br />
  <br />
  <div className="row">
    <div className="col-md-6 text-center">
    <Titulo>Revisa Nuestro Menu</Titulo>
      <h2><p></p></h2>
      <div className='text-center'>
      <a href="/catalogo" className="btn btn-outline-primary">INGRESE A NUESTRO MENU</a>
      </div>
    </div>
    <div className="col-md-6">
      <img src={imagenes.img20} className="img-fluid" alt="Imagen 3"/>
    </div>
  </div>
  <br />
  <br />
  <div className="row">
    <div className="col-md-6">
      <img src={imagenes.img21} className="img-fluid" alt="Imagen 4"/>
    </div>
    <div className="col-md-6 text-center">
      <Titulo></Titulo>
      <h2><p></p></h2>
      <div className='text-center'>
      <a href="/Estado" className="btn btn-outline-primary"></a>
      </div>    
    </div>
  </div>
</div>
    </div>
  )
}

export default Body
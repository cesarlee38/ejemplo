import React from 'react'
import { useEffect, useState } from 'react'
function Productos() {
  const [datos, setDatos] = useState([])
  const [respuesta, setRespuesta] = useState(false)
  useEffect(() => {
    fetch("https://cesarlee38.github.io/PlatillosTemporales.json")
      .then((response) => {
        return response.json()
      })
      .then((datos) => {
        setDatos(datos)
        setRespuesta(true)

      })
  }, [])
  console.log(datos)
  if (respuesta) {
    return mostrarProductos()
  }
  else {
    return (<><h1>Cargando...</h1></>)
  }

  function mostrarProductos() {
    if (datos === null || datos.length === 0) {
      return (<h1>No hay Productos</h1>)
    }
    else {
      return (
        <>
          {datos.map((element, i) => {
            return (<div key={i}>
              <h1>{element.nombre}</h1>
              <h2>{element.ingredientes}</h2>
            </div>)
          })}
        </>
      )
    }
  }
}

export default Productos
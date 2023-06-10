import { useState, useEffect } from 'react'

import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:2rem;
  }
`

const Imagen = styled.img`
  max-width : 400px;
  width : 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
  `

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({}) 
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0 ) {
      const cotizarCripto = async() => {

        setCargando(true)
        setResultado({})
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.criptoMoneda}&tsyms=${monedas.moneda}`
        const response = await fetch(url)
        const result = await response.json()
        
        setResultado(result.DISPLAY[monedas.criptoMoneda][monedas.moneda])

        setCargando(false)
      }

      cotizarCripto();
    }
  }, [monedas])

  return (  
    <Contenedor>
      <Imagen 
        src = {ImagenCripto}
        alt = 'imagen criptomonedas'
      />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        ></Formulario>
        {cargando && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>
    </Contenedor> 
  )
}

export default App

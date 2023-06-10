import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Error from "./Error"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"

const InputSubmit = styled.input`
    background-color: #9497ff;
    margin-top: 30px;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .4s ease;

    &:hover {
        background-color:  #7a7dfe;
        cursor: pointer;
    }

`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
    const [ criptoMoneda, SelectCriptoMoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const response = await fetch(url)
            const result = await response.json()
            
            const arrayCripto = result.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })
            setCriptos(arrayCripto)  
        }

        consultarAPI();
    },[])

    const handleSubmit = e => {
        e.preventDefault()

        if ([moneda, criptoMoneda].includes('')){
            setError(true)
            
            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptoMoneda
        })
    }


    return (
        <>
            {error  && <Error>Debes rellenar todos los campos</Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas />
                <SelectCriptoMoneda />
                <InputSubmit 
                    type="submit" 
                    value="Cotizar" 
                />
            </form>
        </>
    )
}

export default Formulario


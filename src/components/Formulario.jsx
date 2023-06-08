import styled from "@emotion/styled"

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

const Formulario = () => {

    

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)

    return (
        <form>
            <SelectMonedas />
            
            <InputSubmit 
                type="submit" 
                value="Cotizar" 
            />
        </form>
    )
}

export default Formulario


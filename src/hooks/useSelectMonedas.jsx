import styled from "@emotion/styled"

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`
const useSelectMonedas = (label, opciones) => {
console.log(opciones)
    const selectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select>
                <option value="">Seleccione</option>

                {opciones.map( opcion => (
                    <option 
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </Select>
        </>
    )

    return [ selectMonedas ]
}

export default useSelectMonedas

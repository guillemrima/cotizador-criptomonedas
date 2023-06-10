import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'LATO', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`

const Texto = styled.p`
    font-size: 20px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Imagen = styled.img `
    display: block;
    width: 120px;
`


const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE} = resultado

    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="logo criptomoneda" />
            <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación en las últimas 24 horas: <span>{CHANGE24HOUR}</span></Texto>
            <Texto>Útima actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado

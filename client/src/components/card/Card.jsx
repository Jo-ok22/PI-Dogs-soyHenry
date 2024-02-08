// este props es la info que viene de la api en
// mi caso es la info que ya 
//la depure en el back tambien la puedo hacer destructuring

const Card = (props) => {
    return(
        <div>
        <img src={image} alt={name}/>
        <h2>Nombre:{name}</h2>
        <h2>Temperamentos:{temperaments}</h2>
        <h2>Peso:{peso}</h2>
        </div>
    )
}

export default Card;
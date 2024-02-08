import Card from '../card/Card';

             //props
const Cards = ({perros}) => {
    return(
        <div>
            {perros.map((perros)=>{
                return <Card
                key={perros.id}
                image={perros.image}
                name={perros.name}
                temperamentos={perros.temperamentos}
                peso={perros.peso}
                />

            })}


        </div>
    )
}

export default Cards;
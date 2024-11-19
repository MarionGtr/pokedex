import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function PokemonCard({PokemonCard}) {
    const navigate = useNavigate()
    const navigateTo = (id) => {
        navigate('/pokemon/' + id)
    }


    return <>
    <div className='pokeCard' onClick={() => {navigateTo(PokemonCard.name)}}>
      <Card >
      <Card.Img  className='card-img' variant="top" src={"https://img.pokemondb.net/artwork/"+ PokemonCard.name +".jpg"} />
        <Card.Body>
          <Card.Title>{PokemonCard.name}</Card.Title>
          <Card.Text>

          </Card.Text>
          <Button variant="outline-dark">Voir détails</Button>
        </Card.Body>
      </Card>
      </div>
      </>
  }

  export default PokemonCard
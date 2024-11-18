import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function PokemonCard({PokemonCard}) {


    return <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"https://img.pokemondb.net/artwork/"+ PokemonCard.name +".jpg"} />
        <Card.Body>
          <Card.Title>{PokemonCard.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Voir détails</Button>
        </Card.Body>
      </Card>
      </>
  }

  export default PokemonCard
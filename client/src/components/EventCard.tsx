import Card from "react-bootstrap/Card"
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom"

export interface Characterable {
    id: string,
    name: string,
    image: string
}

export interface Charops {
    key: string,
    char: Characterable
}

export default function Character({char}:Charops){
    const variant = 'Dark'
    return (
        <>
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text="light"
          className="mb-2 pokeCard"
        >
        <Link to={`/character/${char.id}`}>
          <Card.Header>{char.id}</Card.Header>
        </Link>
          <Card.Body>
            <Card.Title>{char.name}</Card.Title>
            <Image src={char.image} />
          </Card.Body>
        </Card>
        </>
    )
}
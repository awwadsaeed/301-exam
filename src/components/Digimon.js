import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap/';
class Digimon extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }} className="digimonCard">
                    <Card.Img variant="top" src={this.props.digimon.image} />
                    <Card.Body>
                        <Card.Title>{this.props.digimon.name}</Card.Title>
                        <Card.Text>
                            {this.props.digimon.level}
                        </Card.Text>
                        <Button onClick={()=>this.props.addToFav(this.props.digimon)} variant="primary">Add to Favorite</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Digimon

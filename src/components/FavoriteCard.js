import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap/';

class FavoriteCard extends Component {
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
                        <Button onClick={() => this.props.deleteFav(this.props.digimon._id)} variant="primary">Delete</Button>
                        <Button onClick={() => this.props.updateForm(this.props.index)} variant="primary">Update</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default FavoriteCard

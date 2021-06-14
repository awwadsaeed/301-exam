import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap/'
class UpdateForm extends Component {
    render() {
        return (
            <>
                <Form onSubmit={(e)=>this.props.updateFav(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={this.props.name} type="text" onChange={(e)=>this.props.setName(e)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control value={this.props.image} type="text" onChange={(e)=>this.props.setImage(e)}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" >
                        <Form.Label>Level</Form.Label>
                        <Form.Control value={this.props.level} type="text" onChange={(e)=>this.props.setLevel(e)}/>
                    </Form.Group>
                    <Button onClick={this.props.updateForm} variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </>
        )
    }
}

export default UpdateForm

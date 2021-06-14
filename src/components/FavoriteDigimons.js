import React, { Component } from 'react';
import axios from 'axios';
import FavoriteCard from './FavoriteCard';
import UpdateForm from './UpdateForm';
class FavoriteDigimons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favDigis: [],
            showFavs: false,
            showForm:false,
            name:'',
            image:'',
            level:'',
            id:'',
        }
    }

    componentDidMount = async () => {
        let favs = await axios.get(`${process.env.REACT_APP_SERVER}/getFav`);
        // console.log(favs);
        this.setState({
            favDigis: favs.data,
            showFavs: true,
        })
    }


    deleteFav = async (id) => {
        // console.log(id);
        let favs = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteFav/${id}`);
        // console.log(favs);
        this.setState({
            favDigis: favs.data,
        })
    }
    updateForm = async (idx) => {
        this.setState({
            showForm:true,
            name:this.state.favDigis[idx].name,
            image:this.state.favDigis[idx].image,
            level:this.state.favDigis[idx].level,
            id:this.state.favDigis[idx]._id,
        })
    }

    updateFav=async(e)=>{
        e.preventDefault();
        const updateData={
            name:this.state.name,
            image:this.state.image,
            level:this.state.level,
        }
        let favs = await axios.put(`${process.env.REACT_APP_SERVER}/updateFav/${this.state.id}`,updateData);
        this.setState({
            favDigis:favs.data,
        })
    }

    setName=(e)=>{
        this.setState({
            name:e.target.value,
        })
        // console.log(this.state.name);
    }
    setImage=(e)=>{
        this.setState({
            image:e.target.value,
        })
        // console.log(this.state.image);

    }
    setLevel=(e)=>{
        this.setState({
            level:e.target.value,
        })
        // console.log(this.state.level);

    }
    render() {
        return (
            <>
                {this.state.showForm && <UpdateForm
                    name={this.state.name}
                    image={this.state.image}
                    level={this.state.level}
                    setName={this.setName}
                    setImage={this.setImage}
                    setLevel={this.setLevel}
                    updateFav={this.updateFav}
                />}
                {this.state.showFavs && this.state.favDigis.map((digimon, index) => {
                    return (
                        <FavoriteCard
                            key={index}
                            digimon={digimon}
                            deleteFav={this.deleteFav}
                            updateForm={this.updateForm}
                            index={index}
                        />
                    )
                })}
            </>
        )
    }
}

export default FavoriteDigimons

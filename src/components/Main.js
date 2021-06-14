import React, { Component } from 'react';
import axios from 'axios';
import Digimon from './Digimon';
import './digimons.css';
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            digimons:[],
            showDigimons:false,
        }
    }


    componentDidMount=async()=>{
        let result = await axios.get(`${process.env.REACT_APP_SERVER}/getDigimons?digimon=digimon`);
        // console.log(result.data);
        this.setState({
            digimons:result.data,
            showDigimons:true,
        })
    }

    addToFav= async(digimon)=>{
        await axios.post(`${process.env.REACT_APP_SERVER}/addToFav`,digimon)
    }

    render() {
        return (
            <>
               {this.state.showDigimons&&this.state.digimons.map((digimon,idx)=>{
                   return(
                    <Digimon
                    key={idx}
                    digimon={digimon}
                    addToFav={this.addToFav}
                    /> 
                   )
               })}
            </>
        )
    }
}

export default Main

import React, { Component } from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import axios from 'axios';

import ImageResults from '../image-results/ImageResults'

class Search extends Component{

    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '14919886-78bbfe917d64c13ccc735bed1',
        images: []
    }

    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({
            [e.target.name]: val
        }, () => {
            if(val === ''){
                this.setState({
                    images:[]
                });
            }
            else{
            axios.get(this.state.apiUrl,{
                params: {
                    key: this.state.apiKey,
                    q: this.state.searchText,
                    image_type: 'photo',
                    per_page: this.state.amount
                }
            })
            .then(repsonse => this.setState({
                images: repsonse.data.hits
            }))
            .catch(err => console.log(err))
        }
        })
    }
    onAmountChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    render(){
        return(
            <div>
                <TextField name="searchText"
                    onChange={this.onTextChange}
                    value={this.state.searchText}
                    label="Search for Images"
                    fullWidth={true}
                 />
                <Select name="amount"
                labelId="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}>

                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                </Select>
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>): null}
            </div>
        )
    }
}
export default Search;
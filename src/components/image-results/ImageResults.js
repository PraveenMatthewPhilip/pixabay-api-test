import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { GridList, GridListTile, IconButton, Dialog, GridListTileBar } from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';


class ImageResults extends Component{

    render(){
        let imageListContent;
        const {images} = this.props;
        if(images){
            imageListContent = <GridList cols={3}>
            {images.map(image => (
                <GridListTile key={image.id}>
                    <img src={image.largeImageURL} alt="" />
                    <GridListTileBar
                    title={image.tags} 
            subtitle={<span>by : <strong>{image.user}</strong></span>}
            actionIcon={
                <IconButton>
                    <ZoomInIcon color="primary"/>
                </IconButton>
            }/>
                </GridListTile>
            ))}
        </GridList>
        }
        else{
            imageListContent = null;
        }
        return(<div>
            {imageListContent}
        </div>)
    }

    static propTypes = {
        images: PropTypes.array.isRequired
    }
}

export default ImageResults;
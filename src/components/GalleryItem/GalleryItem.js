import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';




class GalleryItem extends Component {

// set up state to toggle image and description
state = {
    showImage: true,
}

// set up function to switch state
swapImagewithDescription = () => {
    this.setState({
        showImage: !this.state.showImage,
    });
}

  render() {
    return (
        <div id="backgroud">
             <Card>
                <CardContent >
                    <div>
                        {
                        this.state.showImage ?
                        <img onClick={this.swapImagewithDescription} src = {this.props.imageObject.picture_path} 
                        alt = {this.props.imageObject.picture_description} height="250" width= "250" />:
                    <div onClick={this.swapImagewithDescription}>
                        <p>{this.props.imageObject.picture_description}</p>
                    </div>
                        }
                    <h3>This has {this.props.imageObject.likes} like(s)</h3>
                   
            <div>
                <Button variant="contained" color="primary" onClick={() => this.props.addLike(this.props.imageObject.id)}>Like</Button>
            </div>
             <div>
                <Button variant="contained" color="secondary" onClick={() => this.props.deleteLike(this.props.imageObject.id)}>Delete</Button>
            </div>
                       
        </div>
    </CardContent>
</Card>
</div>
    );
  }
}


export default GalleryItem;

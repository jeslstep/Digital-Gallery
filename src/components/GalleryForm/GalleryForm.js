import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';





class GalleryForm extends Component {

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
        <div>
          <Card>
            <CardContent >
          <h3>Image Url</h3>
         <form onSubmit={this.props.handleSubmit}>
        <TextField
          id="standard-name"
          label = "Url"
          value={this.props.newGalleryEntry.picture_path}
          onChange={this.props.handleChangeFor('picture_path')}
          margin="normal"
        />
        <br/>
        <TextField
          id="standard-name"
          label="Description"
          value={this.props.newGalleryEntry.picture_description}
          onChange={this.props.handleChangeFor('picture_description')}
          margin="normal"
        />
       <br/>
        <Button varient="contained" color="primary" type="submit">Add to Gallery</Button>
        </form>
        </CardContent>
        </Card>
        </div>
    );
  }
}


export default GalleryForm;

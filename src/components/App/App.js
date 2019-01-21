import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm';
import FileUpload from '../FileUpload/FileUpload';
import Paper from '@material-ui/core/Paper';
import swal from 'sweetalert';




class App extends Component {

  state = {
     newGalleryEntry: {
      id: '',
      picture_path: '',
      likes: 0,
      picture_description: '',
     },
     galleryList: [],
     
   }

  // get gallery entries from postgreSQL
  componentDidMount() {
   this.getGallery();
  }

  // get gallery entries
  getGallery = () => {
    axios.get('/gallery').then(response => {
      this.setState({
        galleryList: response.data
      })
    }).catch(error => {
      swal('Error making/ gallery GET request', error);
    })
  }

  // add a picture and description 
  addPicture = (event) => {
     event.preventDefault();
     axios({
       method: 'POST',
       url: '/gallery',
       data: this.state.newGalleryEntry
     }).then(response => {
       swal("Added New gallary entry!", "success");
       this.getGallery();
       this.setState({
         newGalleryEntry: {
             picture_path: '',
             picture_description: '',
             likes: 0,
         }
       })
     }).catch(error => {
       swal("Unable to Add New gallery entry", "warning", error);
     })
   }

  // add a like to a entry
  addLike = (imageId) => {
      axios({
        method: 'PUT',
        url: `gallery/like/${imageId}`
      }).then (() => { 
        this.getGallery();
      }).catch (error => {
        swal("Like not recorded", "warning", error);
      });
    }

  // delete an entry
  deleteLike = (imageId) => {
       axios({
         method: 'DELETE',
         url: `gallery/delete/${imageId}`
       }).then(() => {
         swal("Deleted!", "success");
         this.getGallery();
       }).catch(error => {
         swal("Unable to Delete", "Not deleted", "warning", error);
       });
     }

  // set user input in state  
  handleChangeFor = (propertyName) => {
     return (event) => {
       this.setState({
         newGalleryEntry: {
           ...this.state.newGalleryEntry,
           [propertyName]: event.target.value
         }
       });
     }
   }


  render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Gallery</h1>
          </header>
          <br/>
          <Paper elevation={5}>
          <h2>Add to Gallery</h2>
          <div>
          <FileUpload getGallery ={this.getGallery}
          />
          </div>
          <div>
          <GalleryForm handleChangeFor= {this.handleChangeFor}
          handleSubmit={this.addPicture} 
          newGalleryEntry = {this.state.newGalleryEntry}/>
          </div>
          </Paper>
          <div>
          <GalleryList 
            imageList={this.state.galleryList}
            addLike={this.addLike}
            deleteLike={this.deleteLike} />
          </div>
          </div>
    );
  }
}

export default App;

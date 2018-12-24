import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm';





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

   addPicture = (event) => {
     event.preventDefault();
     axios({
       method: 'POST',
       url: '/gallery',
       data: this.state.newGalleryEntry
     }).then(response => {
       this.getGallery();
       this.setState({
         newGalleryEntry: {
             picture_path: '',
             picture_description: '',
             likes: 0,
         }
       })
     }).catch(error => {
       alert('Error', error);
     })
   }


  addLike = (imageId) => {
      axios({
        method: 'PUT',
        url: `gallery/like/${imageId}`
      }).then (() => { 
        this.getGallery();
      }).catch (error => {
        alert('Like put error:', error);
      });
    }

  deleteLike = (imageId) => {
       axios({
         method: 'DELETE',
         url: `gallery/delete/${imageId}`
       }).then(() => {
         this.getGallery();
       }).catch(error => {
         alert('Like delete error:', error);
       });
     }

  componentDidMount() {
   this.getGallery();
   
  }

  getGallery = () => {
    axios.get('/gallery').then(response => {
      this.setState({
        galleryList: response.data
        
      })
    }).catch(error => {
      alert('Error making/ gallery GET request', error);
    })
  }

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
          <h2>Add to Gallery</h2>
          < GalleryForm handleChangeFor= {this.handleChangeFor}
          handleSubmit={this.addPicture} 
          newGalleryEntry = {this.state.newGalleryEntry}/>
          <h2>Click Image to Veiw Description</h2>
          <GalleryList 
            imageList={this.state.galleryList}
            addLike={this.addLike}
            deleteLike={this.deleteLike} />
          </div>
    );
  }
}

export default App;

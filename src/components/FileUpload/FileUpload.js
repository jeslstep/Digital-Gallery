import React, { Component } from 'react';
import {storage} from '../../firebase/config';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FileUpload extends Component {

    // state to store selected file
    state ={
        selectedFile: '',
        newGalleryEntry: {
            picture_path: '',
            likes: 0,
            picture_description: '',
        }
    }

    // get file from input
    handleSelectedFile = event => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    // send file to firebase storage
    handleFileUpload = () => {
       if (this.state.selectedFile === null) {
         alert("WARNING!", "Please select a file locally from your computer!", "warning");
         return
      }
      // creates the URL that the file will be stored at on FireBase
      const uploadTask = storage.ref(`img_file/${this.state.selectedFile.name}`).put(this.state.selectedFile);
      uploadTask.on('state_changed',
         (snapshot) => {
             console.log(snapshot);
         },
         (error) => {
            console.log(`The error:, `, error)
         },
            (complete) => {
                console.log('complete:', complete);
                // responds back with the complete URL labeled here as "thisUrl"
                storage.ref(`img_file`).child(this.state.selectedFile.name).getDownloadURL().then(thisUrl => {
                alert("Great job!", "File successfully uploaded!", "success");
                // Sets local state to include the new file URL
                this.setState({
                     newGalleryEntry: {
                        ...this.state.newGalleryEntry,
                        picture_path: thisUrl
                    }
                });
                })
                .then((result) => {
                console.log('result', result);
                this.addPicture();
                })
                .catch((error) => {
                console.log('Error with uploadFile function after complete', error);
                });
            } // end (complete)
      ) // end uploadTask.on
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

    // add a picture and description 
    addPicture = (event) => {
        axios({
        method: 'POST',
        url: '/gallery',
        data: this.state.newGalleryEntry
        }).then(response => {
        this.props.getGallery();
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

  render() {
    return (
        <div>
        <div>
            <TextField 
            type="file" 
            onChange={this.handleSelectedFile}
            />
            <TextField
                id="standard-name"
                label="Description"
                value={this.state.newGalleryEntry.picture_description}
                onChange={this.handleChangeFor('picture_description')}
                margin="normal"
            />
            <br/>
            <Button onClick={this.handleFileUpload} color='primary' varient='contained'>Add to Gallery</Button>
        </div>
        <h3>Or</h3>
        </div>
    );
  }
}

export default FileUpload;

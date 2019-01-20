import React, { Component } from 'react';
import {storage} from '../../firebase/config';

class FileUpload extends Component {

    // state to store selected file
    state ={
        selectedFile: '',
        file_url: ''
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
                    file_url: thisUrl,
                });
                })
                .then((result) => {
                console.log('result', result);
                })
                .catch((error) => {
                console.log('Error with uploadFile function after complete', error);
                });
            } // end (complete)
      ) // end uploadTask.on
    }

  render() {
    return (
        <div>
            <div>
        {JSON.stringify(this.state)}
        </div>
        <br/>
        <div>
            <input type="file" onChange={this.handleSelectedFile}/>
            <button onClick={this.handleFileUpload}>Upload</button>
        </div>
        </div>
    );
  }
}

export default FileUpload;

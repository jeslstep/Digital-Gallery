import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
  render() {
    return (
        <div>
          {this.props.imageList.map((image) => (
            <GalleryItem
              imageObject={image}
              key={image.id}
              addLike={this.props.addLike}
              deleteLike={this.props.deleteLike}
            />
          ))}
        </div>
    );
  }
}

export default GalleryList;

import React from 'react';
import Gallery from 'react-grid-gallery';
import data from '../data/data.json'
import GalleryAdmin from './GalleryAdmin.js';


// const images = [
//     {
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 174,
//         alt: "My Best Pose"
//     },
//     {
//         src: require('./image2.jpg'),
//         thumbnail: require('./image2.jpg'),
//         thumbnailWidth: 3,
//         thumbnailHeight: 4,
//         alt: "Get A Pet"
//     },
// ]

function PhotoGallery() {


    Object.keys(data).forEach(function(key){
        
        console.log(data[key].thumbnail);
        data[key].thumbnail = require("../images/"+data[key].thumbnail);
        data[key].src = require("../images/"+data[key].src);
    
    });

    console.log(data)
        
        return(
            <Gallery images={data} />

        )
    
  }
export default PhotoGallery;

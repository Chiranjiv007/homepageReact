import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Introduction from './Introduction.js'
import About from './About.js'
import Contact from './Contact.js'
// import Error from './Error.js'
import Navigation from './Navigation.js'
import Gallery from './PhotoGallery.js'
import GalleryAdmin from './GalleryAdmin.js'

function Sidebar() {
    return(
        <div className="sidebar">
            <BrowserRouter>
            <div className="Links">
                
                <Navigation />

                <Switch>
                    <Route path="/" component={Introduction} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/galleryAdmin" component={GalleryAdmin}/>
                    {/* <Route component={Error}/> */}
                </Switch>
            </div> 
            </BrowserRouter>
        </div>
    )
}

export default Sidebar;
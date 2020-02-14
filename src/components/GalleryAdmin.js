import  React from 'react';
import AddImage from  './AddImage';
import EditImage from './EditImage';
import DeleteImage from './DeleteImage';
import data from '../data/data.json';


function AddButton(props){
    return (
        
        <button onClick={props.onClick}>
            Add Image
        </button>
    )
}

function EditButton(props){
    return (
        <button onClick={props.onClick}>
            Edit Image
        </button>
    )
}

function DeleteButton(props){
    return (
        <button onClick={props.onClick}>
            Delete Image
        </button>
    )
}

function validateForm(id,event){
    let src = event.target.src.value;
    let info = event.target.info.value;
    let Name = event.target.Name.value;
    let date = event.target.date.value;
    let formIsValid =true;

    if(!src){
       alert("Image URL must be filled out"); 
       formIsValid=false;
    }
    else if(!Name){
        alert("First name must be filled out");
        formIsValid=false;
    }
    else if(!info){
        alert("Image info must be filled out");
        formIsValid=false;
    }
    else if(!date){
        alert("date must be filled out");
        formIsValid=false;
    }
    else{
        let currentDate  = new Date();
        let formDate = new Date(date);
        if(formDate>currentDate){
            alert("Stop Playing buddy!! No Future dates")
            return false;
        }
    }

    return formIsValid;
}

function validateDelForm(id,event){

    var src = event.target.src.value;
    var Name = event.target.Name.value;
    var formIsValid = true;
    var found = false;

    if(!src){
        alert('Dont remember which image to delete?');
        return formIsValid;    
    }
    else if(!Name){
        alert('Fill the Name please');
        return formIsValid;
    }


    data.forEach(function(value,key){
        if(data[key]['src'] === src && data[key]['Name'] === Name){
            found = true;
        }
    })

    if(!found){
        alert("It doesnt exist");
        return false;
    }

    return true;
}

function addJsonData(id,event){

    let formData = new FormData(event.target);
    var object={};
    
    // console.log(formData.entries());
    formData.forEach(function(value,key){
        object[key] = value;
    });
    object['thumbnail'] = object['src'];
    object['thumbnailWidth'] = 3;
    object['thumbnailHeight'] = 4;

    data.push(object);
    console.log(data);    
}


function editJsonData(id,event){

    let formData = new FormData(event.target);
    var object={};
    var found = false;
    
    // console.log(formData.entries());
    formData.forEach(function(value,key){
        object[key] = value;
    });
    
    object['thumbnail'] = object['src'];
    object['thumbnailWidth'] = 3;
    object['thumbnailHeight'] = 4;

    
    data.forEach(function(value,key){
        if(value['src'] === object['src']){
            found = true;
            value['src'] = object['src'];
            value['thumbnail'] = object['thumbnail'];
            value['thumbnailWidth'] = object['thumbnailWidth'];
            value['thumbnailHeight'] = object['thumbnailHeight'];
            value['Name'] = object['Name'];
            value['date'] = object['date'];
            value['alt'] = object['alt'];

        }
    });    

    if(!found){
        alert('Image Not found!!')
    }
    console.log(data);
}



function deleteJsonData(id, event){
    
    let src = event.target.src.value;

    // console.log(data);
    
    data.forEach(function(value,key){
              
        if(value['src'] === src){
            console.log(key);
            data.splice(key,1);
        }
    });

    console.log(data);

}
class GalleryAdmin extends React.Component{

    
    constructor(props){
        super(props);
        this.state = {
            isAdding: false,
            isEditing: false,
            isDeleting: false
        };
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
        this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }

    handleAddSubmit(event){
        if(!validateForm('add',event)){
            event.preventDefault();
        }
        else{
            event.preventDefault();
            addJsonData('add',event);
        }
    }

    handleEditSubmit(event){
        if(!validateForm('edit',event)){
            event.preventDefault();
        }
        else{
            event.preventDefault();
            editJsonData('edit',event);
        }
    }

    handleDeleteSubmit(event){
        if(!validateDelForm('delete',event)){
            event.preventDefault();
        }
        else{
            event.preventDefault();
            deleteJsonData('delete',event);
        }
    }
    

    handleAddButton(){
        if(this.state.isAdding){
            this.setState({
                isAdding:false
            })
        }
        else{
            this.setState({
                isAdding: true
            })
        }
    }

    handleEditButton(){
        if(this.state.isEditing){
            this.setState({
                isEditing: false
            })
        }
        else{
            this.setState({
                isEditing: true
            })
        }
    }

    handleDeleteButton(){
        if(this.state.isDeleting){
            this.setState({
                isDeleting: false
            })
        }
        else{
            this.setState({
                isDeleting: true
            })
        }
    }

    render(){
        
        return (
            <div>
            
                <br /><br />
                <AddButton onClick={this.handleAddButton}/>
                <AddImage isAdding={this.state.isAdding} onSubmit={this.handleAddSubmit}/>
            
                <br /><br />
                <EditButton onClick={this.handleEditButton}/>
                <EditImage isEditing={this.state.isEditing} onSubmit={this.handleEditSubmit}/>
            
                <br /><br />
                <DeleteButton onClick={this.handleDeleteButton}/>
                <DeleteImage isDeleting={this.state.isDeleting} onSubmit={this.handleDeleteSubmit}/>
            
            </div>
        )
    }
}

export default GalleryAdmin
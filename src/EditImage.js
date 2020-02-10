import React from 'react';


function EditImage(props){
    const styles ={
        button:{
            display: 'flex',
            width: '30%'
        },
        input:{
            marginRight: '30px'
        }
    }

    if(props.isEditing){
    return (
        <div id="edit">
          <br />
          <form id="edit" name="edit" style={styles.button} onSubmit={props.onSubmit}>
            
            <div>URL:<br /><input type="text" name="src" style={styles.input} /></div>
            <div>Name:<br /><input type="text" name="Name" style={styles.input} /></div>
            <div>Info:<br /><input type="text" name="info" style={styles.input} /></div>
            <div>Date:<br /><input type="date" name="date" style={styles.input} /></div>
            <div><br /><input type="submit" name="Submit"  style={styles.input} /></div>
          </form>
          </div>
          
    )}

    else{
        return(
            <div></div>
        )
    }
}

export default EditImage

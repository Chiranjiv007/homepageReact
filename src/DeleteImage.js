import React from 'react';


function DeleteImage(props){

    const styles ={
        button:{
            display: 'flex',
            width: '30%'
        },
        input:{
            marginRight: '30px'
        }
    }

    if(props.isDeleting){
    return (
        <div id="delete">
          <br />
          <form id="delete" name="delete" style={styles.button} onSubmit={props.onSubmit}>
            
            <div>URL:<br /><input type="text" name="src" style={styles.input} /></div>
            <div>Name:<br /><input type="text" name="Name" style={styles.input} /></div>
            
            <div><br /><input type="submit" name="Submit" style={styles.input} /></div>
          </form>
          </div>
          
    )}

    else{
        return(
            <div></div>
        )
    }
}

export default DeleteImage

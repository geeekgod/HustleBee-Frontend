import React from 'react';
import Alert from '@mui/material/Alert'


const ValidationsignIn = (emailNum,password) => {

    let error={};
    if(!emailNum){
        error.emailNum= <Alert severity="warning">Email ID   is Required!</Alert> 
    }else if(!/\S+@\S+\.\S+/.test(emailNum)){
        error.emailNum=<Alert severity="error">Email ID is Invalid!</Alert>    
    } 
    
    if(!password){
        error.password=<Alert severity="warning">Password is Required!</Alert>
    }else if(password.length<5){
        error.password=<Alert severity="error">Password must be more than five characters.</Alert>
        
    }
  return error;
}

export default ValidationsignIn
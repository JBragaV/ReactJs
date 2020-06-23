import M from 'materialize-css';

const PopUp = {
    exibeMensagem: (status, msg)=>{
        if(status === "error"){
            M.toast({html: msg, displayLength: 3000, classes: 'red'})
        }
        if(status === "success"){
            M.toast({html: msg, displayLength: 3000, classes: 'green'})
        }
        if(status === "delete"){
            M.toast({html: msg, displayLength: 3000, classes: 'red'})
        }
    }
}

export default PopUp;
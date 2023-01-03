
const Validation = (props) =>{
    let errors = {};
    if(!/\S+@\S+\.\S+/.test(props.username) || props.username <= 0 ) errors.username = 'Tiene que ser un mail valido'
    if(props.username >34 ) errors.username = 'Caracteres mayor a 25'

    let cont =0;
    for(let i=0; i < props.password.length; i++){
        if(!isNaN(parseInt(props.password[i])) ){
            cont++;
            break
        }
    }
    if(cont === 0) errors.password = 'Tiene que tener al menos un numero'
    if(props.password.length < 6 || props.password.length > 10) errors.password = 'Entre 6 y 10 caracteres'

    return errors;
}


export default Validation;
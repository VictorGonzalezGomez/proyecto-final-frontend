const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const isFormValid = (name, email, collaborators) => {
    
  if (!name || !email ){
    alert("Todos los campos son obligatorios")
    return false;
  }
  else if (!isEmailValid(email, collaborators)){
    return false;
  }
  return true;
}

const isEmailValid = (email, collaborators) => {
  if (!EMAIL_REGEX.test(email)) {
    alert("el correo ingresado no es valido")
    return false;
  }
  return true;
}

export  default isFormValid;
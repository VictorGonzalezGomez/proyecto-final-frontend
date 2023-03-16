const EMAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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
  if (!EMAIL_FORMAT.test(email)) {
    alert("el correo ingresado no es valido")
    return false;
  }
  return true;
}

export  default isFormValid;
export default function validateInfo(values) {
  let errors = {};
  //Name
  if (!values.name.trim()) {
    errors.name = "Este campo es obligatorio";
  } else if (!/^[a-zA-Z ]{2,30}$/i.test(values.name)) {
    errors.name = "Ingrese un nombre válido";
  }
  //Surname
  if (!values.surname.trim()) {
    errors.surname = "Este campo es obligatorio";
  } else if (!/^[a-zA-Z ]{2,30}$/.test(values.surname)) {
    errors.surname = "Ingrese un apellido válido";
  }
  //Email-Login
  if (!values.email) {
    errors.email = "Este campo es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Correo inválido";
  }
  //Password
  if (!values.password) {
    errors.password = "Este campo es obligatorio";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener 6 caracteres o más";
  }
  //Password2
  if (!values.password2) {
    errors.password2 = "Este campo es obligatorio";
  } else if (values.password2.length < 6) {
    errors.password2 = "La contraseña debe tener 6 caracteres o más";
  }
  //Password2-Match
  if (values.password !== values.password2) {
    errors.password2 = "Las contraseñas deben coincidir";
  }

  return errors;
}

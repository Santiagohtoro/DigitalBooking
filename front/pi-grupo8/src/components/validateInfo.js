export default function validateInfo(values) {
  let errors = {};

  //Email
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
  return errors;
}

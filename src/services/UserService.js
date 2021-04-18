import { axiosInstance } from "../config/AxiosInstance";

class UserService {
  // ES6 Las Template Strings utilizan las comillas invertidas o backticks para delimitar sus contenidos, en vez de las
  // tradicionales comillas simples o dobles de las cadenas de texto normales.

  // Una de las mejores características de las Template Strings es la interpolación de cadenas. En pocas palabras,
  // la interpolación permite utilizar cualquier expresión válida de JavaScript (como por ejemplo la suma de dos variables)
  // dentro de una cadena y obtener como resultado la cadena completa con la expresión evaluada.

  create(user) {
    return axiosInstance.post(`user/create`, user);
  }

  login(user) {
    return axiosInstance.post(`/user/login`, user, {
      headers: {},
    });
  }
}

export default new UserService();

import { auth } from './fetchData/api';

class AuthRequest {

  init(login, password) {
    return auth(login, password)
      .then((res) => res.json())
      .then((data) => {
        window.location = data.adress;
      })
  }

}

export default AuthRequest;
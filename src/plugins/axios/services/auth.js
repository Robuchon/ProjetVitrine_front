import Base from "@axios/axios";

class AuthServices {
  static async login(data) {
    let body = data;
    return Base.post(`/auth/login`, body)
      .then((response) => {
        console.log("auth : login", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e.response;
      });
  }

  static async reset(data) {
    let body = data;
    return Base.post(`/auth/reset`, body)
      .then((response) => {
        console.log("auth : reset", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e.response;
      });
  }

  static async signin(data) {
    let body = data;
    return Base.post(`/auth/signin`, body)
      .then((response) => {
        console.log("auth : signin", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e.response;
      });
  }

  static async loginWithToken() {
    return Base.get(`/auth/loginWithToken`)
      .then((response) => {
        console.log("auth : loginWithToken", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e.response;
      });
  }
}

export default AuthServices;

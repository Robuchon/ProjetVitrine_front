import Base from "@axios/axios";

class UserSettings {
  static async switchTheme(data) {
    let body = data;
    return Base.post(`/userSettings/switchTheme`, body)
      .then((response) => {
        console.log("user : switchTheme", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e.response;
      });
  }
}

export default UserSettings;

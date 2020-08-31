import Api from "@/services/Api";
//linking the frontend to the backend
export default {
  register(credentials) {
    return Api().post("/user/register", credentials);
  },
  login(credentials) {
    return Api().post("/user/login", credentials);
  },
};

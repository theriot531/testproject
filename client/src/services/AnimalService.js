import Api from "@/services/Api";
//linking the frontend to the backend
export default {
  loadAnimals() {
    return Api().get("/animals");
  },
};

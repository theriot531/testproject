import Api from "@/services/Api";
//linking the frontend to the backend
export default {
  rentAnimal(info) {
    return Api().post("/animalRental", info);
  },
};

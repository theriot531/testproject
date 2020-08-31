import Api from "@/services/Api";
//linking the frontend to the backend
export default {
  loadSearch(email) {
    return Api().post("/rentals", email);
  },
  deleteRental(id) {
    return Api().post("/cancelRental", id);
  },
  loadRecord(id) {
    return Api().post("/rentalup", id);
  },
  updateRecord(data) {
    return Api().post(`/rentalup/rentalUpCommit/`, data);
  },
};

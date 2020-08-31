//Importing all of the components
import Vue from "vue";
import Router from "vue-router";
import Landing from "@/components/Landing";
import Login from "@/components/Login";
import Register from "@/components/Register";
import RentalReq from "@/components/RentalReq";
import RentalCan from "@/components/RentalCan";
import RentalUpdate from "@/components/RentalUpdate";
import Animals from "@/components/Animals";
import ContactUs from "@/components/ContactUs";
import ActiveRentals from "@/components/ActiveRentals";
import Help from "@/components/Help";

Vue.use(Router);
//All of the components
export default new Router({
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/rentalreq",
      name: "RentalReq",
      component: RentalReq,
    },
    {
      path: "/rentalcan",
      name: "RentalCan",
      component: RentalCan,
    },
    {
      path: "/rentalup",
      name: "RentalUpdate",
      component: RentalUpdate,
    },
    {
      path: "/animals",
      name: "Animals",
      component: Animals,
    },
    {
      path: "/contact",
      name: "ContactUs",
      component: ContactUs,
    },
    {
      path: "/activerentals",
      name: "ActiveRentals",
      component: ActiveRentals,
    },
    {
      path: "/help",
      name: "Help",
      component: Help,
    },
  ],
});

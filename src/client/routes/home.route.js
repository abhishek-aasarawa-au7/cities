import { home } from "../configs/urls";
import Home from "../pages/Home";

const Route = [
  {
    path: home,
    exact: true,
    isProtected: false,
    component: Home,
  },
];

export default Route;

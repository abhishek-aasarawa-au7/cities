import { map } from "../configs/urls";
import Map from "../pages/Map";

const Route = [
  {
    path: map,
    exact: true,
    isProtected: false,
    component: Map,
  },
];

export default Route;

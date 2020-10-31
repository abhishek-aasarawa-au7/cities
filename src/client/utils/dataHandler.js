import allCities from "../../Cities.data";

const addProps = () => {
  return allCities.map((city) => {
    return { ...city, isSelected: false };
  });
};

export default addProps;

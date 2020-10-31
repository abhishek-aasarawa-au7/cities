import allCities from "../../Cities.data";

const addProps = () => {
  let cities = allCities.map((city) => {
    return { ...city, isSelected: false };
  });
  return cities.sort((first, sec) => (first.name > sec.name ? 1 : -1));
};

export default addProps;

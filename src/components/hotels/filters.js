export const defaultFilters = {
  max: '',
  city: '',
  checkin: '',
  checkout: '',
};

export const filterAdverts = (hotels, { max, city }) =>
  hotels.filter(filterByName(max)).filter(filterByPrice(city));

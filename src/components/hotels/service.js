import client from '../../api/client';

const hotelsUrl = '/hotelsList';

export const getHotelsList = () => {
  const url = hotelsUrl;
  return client.get(url);
};

export const getHotelDetail = (id) => {
  const url = `${hotelsUrl}/${id}`;
  return client.get(url);
};

export const createHotel = (hotel) => {
  const url = hotelsUrl;
  return client.post(url, hotel);
};

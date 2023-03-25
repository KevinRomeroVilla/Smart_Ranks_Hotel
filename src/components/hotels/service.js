import client from '../../api/client';

const hotelsUrl = '/hotelsList';

export const getHotelsList = () => {
  const url = hotelsUrl;
  return client.get(url);
};

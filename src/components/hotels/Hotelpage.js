import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../layout/Layout';
import { getHotelDetail } from './service';

const HotelPage = (props) => {
  const [hotel, setHotel] = useState([]);
  const { hotelId } = useParams();

  useEffect(() => {
    getHotelDetail(hotelId).then((hotel) => {
      setHotel(hotel);
    });
  }, [hotelId]);
  console.log(hotel);

  return (
    <Layout title="hotel detail" {...props}>
      <div>
        {hotel.map((x) =>
          x.roomsList.map((y) => (
            <div key={y.roomNumber}>
              <div>{y.roomNumber}</div>
              <div>{y.roomPrice}</div>
              <div>{y.roomType}</div>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default HotelPage;

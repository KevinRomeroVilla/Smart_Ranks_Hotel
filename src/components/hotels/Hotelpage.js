import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Page from '../layout/page';
import { getHotelDetail } from './service';
import './HotelsPage.css';

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
    <Page title="hotel detail" {...props}>
      <div>
        {hotel.map((x) =>
          x.roomsList.map((y) => (
            <div className="hotelPage" key={y.roomNumber}>
              <Link to={'/hotels/HotelsReserve'} className="link">
                <div>Room Number: {y.roomNumber}</div>
                <div>Room Price: {y.roomPrice}</div>
                <div>Max number of people: {y.maxpeople}</div>
              </Link>
            </div>
          ))
        )}
      </div>
    </Page>
  );
};

export default HotelPage;

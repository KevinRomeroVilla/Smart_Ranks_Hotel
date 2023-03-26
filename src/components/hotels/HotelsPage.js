import { useEffect, useState } from 'react';
import { getHotelsList } from './service';

import './HotelsPage.css';
import { Link } from 'react-router-dom';
import Page from '../layout/page';

const HotelsPage = (props) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotelsList().then((hotels) => {
      setHotels(hotels);
    });
  }, []);
  console.log(hotels);

  return (
    <Page title="Hotels list" {...props}>
      <div id="listHotels" className="listHotels">
        {hotels.map((hotel) => (
          <div id="containerHotel" className="containerHotel" key={hotel.id}>
            <Link to={`/hotels/${hotel.id}`}>
              <div>{hotel.hotellocation}</div>
              <div>{hotel.hotelName}</div>
              <div>{hotel.roomsList.length}</div>
            </Link>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default HotelsPage;

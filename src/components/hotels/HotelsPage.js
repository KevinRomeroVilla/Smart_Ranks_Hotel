import { useEffect, useState } from 'react';
import { getHotelsList } from './service';

import './HotelsPage.css';
import { Link } from 'react-router-dom';
import Page from '../layout/page';
import { defaultFilters } from './filters';
import storage from '../../utils/utils';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = (filters) => storage.set('filters', filters);

const HotelsPage = (props) => {
  const [filters, setFilters] = useState(getFilters);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  useEffect(() => {
    getHotelsList().then((hotels) => {
      setHotels(hotels);
    });
  }, []);

  return (
    <Page title="Hotels list" {...props}>
      <div id="maincontent" className="maincontent">
        <div className="mainform">
          <form>
            <div className="formfield">
              <label>Location</label>
              <select name="city" id="city">
                <option value=""></option>
                <option value="Cartagena">Cartagena</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Bogota">Bogota</option>
                <option value="Medellin">Medellin</option>
              </select>
            </div>
            <div className="formfield">
              <label>Number of People</label>
              <input type="number" />
            </div>
            <div className="formfield">
              <label>check in day</label>
              <input type="date" />
            </div>
            <div className="formfield">
              <label>check out day</label>
              <input type="date" />
            </div>

            <button type="submit">submit</button>
          </form>
        </div>
        <div className="containerHotel">
          {hotels
            .filter((hotel) => hotel.hotelAvaliable === true)
            .map((hotel) => (
              <div id="lisHotel" className="listHotel" key={hotel.id}>
                <Link to={`/hotels/${hotel.id}`} className="link">
                  <div>Location: {hotel.hotellocation}</div>
                  <div>Hotels Name: {hotel.hotelName}</div>
                  <div>Hotels Rooms: {hotel.roomsList.length}</div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Page>
  );
};

export default HotelsPage;

import { useEffect, useState } from "react";
import { getHotelsList } from "./service";
import Layout from "../layout/Layout";

import "./HotelsPage.css";

const HotelsPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotelsList().then((hotels) => {
      setHotels(hotels);
    });
  }, []);

  return (
    <Layout title="Hotels list">
      <div id="listHotels" className="listHotels">
        {hotels.map((hotel) => (
          <div id="containerHotel" className="containerHotel" key={hotel.id}>
            <div>{hotel.hotellocation}</div>
            <div>{hotel.hotelName}</div>
            <div>{hotel.roomsList.length}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HotelsPage;

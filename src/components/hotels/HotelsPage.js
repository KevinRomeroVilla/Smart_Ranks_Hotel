import { useEffect, useState } from "react";
import { getHotelsList } from "./service";
import "./HotelsPage.css";

const HotelsPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotelsList().then((hotels) => {
      setHotels(hotels);
    });
  }, []);

  return (
    <div id="listHotels" className="listHotels">
      {hotels.map((hotel) => (
        <div id="containerHotel" className="containerHotel" key={hotel.id}>
          <div>{hotel.hotellocation}</div>
          <div>{hotel.hotelName}</div>
          <div>{hotel.roomsList.length}</div>
        </div>
      ))}
    </div>
  );
};

export default HotelsPage;

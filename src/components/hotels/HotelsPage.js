import { useEffect, useState } from "react";
import { getHotelsList } from "./service";

const HotelsPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotelsList().then((hotels) => {
      setHotels(hotels);
    });
  }, []);

  return (
    <div id="listHotels" className="listHotels">
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>{hotel.hotellocation}</li>
        ))}
      </ul>
    </div>
  );
};

export default HotelsPage;

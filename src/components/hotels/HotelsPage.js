import dbHotels from "./dbhotels";

const HotelsPage = () => {
  return (
    <div id="listHotels" className="listHotels">
      <ul>
        {dbHotels.map((hotel) => (
          <li key={hotel.id}>{hotel.hotellocation}</li>
        ))}
      </ul>
    </div>
  );
};

export default HotelsPage;

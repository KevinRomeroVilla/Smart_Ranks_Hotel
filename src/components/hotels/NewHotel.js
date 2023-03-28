import { useState } from 'react';
import FormField from '../auth/FormField';
import Page from '../layout/page';
import { createHotel } from './service';

const NewHotel = (props) => {
  const [hotelName, setHotelName] = useState('');
  const [hotelLocation, sethotelLocation] = useState('');
  const [hotelMax, setHotelMax] = useState('');

  const handleChangeHotelname = (event) => setHotelName(event.target.value);
  const handleChangehotelLocation = (event) =>
    sethotelLocation(event.target.value);
  const handleChangeHotelMax = (event) => setHotelMax(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const hotel = await createHotel({ hotelName, hotelLocation, hotelMax });
      debugger;
    } catch (error) {}
  };

  return (
    <Page title="New hotel Page" {...props}>
      <div>
        <h1>Creation of new Hotel</h1>
        <form onSubmit={handleSubmit}>
          <FormField
            type="text"
            name="hotelname"
            label="Hotel name"
            className="loginForm-field"
            onChange={handleChangeHotelname}
            value={hotelName}
          />
          <FormField
            type="text"
            name="hotelname"
            label="Hotel Location"
            className="loginForm-field"
            onChange={handleChangehotelLocation}
            value={hotelLocation}
          />
          <FormField
            type="text"
            name="hotelname"
            label="Hotel Max People"
            className="loginForm-field"
            onChange={handleChangeHotelMax}
            value={hotelMax}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </Page>
  );
};

export default NewHotel;

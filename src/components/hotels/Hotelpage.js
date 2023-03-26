import { useParams } from 'react-router-dom';

import Layout from '../layout/Layout';

const HotelPage = (props) => {
  const { hotelId } = useParams();

  return (
    <Layout title="hotel detail" {...props}>
      <div>hotel detail {hotelId}</div>
    </Layout>
  );
};

export default HotelPage;

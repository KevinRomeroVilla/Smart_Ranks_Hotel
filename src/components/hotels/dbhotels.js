const dbHotels = [
  {
    id: 1,
    hotelName: "hotel_1",
    hotelAvaliable: true,
    hotellocation: "Cartagena",
    roomsList: [
      {
        roomNumber: 1,
        roomPrice: 100,
        roomTax: 5, // this number is in %
        roomType: "small", //small, medium, large
      },
      {
        roomNumber: 2,
        roomPrice: 200,
        roomTax: 7,
        roomType: "medium",
      },
      {
        roomNumber: 3,
        roomPrice: 300,
        roomTax: 9,
        roomType: "large",
      },
    ],
  },
  {
    id: 2,
    hotelName: "hotel_2",
    hotelAvaliable: true,
    hotellocation: "Barranquilla",
    roomsList: [
      {
        roomNumber: 1,
        roomPrice: 150,
        roomTax: 6,
        roomType: "small",
      },
      {
        roomNumber: 2,
        roomPrice: 250,
        roomTax: 4,
        roomType: "medium",
      },
    ],
  },
  {
    id: 3,
    hotelName: "hotel_3",
    hotelAvaliable: true,
    hotellocation: "Bogota",
    roomsList: [
      {
        roomNumber: 1,
        roomPrice: 200,
        roomTax: 3,
        roomType: "small",
      },
      {
        roomNumber: 2,
        roomPrice: 400,
        roomTax: 7,
        roomType: "medium",
      },
      {
        roomNumber: 3,
        roomPrice: 600,
        roomTax: 9,
        roomType: "large",
      },
      {
        roomNumber: 4,
        roomPrice: 300,
        roomTax: 9,
        roomType: "small",
      },
    ],
  },
  {
    id: 4,
    hotelName: "hotel_4",
    hotelAvaliable: true,
    hotellocation: "Medellin",
    roomsList: [
      {
        roomNumber: 1,
        roomPrice: 700,
        roomTax: 10,
        roomType: "large",
      },
    ],
  },
];

export default dbHotels;

import bikRed from "../assets/bike_red.jpg";
import bike from "../assets/bike.jpg";
import carPorsche from "../assets/car_porsche.jpg";
import carVintageWhite from "../assets/car_vintage_white.jpg";
import carVintageGreen from "../assets/car_vintage_green.jpg";

const products = [
  {
    id: 1,
    name: "Reddish Bike Monster",
    slug: "product1",
    price: 50,
    imgUrl: bikRed,
  },
  {
    id: 2,
    name: "Cool bike",
    slug: "product2",
    price: 100,
    imgUrl: bike,
  },
  {
    id: 3,
    name: "Vintage Porsche",
    slug: "product3",
    price: 200,
    imgUrl: carPorsche,
  },
  {
    id: 4,
    name: "Vintage car White",
    slug: "product4",
    price: 200,
    imgUrl: carVintageWhite,
  },
  {
    id: 5,
    name: "Vintage car Green",
    slug: "product4",
    price: 500,
    imgUrl: carVintageGreen,
  },
];

export default products;

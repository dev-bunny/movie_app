import React from "react"
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img width="200px" src={picture} alt={name} ></img>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "kimbab",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2015/04/04/0461907459756bc3a56472da407a1a9d1.jpg",
    rating: 4.3
  }
];

function App() {
  return (
    <div className="App">
      {foodILike.map(dish =>
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        )}
    </div>
  );
}

export default App;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";

const formatDate = (date) => {
  /*new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));*/

  if (!(date instanceof Date)) {
    // If not, try parsing the date string
    date = new Date(date);
  }
  // Check if the parsed date is valid
  if (!isNaN(date.getTime())) {
    // If valid, format the date
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(date);
  } else {
    // If the date is invalid, return a placeholder value or handle it accordingly
    return "Invalid Date";
  }
};

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity,deleteCity } = useCities();

  function handleClick(e){
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li className={styles.nodots}>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>&times;</button>
      </Link>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
};

export default CityItem;

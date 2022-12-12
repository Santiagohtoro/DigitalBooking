import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/checkIn.module.scss";

const options = [
  { value: "1:00AM", label: "1:00AM" },
  { value: "2:00AM", label: "2:00AM" },
  { value: "3:00AM", label: "3:00AM" },
  { value: "4:00AM", label: "4:00AM" },
  { value: "5:00AM", label: "5:00AM" },
  { value: "6:00AM", label: "6:00AM" },
  { value: "7:00AM", label: "7:00AM" },
  { value: "8:00AM", label: "8:00AM" },
  { value: "9:00AM", label: "9:00AM" },
  { value: "10:00AM", label: "10:00AM" },
  { value: "11:00AM", label: "11:00AM" },
  { value: "12:00AM", label: "12:00PM" },
  { value: "13:00PM", label: "13:00PM" },
  { value: "14:00PM", label: "14:00PM" },
  { value: "15:00PM", label: "15:00PM" },
  { value: "16:00PM", label: "16:00PM" },
  { value: "17:00PM", label: "17:00PM" },
  { value: "18:00PM", label: "18:00PM" },
  { value: "19:00PM", label: "19:00PM" },
  { value: "20:00PM", label: "20:00PM" },
  { value: "21:00PM", label: "21:00PM" },
  { value: "22:00PM", label: "22:00PM" },
  { value: "23:00PM", label: "23:00PM" },
  { value: "24:00PM", label: "24:00PM" },
];

function CheckInHours() {
  const [hour, setHour] = useState("");

  const handleChange = (e) => {
    setHour({ value: e.target.value, label: e.target.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <FontAwesomeIcon icon={faCheckCircle} />
        <p>
          Tu habitación va a estar lista para el check-in entre las 10:00 AM y
          las 11:00 PM
        </p>
      </div>
      <p>Indicá tu horario estimado de llegada</p>
      <select defaultValue={hour} onChange={handleChange}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CheckInHours;

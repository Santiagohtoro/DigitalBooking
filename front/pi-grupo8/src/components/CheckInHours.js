import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/checkIn.module.scss";
import Select from "react-select";

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
      {/*
      <select>
        <option>1:00 AM</option>
        <option>2:00 AM</option>
        <option>3:00 AM</option>
        <option>4:00 AM</option>
        <option>5:00 AM</option>
        <option>6:00 AM</option>
        <option>7:00 AM</option>
        <option>8:00 AM</option>
        <option>9:00 AM</option>
        <option>10:00 AM</option>
        <option>11:00 AM</option>
        <option>12:00 PM</option>
        <option>13:00 PM</option>
        <option>14:00 PM</option>
        <option>15:00 PM</option>
        <option>16:00 PM</option>
        <option>17:00 PM</option>
        <option>18:00 PM</option>
        <option>19:00 PM</option>
        <option>20:00 PM</option>
        <option>21:00 PM</option>
        <option>22:00 PM</option>
        <option>23:00 PM</option>
        <option>24:00 PM</option>
      </select>
  */}
      <Select options={options} className={styles.select} />
    </div>
  );
}

export default CheckInHours;

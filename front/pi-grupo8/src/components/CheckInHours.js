import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/checkIn.module.scss";

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
    </div>
  );
}

export default CheckInHours;

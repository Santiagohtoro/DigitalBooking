import React from "react";
import styles from "../Styles/bookingUserData.module.scss";
import { useAuthContext } from "../hooks/useAuthContext";

function BookingUserData() {
  const { user } = useAuthContext();

  return (
    <div>
      <form className={styles.container}>
        <div className={styles.inputs}>
          <label>
            Nombre
            <input type="text" placeholder={user?.name} />
          </label>
          <label>
            Apellido
            <input type="text" placeholder={user?.surname} />
          </label>
        </div>
        <div className={styles.inputs}>
          <label>
            Correo electrónico
            <input type="email" placeholder={user?.username} />
          </label>
          <label>
            Ciudad
            <input type="text" className={styles.city} />
          </label>
        </div>
      </form>
    </div>
  );
}

export default BookingUserData;

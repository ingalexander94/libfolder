import arrow from "src/assets/icons/arrow-down.svg";
import edit from "src/assets/icons/editwhite.svg";
import cart from "src/assets/cartimg.png";
import { privateRoutes } from "src/models";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

const CardEquipment = ({ showEditButton = true }) => {
  const detailsRoute = showEditButton
    ? `/${privateRoutes.CLIENT}/${privateRoutes.EQUIPMENT}/${privateRoutes.DETAILEQUIPMENT}`
    : `/${privateRoutes.CLIENT}/${privateRoutes.PRINCIPALMAINTENANCEINTERVALS}/${privateRoutes.MAINTENANCEINTERVALS}`;

  return (
    <section className={styles.card}>
      <img src={cart} alt="Photo card" />
      <div className={styles.title_card}>
        <h3>Tractocamión - WOM-361</h3>
        <span>Kenworth T800</span>
      </div>
      <div className={styles.propertie_cart}>
        <div className={styles.cart_states}>
          <strong>WOM-371</strong>
          <p>Placa</p>
        </div>
        <span></span>
        <div className={styles.cart_kilometries}>
          <strong>3.245 km</strong>
          <p>Km. recorrido</p>
        </div>
        <span></span>
        <div className={styles.state}>
          <strong className={styles.active}>Activo</strong>
          <p>Estado actual</p>
        </div>
      </div>
      <div className={styles.container_buttons}>
        {showEditButton && (
          <Link
            to={`/${privateRoutes.CLIENT}/${privateRoutes.EQUIPMENT}/${privateRoutes.EDITEQUIPMENT}`}
            className={"btn_black"}
          >
            <img src={edit} alt="Plus icon" />
            Editar equipo
          </Link>
        )}
        <Link
          to={detailsRoute}
          className={`btn_secondary ${styles.detailsButtonOnly}`}
        >
          Ver detalles
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
    </section>
  );
};

export default CardEquipment;

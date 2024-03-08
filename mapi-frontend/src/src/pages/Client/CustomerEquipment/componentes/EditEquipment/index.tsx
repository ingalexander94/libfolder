import ContentCart from "./components/ContentCart";
import CharacteristicsEquipment from "./components/EquipmentCharacteristics";
import styles from "./editequipment.module.css";
import arrow from "src/assets/icons/arrow-left.svg";
import arrowRight from "src/assets/icons/arrow-right.svg";

const EditEquipment = () => {
  return (
    <>
      <article className={styles.edit_equipment}>
        <div>
          <ContentCart />
        </div>
        <div className={styles.content_right}>
          <ul>
            <li className={styles.active}>
              <strong>1</strong>Características del equipo
            </li>
            <li>
              <strong>2</strong>Información del motor
            </li>
            <li>
              <strong>3</strong>Parámetros adicionales
            </li>
          </ul>
          <CharacteristicsEquipment />
          <div className={styles.content_button}>
            <div className={styles.prev_next}>
              <button type="button">
                <img src={arrow} alt="icon" />
                Anterior
              </button>
              <button type="button">
                Siguiente
                <img src={arrowRight} alt="icon" />
              </button>
            </div>
            <div className={styles.btn_save}>
              <button type="button">Guardar cambios</button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default EditEquipment;

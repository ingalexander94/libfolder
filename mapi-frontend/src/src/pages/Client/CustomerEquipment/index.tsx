import ListEquipments from "./componentes/ListEquipments";
import styles from "./equipment.module.css";

const CustomerEquipment = () => {
  return (
    <>
      <div className={styles.classification_wrapper}>
        <ListEquipments />
      </div>
    </>
  );
};

export default CustomerEquipment;

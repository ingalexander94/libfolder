import CardEquipment from "src/components/UI/CardEquipment";
import styles from "./maintenanceinterval.module.css";
import { useState } from "react";

const MainTenanceInterval = () => {
  const [equipepments, _] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  return (
    <article className={styles.list_equipments}>
      {equipepments.map((i) => (
        <CardEquipment key={i} showEditButton={false} />
      ))}
    </article>
  );
};

export default MainTenanceInterval;

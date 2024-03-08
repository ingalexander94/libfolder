import CardEquipment from "src/components/UI/CardEquipment";
import styles from "./listcontenttable.module.css";
import { useState } from "react";

const ListContentTables = () => {
  const [equipepments, _] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <article className={styles.list_equipments}>
      {equipepments.map((i) => (
        <CardEquipment key={i} showEditButton={true} />
      ))}
    </article>
  );
};

export default ListContentTables;

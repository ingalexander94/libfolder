import { ChangeEvent, useState, MouseEvent } from "react";
import styles from "./listoftechnician.module.css";
import plusIcon from "src/assets/icons/plus-icon.svg";
import errorIcon from "src/assets/icons/error.svg";
import searchIcon from "src/assets/icons/search.svg";
import ListContentTable from "../ListContent";
import downloadIcon from "src/assets/icons/download.svg";
import { Link } from "react-router-dom";
import { privateRoutes } from "src/models";

const ListEquipments = () => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (search.length) setSearch("");
  };

  return (
    <section className={styles.list_system}>
      <ul className={styles.equipment_filters}>
        <li>Tractocamión</li>
        <li className={styles.active}>Volqueta</li>
      </ul>
      <div className={styles.system_actions}>
        <div className={styles.input_search}>
          <p>Listado de Parque automotor</p>
          <input
            type="text"
            autoComplete="off"
            value={search}
            onChange={handleChange}
            placeholder="Buscar equipo por placa"
          />
          <button
            onClick={handleReset}
            className={`${styles.search_icon} ${
              search.length ? styles.active : ""
            }`}
          >
            <img
              src={search.length ? errorIcon : searchIcon}
              alt="Error icon"
            />
          </button>
        </div>
        <div className={styles.list_actions}>
          <Link
            className="btn_black"
            to={`/${privateRoutes.CLIENT}/${privateRoutes.EQUIPMENT}/${privateRoutes.EDITEQUIPMENT}`}
          >
            <img src={plusIcon} alt="Plus icon" /> Agregar equipo
          </Link>
          <button className="btn_secondary">
            <img src={downloadIcon} alt="Plus icon" /> Descargar
          </button>
        </div>
      </div>

      <ListContentTable />
    </section>
  );
};

export default ListEquipments;

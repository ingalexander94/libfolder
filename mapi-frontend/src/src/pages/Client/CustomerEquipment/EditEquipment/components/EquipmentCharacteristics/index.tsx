import styles from "./equipmentCharacteristics.module.css";

const CharacteristicsEquipment = () => {
  return (
    <>
      <section className={styles.content_characteristics}>
        <div>
          <h3>Características del equipo</h3>
        </div>
        <div>
          <form>
            <div>
              <label>Aplicación del equipo</label>
              <input
                type="text"
                placeholder="Escribe la aplicación de este vehiculo"
              />
            </div>
            <div>
              <label>Aplicación del equipo</label>
              <input
                type="date"
                placeholder="Selecciona la fecha de la compra"
              />
            </div>
            <div>
              <label>Forma en la que se mide el equipo</label>
              <select>
                <option>Selecciona horas o kilómetros</option>
              </select>
            </div>
            <div>
              <label>Número de VIN</label>
              <input type="text" placeholder="Escribe el número de VIN" />
            </div>
            <div>
              <label>Conductor</label>
              <select>
                <option>Selecciona un conductor</option>
              </select>
            </div>
            <div>
              <label>Estado actual del equipo</label>
              <select>
                <option>Selecciona un estado actual</option>
              </select>
            </div>
            <div className={styles.container_photo}>
              <label>Fotografías del equipo</label>
              <div className={styles.border}>
                <label>
                  <p>Haga clic para cargar o arrastre y suelte</p>
                  <input
                    type="file"
                    accept="image/jpeg, image/png, image/jpg"
                    multiple
                  />
                  <p className={styles.btn}>Seleccionar imagen</p>
                  <p>Tamaño máximo por imagen 25 mb</p>
                </label>
                {/* <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque saepe laudantium enim facere a quam consequuntur ut aut
                  et suscipit? Accusantium saepe iste odio voluptas molestias
                  quidem laboriosam amet mollitia?
                </div> */}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CharacteristicsEquipment;

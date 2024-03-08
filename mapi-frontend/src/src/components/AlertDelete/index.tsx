import styles from "./alertdelete.module.css";
import Icono from "src/assets/icons/Icono_informativo.svg";

type Props = {
  closeModal: () => void;
  to_delete: ()=> void;
  title: string;
};

const AlertDelete = ({ closeModal, to_delete, title }: Props) => {

  const handleDelete = async () => {
    const response:any = await to_delete();
    if(response!.status) closeModal();
  };

  return (
    <article className={styles.container_modal}>
      <div onClick={closeModal} className={styles.overlay}></div>
      <div className={styles.modal}>
        <img
          src={Icono}
          alt=""
          style={{
            width: "150px",
            margin: "0 auto",
          }}
        />

        <h2>Esta a punto de eliminar una {title}</h2>

        <div className={styles.container_content}>
          <p>¿Estás seguro que deseas eliminar esta {title}?</p>
        </div>

        <div className={styles.container_btn}>
          <button
            type="button"
            className={styles.btn_cancel}
            onClick={closeModal}
          >
            Cancelar
          </button>
          <button
            type="submit"
            onClick={handleDelete}
            className={styles.btn_keep}
          >
            Eliminar persona
          </button>
        </div>
      </div>
    </article>
  );
};

export default AlertDelete;

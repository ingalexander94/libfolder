import { useReducer } from "react";
import { TechnicianContext } from "./technician.context";
import { Technician, TechnicianState } from "src/interfaces/technician.interface";
import { technicianReducer } from "./technician.reducer";

const INITIAL_STATE: TechnicianState = {
  list_technician: [],
  technician: {
    id_technician: 0,
    technician_name: "",
    technician_code: "",
    technician_description: "",
    technician_education: "",
    technician_salary: "",
    technician_icon: "",
  },
  search: "",
  totalPages: 0,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TechnicianProvider = ({ children }: Props) => {
  const [technicianState, dispatch] = useReducer(technicianReducer, INITIAL_STATE);

  const setTechnicians = (list_technician: Technician[]) => {
    dispatch({ type: "setTechnicians", payload: list_technician });
  };

  const setSearch = (search: string) => {
    dispatch({ type: "setSearch", payload: search });
  };

  const setCreateTechnician = (technician: Technician[]) => {
    dispatch({ type: "setTechnicians", payload: technician });
  };

  return (
    <TechnicianContext.Provider
      value={{
        technicianState,
        setTechnicians,
        setSearch,
        setCreateTechnician,
      }}
    >
      {children}
    </TechnicianContext.Provider>
  );
};

export default TechnicianProvider;

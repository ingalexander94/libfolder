import axios from "axios";
import { CustomStorage } from "src/lib";
import { PersonalEndpoints } from "src/models";
import { loadAbort } from "src/utilities";

export class EquipmentService {
  private static API_URL = `${import.meta.env.VITE_API_URL}/personal`;

  private constructor() {}

  static getAll() {
    const controller = loadAbort();
    return {
      call: axios.get(`${this.API_URL}/${PersonalEndpoints.all}`, {
        headers: {
          Authorization: `Bearer ${CustomStorage.token}`,
        },
      }),
      controller,
    };
  }

  static getByPage(page: number, search: string = "") {
    const controller = loadAbort();
    return {
      call: axios.get(
        `${this.API_URL}/${PersonalEndpoints.all}/?page=${page}&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${CustomStorage.token}`,
          },
        }
      ),
      controller,
    };
  }
}

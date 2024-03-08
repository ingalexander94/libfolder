import * as Yup from "yup";

interface InitialStateFormAddItemInventory {
    id_inventory: number;
    inventory_reference: string;
    inventory_quantity: number;
    inventory_item_name: string;
    inventory_price_without_tax: number;
    inventory_price_with_tax: number;
    inventory_tax: number;
    inventory_units: number;
}

export class AddItemInventoryValidatorForm {
  static initialState: InitialStateFormAddItemInventory = {
    id_inventory: 0,
    inventory_reference: "",
    inventory_quantity: 0,
    inventory_item_name: "",
    inventory_price_without_tax: 0,
    inventory_price_with_tax: 0,
    inventory_tax: 0,
    inventory_units: 0
  };

  static validatorSchemaAddItemInventory = Yup.object({
    inventory_reference: Yup.string()
      .trim() 
      .required("La referencia del item es necesaria"),
    inventory_item_name: Yup.string()
      .trim() 
      .required("El nombre del item es necesario"),
  });
}

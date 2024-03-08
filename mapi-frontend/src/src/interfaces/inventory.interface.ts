export interface InventoryState {
    list_inventory: Inventory[];
    inventory: Inventory;
    search: string;
    totalPages: number;
    refresh: boolean;
}

export interface InventoryResponse {
    total: number,
    current_page: number,
    last_page: number,
    inventory: Inventory[],
}

export interface Inventory {
    id_inventory: number,
    inventory_item_name: string,
    inventory_reference: string,
    inventory_quantity: number,
    inventory_units: number,
    inventory_price_without_tax: number ,
    inventory_tax: number,
    inventory_price_with_tax: number,
}
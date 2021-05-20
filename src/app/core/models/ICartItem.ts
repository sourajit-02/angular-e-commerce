export interface ICartItem {
  user_id: number;
  product_id: number;
  product_name: string;
  product_description: string;
  product_quantity: number;
  product_price: number;
  created_by: string;
  updated_by: string;
  id?: number;
}

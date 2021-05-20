import { ICartItem } from './ICartItem';

export interface BillingData {
  user_detail: {
    user_email: string;
    user_first_name: string;
    user_last_name: string;
    user_phone: string;
    user_address: string;
    user_city_code: string;
    user_country_code: string;
    user_address_2?: string;
    user_pin_code?: number;
  };
  shipping_detail: {
    shipping_address: string;
    shipping_city_code: string;
    shipping_country_code: string;
    shipping_address_2?: string;
    shipping_pin_code?: number;
  };
  products: ICartItem[];
}

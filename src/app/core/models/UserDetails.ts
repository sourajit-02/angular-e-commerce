import { NameValue } from './NameValue';

export interface UserDetails {
  user_first_name: string;
  user_last_name: string;
  user_address: string;
  city_code: number | NameValue[];
  country_code: number | NameValue[];
  user_pin_code: number;
  user_email?: string;
  user_phone?: string;
  id?: number;
  user_unique_id?: number;
}

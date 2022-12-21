import { Address } from '../address/entities';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  adressess: Address[];
}

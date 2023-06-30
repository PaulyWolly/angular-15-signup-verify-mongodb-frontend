
import { Role } from '../_models/role';

export interface UserInterface {
  id?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: Role;
  jwtToken?: string;
}

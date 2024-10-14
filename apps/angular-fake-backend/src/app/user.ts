import { FormControl } from '@angular/forms';

export interface User {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
}

export type UserCreationPayload = Omit<User, 'id'>;

export type UserCreationForm = {
  [Key in keyof UserCreationPayload]: FormControl<UserCreationPayload[Key]>;
};

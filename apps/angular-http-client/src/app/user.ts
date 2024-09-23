export interface User {
  id: number;
  name: string;
  firstName: string;
}

export type CreateUserPayload = Omit<User, 'id'>;

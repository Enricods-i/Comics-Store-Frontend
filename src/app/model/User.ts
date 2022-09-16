export interface User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  phoneNumber?: string;
  city?: string;
  creationDate?: Date;
  dateOfLastModification?: Date;
}

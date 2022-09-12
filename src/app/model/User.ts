export interface User {
  id: number;
  name: string;
  surname: string;
  birthDate: Date;
  email: string;
  phoneNumber?: string;
  city?: string;
  creationDate?: Date;
  dateOfLastModification?: Date;
}

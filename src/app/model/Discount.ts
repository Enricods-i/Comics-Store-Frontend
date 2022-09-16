export interface Discount {
  id: number;
  name: string;
  percentage: number;
  activationDate: Date;
  expirationDate: Date;
  creationDate: Date;
  dateOfLastModification: Date;
}

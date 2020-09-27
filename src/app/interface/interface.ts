export interface Package {
  id: string;
  createdAt: any;
  enName: string;
  enDesc: string;
  items: string[];
  price: number;
  imageUrl: string;
  isAvailable: boolean;
}
export interface Image {
  id: string;
  data: any;
}
export interface Request {
  id: string;
  firstName: string;
  lastName: string;
  email: String;
  phoneNo: number;
  msg: string;
  createdAt: any;
  requestType: string;
}
